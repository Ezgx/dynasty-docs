# 配置2

> 配置文件指`_config.dynasty.yml`

## cdn

### 在配置文件末尾

> 非必要请不要修改
> Don't modify the following settings unless you know how they work

```yml

# CDN
# Don't modify the following settings unless you know how they work
# 非必要請不要修改
CDN:
  # The CDN provider of internal scripts (主題內部 js 的 cdn 配置)
  # option: local/jsdelivr/unpkg/cdnjs/custom
  # Dev version can only choose. ( dev版的主題只能設置為 local )
  internal_provider: local

  # The CDN provider of third party scripts (第三方 js 的 cdn 配置)
  # option: jsdelivr/unpkg/cdnjs/custom/bilicdn
  third_party_provider: bilicdn
  # bilicdn为网友提供的cdn，请勿滥用！仓库地址https://github.com/biliCDN/bilicdn.github.io

  # Add version number to CDN, true or false  
  version: false

  # Custom format
  # For example: https://cdn.staticfile.org/${cdnjs_name}/${version}/${min_cdnjs_file}
  custom_format: 

  option:
    # main_css:
    # main:
    # utils:
    # translate:
    # local_search:
    # algolia_js:
    # algolia_search_v4:
    # instantsearch_v4:
    # pjax:
    # gitalk:
    # gitalk_css:
    # blueimp_md5:
    valine: /valine.js
    # disqusjs:
    # disqusjs_css:
    # twikoo:
    # waline_js:
    # waline_css:
    # sharejs:
    # sharejs_css:
    # mathjax:
    # katex:
    # katex_copytex:
    # mermaid:
    # canvas_ribbon:
    # canvas_fluttering_ribbon:
    # canvas_nest:
    # lazyload:
    # instantpage:
    # typed:
    # pangu:
    # fancybox_css_v4:
    # fancybox_v4:
    # medium_zoom:
    # snackbar_css:
    # snackbar:
    # activate_power_mode:
    # fireworks:
    # click_heart:
    # ClickShowText:
    # fontawesomeV6:
    # flickr_justified_gallery_js:
    # flickr_justified_gallery_css:
    # aplayer_css:
    # aplayer_js:
    # meting_js:
    # prismjs_js:
    # prismjs_lineNumber_js:
    # prismjs_autoloader:
    # artalk_js:
    # artalk_css:
```

options为自定义替换第三方js，非必要请勿修改！若填写一个自定义替换的第三方js，需要取消注释（即去掉`# `）

## inject（自定义css，js）

### 配置文件第935行

```yml
# Inject
# Insert the code to head (before '</head>' tag) and the bottom (before '</body>' tag)
# 插入代码到头部 </head> 之前 和 底部 </body> 之前
inject:
  head:
    - <link rel="stylesheet" href="/xxx.css">
  bottom:
    - <script src="xxx.js"></script>
```

按照上述格式，head引入css，bottom引入js

## 背景特效

### 配置文件第653行

```yml
# canvas_ribbon (靜止彩帶背景)
# See: https://github.com/hustcc/ribbon.js
canvas_ribbon:
  enable: false
  size: 150
  alpha: 0.6
  zIndex: -1
  click_to_change: false
  mobile: false

# Fluttering Ribbon (動態彩帶)
canvas_fluttering_ribbon:
  enable: false
  mobile: true

# canvas_nest
# https://github.com/hustcc/canvas-nest.js
canvas_nest:
  enable: false
  color: '0,0,0' #color of lines, default: '0,0,0'; RGB values: (R,G,B).(note: use ',' to separate.)
  opacity: 1 # the opacity of line (0~1), default: 0.5.
  zIndex: -1 # z-index property of the background, default: -1.
  count: 130 # the number of lines, default: 99.
  mobile: true

# Typewriter Effect (打字效果)
# https://github.com/disjukr/activate-power-mode
activate_power_mode:
  enable: true
  colorful: true # open particle animation (冒光特效)
  shake: false #  open shake (抖動特效)
  mobile: true

# Mouse click effects: fireworks (鼠標點擊效果: 煙火特效)
fireworks:
  enable: false
  zIndex: 0
  mobile: true

# Mouse click effects: Heart symbol (鼠標點擊效果: 愛心)
click_heart:
  enable: false
  mobile: false

# Mouse click effects: words (鼠標點擊效果: 文字)
ClickShowText:
  enable: true
  text:
    - 欢迎来到
    - Aegcbx的
    - 博客
  fontSize: 16px
  random: false
  mobile: true
```

背景特效配置简单易懂，不做赘述。

## 加载动画

### 配置文件第717行

```yml
# Loading Animation (加載動畫)
preloader:
  enable: true
  # source
  # 1. fullpage-loading
  # 2. pace (progress bar)
  # 3. all
  source: 3
  # pace theme (see https://codebyzach.github.io/pace/)
  pace_css_url: /css/loading.css
```

- enable：是否开启
- source：设为1是全屏动画，设为2是加载条，设为3是全屏动画加加载条。
- pace_css_url：加载条css，见https://codebyzach.github.io/pace/

## 代码高亮

### 配置文件第138行

```yml
# Code Blocks (代碼相關)
# --------------------------------------

highlight_theme: mac light #  darker / pale night / light / ocean / mac / mac light / false
highlight_copy: true # copy button
highlight_lang: true # show the code language
highlight_shrink: false # true: shrink the code blocks / false: expand the code blocks | none: expand code blocks and hide the button
highlight_height_limit: 300 # unit: px
code_word_wrap: false
```
- highlight_theme表示高亮主题，可选：darker / pale night / light / ocean / mac / mac light / false
- highlight_copy是否开启点击复制按钮
- highlight_lang是否显示代码语言（如yaml，html，css，Python）
- highlight_height_limit为代码块高度限制，防止高度过高。

