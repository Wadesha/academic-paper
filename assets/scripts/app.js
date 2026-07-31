// 路由与渲染主逻辑(基于 hash)
(function () {
  'use strict';

  var DATA = window.PAPER_DATA;
  var app = document.getElementById('app');

  // ---- 工具函数 ----
  function escapeHtml(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function findField(fieldId) {
    for (var i = 0; i < DATA.fields.length; i++) {
      if (DATA.fields[i].id === fieldId) return DATA.fields[i];
    }
    return null;
  }

  function findPaper(paperId) {
    for (var i = 0; i < DATA.fields.length; i++) {
      var papers = DATA.fields[i].papers || [];
      for (var j = 0; j < papers.length; j++) {
        if (papers[j].id === paperId) return { field: DATA.fields[i], paper: papers[j] };
      }
    }
    return null;
  }

  function tagsHtml(arr) {
    if (!arr || !arr.length) return '';
    return arr
      .map(function (t) {
        return '<span class="tag">' + escapeHtml(t) + '</span>';
      })
      .join('');
  }

  // 图片占位组件(统一)
  function placeholder(label, opts) {
    opts = opts || {};
    var cls = opts.compact ? 'image-placeholder' : 'figure-placeholder';
    if (opts.compact) {
      return (
        '<div class="' +
        cls +
        '" data-image="" aria-label="图片占位">' +
        '<span class="ph-label">' +
        escapeHtml(label || '图片占位') +
        '</span>' +
        '</div>'
      );
    }
    return (
      '<div class="' +
      cls +
      '" data-image="" aria-label="图片占位">' +
      '<span class="ph-tag">Image Placeholder</span>' +
      '<span class="ph-caption">' +
      escapeHtml(label || '图片占位') +
      '</span>' +
      '</div>'
    );
  }

  // 顶部导航
  function header() {
    var nav = DATA.fields
      .map(function (f) {
        return (
          '<a href="#/field/' +
          encodeURIComponent(f.id) +
          '">' +
          escapeHtml(f.name) +
          '</a>'
        );
      })
      .join('');
    return (
      '<header class="site-header"><div class="header-inner">' +
      '<a class="brand" href="#/">' +
      escapeHtml(DATA.site.name) +
      '<span class="brand-sub">' +
      escapeHtml(DATA.site.tagline) +
      '</span></a>' +
      '<nav class="nav-links">' +
      nav +
      '</nav>' +
      '</div></header>'
    );
  }

  function footer() {
    return (
      '<footer class="site-footer">Academic Paper Hub · 模拟演示数据 · ' +
      'v0.4 · 图片位置以占位区块呈现' +
      '</footer>'
    );
  }

  // ---- 页面:首页 ----
  function renderHome() {
    var cards = DATA.fields
      .map(function (f) {
        var paperCount = (f.papers || []).length;
        return (
          '<article class="field-card">' +
          '<a href="#/field/' +
          encodeURIComponent(f.id) +
          '">' +
          placeholder(f.cover || f.name + ' 封面', { compact: true }) +
          '<div class="card-body">' +
          '<h3 class="card-name">' +
          escapeHtml(f.name) +
          '</h3>' +
          '<p class="card-en">' +
          escapeHtml(f.enName || '') +
          '</p>' +
          '<p class="card-desc">' +
          escapeHtml(f.description || '') +
          '</p>' +
          '<div class="card-meta">' +
          tagsHtml(f.subfields) +
          '<span class="tag">' +
          paperCount +
          ' 篇论文</span>' +
          '</div>' +
          '</div>' +
          '</a>' +
          '</article>'
        );
      })
      .join('');

    return (
      header() +
      '<main class="container">' +
      '<section class="hero">' +
      '<h1>' +
      escapeHtml(DATA.site.name) +
      '</h1>' +
      '<p>' +
      escapeHtml(DATA.site.description) +
      '</p>' +
      '</section>' +
      '<h2 class="section-title">学术领域</h2>' +
      '<div class="field-grid">' +
      cards +
      '</div>' +
      '</main>' +
      footer()
    );
  }

  // ---- 页面:领域详情 + 论文列表 ----
  function renderField(fieldId) {
    var f = findField(fieldId);
    if (!f) return renderNotFound('未找到该学术领域');

    var list = (f.papers || [])
      .map(function (p) {
        return (
          '<article class="paper-item">' +
          '<a href="#/paper/' +
          encodeURIComponent(p.id) +
          '">' +
          '<h3 class="paper-title">' +
          escapeHtml(p.title) +
          '</h3>' +
          '<p class="paper-meta">' +
          escapeHtml((p.authors || []).join(', ')) +
          '<span class="dot">·</span>' +
          escapeHtml(p.year) +
          '<span class="dot">·</span>' +
          escapeHtml(p.venue || '') +
          '</p>' +
          '<p class="paper-abs">' +
          escapeHtml(p.abstract || '') +
          '</p>' +
          '<div class="paper-kw">' +
          tagsHtml(p.keywords) +
          '</div>' +
          '</a>' +
          '</article>'
        );
      })
      .join('');

    if (!list) {
      list = '<div class="empty">该领域暂无论文</div>';
    }

    return (
      header() +
      '<main class="container">' +
      '<nav class="breadcrumb"><a href="#/">首页</a>' +
      '<span class="sep">/</span>' +
      escapeHtml(f.name) +
      '</nav>' +
      '<section class="field-header">' +
      placeholder(f.cover || f.name + ' 封面', { compact: true }) +
      '<div class="field-info">' +
      '<h2>' +
      escapeHtml(f.name) +
      '</h2>' +
      '<p class="field-en">' +
      escapeHtml(f.enName || '') +
      '</p>' +
      '<p class="field-desc">' +
      escapeHtml(f.description || '') +
      '</p>' +
      '<div class="card-meta">' +
      tagsHtml(f.subfields) +
      '</div>' +
      '</div>' +
      '</section>' +
      '<h2 class="section-title">论文目录</h2>' +
      '<div class="paper-list">' +
      list +
      '</div>' +
      '</main>' +
      footer()
    );
  }

  // ---- 页面:论文详情 ----
  function renderPaper(paperId) {
    var result = findPaper(paperId);
    if (!result) return renderNotFound('未找到该论文');
    var f = result.field;
    var p = result.paper;

    var sections = (p.sections || [])
      .map(function (s) {
        var fig = s.image
          ? placeholder(s.image)
          : '';
        return (
          '<section class="section-body">' +
          '<h2>' +
          escapeHtml(s.title) +
          '</h2>' +
          '<p>' +
          escapeHtml(s.content) +
          '</p>' +
          fig +
          '</section>'
        );
      })
      .join('');

    var refs = (p.references || [])
      .map(function (r) {
        return '<li>' + escapeHtml(r) + '</li>';
      })
      .join('');

    return (
      header() +
      '<main class="container">' +
      '<nav class="breadcrumb"><a href="#/">首页</a>' +
      '<span class="sep">/</span>' +
      '<a href="#/field/' +
      encodeURIComponent(f.id) +
      '">' +
      escapeHtml(f.name) +
      '</a>' +
      '<span class="sep">/</span>' +
      escapeHtml(p.title) +
      '</nav>' +
      '<article class="paper-detail">' +
      '<h1>' +
      escapeHtml(p.title) +
      '</h1>' +
      '<div class="meta-line">' +
      escapeHtml((p.authors || []).join(', ')) +
      ' · ' +
      escapeHtml(p.year) +
      ' · ' +
      escapeHtml(p.venue || '') +
      '</div>' +
      '<div class="kw-line">' +
      tagsHtml(p.keywords) +
      '</div>' +
      '<div class="abstract-box"><span class="label">摘要</span>' +
      escapeHtml(p.abstract || '') +
      '</div>' +
      sections +
      '<section class="references">' +
      '<h2>参考文献</h2>' +
      '<ol>' +
      refs +
      '</ol>' +
      '</section>' +
      '</article>' +
      '</main>' +
      footer()
    );
  }

  function renderNotFound(msg) {
    return (
      header() +
      '<main class="container"><div class="empty">' +
      escapeHtml(msg || '页面不存在') +
      '<br><br><a href="#/">返回首页</a></div></main>' +
      footer()
    );
  }

  // ---- 路由 ----
  function router() {
    var hash = location.hash.replace(/^#/, '') || '/';
    var parts = hash.split('/').filter(Boolean); // 去除空段

    var html;
    if (parts.length === 0) {
      html = renderHome();
    } else if (parts[0] === 'field' && parts[1]) {
      html = renderField(decodeURIComponent(parts[1]));
    } else if (parts[0] === 'paper' && parts[1]) {
      html = renderPaper(decodeURIComponent(parts[1]));
    } else {
      html = renderNotFound();
    }

    app.innerHTML = html;
    window.scrollTo(0, 0);
  }

  window.addEventListener('hashchange', router);
  window.addEventListener('DOMContentLoaded', function () {
    if (!location.hash) location.hash = '#/';
    else router();
  });
  // 兜底立即渲染
  router();
})();
