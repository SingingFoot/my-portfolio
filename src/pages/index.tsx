import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function HomepageContent() {
  return (
    <section style={{padding: '3rem 0', backgroundColor: 'var(--ifm-background-color)'}}>
      <div className="container">
        <div className="row">
          
          {/* Ліва колонка (Основна): PROFESSIONAL SUMMARY + EXPERIENCE */}
          <div className="col col--8">
            <Heading as="h3">PROFESSIONAL SUMMARY</Heading>
            <p>
              Technical Documentation Manager and Senior Technical Writer with 15+ years of experience in
              technical communication, translation, and content production. Over 6 years of experience in
              software, IoT, and engineering documentation, combined with 4+ years of leadership in
              automation and documentation workflow management.
            </p>

            <Heading as="h3" style={{marginTop: '2rem'}}>PROFESSIONAL EXPERIENCE</Heading>
            
            <div style={{borderLeft: '2px solid #ddd', paddingLeft: '1.5rem', marginBottom: '2rem'}}>
              <h4>Senior Technical Writer (Contract)</h4>
              <small>SimpliGov | Remote | Jul 2023 – Apr 2026</small>
              <ul style={{fontSize: '0.9rem', marginTop: '0.5rem'}}>
                <li>Developed and maintained API and developer documentation</li>
                <li>Managed release notes and status page updates</li>
              </ul>
            </div>

            <div style={{borderLeft: '2px solid #ddd', paddingLeft: '1.5rem', marginBottom: '2rem'}}>
              <h4>Senior Technical Writer</h4>
              <small>GlobalLogic | Kyiv, Ukraine | Nov 2021 – Jun 2023</small>
              <ul style={{fontSize: '0.9rem', marginTop: '0.5rem'}}>
                <li>Created documentation using Docs-as-Code (Markdown, MkDocs, GitHub)</li>
                <li>Wrote user guides, developer documentation, and manuals</li>
              </ul>
            </div>

            <div style={{borderLeft: '2px solid #ddd', paddingLeft: '1.5rem', marginBottom: '2rem'}}>
              <h4>Senior Technical Writer</h4>
              <small>BJet | Lviv, Ukraine | Aug 2021 – Nov 2021</small>
              <ul style={{fontSize: '0.9rem', marginTop: '0.5rem'}}>
                <li>Developed ERP documentation (Odoo), dashboards, and integrations</li>
              </ul>
            </div>

            <div style={{borderLeft: '2px solid #ddd', paddingLeft: '1.5rem', marginBottom: '2rem'}}>
              <h4>Technical Writer</h4>
              <small>ASBIS Ukraine | Kyiv, Ukraine | Sep 2020 – Aug 2021</small>
              <ul style={{fontSize: '0.9rem', marginTop: '0.5rem'}}>
                <li>Created user manuals, quick-start guides, and online help</li>
              </ul>
            </div>

            <div style={{borderLeft: '2px solid #ddd', paddingLeft: '1.5rem', marginBottom: '2rem'}}>
              <h4>Technical Writer / Project Manager</h4>
              <small>EGIS Ukraine | Dec 2018 – Sep 2020</small>
            </div>

            <div style={{borderLeft: '2px solid #ddd', paddingLeft: '1.5rem', marginBottom: '2rem'}}>
              <h4>Journalist / Project Manager</h4>
              <small>Ukrainian Helsinki Human Rights Union | 2015 – 2018</small>
            </div>
          </div>

          {/* Права колонка (Сайдбар): SKILLS, LANGUAGES, LINKS */}
          <div className="col col--4">
            <div style={{backgroundColor: 'rgba(0,0,0,0.03)', padding: '1.5rem', borderRadius: '8px'}}>
              <Heading as="h3">CORE SKILLS</Heading>
              <p style={{fontSize: '0.85rem'}}>
                API Documentation • Docs-as-Code • Markdown • GitHub • CI/CD • Docusaurus • MkDocs • AI Tools • XML Authoring
              </p>
              
              <hr />
              
              <Heading as="h3">LANGUAGES</Heading>
              <p style={{fontSize: '0.85rem'}}>
              🇺🇦 Ukrainian (Native)<br />
              🇬🇧 English (C1–C2)<br />
              🇭🇺 Hungarian (Duolingo 60)<br />
              🇩🇪 German (Duolingo 80)<br />
              🇫🇷 French (Duolingo 80)
            </p>

              <hr />

              <Heading as="h3">PROJECTS & BLOGS</Heading>
              <ul style={{fontSize: '0.85rem', listStyle: 'none', paddingLeft: '0'}}>
                <li>🔗 <a href="https://sci-fi-ua.netlify.app/">Ukrainian Sci-Fi</a></li>
                <li>🔗 <a href="https://olehshynkarenko.medium.com/">Medium Blog</a></li>
              </ul>

              <hr />

              <Link className="button button--secondary button--block" to="/docs/intro">
                Full Portfolio 📂
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default function Home(): React.ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomepageContent />
      </main>
    </Layout>
  );
}