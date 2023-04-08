module.exports = {
  dest: 'public',
  title: 'hexo主题Dimension',
  description: '二次元风格的hexo主题',
  head: [
    ['link', { rel: 'icon', href: 'https://ezgx.site/img/avatar.png' }],
    [
      'script', {}, `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?0dd41b1b62d383747c5f3a7d4a4c6816";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
      `
    ],
    ['script', {},`!function(p){"use strict";!function(t){var s=window,e=document,i=p,c="".concat("https:"===e.location.protocol?"https://":"http://","sdk.51.la/js-sdk-pro.min.js"),n=e.createElement("script"),r=e.getElementsByTagName("script")[0];n.type="text/javascript",n.setAttribute("charset","UTF-8"),n.async=!0,n.src=c,n.id="LA_COLLECT",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:"Jo4DAwP6yTHf2uAz",ck:"Jo4DAwP6yTHf2uAz",hashMode:true});`
  ]
  ],
  themeConfig: {
    logo: 'https://ezgx.site/img/avatar.png',
    sidebar: [
      ['/1-Introduction','简介'],
      ['/2-docs1','安装'],
      ['/3-docs2','基本配置'],
      ['/4-docs3','进阶配置'],
      ['/qq','加群反馈'],
    ],
    nav: [
      { text: '食用文档', link: '/' },
      { text: '预览主题', link: 'https://ezgx.site/' }
    ],
    lastUpdated: '最近更新时间', // string | boolean
    smoothScroll: true,
    sidebarDepth: 1,
  },
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          return new Date(timestamp).toLocaleDateString();
        }
      }
    ],
    [
      'sitemap',
      {
        hostname: 'https://dimension.ezgx.site'
      }
    ],
    ['vuepress-plugin-baidu-autopush']
  ]
}