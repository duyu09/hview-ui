import{_ as s,o as a,c as o,e as n}from"./app.56d41f55.js";const u=JSON.parse('{"title":"Quick Start","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Full Import","slug":"full-import","link":"#full-import","children":[]},{"level":3,"title":"Manually import","slug":"manually-import","link":"#manually-import","children":[]}]}],"relativePath":"en-US/docs/quickstart.md","lastUpdated":1674997766000}'),t={name:"en-US/docs/quickstart.md"},e=n(`<h1 id="quick-start" tabindex="-1">Quick Start <a class="header-anchor" href="#quick-start" aria-hidden="true">#</a></h1><p>This section describes how to use Hview UI in your project.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><h3 id="full-import" tabindex="-1">Full Import <a class="header-anchor" href="#full-import" aria-hidden="true">#</a></h3><p>If you don’t care about the bundle size so much, it’s more convenient to use full import.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki css-variables"><code><span class="line"><span style="color:var(--shiki-token-comment);">// main.ts</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-color-text);"> { createApp } </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-string-expression);">&quot;vue&quot;</span><span style="color:var(--shiki-color-text);">;</span></span>
<span class="line"><span style="color:var(--shiki-token-comment);">// The HviewUI style file is automatically imported</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-color-text);"> HviewPlus </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-string-expression);">&quot;hview-plus&quot;</span><span style="color:var(--shiki-color-text);">;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-color-text);"> App </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-string-expression);">&quot;./App.vue&quot;</span><span style="color:var(--shiki-color-text);">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">const</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-constant);">app</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-keyword);">=</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-function);">createApp</span><span style="color:var(--shiki-color-text);">(App);</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-constant);">app</span><span style="color:var(--shiki-token-function);">.use</span><span style="color:var(--shiki-color-text);">(HviewPlus);</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">app</span><span style="color:var(--shiki-token-function);">.mount</span><span style="color:var(--shiki-color-text);">(</span><span style="color:var(--shiki-token-string-expression);">&quot;#app&quot;</span><span style="color:var(--shiki-color-text);">);</span></span>
<span class="line"></span></code></pre></div><h3 id="manually-import" tabindex="-1">Manually import <a class="header-anchor" href="#manually-import" aria-hidden="true">#</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki css-variables"><code><span class="line"><span style="color:var(--shiki-token-comment);">// main.ts</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-color-text);"> { createApp } </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-string-expression);">&quot;vue&quot;</span><span style="color:var(--shiki-color-text);">;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-color-text);"> { Button } </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-string-expression);">&quot;hview-plus&quot;</span><span style="color:var(--shiki-color-text);">;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-color-text);"> App </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-string-expression);">&quot;./App.vue&quot;</span><span style="color:var(--shiki-color-text);">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">const</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-constant);">app</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-keyword);">=</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-function);">createApp</span><span style="color:var(--shiki-color-text);">(App);</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-constant);">app</span><span style="color:var(--shiki-token-function);">.use</span><span style="color:var(--shiki-color-text);">(Button);</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">app</span><span style="color:var(--shiki-token-function);">.mount</span><span style="color:var(--shiki-color-text);">(</span><span style="color:var(--shiki-token-string-expression);">&quot;#app&quot;</span><span style="color:var(--shiki-color-text);">);</span></span>
<span class="line"></span></code></pre></div>`,8),l=[e];function r(p,i,c,k,h,y){return a(),o("div",null,l)}const d=s(t,[["render",r]]);export{u as __pageData,d as default};