;(function () {
  window.SFFilters = {
    version: "1.0.1",
    init: function (opts) {
      var t = document.createElement("div");
      t.textContent = "SFFilters v" + this.version + " loaded, layout: " + ((opts && opts.layout) || "none");
      t.style.cssText = "position:fixed;top:56px;right:16px;padding:10px 14px;border-radius:6px;" +
        "font:13px Arial,sans-serif;color:#fff;background:#1565c0;z-index:2147483647";
      document.body.appendChild(t);
      setTimeout(function () { if (t.parentNode) t.parentNode.removeChild(t); }, 8000);
    }
  };
})();