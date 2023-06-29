# 配置3

## 搜索

### 配置文件第156行

```yml
# search (搜索)
# --------------------------------------

# Algolia search
algolia_search:
  enable: false
  hits:
    per_page: 6

# Local search
local_search:
  enable: true
  preload: false
  CDN:
```
使用local-search需要安装插件

## 图片设置

### 配置文件第189行

### 网站图标和头像

```yml
# Favicon（網站圖標）
favicon: https://ezgx.site/img/avatar.png

# Avatar (頭像)
avatar:
  img: https://ezgx.site/img/avatar.png
  effect: false
```

avatar的effect为持续旋转

### 文章封面

```yml
cover:
  # display the cover or not (是否顯示文章封面)
  index_enable: true
  archives_enable: true
  # When cover is not set, the default cover is displayed (當沒有設置cover時，默認的封面顯示)
  default_cover:
    - https://pic.imgdb.cn/item/64039f54f144a0100779113d.jpg
    - https://pic.imgdb.cn/item/64039f54f144a01007791156.jpg
    - https://pic.imgdb.cn/item/64039f55f144a0100779117b.png
    - https://pic.imgdb.cn/item/64039f55f144a010077911cd.jpg
    - https://pic.imgdb.cn/item/64039f55f144a010077911ee.jpg
    # 5
    - https://pic.imgdb.cn/item/64039fd0f144a01007796d21.png
    - https://pic.imgdb.cn/item/64039fd0f144a01007796d4a.jpg
    - https://pic.imgdb.cn/item/64039fd0f144a01007796d97.png
    - https://pic.imgdb.cn/item/64039fd0f144a01007796dce.jpg
    - https://pic.imgdb.cn/item/64039fd1f144a01007796e24.jpg
    # 10
    - https://pic.imgdb.cn/item/6403a054f144a0100779cd4a.jpg
    - https://pic.imgdb.cn/item/6403a054f144a0100779cd5d.jpg
    - https://pic.imgdb.cn/item/6403a054f144a0100779cd83.jpg
    - https://pic.imgdb.cn/item/6403a054f144a0100779cd9f.jpg
    - https://pic.imgdb.cn/item/6403a054f144a0100779cdd2.png
    - https://pic.imgdb.cn/item/6403a0b0f144a010077a1889.png
```
index_enable为是否在首页显示封面
archives_enable为是否在归档页显示封面

### 错误图片

设置一个图片当家在错误时出现

```
# Replace Broken Images (替換無法顯示的圖片)
error_img:
  flink: /img/friend_404.gif
  post_page: /img/404.jpg
```

## 打赏码

### 配置文件第292行

```yml
# Sponsor/reward
reward:
  enable: true
  QR_code:
    - img: https://ezgx.site/img/wechatpay.jpg
      link: https://ezgx.site/img/wechatpay.jpg
      text: 微信
```