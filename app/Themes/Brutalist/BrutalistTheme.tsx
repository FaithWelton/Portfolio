"use client";

import { SKILLS, EMAIL, GITHUB_USERNAME, LINKEDIN_USERNAME, ABOUT_TEXT, NAME, SUBTITLE } from "../../portfolio-data";
import { useGitHubRepos } from '../../hooks/useGitHubRepos';
import styles from './brutalist.module.css';

export default function BrutalistTheme() {
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
      <div className={styles.header}>
        <h1 className={styles.title}>{NAME.toUpperCase()}</h1>
      </div>

      <div className={styles.content}>
        <div className={`${styles.box} ${styles.boxYellow}`}>
          <h2 className={styles.smallBoxTitle}>{'DEVELOPER'}</h2>
          <p className={styles.smallBoxText}>{SUBTITLE}</p>
        </div>

        <div className={`${styles.box} ${styles.boxMagenta}`}>
          <h2 className={styles.boxTitle}>{'ABOUT'}</h2>
          <p className={styles.boxText}>{ABOUT_TEXT}</p>
        </div>

        <div className={`${styles.box} ${styles.boxGreen}`}>
          <h2 className={styles.boxTitle}>{'PROJECTS'}</h2>
          { loading
            ? <p className={styles.loadingText}>{'LOADING...'}</p>
            : repos.length > 0
              ? <div className={styles.projectsContainer}>
                {repos.map((repo, index) => (
                  <a key={repo.id} href={repo.html_url} target="_blank" rel="noopener noreferrer" className={`${styles.projectLink} ${index % 2 === 0 ? styles.projectLinkEven : styles.projectLinkOdd}`}>
                    <div className={styles.projectHeader}>
                      <h3 className={styles.projectTitle}>{repo.name.toUpperCase()}</h3>
                      {repo.stargazers_count > 0 && <span className={styles.projectStars}>{'★'} {repo.stargazers_count}</span> }
                    </div>

                    <p className={styles.projectDescription}> {repo.description || 'NO DESCRIPTION'} </p>

                    <div className={styles.projectTags}>
                      {repo.language &&
                        <span className={`${styles.projectTag} ${index % 2 === 0 ? styles.projectTagEven : styles.projectTagOdd}`}>
                          {repo.language.toUpperCase()}
                        </span>
                      }

                      {repo.topics.slice(0, 3).map(topic => (
                        <span key={topic} className={`${styles.projectTag} ${index % 2 === 0 ? styles.projectTagEven : styles.projectTagOdd}`}>
                          {topic.toUpperCase()}
                        </span>
                      ))}
                    </div>
                  </a>
                ))}
              </div>
              : <p className={styles.loadingText}>{'NO PROJECTS FOUND'}</p>
          }
        </div>

        <div className={`${styles.box} ${styles.boxCyan}`}>
          <h2 className={styles.boxTitle}>{'SKILLS'}</h2>

          <div className={styles.skillsGrid}>
            {allSkills.map(skill => <div key={skill} className={styles.skillItem}> {skill.toUpperCase()} </div> )}
          </div>
        </div>

        <div className={`${styles.box} ${styles.boxRed}`}>
          <h2 className={styles.boxTitle}>{'CONTACT'}</h2>

          <p className={styles.contactText}> {'EMAIL:'} <a href={`mailto:${EMAIL}`} className={styles.contactLink}>{EMAIL}</a> </p>

          <p className={styles.contactText}>
            {'GITHUB:'} <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>{`github.com/${GITHUB_USERNAME}`}</a>
          </p>
          
          <p className={`${styles.contactText} ${styles.contactTextLast}`}>
            {'LINKEDIN:'} <a href={`https://linkedin.com/in/${LINKEDIN_USERNAME}`} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>{`linkedin.com/in/${LINKEDIN_USERNAME}`}</a>
          </p>
        </div>
      </div>
    </div>
  );
}
