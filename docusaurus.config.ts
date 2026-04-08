import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Oleh Shynkarenko',
  tagline: 'Hire an experienced and skilled contract technical writer to craft your documentation in the best possible manner.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://singingfoot.github.io', // Оновлено під ваш GitHub Pages у майбутньому
  baseUrl: '/',

  organizationName: 'SingingFoot', // Ваш GitHub username
  projectName: 'my-portfolio',   // Назва вашого репозиторію

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/SingingFoot/my-portfolio/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark', // Робимо темну тему основною для професійного вигляду
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Oleh Shynkarenko',
      logo: {
        alt: 'TechWriter logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Portfolio',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/SingingFoot',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Professional',
          items: [
            {
              label: 'Portfolio',
              to: '/docs/intro',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
        {
          title: 'Socials',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/oleh-shynkarenko-15a24b65/',
            },
            {
              label: 'Threads',
              href: 'https://www.threads.net/@oleg_shynkarenko',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/SingingFoot',
            },
          ],
        },
        {
          title: 'Contact',
          items: [
            {
              label: 'Email',
              href: 'mailto:singingfoot@gmail.com', // Замініть на реальний email
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Oleh Shynkarenko`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;