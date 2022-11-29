---
title: API 文档
---
# Nightcord API 文档

> 本文档将引导您使用 Nightcord API。

API 域名：`api.nightcord.de`

> 以下所有 `[server]` 的取值均为 `jp` `en` `kr` `tw` 之一，否则返回 403。所有请求均需要 App ID 和 App Secret。

## 查询个人 Profile

`GET /profile/[server]/[userid]/`

> `[userid]`: 用户 ID

例如：`GET /profile/jp/269789579175202819/`

此接口返回大量数据，包括个人信息、等级、自定义名片、打歌信息等。如果找不到用户，则返回 404。

## 查询活动参与信息
### 根据用户 ID

`GET /event/[event]/user/[server]/[userid]/`

> `[event]`: 活动 ID
> 
> `[userid]`: 用户 ID

例如：`GET /event/77/user/jp/269789579175202819/`

此接口返回用户的排名、成绩、简单的 Profile 等。如果找不到用户，则返回 404。

### 根据排名

`GET /event/[event]/rank/[server]/[rank]/`

> `[event]`: 活动 ID
> 
> `[rank]`: 要查询的排名

例如：`GET /event/77/rank/jp/1/`

此接口返回用户的排名、成绩、简单的 Profile 等。如果找不到用户，则返回 404。

### 根据排名批量查询

`GET /event/[event]/rank/[server]/[rank]/batch/[size]/`

> `[event]`: 活动 ID
> 
> `[rank]`: 要查询的排名
> 
> `[size]`: 批量查询的数目，最多 100 名

例如：`GET /event/77/rank/jp/1/batch/100/`

此接口返回从指定排名开始`[batch]`名用户的排名、成绩、简单的 Profile 等。如果`[size]`异常，返回 400；如果找不到用户，则返回 404。

## 查询排位赛参与信息
### 根据用户 ID

`GET /match/[event]/user/[server]/[userid]/`

> `[event]`: 活动 ID
> 
> `[userid]`: 用户 ID

例如：`GET /match/77/user/jp/269789579175202819/`

此接口返回用户的排名、成绩、简单的 Profile 等。如果找不到用户，则返回 404。

### 根据排名

`GET /match/[event]/rank/[server]/[rank]/`

> `[event]`: 活动 ID
> 
> `[rank]`: 要查询的排名

例如：`GET /match/77/rank/jp/1/`

此接口返回用户的排名、成绩、简单的 Profile 等。如果找不到用户，则返回 404。
