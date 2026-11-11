/* Draws publications from Data/publications.js.
   Homepage:          <div class="pubs pubs-selected" data-pubs="selected"></div>
   publications.html: <div class="pubs pubs-full" data-pubs="all"></div>
   You shouldn't need to edit this file; edit Data/publications.js instead. */
(function () {
  var ME = "Rachneet Kaur";
  var TYPES = [["all", "All"], ["conference", "Conferences"], ["journal", "Journals"],
               ["workshop", "Workshops & Posters"], ["preprint", "Preprints"],
               ["chapter", "Book Chapters"], ["thesis", "Theses"]];

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function isExternal(u) { return /^https?:/.test(u); }
  function link(u, text, cls) {
    return '<a' + (cls ? ' class="' + cls + '"' : '') + ' href="' + esc(u) + '"' +
           ' target="_blank"' + (isExternal(u) ? ' rel="noopener"' : '') + '>' + text + '</a>';   /* every paper link opens in a new tab */
  }
  function authors(s) { return esc(s).split(esc(ME)).join("<b>" + esc(ME) + "</b>"); }
  function mediaCount(p) {
    return (p.media || []).reduce(function (n, m) { return n + m.s.length; }, 0);
  }

/* ---------- citations (the "Cite" button) ----------
   Papers with a hand-written .bib file (a "BibTeX" link) use it; the rest get BibTeX
   generated from their entry. "Plain text" is a one-line reference. */
var PUBLISHERS = /^(MDPI|Cell Press|Elsevier|Nature Publishing Group|IEEE|ACM|Springer)$/;
var STOP = /^(a|an|the|on|of|for|in|to|from|and|using|with)$/i;
function cleanAuthors(p) { return p.authors.replace(/\*/g, "").split(/\s*,\s*/); }
function bibName(n) { var w = n.trim().split(/\s+/); return w.length < 2 ? n : w.pop() + ", " + w.join(" "); }
function texEsc(t) { return String(t).replace(/\u2014/g, "---").replace(/\u2013/g, "--").replace(/([&%$#_])/g, "\\$1"); }
function plainVenue(p) { return p.venue.replace(/\.\s*(Committee|Advisor):.*$/, ""); }
function journalName(p) { return PUBLISHERS.test(p.venue) ? p.tag.replace(/\s*\d{4}$/, "") : p.venue; }
function arxivId(p) {
  var l = (p.links || []).filter(function (l) { return /arxiv\.org\/abs\//.test(l[1]); })[0];
  return l ? l[1].split("/abs/")[1].replace(/v\d+$/, "") : null;
}
function bibKey(p) {
  var last = cleanAuthors(p)[0].trim().split(/\s+/).pop().normalize("NFD").replace(/[^A-Za-z]/g, "").toLowerCase();
  var word = (p.title.split(/[\s:\-\u2014]+/).filter(function (w) { return w && !STOP.test(w); })[0] || "paper");
  return last + p.year + word.normalize("NFD").replace(/[^A-Za-z0-9]/g, "").toLowerCase();
}
function bibtex(p) {
  var f = [["title", "{" + texEsc(p.title) + "}"], ["author", cleanAuthors(p).map(bibName).join(" and ")]];
  var type = "misc", id = arxivId(p);
  if (p.type === "conference" || p.type === "workshop") {
    type = "inproceedings";
    f.push(["booktitle", (p.type === "conference" && !/^Proceedings/.test(p.venue) ? "Proceedings of the " : "") + texEsc(p.venue)]);
  } else if (p.type === "journal") {
    type = "article";
    f.push(["journal", texEsc(journalName(p))]);
    if (PUBLISHERS.test(p.venue)) f.push(["publisher", texEsc(p.venue)]);
  } else if (p.type === "chapter") {
    type = "incollection";
    f.push(["booktitle", texEsc(p.venue)]);
  } else if (p.type === "thesis") {
    type = /^PhD/.test(p.tag) ? "phdthesis" : "mastersthesis";
    var m = p.venue.match(/,\s*([^,]+?),\s*[A-Z][a-z]{2,} \d{4}/);
    if (m) f.push(["school", texEsc(m[1])]);
  } else if (id) {
    type = "article";
    f.push(["journal", "arXiv preprint arXiv:" + id]);
  }
  f.push(["year", String(p.year)]);
  var main = (p.links || [])[0];
  if (main && isExternal(main[1])) f.push(["url", main[1]]);
  return "@" + type + "{" + bibKey(p) + ",\n" +
         f.map(function (x) { return "  " + x[0] + " = {" + x[1] + "}"; }).join(",\n") + "\n}";
}
function plainCite(p) {
  var v = plainVenue(p), id = arxivId(p);
  var where = /^(conference|journal|workshop)$/.test(p.type) ? v + " (" + p.tag + ")" :
              p.type === "preprint" && id ? "arXiv:" + id + ", " + p.year : v;
  return cleanAuthors(p).join(", ") + ". " + p.title.replace(/[.?!]?$/, ".") + " " + where + ".";
}
function bibFile(p) {
  var l = (p.links || []).filter(function (l) { return l[0] === "BibTeX"; })[0];
  return l ? l[1] : null;
}
function legacyCopy(t) {
  var ta = document.createElement("textarea");
  ta.value = t; ta.setAttribute("readonly", ""); ta.style.position = "fixed"; ta.style.opacity = "0";
  document.body.appendChild(ta); ta.select();
  var ok = false;
  try { ok = document.execCommand("copy"); } catch (e) {} finally { document.body.removeChild(ta); }
  return ok;
}
/* resolves true if the text reached the clipboard */
function copyText(t) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(t).then(function () { return true; }, function () { return legacyCopy(t); });
  }
  return Promise.resolve(legacyCopy(t));
}
/* fill a cite panel the first time it opens */
function fillCite(panel) {
  if (panel.getAttribute("data-ready")) return;
  panel.setAttribute("data-ready", "1");
  var p = window.PUBLICATIONS[+panel.getAttribute("data-i")];
  var texts = { bib: bibtex(p), txt: plainCite(p) };
  panel.innerHTML =
    '<div class="cite-bar"><div class="cite-tabs" role="tablist">' +
    '<button type="button" role="tab" data-fmt="bib" aria-selected="true">BibTeX</button>' +
    '<button type="button" role="tab" data-fmt="txt" aria-selected="false">Plain text</button></div>' +
    '<button type="button" class="cite-copy">Copy</button></div><pre class="cite-text"></pre>';
  var pre = panel.querySelector(".cite-text"), fmt = "bib";
  function show() { pre.textContent = texts[fmt]; }
  show();
  var file = bibFile(p);
  if (file) fetch(file).then(function (r) { return r.ok ? r.text() : null; }).then(function (t) {
    if (t && /^\s*@/.test(t)) { texts.bib = t.trim(); show(); }
  }).catch(function () {});
  panel.addEventListener("click", function (e) {
    var tab = e.target.closest("[data-fmt]");
    if (tab) {
      fmt = tab.getAttribute("data-fmt");
      panel.querySelectorAll("[data-fmt]").forEach(function (b) { b.setAttribute("aria-selected", b === tab); });
      show();
    }
    var c = e.target.closest(".cite-copy");
    if (c) copyText(texts[fmt]).then(function (ok) {
      if (!ok) {   /* clipboard blocked: select the text so Ctrl/Cmd+C works */
        var r = document.createRange(); r.selectNodeContents(pre);
        var sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(r);
      }
      c.textContent = ok ? "Copied \u2713" : "Selected \u2014 press \u2318/Ctrl+C";
      c.classList.add("done");
      setTimeout(function () { c.textContent = "Copy"; c.classList.remove("done"); }, ok ? 1600 : 3000);
    });
  });
}

var uid = 0;
  function paper(p, withFig) {
    var links = p.links || [];
    var main = links.length ? links[0][1] : null;
    var id = "pub-media-" + (++uid);
    var h = '<div class="pub' + (p.featured ? ' pub-featured' : '') + '" data-type="' + esc(p.type) + '">';
    if (withFig) {
      h += '<a class="pub-fig" href="' + esc(p.fig || p.img || main || "#") + '" data-title="' + esc(p.title) + '" target="_blank" rel="noopener" aria-label="View figure">' +
           (p.img ? '<img src="' + esc(p.img) + '" alt="" loading="lazy">' : '') + '</a>';
    }
    h += '<div class="pub-body">';
    h += '<div class="pub-chips"><span class="pub-tag">' + esc(p.tag) + '</span>' +
         (p.badges || []).map(function (b) { return '<span class="pub-badge">' + esc(b) + '</span>'; }).join("") + '</div>';
    h += main ? link(main, esc(p.title), "pub-title") : '<span class="pub-title">' + esc(p.title) + '</span>';
    h += '<div class="pub-authors">' + authors(p.authors) + '</div>';
    var withTag = /^(conference|journal|workshop)$/.test(p.type);   /* e.g. "Annual Meeting of ... (ACL 2026)" */
    h += '<div class="pub-venue">' + esc(p.venue) + (withTag ? ' (' + esc(p.tag) + ')' : '') + '</div>';
    (p.notes || []).forEach(function (n) { h += '<div class="pub-note">' + esc(n) + '</div>'; });
    var btns = links.filter(function (l) { return l[0] !== "BibTeX"; }).map(function (l) { return link(l[1], esc(l[0])); });
    var cid = "pub-cite-" + uid;
    btns.push('<button type="button" class="pub-cite-btn" aria-expanded="false" aria-controls="' + cid + '">Cite<span class="caret">&#9662;</span></button>');
    var mc = mediaCount(p);
    if (mc) btns.push('<button type="button" aria-expanded="false" aria-controls="' + id + '">Media (' + mc + ')<span class="caret">&#9662;</span></button>');
    if (btns.length) h += '<div class="pub-links">' + btns.join("") + '</div>';
    if (mc) {
      h += '<div class="pub-media" id="' + id + '"><ul>' + p.media.map(function (m) {
        return '<li>&ldquo;' + esc(m.t) + '&rdquo; <span class="src">&mdash; ' +
               m.s.map(function (s) { return link(s[1], esc(s[0])); }).join(", ") + '</span></li>';
      }).join("") + '</ul></div>';
    }
    h += '<div class="pub-media pub-cite" id="' + cid + '" data-i="' + window.PUBLICATIONS.indexOf(p) + '"></div>';
    return h + '</div></div>';
  }

  function wireMedia(root) {
    root.addEventListener("click", function (e) {
      var b = e.target.closest("button[aria-controls]");
      if (!b) return;
      var open = b.getAttribute("aria-expanded") !== "true";
      b.setAttribute("aria-expanded", open);
      var panel = document.getElementById(b.getAttribute("aria-controls"));
      if (open && panel.classList.contains("pub-cite")) fillCite(panel);
      panel.classList.toggle("open", open);
    });
  }

/* Clicking a thumbnail shows the full figure on top of the page.
   Close with Esc, the x button, or a click anywhere outside the figure. */
var box = null, lastFocus = null;
function openBox(src, caption) {
  if (!box) {
    box = document.createElement("div");
    box.className = "pub-lightbox";
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-modal", "true");
    box.innerHTML = '<button type="button" class="pub-lightbox-close" aria-label="Close">&times;</button>' +
                    '<figure><img alt=""><figcaption></figcaption></figure>';
    document.body.appendChild(box);
    box.addEventListener("click", function (e) {
      if (e.target.tagName !== "IMG") closeBox();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && box.classList.contains("open")) closeBox();
    });
  }
  box.querySelector("img").src = src;
  box.querySelector("img").alt = caption;
  box.querySelector("figcaption").textContent = caption;
  lastFocus = document.activeElement;
  box.classList.add("open");
  document.documentElement.classList.add("pub-lightbox-on");
  box.querySelector(".pub-lightbox-close").focus();
}
function closeBox() {
  box.classList.remove("open");
  document.documentElement.classList.remove("pub-lightbox-on");
  if (lastFocus) lastFocus.focus();
}
function wireLightbox(root) {
  root.addEventListener("click", function (e) {
    var a = e.target.closest("a.pub-fig");
    if (!a || e.metaKey || e.ctrlKey || e.shiftKey) return;   /* Cmd/Ctrl-click still opens a new tab */
    e.preventDefault();
    openBox(a.getAttribute("href"), a.getAttribute("data-title") || "");
  });
}

function renderSelected(el) {
    var list = window.PUBLICATIONS.filter(function (p) { return p.selected; });
    var figs = el.getAttribute("data-figures") !== "off";   /* data-figures="off" hides the figures */
    el.classList.toggle("pubs-nofig", !figs);
    el.innerHTML = list.map(function (p) { return paper(p, figs); }).join("");
    wireMedia(el);
    wireLightbox(el);
    var n = document.querySelectorAll("[data-pubs-count]");
    for (var i = 0; i < n.length; i++) n[i].textContent = window.PUBLICATIONS.length;
  }

  function renderAll(el) {
    var all = window.PUBLICATIONS, current = "all";
    var counts = {};
    all.forEach(function (p) { counts[p.type] = (counts[p.type] || 0) + 1; });
    var bar = document.createElement("div");
    bar.className = "pubs-filter";
    bar.innerHTML = TYPES.filter(function (t) { return t[0] === "all" || counts[t[0]]; }).map(function (t) {
      return '<button type="button" data-f="' + t[0] + '"' + (t[0] === "all" ? ' class="on"' : '') + '>' +
             t[1] + '<span class="n">' + (t[0] === "all" ? all.length : counts[t[0]]) + '</span></button>';
    }).join("");
    var list = document.createElement("div");
    el.innerHTML = "";
    el.appendChild(bar);
    el.appendChild(list);

    function draw() {
      var shown = all.filter(function (p) { return current === "all" || p.type === current; });
      var h = "", year = null;
      shown.forEach(function (p) {
        if (p.year !== year) { year = p.year; h += '<div class="pubs-year">' + year + '</div>'; }
        h += paper(p, false);
      });
      list.innerHTML = h || '<div class="pubs-empty">Nothing here yet.</div>';
    }
    bar.addEventListener("click", function (e) {
      var b = e.target.closest("button[data-f]");
      if (!b) return;
      current = b.getAttribute("data-f");
      var bs = bar.querySelectorAll("button");
      for (var i = 0; i < bs.length; i++) bs[i].classList.toggle("on", bs[i] === b);
      draw();
      try { history.replaceState(null, "", current === "all" ? location.pathname : "#" + current); } catch (err) {}
    });
    var start = location.hash.slice(1);
    if (counts[start]) { current = start; bar.querySelector('[data-f="all"]').classList.remove("on"); bar.querySelector('[data-f="' + start + '"]').classList.add("on"); }
    draw();
    wireMedia(list);
  }

  function init() {
    var els = document.querySelectorAll("[data-pubs]");
    for (var i = 0; i < els.length; i++) {
      if (els[i].getAttribute("data-pubs") === "selected") renderSelected(els[i]);
      else renderAll(els[i]);
    }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
