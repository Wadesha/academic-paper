/* ===========================================================================
   Academic Paper Hub — Verified Corpus  ·  app.js
   Hash router + rendering. Reads window.PAPER_DATA (real corpus).
   Improvements over the old template site:
     - real client-side SEARCH (title / author / keyword / venue)
     - references rendered as LINKED records (DOI / arXiv) with cited_by + source
     - per-paper DOWNLOAD bar (tex / md / pptx / pdf) linking the real files
     - verified + angle tags; dark/light toggle (localStorage)
   =========================================================================== */
(function () {
  'use strict';

  var DATA = window.PAPER_DATA || { site: { name: '—', tagline: '', description: '' }, disciplines: [] };
  var app = document.getElementById('app');

  // ---- theme ----
  function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    try { localStorage.setItem('aph-theme', t); } catch (e) {}
  }
  (function initTheme() {
    var t = 'light';
    try { t = localStorage.getItem('aph-theme') || 'light'; } catch (e) {}
    document.documentElement.setAttribute('data-theme', t);
  })();

  // ---- utils ----
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function refUrl(r) {
    if (r.doi) return 'https://doi.org/' + r.doi;
    return null;
  }
  function tags(arr) {
    if (!arr || !arr.length) return '';
    return arr.map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join('');
  }
  function findDiscipline(id) {
    for (var i = 0; i < DATA.disciplines.length; i++)
      if (DATA.disciplines[i].id === id) return DATA.disciplines[i];
    return null;
  }
  function findSubfield(discId, subId) {
    var d = findDiscipline(discId); if (!d) return null;
    var subs = d.subfields || [];
    for (var i = 0; i < subs.length; i++)
      if (subs[i].id === subId) return { discipline: d, subfield: subs[i] };
    return null;
  }
  function findPaper(pid) {
    for (var i = 0; i < DATA.disciplines.length; i++) {
      var subs = DATA.disciplines[i].subfields || [];
      for (var j = 0; j < subs.length; j++) {
        var ps = subs[j].papers || [];
        for (var k = 0; k < ps.length; k++)
          if (ps[k].id === pid) return { discipline: DATA.disciplines[i], subfield: subs[j], paper: ps[k] };
      }
    }
    return null;
  }
  function paperCount(d) {
    var n = 0; (d.subfields || []).forEach(function (s) { n += (s.papers || []).length; }); return n;
  }
  function subfieldCount(d) { return (d.subfields || []).length; }
  function totalPapers() {
    var n = 0; DATA.disciplines.forEach(function (d) { n += paperCount(d); }); return n;
  }

  // ---- header / footer ----
  function header() {
    var nav = DATA.disciplines.map(function (d) {
      return '<a href="#/disc/' + encodeURIComponent(d.id) + '">' + esc(d.name) + '</a>';
    }).join('');
    return (
      '<header class="site-header"><div class="header-inner">' +
      '<a class="brand" href="#/">' + esc(DATA.site.name) +
      '<span class="brand-sub">' + esc(DATA.site.tagline) + '</span></a>' +
      '<div class="search-box"><span aria-hidden="true">🔍</span>' +
      '<input id="q" type="search" placeholder="搜索标题/作者/关键词/会议…" value="' + esc(currentQuery()) + '"></div>' +
      '<button class="theme-btn" id="theme">🌓 主题</button>' +
      '<nav class="nav-links">' + nav +
      '</nav></div></header>'
    );
  }
  function footer() {
    return '<footer class="site-footer">Academic Paper Hub · Verified Corpus · ' +
      totalPapers() + ' real-citation papers · references 100% verifiable (OpenAlex / arXiv)</footer>';
  }

  function bindHeader() {
    var q = document.getElementById('q');
    if (q) q.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { location.hash = '#/search/' + encodeURIComponent(q.value.trim()); }
    });
    var t = document.getElementById('theme');
    if (t) t.addEventListener('click', function () {
      var cur = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(cur);
    });
  }

  var _qs = '';
  function currentQuery() { return _qs; }

  // ---- home ----
  function renderHome() {
    var rows = DATA.disciplines.map(function (d) {
      return (
        '<div class="disc-row">' +
        '<a class="disc-name" href="#/disc/' + encodeURIComponent(d.id) + '">' + esc(d.name) +
        '<span class="disc-en">' + esc(d.enName || '') + '</span></a>' +
        '<span class="disc-meta">' + subfieldCount(d) + ' 子方向</span>' +
        '<span class="disc-meta">' + paperCount(d) + ' 篇</span>' +
        '</div>'
      );
    }).join('');
    return (
      header() +
      '<main class="container">' +
      '<section class="hero"><h1>' + esc(DATA.site.name) + '</h1>' +
      '<p>' + esc(DATA.site.description) + '</p>' +
      '<p class="stat-line">' + DATA.disciplines.length + ' 个学科 · ' + totalPapers() + ' 篇真实引用论文</p>' +
      '</section>' +
      '<h2 class="section-title">学科目录</h2>' +
      '<div class="disc-list">' + rows + '</div>' +
      (DATA.note ? '<p class="hint">' + esc(DATA.note) + '</p>' : '') +
      '</main>' + footer()
    );
  }

  // ---- discipline (flattened: papers shown directly; subfields as inline groups) ----
  function renderDiscipline(discId) {
    var d = findDiscipline(discId); if (!d) return renderNotFound('未找到该学科');
    var groups = (d.subfields || []).map(function (s) {
      var pc = (s.papers || []).length;
      var list = (s.papers || []).map(function (p) {
        var badges = (p.verified ? '<span class="verified-tag">✓ 真实引用</span>' : '') +
          (p.angle ? '<span class="angle-tag">' + esc(p.angle) + '</span>' : '');
        return (
          '<a class="paper-item" href="#/paper/' + encodeURIComponent(p.id) + '">' +
          '<div class="paper-row"><span class="paper-title">' + esc(p.title) + '</span>' + badges +
          '<span class="paper-meta">' + esc(p.venue || '') + ' · ' + esc(p.year || '') + '</span></div>' +
          '<p class="paper-abs">' + esc(p.abstract || '') + '</p>' +
          '<div class="paper-kw">' + tags(p.keywords) + '</div>' +
          '</a>'
        );
      }).join('');
      return '<section class="sub-group"><h3 class="sub-group-h">' + esc(s.name) +
        '<span class="sub-en">' + esc(s.enName || '') + '</span>' +
        '<span class="sub-meta">' + pc + ' 篇</span></h3>' +
        '<div class="paper-list">' + (list || '<div class="empty">该子方向暂无论文。</div>') + '</div></section>';
    }).join('');
    return (
      header() +
      '<main class="container">' +
      breadcrumb([['#/', '首页'], [null, esc(d.name)]]) +
      '<section class="page-head"><h1>' + esc(d.name) +
      '<span class="head-en">' + esc(d.enName || '') + '</span></h1>' +
      '<p class="head-desc">' + esc(d.description || '') + '</p>' +
      '<p class="stat-line">' + subfieldCount(d) + ' 个子方向 · ' + paperCount(d) + ' 篇</p></section>' +
      groups +
      '</main>' + footer()
    );
  }

  // ---- subfield (paper list) ----
  function renderSubfield(discId, subId) {
    var r = findSubfield(discId, subId); if (!r) return renderNotFound('未找到该子方向');
    var d = r.discipline, s = r.subfield;
    var list = (s.papers || []).map(function (p) {
      var badges = (p.verified ? '<span class="verified-tag">✓ 真实引用</span>' : '') +
        (p.angle ? '<span class="angle-tag">' + esc(p.angle) + '</span>' : '');
      return (
        '<a class="paper-item" href="#/paper/' + encodeURIComponent(p.id) + '">' +
        '<div class="paper-row"><span class="paper-title">' + esc(p.title) + '</span>' + badges +
        '<span class="paper-meta">' + esc(p.venue || '') + ' · ' + esc(p.year || '') + '</span></div>' +
        '<p class="paper-abs">' + esc(p.abstract || '') + '</p>' +
        '<div class="paper-kw">' + tags(p.keywords) + '</div>' +
        '</a>'
      );
    }).join('');
    if (!list) list = '<div class="empty">该子方向暂无论文。</div>';
    return (
      header() +
      '<main class="container">' +
      breadcrumb([['#/', '首页'], ['#/disc/' + enc(d.id), esc(d.name)], [null, esc(s.name)]]) +
      '<section class="page-head"><h1>' + esc(s.name) +
      '<span class="head-en">' + esc(s.enName || '') + '</span></h1>' +
      '<p class="head-desc">' + esc(s.description || '') + '</p>' +
      '<p class="stat-line">' + (s.papers || []).length + ' 篇</p></section>' +
      '<h2 class="section-title">论文</h2><div class="paper-list">' + list + '</div>' +
      '</main>' + footer()
    );
  }

  // ---- prerequisite knowledge module (top of every paper) ----
  function renderPrereqs(p) {
    var pre = p.prerequisites;
    if (!pre || !pre.concepts || !pre.concepts.length) return '';
    var cards = pre.concepts.map(function (c) {
      var pts = (c.points || []).map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('');
      var lvl = c.level ? '<span class="kb-level">' + esc(c.level) + '</span>' : '';
      return '<div class="kb-card">' +
        '<div class="kb-head"><span class="kb-name">' + esc(c.title) + '</span>' + lvl + '</div>' +
        '<ul class="kb-points">' + pts + '</ul></div>';
    }).join('');
    var specific = pre.specific
      ? '<p class="prereq-specific"><span class="prereq-tag">本文专题</span>' + esc(pre.specific) + '</p>'
      : '';
    return '<details class="prereq-module" open>' +
      '<summary><span class="prereq-title">前置知识 · Prerequisites</span>' +
      '<span class="prereq-hint">阅读本文前建议掌握的真实基础概念（点击可折叠）</span></summary>' +
      '<div class="prereq-body">' + specific + '<div class="kb-cards">' + cards + '</div></div>' +
      '</details>';
  }

  // ---- paper detail ----
  function renderPaper(paperId) {
    var r = findPaper(paperId); if (!r) return renderNotFound('未找到该论文');
    var d = r.discipline, s = r.subfield, p = r.paper;

    var sections = (p.sections || []).map(function (sec) {
      return '<section class="section-body"><h2>' + esc(sec.title) + '</h2><p>' + esc(sec.content || '') + '</p></section>';
    }).join('');

    var refs = (p.references || []).map(function (ref, i) {
      var url = refUrl(ref);
      var link = url
        ? '<a class="ref-link" href="' + esc(url) + '" target="_blank" rel="noopener">[' + (i + 1) + '] ' + esc(ref.title) + '</a>'
        : '[' + (i + 1) + '] ' + esc(ref.title);
      var meta = (ref.authors ? esc(ref.authors.join(', ')) + '. ' : '') +
        esc(ref.venue || '') + (ref.year ? ' ' + ref.year : '') +
        (ref.doi ? ' · DOI:' + esc(ref.doi) : '') +
        (ref.cited_by ? ' · 被引 ' + ref.cited_by : '') +
        (ref.source ? ' <span class="src-badge">' + esc(ref.source) + '</span>' : '');
      return '<li>' + link + '<div class="ref-meta">' + meta + '</div></li>';
    }).join('');

    var dl = p.downloads || {};
    function dlBtn(label, path) {
      if (!path) return '<span class="dl-btn disabled">' + label + ' (n/a)</span>';
      return '<a class="dl-btn" href="' + esc(path) + '" target="_blank" rel="noopener">⬇ ' + label + '</a>';
    }
    var dlBar = '<div class="dl-bar">' +
      dlBtn('LaTeX', dl.tex) + dlBtn('Markdown', dl.md) + dlBtn('PPTX', dl.pptx) + dlBtn('PDF', dl.pdf) +
      '</div>';

    var badges = (p.verified ? '<span class="verified-tag">✓ 真实引用</span>' : '') +
      (p.angle ? '<span class="angle-tag">' + esc(p.angle) + '</span>' : '');

    var nav = paperNav(d, s, p);

    return (
      header() +
      '<main class="container">' +
      breadcrumb([['#/', '首页'], ['#/disc/' + enc(d.id), esc(d.name)],
        ['#/sub/' + enc(d.id) + '/' + enc(s.id), esc(s.name)], [null, esc(p.title)]]) +
      '<article class="paper-detail">' +
      '<div class="gen-note">真实引用语料 · ' + esc(d.name) + ' / ' + esc(s.name) +
      (p.year ? ' · ' + p.year : '') + (p.venue ? ' · ' + esc(p.venue) : '') + '</div>' +
      '<h1>' + esc(p.title) + badges + '</h1>' +
      '<div class="meta-line">' + esc((p.authors || []).join(', ')) + (p.year ? ' · ' + p.year : '') + (p.venue ? ' · ' + esc(p.venue) : '') + '</div>' +
      '<div class="kw-line">' + tags(p.keywords) + '</div>' +
      '<div class="abstract-box"><span class="label">摘要</span>' + esc(p.abstract || '') + '</div>' +
      renderPrereqs(p) +
      dlBar +
      sections +
      '<section class="references"><h2>参考文献（真实可核验 · ' + (p.references || []).length + ' 条）</h2><ol>' + refs + '</ol></section>' +
      '</article>' +
      renderPaperNavBar(nav) +
      '</main>' + footer()
    );
  }

  // four-way nav: prev/next within subfield, prev/next subfield
  function paperNav(d, s, p) {
    var ps = s.papers || [];
    var idx = ps.indexOf(p);
    var prev = idx > 0 ? ps[idx - 1] : null;
    var next = idx >= 0 && idx < ps.length - 1 ? ps[idx + 1] : null;
    // cross-subfield: last paper of previous subfield / first of next subfield
    var subs = d.subfields || [];
    var si = subs.indexOf(s);
    var prevTopic = null, nextTopic = null;
    if (si > 0) { var pp = subs[si - 1].papers || []; prevTopic = pp.length ? pp[pp.length - 1] : null; }
    if (si >= 0 && si < subs.length - 1) { var np = subs[si + 1].papers || []; nextTopic = np.length ? np[0] : null; }
    return { prev: prev, next: next, prevTopic: prevTopic, nextTopic: nextTopic };
  }
  function renderPaperNavBar(n) {
    function link(p, dir, cls) {
      if (!p) return '<span class="nav-item disabled"><span class="nav-dir">' + esc(dir) + '</span></span>';
      return '<a class="nav-item ' + cls + '" href="#/paper/' + enc(p.id) + '"><span class="nav-dir">' + esc(dir) +
        '</span><span class="nav-title">' + esc(p.title) + '</span></a>';
    }
    return '<nav class="paper-nav">' +
      '<div class="nav-row nav-h">' + link(n.prev, '← 上一篇', 'prev') + link(n.next, '下一篇 →', 'next') + '</div>' +
      '<div class="nav-row nav-v">' + link(n.prevTopic, '↑ 上一话题', 'prev-topic') + link(n.nextTopic, '下一话题 ↓', 'next-topic') + '</div>' +
      '</nav>';
  }

  // ---- search ----
  function renderSearch(q) {
    _qs = q || '';
    var ql = (q || '').toLowerCase();
    var hits = [];
    DATA.disciplines.forEach(function (d) {
      (d.subfields || []).forEach(function (s) {
        (s.papers || []).forEach(function (p) {
          var hay = [p.title, (p.authors || []).join(' '), (p.keywords || []).join(' '), p.venue, p.abstract]
            .join(' ').toLowerCase();
          if (!ql || hay.indexOf(ql) >= 0) hits.push({ d: d, s: s, p: p });
        });
      });
    });
    var list = hits.map(function (h) {
      var title = h.p.title;
      if (ql) title = title.replace(new RegExp('(' + ql.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig'), '<mark>$1</mark>');
      return '<a class="paper-item" href="#/paper/' + enc(h.p.id) + '">' +
        '<div class="paper-row"><span class="paper-title">' + title + '</span>' +
        (h.p.verified ? '<span class="verified-tag">✓</span>' : '') +
        '<span class="paper-meta">' + esc(h.d.name) + ' / ' + esc(h.s.name) + '</span></div>' +
        '<p class="paper-abs">' + esc(h.p.abstract || '') + '</p></a>';
    }).join('');
    if (!list) list = '<div class="empty">没有匹配 “' + esc(q) + '” 的论文。</div>';
    return header() +
      '<main class="container">' +
      breadcrumb([['#/', '首页'], [null, '搜索']]) +
      '<section class="page-head"><h1>搜索<span class="head-en">Search</span></h1>' +
      '<p class="search-meta">关键词 “' + esc(q) + '” · 命中 ' + hits.length + ' 篇</p></section>' +
      '<div class="paper-list">' + list + '</div></main>' + footer();
  }

  function breadcrumb(items) {
    return '<nav class="breadcrumb">' + items.map(function (it) {
      return it[0] ? '<a href="' + it[0] + '">' + esc(it[1]) + '</a><span class="sep">/</span>'
        : '<span>' + esc(it[1]) + '</span>';
    }).join('') + '</nav>';
  }
  function enc(s) { return encodeURIComponent(s); }
  function renderNotFound(msg) {
    return header() + '<main class="container"><div class="empty">' + esc(msg || '页面不存在') +
      '<br><br><a href="#/">返回首页</a></div></main>' + footer();
  }

  // ---- router ----
  function router() {
    var hash = location.hash.replace(/^#/, '') || '/';
    var parts = hash.split('/').filter(Boolean);
    var html;
    if (parts.length === 0) html = renderHome();
    else if (parts[0] === 'disc' && parts[1]) html = renderDiscipline(decodeURIComponent(parts[1]));
    else if (parts[0] === 'sub' && parts[1] && parts[2]) html = renderSubfield(decodeURIComponent(parts[1]), decodeURIComponent(parts[2]));
    else if (parts[0] === 'paper' && parts[1]) html = renderPaper(decodeURIComponent(parts[1]));
    else if (parts[0] === 'search') { html = renderSearch(decodeURIComponent(parts.slice(1).join('/'))); }
    else html = renderNotFound();
    app.innerHTML = html;
    window.scrollTo(0, 0);
    bindHeader();
  }

  window.addEventListener('hashchange', router);
  window.addEventListener('DOMContentLoaded', function () {
    if (!location.hash) location.hash = '#/';
    else router();
  });
  router();
})();
