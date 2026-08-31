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

  /* ---------- Vrteče se misli o recikliranju (glava) ---------- */
  var quoteEl = document.querySelector(".header-quote-text");
  if (quoteEl) {
    var quotes = [
      "„Reciklaža se začne pri vsakem od nas.“",
      "„Odpadek je le surovina na napačnem mestu.“",
      "„Zemljo si izposojamo od svojih otrok.“",
      "„Manj zavržemo, več ohranimo.“",
      "„Ločuj danes za čistejši jutri.“",
      "„Narava ne pozna odpadkov.“",
      "„Vsaka reciklirana embalaža šteje.“"
    ];
    var qIndex = 0;
    var FADE_MS = 600; // mora se ujemati s trajanjem prehoda v CSS

    window.setInterval(function () {
      quoteEl.classList.add("is-fading");
      window.setTimeout(function () {
        qIndex = (qIndex + 1) % quotes.length;
        quoteEl.textContent = quotes[qIndex];
        quoteEl.classList.remove("is-fading");
      }, FADE_MS);
    }, 8000);
  }
})();
