import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'I am your TechWriter',
  tagline:
    'Hire an experienced contract technical writer with strong AI-driven documentation expertise to create clear, scalable, and high-quality technical content tailored to your needs.',
  favicon: 'img/favicon.ico',

  // IMPORTANT: must match the actual deployed URL to avoid noindex injection
  url: 'https://tw-portfolio-en.netlify.app',
  baseUrl: '/',

  organizationName: 'SingingFoot',
  projectName: 'my-portfolio',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  // Site-wide SEO — injected into <head> on every page
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'keywords',
        content: [
          'Technical Writer',
          'Technical Writing',
          'Oleh Shynkarenko',
          'Industrial Automation Engineer',
          'API Documentation',
          'Docs-as-Code',
          'Markdown',
          'GitHub',
          'CI/CD',
          'Docusaurus',
          'MkDocs',
          'Sphinx',
          'AI Tools',
          'XML Authoring',
          'UML Diagrams',
          'User Guides',
          'Developer Docs',
          'Release Notes',
          'contract technical writer',
          'freelance technical writer',
          'documentation engineer',
          'developer documentation',
          'software documentation',
          'Ukraine technical writer',
        ].join(', '),
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content:
          'Oleh Shynkarenko — Technical Writer & Industrial Automation Engineer. ' +
          'Expert in API Documentation, Docs-as-Code, Sphinx, Docusaurus, MkDocs, ' +
          'Markdown, GitHub, CI/CD, AI Tools, XML Authoring, UML Diagrams, ' +
          'User Guides, Developer Docs, and Release Notes.',
      },
    },
    {tagName: 'meta', attributes: {name: 'author', content: 'Oleh Shynkarenko'}},
    // Open Graph
    {tagName: 'meta', attributes: {property: 'og:type', content: 'website'}},
    {tagName: 'meta', attributes: {property: 'og:locale', content: 'en_US'}},
    {
      tagName: 'meta',
      attributes: {
        property: 'og:title',
        content: 'Oleh Shynkarenko — Technical Writer | API Docs | Docs-as-Code',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:description',
        content:
          'Experienced contract Technical Writer specialising in API Documentation, ' +
          'Docs-as-Code, Sphinx, Docusaurus, MkDocs, CI/CD, AI Tools, and Developer Docs.',
      },
    },
    {
      tagName: 'meta',
      attributes: {property: 'og:url', content: 'https://tw-portfolio-en.netlify.app'},
    },
    // Twitter card
    {tagName: 'meta', attributes: {name: 'twitter:card', content: 'summary_large_image'}},
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:title',
        content: 'Oleh Shynkarenko — Technical Writer | API Docs | Docs-as-Code',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:description',
        content:
          'Contract Technical Writer: API Documentation, Sphinx, Docusaurus, MkDocs, ' +
          'Docs-as-Code, CI/CD, AI Tools, UML, User Guides, Developer Docs.',
      },
    },
    // JSON-LD structured data
    {
      tagName: 'script',
      attributes: {type: 'application/ld+json'},
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Oleh Shynkarenko',
        url: 'https://tw-portfolio-en.netlify.app',
        jobTitle: 'Technical Writer',
        description:
          'Experienced contract Technical Writer and Industrial Automation Engineer ' +
          'specialising in API Documentation, Docs-as-Code, Sphinx, Docusaurus, MkDocs, ' +
          'CI/CD, AI Tools, XML Authoring, UML Diagrams, User Guides, and Developer Docs.',
        knowsAbout: [
          'Technical Writing',
          'API Documentation',
          'Docs-as-Code',
          'Sphinx',
          'Docusaurus',
          'MkDocs',
          'Markdown',
          'GitHub',
          'CI/CD',
          'AI Tools',
          'XML Authoring',
          'UML Diagrams',
          'User Guides',
          'Developer Documentation',
          'Release Notes',
          'Industrial Automation',
          'Restrukturured Text',
        ],
        sameAs: [
          'https://github.com/SingingFoot',
          'https://www.linkedin.com/in/oleh-shynkarenko-15a24b65/',
          'https://scholar.google.com/citations?hl=en&user=1yCMKj4AAAAJ',
          'https://orcid.org/0009-0001-1690-8967',
          'https://medbiotech.academia.edu/OlehShynkarenko',
          'https://www.researchgate.net/profile/Oleh-Shynkarenko',
        ],
        email: 'singingfoot@gmail.com',
      }),
    },
  ],

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
        sitemap: {
          changefreq: 'weekly',
          priority: 0.8,
          filename: 'sitemap.xml',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/os.jpg',
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