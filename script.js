// Colette Boutique — accent-strip cross-fade rotator
(function () {
  "use strict";

  // Keep the footer year current without hardcoding.
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  var track = document.getElementById("strip-track");
  if (!track) return;

  var slides = Array.prototype.slice.call(
    track.querySelectorAll(".strip__slide")
  );
  if (slides.length < 2) return; // nothing to rotate

  // Respect users who prefer reduced motion: show the first slide, no cycling.
  var reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  if (reduceMotion) return;

  var current = 0;
  var INTERVAL_MS = 5000;

  function advance() {
    slides[current].classList.remove("is-active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("is-active");
  }

  var timer = window.setInterval(advance, INTERVAL_MS);

  // Pause cycling when the tab is hidden to avoid jumps on return.
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      window.clearInterval(timer);
    } else {
      timer = window.setInterval(advance, INTERVAL_MS);
    }
  });
})();
