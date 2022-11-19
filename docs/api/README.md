---
title: API 文档
---
# Nightcord API 文档

> 本文档将引导您使用 Nightcord API。

API 域名：`api.nightcord.de`

> 以下所有 `[server]` 的取值均为 `jp` `en` `kr` `tw` 之一，否则返回 403。所有请求均需要 App ID 和 App Secret。

## 查询个人 Profile

`GET /profile/[server]/[userid]/`

`[userid]`: 用户 ID

例如：`GET /profile/jp/285272821869400071/`

此接口返回大量数据，包括个人信息、等级、自定义名片、打歌信息等。如果找不到用户，则返回 404。
