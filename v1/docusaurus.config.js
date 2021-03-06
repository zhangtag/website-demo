const math = require('remark-math');
const katex = require('rehype-katex');

module.exports = {
  title: "zst'blog",
  titleDelimiter: "ð«", // Defaults to `|`
  // tagline: "å¿è®°ä¹ååä¸æ¥",
  url: 'https://zhangtag.github.io',
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "8427/m8.ico",
  organizationName: 'zhangtag', // Usually your GitHub org/user name.
  projectName: 'zhangtag.github.io', // Usually your repo name.
  themeConfig: {

    footer: {
      style: 'light',
      links: [
        {
          title: 'æå°è«å',
          items: [
            {
              href: 'https://yltzdhbc.top',
              label: 'DJIç¥åå·¥ç¨å¸',
            },
            {
              href: 'https://blog.csdn.net/qq_44343584',
              label: 'æ­¦æ±ç¥åCEO',
            },
          ],
        },
      ],
      // logo: {
      //   alt: 'HBUT',
      //   src: 'https://www.hbut.edu.cn/images/logo.png',
      // },
      copyright: `Copyright Â© ${new Date().getFullYear()} , Inc.`, // You can also put own HTML here
    },
    

    //sidebarCollapsible: true, //é»è®¤æå 
    // image: 'https://cos.ap-guangzhou.myqcloud.com/wiki-media-1253965369/doc/logo-zip.png',
    image: "sys/head.jpg",
    algolia: {
      apiKey: "5c07d8bf9c9928c4453857f6cad0420e",
      indexName: "zst'blog",

      // Optional: see doc section bellow
      contextualSearch: true,

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },


    
    
    colorMode: {
      // "light" | "dark"
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,

      // Dark/light switch icon options
      switchConfig: {
        // Icon for the switch while in dark mode
        darkIcon: 'ð',
        lightIcon: 'ð',

        // CSS to apply to dark icon,
        // React inline style object
        // see https://reactjs.org/docs/dom-elements.html#style
        darkIconStyle: {
          marginLeft: "2px",
        },

        // Unicode icons such as '\u2600' will work
        // Unicode with 5 chars require brackets: '\u{1F602}'
        //lightIcon: '\u{1F602}',

        lightIconStyle: {
          marginLeft: "1px",
        },
      },
    },

    hideableSidebar: false,
    navbar: {
      // title: "zst'blog",
      hideOnScroll: true,
      // style: 'primary',
      
      logo: {
        alt: "My Site Logo",
        src:
          "8427/m8.ico",
      },
      
      items: [
        // {
        //   to: "Home",
        //   label: "åå®¢",
        //   position: "right",
        // },
        {
          href: "https://github.com/zhangtag",
          label: "GITHUB",
          image:"8427/m8.ico",
          position: "right",
        },
        // {
        //   href: "https://space.bilibili.com/71383849",
        //   label: "Bç«ä¸»é¡µ",
        //   position: "right",
        // },
      ],
    },
  }, 

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/gh/linyuxuanlin/Wiki_Docusaurus/static/katex/v0.12.0/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X',
      crossorigin: 'anonymous',
    },
  ],

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarCollapsible: true, //é»è®¤æå 
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // editUrl: "https://github.com/linyuxuanlin/Wiki_Docusaurus/edit/main/",
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          //blogTitle: 'Power\'s blog!',
          //blogDescription: 'A docusaurus powered blog!',
          blogSidebarCount: 8,
          postsPerPage: 8,
          showReadingTime: false, // When set to false, the "x min read" won't be shown
          path: 'blog',
          blogSidebarTitle: 'Recent',
          // editUrl: 'https://github.com/linyuxuanlin/Wiki_Docusaurus/edit/main/',
          /*
          feedOptions: {
            type: 'all', // required. 'rss' | 'feed' | 'all'
            title: 'Power\'s Blog', // default to siteConfig.title
            description: 'ä¸ªäººåå®¢', // default to  `${siteConfig.title} Blog`
            copyright: 'Copyright Â© ${new Date().getFullYear()} Power Lin',
            language: undefined, // possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
          },
          */
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
