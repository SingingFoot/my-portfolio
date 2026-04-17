import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'I am your TechWriter',
  tagline:
    'Hire an experienced contract technical writer with strong AI-driven documentation expertise to create clear, scalable, and high-quality technical content tailored to your needs.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://singingfoot.github.io', 
  baseUrl: '/',

  organizationName: 'SingingFoot', 
  projectName: 'my-portfolio',   

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // --- ДОДАНО ТУТ ---
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  // ------------------

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
      defaultMode: 'dark', 
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'TechWriter',
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
              href: 'mailto:singingfoot@gmail.com', 
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

export default config; // Тільки один експорт у кінці