import{f as e,g as y,o as p,c as t,a as c,w as i,e as l,r as d,b as s,d as C}from"./app.6c4a99bb.js";const u={class:"shake"},h=e({__name:"shake",setup(r){const a=y(!1);return(D,n)=>{const F=d("h-shake");return p(),t("div",u,[c(F,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=o=>a.value=o),onClick:n[1]||(n[1]=o=>a.value=!0)},{default:i(()=>[l("点击抖动")]),_:1},8,["modelValue"])])}}}),A=s("h1",{id:"抖动",tabindex:"-1"},[l("抖动 "),s("a",{class:"header-anchor",href:"#抖动","aria-hidden":"true"},"#")],-1),m=s("p",null,"用于提醒用户某个信息没有填写",-1),_=s("h2",{id:"使用方法",tabindex:"-1"},[l("使用方法 "),s("a",{class:"header-anchor",href:"#使用方法","aria-hidden":"true"},"#")],-1),k={class:"example"},f=C(`<details class="details custom-block"><summary>显示代码</summary><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">shake</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h-shake</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">isshake</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">isshake = true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">点击抖动</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h-shake</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> isshake </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details>`,1),E=JSON.parse('{"title":"抖动","description":"","frontmatter":{},"headers":[{"level":2,"title":"使用方法","slug":"使用方法","link":"#使用方法","children":[]}],"relativePath":"components/shake.md","lastUpdated":1673915183000}'),g={name:"components/shake.md"},q=e({...g,setup(r){return(a,D)=>(p(),t("div",null,[A,m,_,s("div",k,[c(h)]),f]))}});export{E as __pageData,q as default};
