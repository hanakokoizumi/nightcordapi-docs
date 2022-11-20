import{_ as e,o,c,b as d}from"./app.c625ef4d.js";const r={},t=d('<h1 id="nightcord-api-文档" tabindex="-1"><a class="header-anchor" href="#nightcord-api-文档" aria-hidden="true">#</a> Nightcord API 文档</h1><blockquote><p>本文档将引导您使用 Nightcord API。</p></blockquote><p>API 域名：<code>api.nightcord.de</code></p><blockquote><p>以下所有 <code>[server]</code> 的取值均为 <code>jp</code> <code>en</code> <code>kr</code> <code>tw</code> 之一，否则返回 403。所有请求均需要 App ID 和 App Secret。</p></blockquote><h2 id="查询个人-profile" tabindex="-1"><a class="header-anchor" href="#查询个人-profile" aria-hidden="true">#</a> 查询个人 Profile</h2><p><code>GET /profile/[server]/[userid]/</code></p><p><code>[userid]</code>: 用户 ID</p><p>例如：<code>GET /profile/jp/285272821869400071/</code></p><p>此接口返回大量数据，包括个人信息、等级、自定义名片、打歌信息等。如果找不到用户，则返回 404。</p>',9),i=[t];function p(a,n){return o(),c("div",null,i)}const s=e(r,[["render",p],["__file","index.html.vue"]]);export{s as default};