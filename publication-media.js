/* Optional, silent paper previews. Paper links and native controls work without JS. */
(() => {
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const saveData = Boolean(navigator.connection && navigator.connection.saveData);
  document.querySelectorAll('.publication-media').forEach((figure) => {
    const video = figure.querySelector('video');
    const button = figure.querySelector('button');
    let visible = false;
    let userPaused = false;
    let userStarted = false;
    const label = figure.dataset.title;
    const updateButton = () => {
      button.textContent = video.paused ? 'Play preview' : 'Pause preview';
      button.setAttribute('aria-label', `${video.paused ? 'Play' : 'Pause'} preview: ${label}`);
    };
    const play = () => { video.play().catch(updateButton); };
    const sync = () => {
      if (!visible || document.hidden || userPaused) video.pause();
      else if (userStarted || (!motion.matches && !saveData)) play();
    };
    video.muted = true;
    video.controls = false;
    button.hidden = false;
    video.addEventListener('play', updateButton);
    video.addEventListener('pause', updateButton);
    button.addEventListener('click', () => {
      if (video.paused) { userPaused = false; userStarted = true; play(); }
      else { userPaused = true; userStarted = false; video.pause(); }
    });
    motion.addEventListener('change', () => {
      userStarted = false;
      if (motion.matches) video.pause();
      else sync();
    });
    document.addEventListener('visibilitychange', sync);
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        sync();
      }, { threshold: 0.2 }).observe(video);
    }
    updateButton();
  });
})();
