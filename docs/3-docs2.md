# 基本配置

> 配置文件指`_config.dimension.yml`

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
  enable: true # true或false，总开关。
  creativities: # 滚动图标开关
    enable: true
  featured_article: # 推荐文章开关
    enable: true
  show_tag_categroy: # 分类标签开关
    enable: true
```

分类标签为自动获取，推荐文章请到`source/_data/slider.yml`中配置

## 双栏开关

### 配置文件第48行

```yml
post_double_row:
  enable: true # true或false
```

## 代码高亮主题

### 配置文件第30行

```yml
highlight_theme: mac light #  darker / pale night / light / ocean / mac / mac light / false
```

## 关于页

### 配置文件第61行

```yml
# 关于页
about_page:
  author: Echocbx # 作者名称
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
    # 左边的图标，建议4个或者以下
    left:
      - icon: fa-solid fa-compass # 图标
        link: https://home.ezgx.site/ # 链接
        desrc: 个人主页 # 描述
        class: out # in为内部跳转，out为新标签页
      - icon: fa-brands fa-qq
        link: https://res.abeim.cn/api/qq/?qq=3387251845
        desrc: 联系QQ
        class: out
      - icon: fa-brands fa-weixin
        link: /authorwechat/
        desrc: 联系微信
        class: in
    # 右边的图标，建议4个或以下
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
  avatar: /img/avatar.png # 头像链接
  line_1_title: 直达 # 第一列内容标题
  line_1:
    item_1: # 第一个链接
      link: https://home.ezgx.site # 链接
      name: 个人主页 # 显示文字
    item_2:
      link: /about/
      name: 关于
    item_3:
      link: /link/
      name: 友链
    item_4:
      link: javascript:toRandomPost()
      name: 随机文章
  line_2_title: 标签
  line_2:
    item_1:
      name: 📚教程
      link: /tags/教程/
    item_2:
      name: 🦋魔改教程
      link: /categories/butterfly/
    item_3:
      name: 🌈捣鼓前端
      link: /categories/前端/
    item_4:
      name: 📙生活记录
      link: /categories/生活/
  line_3_title: 我的
  line_3:
    item_1:
      name: 关于
      link: /about/
    item_2:
      name: 归档
      link: /archives/
    item_3:
      name: 标签
      link: /tags/
    item_4:
      name: 分类
      link: /categories/
  line_4_title: 协议
  line_4:
    item_1:
      name: 版权协议
      link: /cc/
    item_2:
      name: 主题协议
      link: https://github.com/Ezgx/hexo-theme-dimension/blob/main/LICENSE
    item_3:
      name: 占位
      link: javascript:void(0) # 占位使用javascript:void(0)
    item_4:
      name: 占位
      link: javascript:void(0)
  text: 2023 ©Echocbx # 底部文字。
```