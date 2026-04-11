import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div style={{display: 'flex', alignItems: 'center', gap: '2rem'}}>
          
          <img
            src="/img/os.jpg"
            alt="Oleh Shynkarenko"
            style={{
              width: '140px',
              borderRadius: '8px',
            }}
          />

          <div style={{textAlign: 'left'}}>
            <Heading as="h2" style={{marginBottom: '0.5rem'}}>
              About Oleh Shynkarenko
            </Heading>

            <p className="hero__subtitle" style={{maxWidth: '700px', fontSize: '1rem', lineHeight: '1.6'}}>
              I am a technical writer and documentation specialist based in Budapest. 
              I specialize in API documentation, docs-as-code workflows, and AI-assisted 
              documentation. My work focuses on turning complex technical concepts into 
              clear, scalable, and user-friendly content for developers and end users.
            </p>

            <p style={{marginTop: '1rem'}}>
              <Link
                className="button"
                to="/docs/intro"
                style={{
                  backgroundColor: '#F68B1F',
                  borderColor: '#F68B1F',
                  color: '#fff',
                }}
              >
                View Portfolio
              </Link>
            </p>
          </div>

        </div>
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
                <li>🔗 <a href="https://medbiotech.academia.edu/OlehShynkarenko">Academy</a></li>
                <li>🔗 <a href="https://sci-fi-ua.netlify.app/">Ukrainian Sci-Fi (My dissertation)</a></li>
                <li>🔗 <a href="https://olehshynkarenko.medium.com/">Medium Blog</a></li>
              </ul>

              <hr />


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