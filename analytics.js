/* Account setup and privacy requirements are documented in README.md. */
(() => {
  "use strict";

  const endpoint = document.currentScript?.getAttribute("data-goatcounter") || "";

  // An unconfigured site must not contact any analytics service.
  if (!/^https:\/\/[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.goatcounter\.com\/count$/.test(endpoint)) return;
  if (window.location.origin !== "https://jinghui-hu.github.io") return;
  if (navigator.globalPrivacyControl === true || navigator.doNotTrack === "1" || window.doNotTrack === "1") return;
  if (window.goatcounter) return;

  // Record the referring website, without its path, query, or fragment.
  let referrer = "";
  try {
    const source = new URL(document.referrer);
    if (["https:", "http:"].includes(source.protocol) && source.origin !== window.location.origin) {
      referrer = source.origin;
    }
  } catch {
    // A missing or invalid referrer is reported as direct/unknown traffic.
  }

  window.goatcounter = {
    path: window.location.pathname === "/index.html" ? "/" : window.location.pathname,
    referrer,
    no_events: true,
    // Count each page load; these totals are page views, not unique people.
    no_session: true,
  };

  const script = document.createElement("script");
  script.src = "https://gc.zgo.at/count.js";
  script.async = true;
  script.referrerPolicy = "no-referrer";
  script.setAttribute("data-goatcounter", endpoint);
  document.head.appendChild(script);
})();
