# 基本配置

> 配置文件指`_config.dynasty.yml`

## 导航菜单

```yml
menu:
  # 单个链接：
  首页: / || fas fa-house-user
  # 子菜单：
  本站||fas fa-book:
    归档: /archives/ || fas fa-box-archive
    标签: /tags/ || fas fa-tags
    分类: /categories/ || fas fa-folder-open
# fas fa-house-user 这类的东西为图标。具体见fontawesome官网，作者资金有限，只能用免费版。
```

## 首页顶部

### 配置文件第51行

```yml
# 首页板块
hometop:
  featured_posts:
    posts:
      - cover: https://pic.imgdb.cn/item/64061c93f144a01007f083cb.jpg
        link: /2023/dimension
        title: hexo主题dimension
      - cover: /img/posts/home.png
        link: /2023/46680
        title: 【原创】cbx-home开源首页
      - cover: https://pic.imgdb.cn/item/64039f55f144a010077911cd.jpg
        link: /2022/da0f
        title: 百度网盘直连下载
      - cover: https://pic.imgdb.cn/item/64039fd0f144a01007796d4a.jpg
        link: /2023/5781
        title: 一篇文章教你搞定butterfly主题洪化
      - cover: https://pic.imgdb.cn/item/64039fd0f144a01007796dce.jpg
        link: /2022/65320
        title: markdown-it食用教程
      - cover: https://pic.imgdb.cn/item/6403a054f144a0100779cd5d.jpg
        link: /2023/34037
        title: 自定义美化你的windows桌面！
    categroies_more_url: /categories/
    tags_more_url: /tags
  descr:
    img: https://pic.imgdb.cn/item/64160cbfa682492fcc81bc40.jpg
    subtitle: 九月露湿，待君之前
```

分类标签为自动获取，推荐文章请到`source/_data/slider.yml`中配置

## 关于页

### 配置文件第61行

```yml
# 关于页
about_page:
  author: Aegcbx # 作者名称
  introduce: 是一名 学生、又菜又爱的前端爱好者、博主 # 作者简介
  careers: 初中生 # 生涯
  address: 中国，京海市 # 居住地
  job: 卖鱼强 # 职业
  job_address: 旧厂街 # 执业地点
  birth: 2008 # 出生年
  personalities: 辩论家 # 人格
  say_first_line: 九月露湿 # 座右铭第一行
  say_last_line: 待君之前 # 座右铭第二行
  character_1: 整活大逝 # 个人特点第一行
  character_2: 二次元指数MAX # 个人特点第二行
  anime: 紫罗兰永恒花园 # 追番
  music: 日语、摇滚、华语流行 #音乐偏好
```

## 页脚

### 配置文件第78行

```yml
footer:
  footer_icons:
    enable: true
    left:
      - icon: fa-solid fa-compass
        link: https://home.ezgx.site/
        desrc: 个人主页
        class: out
      - icon: fa-brands fa-qq
        link: https://res.abeim.cn/api/qq/?qq=3387251845
        desrc: 联系QQ
        class: out
      - icon: fa-brands fa-weixin
        link: /authorwechat/
        desrc: 联系微信
        class: in
    right:
      - icon: fa-brands fa-github
        link: https://github.com/ezgx
        desrc: Github
        class: out
      - icon: fa-solid fa-comment
        link: /comments/
        desrc: 留言
        class: in
      - icon: fa-solid fa-envelope
        link: mailto:3387251845@qq.com
        desrc: 发送邮件
        class: out
  footer_logo:
    enable: true
    url: /img/avatar.png
  text: 九月露湿，待君之前。
  footer_group:
    enable: true
    footer_group_link:
      - group_title: 直达
        footer_links: 
          - text: 个人主页
            link: https://home.ezgx.site
            class: out
          - text: 关于
            link: /about/
            class: in
          - text: 友链
            link: /lonk/
            class: in
          - text: 随机文章
            link: javascript:toRandomPost()
            class: in
      - group_title: 标签
        footer_links: 
          - text: 📚教程
            link: /tags/教程/
            class: in
          - text: 🦋魔改教程
            link: /categories/butterfly/
            class: in
          - text: 🌈捣鼓前端
            link: /categories/前端/
            class: in
          - text: 📙生活记录
            link: /categories/生活/
            class: in
```