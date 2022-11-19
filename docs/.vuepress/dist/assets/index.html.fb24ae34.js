import{_ as r,r as o,o as p,c as d,b as e,d as a,e as n,a as c}from"./app.fe19b882.js";const s={},i=e("h1",{id:"开始使用",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#开始使用","aria-hidden":"true"},"#"),a(" 开始使用")],-1),l=e("blockquote",null,[e("p",null,"本页介绍了 Nightcord API 的注册和使用方法。")],-1),h=e("h2",{id:"申请-app-id-app-secret",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#申请-app-id-app-secret","aria-hidden":"true"},"#"),a(" 申请 App ID & App Secret")],-1),u={href:"https://nightcord.de",target:"_blank",rel:"noopener noreferrer"},_=c(`<p>这是为了防止滥用。注册过程是免费的。</p><p>完成注册后，点击<code>首选项</code>-&gt;<code>开发</code>，新建一个应用，该应用至少要有<code>read</code>权限，重定向 URI 请填写 <code>urn:ietf:wg:oauth:2.0:oob</code>，即保持默认。</p><p>之后在该应用的详情页面获取所需的 App ID 和 App Secret。</p><h2 id="测试-app-id-和-app-secret-是否有效" tabindex="-1"><a class="header-anchor" href="#测试-app-id-和-app-secret-是否有效" aria-hidden="true">#</a> 测试 App ID 和 App Secret 是否有效</h2><p>本 API 提供了接口用于测试 App ID 和 App Secret 是否有效。</p><p>访问 <code>GET https://api.nightcord.de/ping</code>，需携带如下 HTTP Headers：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">appid</span><span class="token punctuation">:</span> 您的 App ID
<span class="token key atrule">appsecret</span><span class="token punctuation">:</span> 您的 App Secret
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>以后使用其它 API 时，您也需要携带该 HTTP Headers 以验证身份。</p><p>若返回值为<code>200</code>，内容为<code>pong</code>，则该 App ID 和 App Secret 有效。</p><h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h2><ol><li>本 API 受到 CloudFlare 的保护，当受到可疑高频请求时可能会开启防护模式；</li><li>本 API 获取的所有数据都有 5 分钟的缓存，以减轻可能的滥用对游戏服务器的影响；</li><li>我们保留在受到滥用时删除您的 nightcord.de 帐号的权利。</li><li>当使用者恶意破坏/恶意滥用 API 时，我们可能会披露该使用者的个人信息。</li><li>我们对本页面内容拥有最终解释权。</li></ol><h2 id="关于" tabindex="-1"><a class="header-anchor" href="#关于" aria-hidden="true">#</a> 关于</h2>`,12),A=e("li",null,"开发者：Hanako Koizumi",-1),f={href:"https://t.me/ColorfulStage",target:"_blank",rel:"noopener noreferrer"};function m(I,g){const t=o("ExternalLinkIcon");return p(),d("div",null,[i,l,h,e("p",null,[a("在使用本 API 之前，您需要先注册 "),e("a",u,[a("nightcord.de"),n(t)]),a(" 这一 Mastodon 实例，以获取使用本 API 所需的 App ID 和 App Secret。")]),_,e("ul",null,[A,e("li",null,[a("交流群："),e("a",f,[a("https://t.me/ColorfulStage"),n(t)])])])])}const k=r(s,[["render",m],["__file","index.html.vue"]]);export{k as default};
