const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const path = require("node:path");
const { test } = require("node:test");
const { runInNewContext } = require("node:vm");

const code = readFileSync(path.join(__dirname, "../analytics.js"), "utf8");
const endpoint = "https://example-owner.goatcounter.com/count";

function load(options = {}) {
  const appended = [];
  const context = {
    URL,
    navigator: options.navigator || {},
    window: {
      location: new URL(options.url || "https://jinghui-hu.github.io/?private=value#publications"),
      doNotTrack: options.doNotTrack,
    },
    document: {
      currentScript: { getAttribute: () => options.endpoint ?? endpoint },
      referrer: options.referrer || "",
      head: { appendChild: (element) => appended.push(element) },
      createElement: (tag) => ({ tag, setAttribute(key, value) { this[key] = value; } }),
    },
  };
  runInNewContext(code, context);
  return { context, appended };
}

test("an empty or invalid endpoint makes no external request", () => {
  for (const value of ["", "not-a-url", "http://owner.goatcounter.com/count", "https://goatcounter.com.evil.example/count", "https://owner.goatcounter.com/count?access-token=secret", "https://user:pass@owner.goatcounter.com/count"]) {
    const { appended, context } = load({ endpoint: value });
    assert.equal(appended.length, 0);
    assert.equal(context.window.goatcounter, undefined);
  }
});

test("only the production origin loads analytics", () => {
  for (const url of ["http://localhost:8000/", "https://preview.example/", "http://jinghui-hu.github.io/", "https://jinghui-hu.github.io:444/"]) {
    assert.equal(load({ url }).appended.length, 0);
  }
});

test("privacy opt-outs prevent loading the provider script", () => {
  for (const options of [{ navigator: { globalPrivacyControl: true } }, { navigator: { doNotTrack: "1" } }, { doNotTrack: "1" }]) {
    assert.equal(load(options).appended.length, 0);
  }
});

test("page queries and fragments and referrer details are not collected", () => {
  const { context, appended } = load({ referrer: "https://search.example/results?q=private#detail" });
  const settings = context.window.goatcounter;
  assert.equal(settings.path, "/");
  assert.equal(settings.referrer, "https://search.example");
  assert.equal(settings.no_session, true);
  assert.equal(settings.no_events, true);
  assert.equal(appended.length, 1);
  assert.equal(appended[0].src, "https://gc.zgo.at/count.js");
  assert.equal(appended[0]["data-goatcounter"], endpoint);
  assert.equal(appended[0].referrerPolicy, "no-referrer");
  assert.equal(appended[0].async, true);
});

test("missing, same-site, invalid, and non-web referrers are omitted", () => {
  for (const referrer of ["", "https://jinghui-hu.github.io/?private=value", "invalid", "data:text/plain,private", "file:///private"]) {
    assert.equal(load({ referrer }).context.window.goatcounter.referrer, "");
  }
});

test("the home page is normalized and repeated script execution does not duplicate collection", () => {
  const { context, appended } = load({ url: "https://jinghui-hu.github.io/index.html?private=value#news" });
  assert.equal(context.window.goatcounter.path, "/");
  runInNewContext(code, context);
  assert.equal(appended.length, 1);
});

test("the draft HTML has one deliberately disabled integration", () => {
  const html = readFileSync(path.join(__dirname, "../index.html"), "utf8");
  assert.equal((html.match(/src="analytics\.js"/g) || []).length, 1);
  assert.match(html, /<script defer src="analytics\.js" data-goatcounter=""><\/script>/);
  assert.doesNotMatch(html, /access-token=|visit_count\(|\/counter\//);
});
