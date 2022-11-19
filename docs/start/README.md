---
title: 开始使用
---

# 开始使用

> 本页介绍了 Nightcord API 的注册和使用方法。

## 申请 App ID & App Secret

在使用本 API 之前，您需要先注册 [nightcord.de](https://nightcord.de) 这一 Mastodon 实例，以获取使用本 API 所需的 App ID 和 App Secret。

这是为了防止滥用。注册过程是免费的。

完成注册后，点击`首选项`->`开发`，新建一个应用，该应用至少要有`read`权限，重定向 URI 请填写 `urn:ietf:wg:oauth:2.0:oob`，即保持默认。

之后在该应用的详情页面获取所需的 App ID 和 App Secret。

## 测试 App ID 和 App Secret 是否有效

本 API 提供了接口用于测试 App ID 和 App Secret 是否有效。

访问 `GET https://api.nightcord.de/ping`，需携带如下 HTTP Headers：

```yaml
appid: 您的 App ID
appsecret: 您的 App Secret
```

以后使用其它 API 时，您也需要携带该 HTTP Headers 以验证身份。

若返回值为`200`，内容为`pong`，则该 App ID 和 App Secret 有效。

## 注意事项

1. 本 API 受到 CloudFlare 的保护，当受到可疑高频请求时可能会开启防护模式；
2. 本 API 获取的所有数据都有 5 分钟的缓存，以减轻可能的滥用对游戏服务器的影响；
3. 我们保留在受到滥用时删除您的 nightcord.de 帐号的权利。
4. 当使用者恶意破坏/恶意滥用 API 时，我们可能会披露该使用者的个人信息。
5. 我们对本页面内容拥有最终解释权。

## 关于

- 开发者：Hanako Koizumi
- 交流群：[https://t.me/ColorfulStage](https://t.me/ColorfulStage)