"use client";

import { SKILLS, EMAIL, GITHUB_USERNAME, LINKEDIN_USERNAME, ABOUT_TEXT, NAME, SUBTITLE } from '../../portfolio-data';
import { useGitHubRepos } from '../../hooks/useGitHubRepos';
import styles from './blurple.module.css';

export default function BlurpleTheme() {
  const { repos, loading } = useGitHubRepos();

  const allSkills = [
    ...SKILLS.languages.map(s => s.name),
    ...SKILLS.frontend.map(s => s.name),
    ...SKILLS.backend.map(s => s.name),
    ...SKILLS.devops.map(s => s.name),
    ...SKILLS.other.map(s => s.name),
  ];

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>{NAME}</h1>
        <p className={styles.subtitle}>{SUBTITLE}</p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{'About'}</h2>
          <p className={styles.aboutText}>{ABOUT_TEXT}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{'Projects'}</h2>

          { loading
            ? <p className={styles.loadingText}>{'Loading projects...'}</p>
            : repos.length > 0
              ? <div className={styles.projectsContainer}>
                {repos.map(repo =>
                  <a key={repo.id} href={repo.html_url} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                    <div className={styles.projectHeader}>
                      <h3 className={styles.projectTitle}>{repo.name}</h3>
                      {repo.stargazers_count > 0 && <span className={styles.projectStars}>★ {repo.stargazers_count}</span>}
                    </div>

                    <p className={styles.projectDescription}> {repo.description || 'No description available'} </p>

                    <div className={styles.projectTags}>
                      {repo.language && <span className={styles.projectTag}>{repo.language}</span> }
                      {repo.topics.slice(0, 3).map(topic => <span key={topic} className={styles.projectTag}>{topic}</span> )}
                    </div>
                  </a>
                )}
              </div>
              : <p className={styles.loadingText}>{'No public repositories found.'}</p>
          }
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{'Skills'}</h2>

          <div className={styles.skillsContainer}>
            { allSkills.map(skill => <span key={skill} className={styles.skillBadge}>{skill}</span> )}
          </div>
        </section>

        <section>
          <h2 className={styles.sectionTitle}>{'Contact'}</h2>

          <div className={styles.contactContainer}>
            <p className={styles.contactText}> {'Email:'} <a href={`mailto:${EMAIL}`} className={styles.contactLink}>{EMAIL}</a> </p>

            <p className={styles.contactText}>
              {'GitHub:'} <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>{`github.com/${GITHUB_USERNAME}`}</a>
            </p>
            
            <p className={styles.contactText}>
              {'LinkedIn:'} <a href={`https://linkedin.com/in/${LINKEDIN_USERNAME}`} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>{`linkedin.com/in/${LINKEDIN_USERNAME}`}</a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
