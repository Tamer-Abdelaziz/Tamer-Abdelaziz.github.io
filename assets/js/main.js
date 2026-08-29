/* ============================================================
   Tamer Abdelaziz — portfolio renderer.
   Reads assets/data/site.js. No build step, no dependencies.
   ============================================================ */
(function () {
  "use strict";

  var $ = function (s) { return document.querySelector(s); };
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function fill(sel, html) { var n = $(sel); if (n) n.innerHTML = html; }
  function each(sel, arr, fn) {
    var host = $(sel); if (!host || !arr) return;
    host.innerHTML = "";
    arr.forEach(function (item, i) { host.appendChild(fn(item, i)); });
  }

  var P = SITE.profile;

  /* ------------------------------------------------------- theme */
  var root = document.documentElement;
  try {
    var saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") root.setAttribute("data-theme", saved);
  } catch (e) { /* private mode: fall through to system theme */ }

  var tb = $("#themeBtn");
  if (tb) {
    tb.addEventListener("click", function () {
      var isDark = root.getAttribute("data-theme") === "dark" ||
        (!root.getAttribute("data-theme") &&
          window.matchMedia("(prefers-color-scheme: dark)").matches);
      var next = isDark ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) { /* ignore */ }
    });
  }

  /* ------------------------------------------------------- hero */
  fill("#heroName", esc(P.name) + '<span class="suffix">, ' + esc(P.suffix) + "</span>");
  fill("#heroIdent",
    "<div>" + esc(P.role) + ", " + esc(P.affiliation) + "</div>" +
    "<div>" + esc(P.doctorate) + "</div>");
  $("#heroTagline").textContent = P.tagline;
  fill("#heroLoc", '<i class="fas fa-location-dot" aria-hidden="true"></i>' + esc(P.location));

  var ICON = { mail: "fa-envelope", scholar: "fa-graduation-cap", linkedin: "fa-linkedin" };
  each("#heroLinks", P.links, function (l) {
    var a = el("a", "hlink");
    a.href = l.href;
    if (l.href.indexOf("http") === 0) { a.target = "_blank"; a.rel = "noopener"; }
    a.innerHTML = '<i class="' + (l.icon === "linkedin" ? "fab " : "fas ") +
      (ICON[l.icon] || "fa-link") + '" aria-hidden="true"></i>' + esc(l.label);
    return a;
  });

  var photo = $("#heroPhoto");
  if (photo) {
    photo.addEventListener("error", function () {
      var m = el("div", "hero-photo", esc(P.name.split(" ").map(function (w) { return w[0]; }).join("")));
      m.style.cssText += "display:grid;place-items:center;font-family:var(--f-display);" +
        "font-size:3.4rem;background:var(--accent-sf);color:var(--accent)";
      photo.replaceWith(m);
    });
  }

  /* ------------------------------------------------------- research arc */
  each("#arcRow", SITE.arc, function (s) {
    var n = el("div", "arc-node");
    n.setAttribute("data-state", s.state);
    n.appendChild(el("div", "arc-dot"));
    n.appendChild(el("div", "arc-label", esc(s.label)));
    n.appendChild(el("div", "arc-ref", esc(s.ref)));
    n.appendChild(el("div", "arc-blurb", esc(s.blurb)));
    return n;
  });

  /* ------------------------------------------------------- research statement */
  var RS = SITE.researchStatement;
  $("#rsVision").textContent = RS.vision;
  each("#rsPrinciples", RS.principles, function (p) {
    return el("li", null, "<strong>" + esc(p.h) + ":</strong> " + esc(p.b));
  });

  var THEME_ICON = ["fa-shield-halved", "fa-diagram-project", "fa-key",
                    "fa-user-secret", "fa-wrench", "fa-scale-balanced"];
  each("#themeCards", SITE.themes, function (t, i) {
    return el("div", "card",
      '<i class="fas ' + THEME_ICON[i % THEME_ICON.length] + ' tp" aria-hidden="true"></i>' +
      "<h3>" + esc(t.title) + "</h3><p>" + esc(t.body) + "</p>");
  });

  /* ------------------------------------------------------- publications */
  var TYPES = [
    { key: "all",        label: "All" },
    { key: "review",     label: "Under review" },
    { key: "conference", label: "Conference" },
    { key: "journal",    label: "Journal" },
    { key: "preprint",   label: "Preprint" },
    { key: "artifact",   label: "Artifact" },
    { key: "thesis",     label: "Thesis" }
  ];
  var filter = "all";

  each("#pubFilters", TYPES.filter(function (t) {
    return t.key === "all" || SITE.publications.some(function (p) { return p.type === t.key; });
  }), function (t) {
    var b = el("button", t.key === "all" ? "on" : null, esc(t.label));
    b.type = "button";
    b.setAttribute("data-key", t.key);
    b.addEventListener("click", function () {
      filter = t.key;
      Array.prototype.forEach.call(document.querySelectorAll("#pubFilters button"),
        function (x) { x.classList.toggle("on", x.getAttribute("data-key") === filter); });
      renderPubs();
    });
    return b;
  });

  function authors(list) {
    return list.map(function (a) {
      return a === P.name ? "<strong>" + esc(a) + "</strong>" : esc(a);
    }).join(", ");
  }

  function renderPubs() {
    var shown = SITE.publications.filter(function (p) {
      return filter === "all" || p.type === filter;
    });
    var host = $("#pubList");
    host.innerHTML = "";
    if (!shown.length) {
      host.appendChild(el("p", null, "Nothing in this category yet."));
      return;
    }
    shown.forEach(function (p) {
      var row = el("div", "pub");
      row.setAttribute("data-category", p.type);
      if (p.selected) row.setAttribute("data-selected", "true");
      row.appendChild(el("div", "pub-year", esc(p.year)));

      var b = el("div", "pub-body");
      b.appendChild(el("h3", "pub-title", esc(p.title)));
      b.appendChild(el("div", "pub-authors", authors(p.authors)));
      b.appendChild(el("div", "pub-venue", esc(p.venue)));
      if (p.note) b.appendChild(el("p", "pub-note", esc(p.note)));
      if (p.links && p.links.length) {
        var bar = el("div", "pub-badges");
        p.links.forEach(function (l) {
          var a = el("a", "pub-link",
            '<i class="fas fa-arrow-up-right-from-square" aria-hidden="true"></i>' + esc(l.label));
          a.href = l.href; a.target = "_blank"; a.rel = "noopener";
          bar.appendChild(a);
        });
        b.appendChild(bar);
      }
      row.appendChild(b);
      host.appendChild(row);
    });
  }
  renderPubs();

  /* ------------------------------------------------------- projects */
  each("#projectCards", SITE.projects, function (p) {
    var c = el("div", "card");
    c.appendChild(el("div", "proj-head",
      "<h3>" + esc(p.name) + "</h3><span class='chip'>" + esc(p.status) + "</span>"));
    c.appendChild(el("p", null, esc(p.body)));
    if (p.tags && p.tags.length) {
      c.appendChild(el("div", "tags", p.tags.map(function (t) {
        return "<span class='tag'>" + esc(t) + "</span>";
      }).join("")));
    }
    return c;
  });

  /* ------------------------------------------------------- experience / education */
  function tlItem(when, role, org, points) {
    var it = el("div", "tl-item");
    it.appendChild(el("div", "tl-when", esc(when)));
    var b = el("div", null,
      "<div class='tl-role'>" + esc(role) + "</div><div class='tl-org'>" + esc(org) + "</div>");
    if (points && points.length) {
      b.appendChild(el("ul", null, points.map(function (x) {
        return "<li>" + esc(x) + "</li>";
      }).join("")));
    }
    it.appendChild(b);
    return it;
  }

  each("#expList", SITE.experience, function (e) {
    return tlItem(e.when, e.role, e.org + (e.where ? " · " + e.where : ""), e.points);
  });
  each("#eduList", SITE.education, function (e) {
    return tlItem(e.when, e.degree, e.org, e.points);
  });
  each("#teachList", SITE.teaching, function (t) {
    return tlItem(t.when, t.course, t.org + " · " + t.role, t.body ? [t.body] : []);
  });

  each("#awardList", SITE.awards, function (a) {
    return el("li", null, "<strong>" + esc(a.year) + "</strong>" +
      esc(a.title) + (a.org ? ", " + esc(a.org) : ""));
  });
  each("#serviceList", SITE.service, function (s) {
    return el("li", null, esc(s));
  });

  /* ------------------------------------------------------- students */
  var O = SITE.opportunities;
  $("#oppIntro").textContent = O.intro;
  $("#oppFit").textContent = O.fit;
  each("#oppDirections", O.directions, function (d) { return el("li", null, esc(d)); });

  /* ------------------------------------------------------- contact */
  var C = SITE.contact;
  fill("#contactBlurb", "<p style='margin-top:0'>" + esc(C.blurb) + "</p>" +
    "<a class='btn' href='mailto:" + esc(C.email) + "?subject=" +
    encodeURIComponent(C.emailSubject) + "'>" +
    "<i class='fas fa-envelope' aria-hidden='true'></i> Email me</a>");
  fill("#contactRows",
    "<div class='contact-row'><i class='fas fa-envelope' aria-hidden='true'></i>" +
      "<span><a href='mailto:" + esc(C.email) + "'>" + esc(C.email) + "</a></span></div>" +
    "<div class='contact-row'><i class='fas fa-building-columns' aria-hidden='true'></i>" +
      "<span>" + esc(C.office) + "</span></div>" +
    "<div class='contact-row'><i class='fas fa-location-dot' aria-hidden='true'></i>" +
      "<span>" + esc(C.city) + "</span></div>");

  /* ------------------------------------------------------- footer */
  $("#footName").textContent = "© " + new Date().getFullYear() + " " + P.name;
  $("#footUpdated").textContent = P.role + ", " + P.affiliation;

  /* ------------------------------------------------------- scroll spy */
  var ids = ["research", "publications", "projects", "experience", "students", "contact"];
  var links = {};
  ids.forEach(function (id) {
    var a = document.querySelector('.nav-links a[href="#' + id + '"]');
    if (a) links[id] = a;
  });
  if (window.IntersectionObserver) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        Object.keys(links).forEach(function (k) { links[k].classList.remove("on"); });
        if (links[en.target.id]) links[en.target.id].classList.add("on");
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    ids.forEach(function (id) {
      var s = document.getElementById(id);
      if (s) obs.observe(s);
    });
  }
})();
