// Colette Boutique
(function () {
  "use strict";

  // Keep the footer year current without hardcoding.
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
