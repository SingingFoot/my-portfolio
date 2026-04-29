import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

type TomPost = {
  title: string;
  link: string;
  description?: string;
};

function TomJohnsonLatestPost() {
  const [post, setPost] = useState<TomPost | null>(null);

  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await fetch(
          'https://api.rss2json.com/v1/api.json?rss_url=https://feeds.feedburner.com/idratherbewriting'
        );
        const data = await res.json();
        if (data.items && data.items.length > 0) {
          setPost(data.items[0]);
        }
      } catch (e) {
        console.error(e);
      }
    }
    fetchPost();
  }, []);

  if (!post) {
    return <p style={{fontSize: '0.85rem'}}>Loading...</p>;
  }

  return (
    <>
      <hr />
      <Heading as="h3">FROM TOM JOHNSON</Heading>
      <a href={post.link} target="_blank" rel="noopener noreferrer">
        <strong>{post.title}</strong>
      </a>
      <p style={{fontSize: '0.85rem'}}>
        {(post.description ?? '').replace(/<[^>]+>/g, '').slice(0, 200)}...
      </p>
    </>
  );
}

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)} 
            style={{ position: 'relative' }}> {/* Додаємо relative для позиціонування лінії */}
      
      {/* Створюємо лінію через самозакривний div або псевдоелемент inline */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: 0,
        right: 0,
        height: '1px',
        backgroundColor: '#F68B1F', // Колір вашої кнопки
        zIndex: 0, // Лінія йде на задній план
        transform: 'translateY(-50%)'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}> {/* Контент поверх лінії */}
        <div style={{display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap'}}>
          <img
            src="/img/os.jpg"
            alt="Oleh Shynkarenko"
            style={{ 
              width: '140px', 
              height: '140px', 
              borderRadius: '50%', 
              objectFit: 'cover',
              outline: '2px solid #F68B1F',
              outlineOffset: '5px',
              backgroundColor: 'var(--ifm-hero-background-color)', // Додаємо фон, щоб лінія не просвічувала крізь прозорі зони (якщо є)
            }}
          />
          <div style={{textAlign: 'left', flex: '1 1 300px', minWidth: '300px'}}>
            <Heading as="h2" style={{marginBottom: '0.5rem'}}>
              About Oleh Shynkarenko
            </Heading>
            <p className="hero__subtitle" style={{maxWidth: '700px', fontSize: '1rem', lineHeight: '1.6'}}>
              I am a technical writer and documentation specialist based in Budapest.
              I specialize in API documentation, docs-as-code workflows, and AI-assisted
              documentation. My work focuses on turning complex technical concepts into
              clear, scalable, and user-friendly content for developers and end users.
            </p>
            <p style={{marginTop: '1rem', display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
              <Link className="button" to="/docs/intro" style={{ backgroundColor: '#F68B1F', borderColor: '#F68B1F', color: '#fff' }}>
                View Portfolio
              </Link>
              <a 
                className="button" 
                href="/CV Technical Writer Oleh Shynkarenko.pdf" 
                download="CV_Oleh_Shynkarenko.pdf"
                style={{ 
                  backgroundColor: '#F68B1F', 
                  borderColor: '#F68B1F', 
                  color: '#fff',
                  height: '2.1rem',
                  padding: '0 1.25rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  lineHeight: '1',
                  minHeight: 'auto'
                }}
              >
                Download CV
              </a>
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
          <div className="col col--8">
            <Heading as="h3">PROFESSIONAL SUMMARY</Heading>
            <p>
              Technical Documentation Manager and Senior Technical Writer with 15+ years
              of experience in technical communication, translation, and content
              production. Over 6 years of experience in software, IoT, and engineering
              documentation, combined with 4+ years of leadership in automation and
              documentation workflow management.
            </p>

            <Heading as="h3" style={{marginTop: '2rem'}}>PROFESSIONAL EXPERIENCE</Heading>

            {/* SimpliGov */}
            <div style={{ borderLeft: '2px solid #ddd', paddingLeft: '1.5rem', marginBottom: '2rem' }}>
              <h4>Senior Technical Writer (Contract)</h4>
              <small>
                <a href="https://simpligov.com/" target="_blank" rel="noopener noreferrer" style={{color: '#F68B1F', fontWeight: 'bold'}}>SimpliGov</a> | Remote | Jul 2023 – Apr 2026
              </small>
              <ul style={{fontSize: '0.9rem', marginTop: '0.5rem'}}>
                <li>Developed and maintained API and developer documentation</li>
                <li>Managed release notes and status page updates</li>
                <li>Collaborated with engineering teams to document new feature workflows</li>
              </ul>
            </div>

            {/* GlobalLogic */}
            <div style={{ borderLeft: '2px solid #ddd', paddingLeft: '1.5rem', marginBottom: '2rem' }}>
              <h4>Senior Technical Writer</h4>
              <small>
                <a href="https://www.globallogic.com/" target="_blank" rel="noopener noreferrer" style={{color: '#F68B1F', fontWeight: 'bold'}}>GlobalLogic</a> | Kyiv, Ukraine | Nov 2021 – Jun 2023
              </small>
              <ul style={{fontSize: '0.9rem', marginTop: '0.5rem'}}>
                <li>Created documentation using Docs-as-Code (Markdown, MkDocs, GitHub)</li>
                <li>Wrote user guides, developer documentation, and manuals</li>
                <li>Optimized CI/CD pipelines for automated documentation deployment</li>
              </ul>
            </div>

            {/* BJet */}
            <div style={{ borderLeft: '2px solid #ddd', paddingLeft: '1.5rem', marginBottom: '2rem' }}>
              <h4>Senior Technical Writer</h4>
              <small>
                <a href="https://bjetpro.com/" target="_blank" rel="noopener noreferrer" style={{color: '#F68B1F', fontWeight: 'bold'}}>BJet</a> | Lviv, Ukraine | Aug 2021 – Nov 2021
              </small>
              <ul style={{fontSize: '0.9rem', marginTop: '0.5rem'}}>
                <li>Developed ERP documentation (Odoo), dashboards, and integrations</li>
                <li>Documented complex business logic and module configurations</li>
                <li>Standardized internal knowledge base for cross-functional teams</li>
              </ul>
            </div>

            {/* ASBIS */}
            <div style={{ borderLeft: '2px solid #ddd', paddingLeft: '1.5rem', marginBottom: '2rem' }}>
              <h4>Technical Writer</h4>
              <small>
                <a href="https://asbis.ua/" target="_blank" rel="noopener noreferrer" style={{color: '#F68B1F', fontWeight: 'bold'}}>ASBIS Ukraine</a> | Kyiv, Ukraine | Sep 2020 – Aug 2021
              </small>
              <ul style={{fontSize: '0.9rem', marginTop: '0.5rem'}}>
                <li>Created user manuals, quick-start guides, and online help</li>
                <li>Coordinated with product managers for IoT hardware documentation</li>
                <li>Maintained localized documentation versions for international markets</li>
              </ul>
            </div>

            {/* EGIS */}
            <div style={{ borderLeft: '2px solid #ddd', paddingLeft: '1.5rem', marginBottom: '2rem' }}>
              <h4>Technical Writer / Project Manager</h4>
              <small>
                <a href="https://www.egis-group.com/" target="_blank" rel="noopener noreferrer" style={{color: '#F68B1F', fontWeight: 'bold'}}>EGIS Ukraine</a> | Dec 2018 – Sep 2020
              </small>
              <ul style={{fontSize: '0.9rem', marginTop: '0.5rem'}}>
                <li>Managed technical documentation lifecycle for infrastructure projects</li>
                <li>Ensured compliance with engineering standards and project deadlines</li>
                <li>Facilitated communication between technical experts and stakeholders</li>
              </ul>
            </div>

            {/* UHHRU */}
            <div style={{ borderLeft: '2px solid #ddd', paddingLeft: '1.5rem', marginBottom: '2rem' }}>
              <h4>Journalist / Project Manager</h4>
              <small>
                <a href="https://helsinki.org.ua/" target="_blank" rel="noopener noreferrer" style={{color: '#F68B1F', fontWeight: 'bold'}}>Ukrainian Helsinki Human Rights Union</a> | 2015 – 2018
              </small>
              <ul style={{fontSize: '0.9rem', marginTop: '0.5rem'}}>
                <li>Produced analytical reports and human rights documentation</li>
                <li>Managed media relations and digital content strategy</li>
                <li>Oversaw project milestones for educational and advocacy campaigns</li>
              </ul>
            </div>
          </div>

          <div className="col col--4">
            <div style={{ backgroundColor: 'rgba(0,0,0,0.03)', padding: '1.5rem', borderRadius: '8px' }}>
              <Heading as="h3">CORE SKILLS</Heading>
              <p style={{fontSize: '0.85rem'}}>
                API Documentation • Docs-as-Code • Markdown • GitHub • CI/CD •
                Docusaurus • MkDocs • AI Tools • XML Authoring • UML Diagrams • 
                User Guides • Developer Docs • Release Notes
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
                <li>🔗 <a href="https://medbiotech.academia.edu/OlehShynkarenko" target="_blank">Academy</a></li>
                <li>🔗 <a href="https://sci-fi-ua.netlify.app/" target="_blank">Ukrainian Sci-Fi</a></li>
                <li>🔗 <a href="https://olehshynkarenko.medium.com/" target="_blank">Medium Blog</a></li>
                <li>🔗 <a href="https://github.com/SingingFoot" target="_blank">GitHub</a></li>
                <li>🔗 <a href="https://sphinxdoks.netlify.app/" target="_blank">Sphinx and reStructuredText</a></li>
              </ul>

              <TomJohnsonLatestPost />

                <div style={{ marginTop: '2rem' }}>
                  <hr />
                  <Heading as="h3">LATEST ON LINKEDIN</Heading>
                  <div style={{ width: '100%', overflow: 'hidden', borderRadius: '8px' }}>
                    <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7451563437169594368?collapsed=1" height="567" width="504" frameBorder="0" allowFullScreen title="Embedded post"></iframe>
                  </div>
                </div>
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
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomepageHeader />
      <main><HomepageContent /></main>
    </Layout>
  );
}