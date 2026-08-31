/* =========================================================
   Izak s.p. — osnovni skript
   - preklop mobilne navigacije
   - samodejno leto v nogi
   ========================================================= */
(function () {
  "use strict";

  /* ---------- Mobilna navigacija ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("primary-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Zapri meni" : "Odpri meni");
    });

    // Zapri meni ob kliku na povezavo (na mobilnih napravah)
    nav.addEventListener("click", function (event) {
      if (event.target.tagName === "A" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Odpri meni");
      }
    });

    // Zapri meni s tipko Esc
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Odpri meni");
        toggle.focus();
      }
    });
  }

  /* ---------- Leto v nogi ---------- */
  var yearEls = document.querySelectorAll("[data-year]");
  var year = String(new Date().getFullYear());
  yearEls.forEach(function (el) {
    el.textContent = year;
  });
})();
