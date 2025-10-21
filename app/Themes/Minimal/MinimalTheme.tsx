"use client";

import { SKILLS, EMAIL, GITHUB_USERNAME, LINKEDIN_USERNAME, ABOUT_TEXT, NAME, SUBTITLE } from '../../portfolio-data';
import { useGitHubRepos } from '../../hooks/useGitHubRepos';
import styles from './minimal.module.css';

export default function MinimalTheme() {
  const { repos, loading } = useGitHubRepos();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <header className={styles.header}>
          <h1 className={styles.title}>{NAME}</h1>
          <p className={styles.subtitle}>{SUBTITLE}</p>
        </header>

        <section className={styles.dossier}>
          <div className={styles.sectionHeader}>
            <div>
              <div className={styles.sectionLabel}>{'Section 01'}</div>
              <h2 className={styles.sectionTitle}>{'About'}</h2>
            </div>
          </div>

          <p className={styles.bodyText}>{ABOUT_TEXT}</p>
        </section>

        <section className={styles.dossier}>
          <div className={styles.sectionHeader}>
            <div>
              <div className={styles.sectionLabel}>{'Section 02'}</div>
              <h2 className={styles.sectionTitle}>{'Projects'}</h2>
            </div>
          </div>

          { loading
            ? <p className={styles.loadingText}>{'Loading...'}</p>
            : repos.length > 0
              ? <div className={styles.intelGrid}>
                {repos.map((repo) => (
                  <a key={repo.id} href={repo.html_url} target="_blank" rel="noopener noreferrer" className={styles.intelReport}>
                    <div className={styles.reportHeader}>
                      <div style={{ flex: 1 }}> <h3 className={styles.reportTitle}>{repo.name}</h3> </div>

                      {repo.stargazers_count > 0 && (
                        <div className={styles.reportMeta}>
                          <span>★ {repo.stargazers_count}</span>
                        </div>
                      )}
                    </div>

                    <p className={styles.reportDescription}> {repo.description || 'No description available'} </p>

                    <div className={styles.reportTags}>
                      {repo.language && <span className={styles.tag}>{repo.language}</span> }

                      {repo.topics.slice(0, 4).map(topic => <span key={topic} className={styles.tag}>{topic}</span> )}
                    </div>
                  </a>
                ))}
              </div>
              : <p className={styles.loadingText}>{'No projects found.'}</p>
          }
        </section>

        <section className={styles.dossier}>
          <div className={styles.sectionHeader}>
            <div>
              <div className={styles.sectionLabel}>{'Section 03'}</div>
              <h2 className={styles.sectionTitle}>{'Skills'}</h2>
            </div>
          </div>

          <div className={styles.capabilitiesGrid}>
            <div className={styles.capabilityCategory}>
              <div className={styles.categoryTitle}>
                <span className={styles.categoryIcon} />
                {'Languages'}
              </div>

              <div className={styles.skillsList}>
                {SKILLS.languages.map(skill =>
                  <div key={skill.name} className={styles.skillItem}>
                    <span className={styles.skillName}>{skill.name}</span>
                    
                    <div className={styles.skillLevel}>
                      {[...Array(10)].map((_, i) => (
                        <span key={i} className={`${styles.levelDot} ${i < skill.level / 10 ? styles.active : ''}`} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className={styles.capabilityCategory}>
              <div className={styles.categoryTitle}>
                <span className={styles.categoryIcon} />
                {'Frontend'}
              </div>

              <div className={styles.skillsList}>
                {SKILLS.frontend.map(skill =>
                  <div key={skill.name} className={styles.skillItem}>
                    <span className={styles.skillName}>{skill.name}</span>

                    <div className={styles.skillLevel}>
                      {[...Array(10)].map((_, i) => (
                        <span key={i} className={`${styles.levelDot} ${i < skill.level / 10 ? styles.active : ''}`} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className={styles.capabilityCategory}>
              <div className={styles.categoryTitle}>
                <span className={styles.categoryIcon} />
                {'Backend'}
              </div>

              <div className={styles.skillsList}>
                {SKILLS.backend.map(skill => (
                  <div key={skill.name} className={styles.skillItem}>
                    <span className={styles.skillName}>{skill.name}</span>

                    <div className={styles.skillLevel}>
                      {[...Array(10)].map((_, i) => <span key={i} className={`${styles.levelDot} ${i < skill.level / 10 ? styles.active : ''}`} /> )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.capabilityCategory}>
              <div className={styles.categoryTitle}>
                <span className={styles.categoryIcon}></span>
                {'DevOps & Tools'}
              </div>
              <div className={styles.skillsList}>
                {SKILLS.devops.map(skill => (
                  <div key={skill.name} className={styles.skillItem}>
                    <span className={styles.skillName}>{skill.name}</span>
                    <div className={styles.skillLevel}>
                      {[...Array(10)].map((_, i) => (
                        <span
                          key={i}
                          className={`${styles.levelDot} ${i < skill.level / 10 ? styles.active : ''}`}
                        ></span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.capabilityCategory}>
              <div className={styles.categoryTitle}>
                <span className={styles.categoryIcon}></span>
                Other
              </div>
              <div className={styles.skillsList}>
                {SKILLS.other.map(skill => (
                  <div key={skill.name} className={styles.skillItem}>
                    <span className={styles.skillName}>{skill.name}</span>
                    <div className={styles.skillLevel}>
                      {[...Array(10)].map((_, i) => (
                        <span
                          key={i}
                          className={`${styles.levelDot} ${i < skill.level / 10 ? styles.active : ''}`}
                        ></span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.dossier}>
          <div className={styles.sectionHeader}>
            <div>
              <div className={styles.sectionLabel}>{'Section 04'}</div>
              <h2 className={styles.sectionTitle}>{'Contact'}</h2>
            </div>
          </div>

          <div className={styles.contactGrid}>
            <a href={`mailto:${EMAIL}`} className={styles.contactChannel}>
              <span className={styles.contactIcon}>📧</span>

              <div className={styles.contactInfo}>
                <div className={styles.contactLabel}>{'Email'}</div>
                <div className={styles.contactValue}>{EMAIL}</div>
              </div>
            </a>

            <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer" className={styles.contactChannel}>
              <span className={styles.contactIcon}>🔐</span>

              <div className={styles.contactInfo}>
                <div className={styles.contactLabel}>{'GitHub'}</div>
                <div className={styles.contactValue}>{`github.com/${GITHUB_USERNAME}`}</div>
              </div>
            </a>

            <a href={`https://linkedin.com/in/${LINKEDIN_USERNAME}`} target="_blank" rel="noopener noreferrer" className={styles.contactChannel}>
              <span className={styles.contactIcon}>🔗</span>

              <div className={styles.contactInfo}>
                <div className={styles.contactLabel}>{'LinkedIn'}</div>
                <div className={styles.contactValue}>{`linkedin.com/in/${LINKEDIN_USERNAME}`}</div>
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
