# 安装主题

## 方法一

从`github`克隆

```bash
git clone https://github.com/Ezgx/hexo-theme-dynasty /theme/dynasty
```

## 方法二

`npm包`安装

```bash
npm i hexo-theme-dynasty --save

# 或

cnpm i hexo-theme-dynasty --save
```

## 必要插件

卸载兼容性不佳的marked渲染器

```bash
npm un hexo-renderer-marked
```

安装kramed渲染器和必装组建

```bash
npm i hexo-wordcount hexo-renderer-pug hexo-renderer-stylus hexo-renderer-kramed hexo-generator-search is-promise object-assign pangu yamljs --save
```

## 文件操作

1. 将下载的主题中的`_config.dynasty.yml`放到博客根目录下
2. 解压`source.7z`，所有内容放到`$blogroot/source`下，提示替换时请备份你的文件。

## 启用主题

在`$blogroot/_config.yml`中，把`theme`项改为：
```yml
# Extensions
## Plugins: https://hexo.io/plugins/
## Themes: https://hexo.io/themes/
theme: dynasty
```