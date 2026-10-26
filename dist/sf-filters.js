;(function () {
  if (window.SFFilters || window.__sfFiltersLoading) return;
  window.__sfFiltersLoading = true;

  var s = document.createElement("script");
  s.src = "https://cdn.jsdelivr.net/gh/ridhomain/sf-filters@v1.0.0/dist/sf-filters.js";
  s.async = true;
  s.onload = function () { window.SFFilters.init({ layout: "sidebar" }); };
  s.onerror = function () { window.__sfFiltersLoading = false; };
  document.head.appendChild(s);
})();