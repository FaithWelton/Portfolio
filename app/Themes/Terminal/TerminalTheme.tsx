"use client";

import { useEffect, useState } from "react";
import styles from "./terminal.module.css";
import { FAITH_ASCII } from "./ascii-art";
import { EMAIL, GITHUB_USERNAME, LINKEDIN_USERNAME, SKILLS, ABOUT_TEXT, SUBTITLE } from "@/app/portfolio-data";
import { useGitHubRepos } from "@/app/hooks/useGitHubRepos";

interface Cursor { x: Number, y: Number, show: boolean }

export default function TerminalTheme() {
  const { repos: githubRepos, loading: loadingRepos } = useGitHubRepos();
  const [text, setText] = useState<string>("");
  const [matrixChars, setMatrixChars] = useState<Array<{ id: number; x: number; char: string; delay: number }>>([]);
  const [particles, setParticles] = useState<Array<{ id: number; left: number; top: number; delay: number; duration: number }>>([]);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [showHelp, setShowHelp] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [collapsedSections, setCollapsedSections] = useState<Set<string>>(new Set());
  const [cursorPosition, setCursorPosition] = useState<Cursor>({ x: 0, y: 0, show: false });
  const terminalTitle: string = "root@portfolio:~";
  const fullText: string = "> SYSTEM INITIALIZING...";

  const executeCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim();

    if (command === "all" || command === "clear" || command === "") {
      setActiveSection(null);
      setShowHelp(false);
    } else if (["about", "skills", "projects", "contact"].includes(command)) {
      setActiveSection(command);
      setShowHelp(false);
    } else if (command === "help") {
      setShowHelp(true);
      setActiveSection(null);
    }
  };

  const handleMenuClick = (command: string) => {
    executeCommand(command);
    setShowMenu(false);
  };

  const toggleSection = (sectionName: string) => {
    setCollapsedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(sectionName)) {
        newSet.delete(sectionName);
      } else {
        newSet.add(sectionName);
      }
      return newSet;
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const element = e.currentTarget;

    // Get the element under the mouse
    const elementUnderMouse = document.elementFromPoint(e.clientX, e.clientY);

    if (elementUnderMouse) {
      // Check if mouse hovering over a section
      let sectionElement = elementUnderMouse.closest(`.${styles.section}`);

      if (sectionElement && element.contains(sectionElement as Node)) {
        // Find the prompt within this section
        const promptElement = sectionElement.querySelector(`.${styles.prompt}`) as HTMLElement;

        if (promptElement) {
          const textRect = promptElement.getBoundingClientRect();
          const containerRect = element.getBoundingClientRect();

          // Get the actual text width
          const range = document.createRange();
          range.selectNodeContents(promptElement);
          const textBounds = range.getBoundingClientRect();

          // Position cursor at the end of the actual text content
          const x = textBounds.right - containerRect.left;
          const y = textRect.top - containerRect.top + element.scrollTop;

          setCursorPosition({ x, y: y, show: true });
          return;
        }
      }

      // Check for other interactive elements (menu items, project links, contact items, boot lines)
      let targetElement = elementUnderMouse.closest(
        `.${styles.menuItem}, .${styles.mobileMenuItem}, .${styles.projectLink}, .${styles.contactItem}, .${styles.bootLine}`
      );

      if (targetElement && element.contains(targetElement as Node)) {
        const textRect = targetElement.getBoundingClientRect();
        const containerRect = element.getBoundingClientRect();

        // Get the actual text width
        const range = document.createRange();
        range.selectNodeContents(targetElement);
        const textBounds = range.getBoundingClientRect();

        // Position cursor at the end of the actual text content
        const x = textBounds.right - containerRect.left + 5;
        const y = textRect.top - containerRect.top + element.scrollTop;

        setCursorPosition({ x: x, y: y, show: true });
        return;
      }
    }

    setCursorPosition(prev => ({ ...prev, show: false }));
  };

  const handleMouseLeave = () => {
    setCursorPosition(prev => ({ ...prev, show: false }));
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);

    return () => {
      clearInterval(timer);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    const chars = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const matrixParticles: Array<{ id: number; x: number; char: string; delay: number }> = [];

    for (let i = 0; i < 30; i++) {
      matrixParticles.push({
        id: i,
        x: Math.random() * 100,
        char: chars[Math.floor(Math.random() * chars.length)],
        delay: Math.random() * 5
      });
    }

    setMatrixChars(matrixParticles);

    const floatingParticles: Array<{ id: number; left: number; top: number; delay: number; duration: number }> = [];
    for (let i = 0; i < 20; i++) {
      floatingParticles.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 3,
        duration: 3 + Math.random() * 2
      });
    }

    setParticles(floatingParticles);
  }, []);

  return <div>
    <div className="scanline" />

    <div className={styles.matrixRain}>
      {matrixChars.map((particle) => (
        <div key={particle.id} className={styles.matrixChar} style={{ left: `${particle.x}%`, animationDelay: `${particle.delay}s` }}>
          {particle.char}
        </div>
      ))}
    </div>

    <div className={styles.container}>
      <div className={styles.particles}>
        {particles.map((particle) => (
          <div key={particle.id} className={styles.particle}
            style={{ left: `${particle.left}%`, top: `${particle.top}%`, animationDelay: `${particle.delay}s`, animationDuration: `${particle.duration}s` }}
          />
        ))}
      </div>

      <div className={styles.terminal}>
        <div className={styles.terminalHeader}>
          <div className={styles.terminalButtons}>
            <span className={`${styles.btn} ${styles.btnRed}`} />
            <span className={`${styles.btn} ${styles.btnYellow}`} />
            <span className={`${styles.btn} ${styles.btnGreen}`} />
          </div>

          <div className={styles.terminalTitle}>
            <span className={styles.hologramText}>{terminalTitle}</span>
          </div>

          <div className={styles.terminalStatus}>
            <span className={styles.statusIndicator}></span>
            <span className={styles.statusText}>{"ONLINE"}</span>
          </div>
        </div>

        <div className={styles.terminalBody}>
          <div className={styles.terminalContent} onMouseMove={!isMobile ? handleMouseMove : undefined} onMouseLeave={!isMobile ? handleMouseLeave : undefined}>
            {cursorPosition.show && !isMobile &&
              <div className="cursor" style={{ position: "absolute", left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px`, zIndex: 1000, pointerEvents: "none" }} />
            }

            <div className={styles.bootSequence}>
              <div>{text}</div>

              {text === fullText && (
                <div>
                  <div className={styles.bootLine}>{">"} {"Loading modules... [OK]"}</div>
                  <div className={styles.bootLine}>{">"} {"Establishing connection... [OK]"}</div>
                  <div className={styles.bootLine}>{">"} {"System ready."}</div>
                  <div className={styles.divider}></div>
                </div>
              )}
            </div>

            {showHelp &&
              <section className={styles.section}>
                <div className={styles.prompt}>
                  <span className="glow">{">"}</span> {"help"}
                </div>

                <div className={styles.output}>
                  <div className={styles.helpBlock}>
                    <div className={styles.helpHeader}>{"AVAILABLE COMMANDS:"}</div>

                    <div className={styles.helpItem}>
                      <span className={styles.helpCommand}>{"all"}</span>
                      <span className={styles.helpDesc}>{"Show all sections"}</span>
                    </div>

                    <div className={styles.helpItem}>
                      <span className={styles.helpCommand}>{"about"}</span>
                      <span className={styles.helpDesc}>{"Display about section"}</span>
                    </div>

                    <div className={styles.helpItem}>
                      <span className={styles.helpCommand}>{"skills"}</span>
                      <span className={styles.helpDesc}>{"Display skills section"}</span>
                    </div>

                    <div className={styles.helpItem}>
                      <span className={styles.helpCommand}>{"projects"}</span>
                      <span className={styles.helpDesc}>{"Display projects section"}</span>
                    </div>

                    <div className={styles.helpItem}>
                      <span className={styles.helpCommand}>{"contact"}</span>
                      <span className={styles.helpDesc}>{"Display contact section"}</span>
                    </div>

                    <div className={styles.helpItem}>
                      <span className={styles.helpCommand}>{"clear"}</span>
                      <span className={styles.helpDesc}>{"Clear section filter"}</span>
                    </div>

                    <div className={styles.helpItem}>
                      <span className={styles.helpCommand}>{"help"}</span>
                      <span className={styles.helpDesc}>{"Display this help message"}</span>
                    </div>
                  </div>
                </div>
              </section>
            }

            {!showHelp && (!activeSection || activeSection === "about") &&
              <>
                <section className={styles.section}>
                  <pre className={styles.asciiArt}>{FAITH_ASCII}</pre>

                  <div className={`${styles.prompt} ${isMobile ? styles.collapsiblePrompt : ""}`} onClick={() => isMobile && toggleSection("whoami")}>
                    <span className="glow">{">"}</span> {"whoami"}

                    {isMobile && (
                      <span className={styles.collapseIcon}> {collapsedSections.has("whoami") ? "[+]" : "[-]"} </span>
                    )}
                  </div>

                  {!collapsedSections.has("whoami") &&
                    <div className={styles.output}>
                      <p className={styles.heroTitle}>{SUBTITLE}</p>
                      <p className={styles.dim}>{"Building the future, one commit at a time."}</p>
                    </div>
                  }
                </section>

                <section className={styles.section}>
                  <div className={`${styles.prompt} ${isMobile ? styles.collapsiblePrompt : ""}`} onClick={() => isMobile && toggleSection("about")}>
                    <span className="glow">{">"}</span> {"cat about.txt"}
                    
                    {isMobile && (
                      <span className={styles.collapseIcon}> {collapsedSections.has("about") ? "[+]" : "[-]"} </span>
                    )}
                  </div>

                  {!collapsedSections.has("about") && (
                    <div className={styles.output}>
                      <div className={styles.dataBlock}>
                        <div className={styles.dataHeader}>{"[PERSONAL_DATA]"}</div>
                        <p>{ABOUT_TEXT}</p>
                      </div>
                    </div>
                  )}
                </section>
              </>
            }

            {!showHelp && (!activeSection || activeSection === "projects") &&
              <section className={styles.section}>
                <div className={`${styles.prompt} ${isMobile ? styles.collapsiblePrompt : ""}`} onClick={() => isMobile && toggleSection("projects")}>
                  <span className="glow">{">"}</span> {"cat projects.log"}
                  {isMobile && (
                    <span className={styles.collapseIcon}> {collapsedSections.has("projects") ? "[+]" : "[-]"} </span>
                  )}
                </div>

                {!collapsedSections.has("projects") &&
                  <div className={styles.output}>
                    {loadingRepos
                      ? <div className={styles.loadingText}>{"Loading projects from GitHub..."}</div>
                      : githubRepos.length > 0
                        ? githubRepos.map((repo, index) => 
                          <a key={repo.id} href={repo.html_url} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                            <div className={styles.project}>
                              <div className={styles.projectHeader}>
                                <span className={styles.projectId}>{`[PROJECT_${String(index + 1).padStart(2, "0")}]`}</span>
                                <span className={styles.projectTitle}>{repo.name}</span>
                                {repo.stargazers_count > 0 && <span className={styles.projectStatus}>{`★ ${repo.stargazers_count}`}</span> }
                              </div>

                              <div className={styles.projectDesc}> {repo.description || "No description available"} </div>
                              
                              <div className={styles.projectTech}>
                                {repo.language && <span className={styles.techTag}>{repo.language}</span> }
                                {repo.topics.slice(0, 5).map((topic) => <span key={topic} className={styles.techTag}>{topic}</span> )}
                              </div>
                            </div>
                          </a> )
                        : <div className={styles.loadingText}>{"No public repositories found."}</div> }
                  </div>
                }
              </section>
            }

            {!showHelp && (!activeSection || activeSection === "skills") &&
              <section className={styles.section}>
                <div className={`${styles.prompt} ${isMobile ? styles.collapsiblePrompt : ""}`} onClick={() => isMobile && toggleSection("skills")}>
                  <span className="glow">{">"}</span> {"ls skills/"}
                  {isMobile && <span className={styles.collapseIcon}> {collapsedSections.has("skills") ? "[+]" : "[-]"} </span> }
                </div>

                {!collapsedSections.has("skills") && (
                  <div className={styles.output}>
                    <div className={styles.skillsGrid}>
                      <div className={styles.skillCategory}>
                        <div className={styles.categoryHeader}> <span className={styles.categoryIcon}>{"▸"}</span> {"[LANGUAGES]"} </div>

                        {SKILLS.languages.map(skill =>
                          <div key={skill.name} className={styles.skillItem}>
                            <span className={styles.skillBar} style={{ width: `${skill.level}%` }}></span>
                            <span>{skill.name}</span>
                          </div>
                        )}
                      </div>

                      <div className={styles.skillCategory}>
                        <div className={styles.categoryHeader}> <span className={styles.categoryIcon}>{"▸"}</span> {"[FRONTEND]"} </div>

                        {SKILLS.frontend.map(skill =>
                          <div key={skill.name} className={styles.skillItem}>
                            <span className={styles.skillBar} style={{ width: `${skill.level}%` }}></span>
                            <span>{skill.name}</span>
                          </div>
                        )}
                      </div>

                      <div className={styles.skillCategory}>
                        <div className={styles.categoryHeader}> <span className={styles.categoryIcon}>{"▸"}</span> {"[BACKEND]"} </div>
                        
                        {SKILLS.backend.map(skill =>
                          <div key={skill.name} className={styles.skillItem}>
                            <span className={styles.skillBar} style={{ width: `${skill.level}%` }}></span>
                            <span>{skill.name}</span>
                          </div>
                        )}
                      </div>

                      <div className={styles.skillCategory}>
                        <div className={styles.categoryHeader}> <span className={styles.categoryIcon}>{"▸"}</span> {"[DEVOPS & TOOLS]"} </div>

                        {SKILLS.devops.map(skill =>
                          <div key={skill.name} className={styles.skillItem}>
                            <span className={styles.skillBar} style={{ width: `${skill.level}%` }}></span>
                            <span>{skill.name}</span>
                          </div>
                        )}
                      </div>

                      <div className={styles.skillCategory}>
                        <div className={styles.categoryHeader}> <span className={styles.categoryIcon}>{"▸"}</span> {"[ARCHITECTURE & AI]"} </div>
                        
                        {SKILLS.other.map(skill =>
                          <div key={skill.name} className={styles.skillItem}>
                            <span className={styles.skillBar} style={{ width: `${skill.level}%` }}></span>
                            <span>{skill.name}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </section>
            }

            {!showHelp && (!activeSection || activeSection === "contact") && (
              <section className={styles.section}>
                <div className={`${styles.prompt} ${isMobile ? styles.collapsiblePrompt : ""}`} onClick={() => isMobile && toggleSection("contact")}>
                  <span className="glow">{">"}</span> {"./contact.sh"}
                  {isMobile && <span className={styles.collapseIcon}> {collapsedSections.has("contact") ? "[+]" : "[-]"} </span> }
                </div>

                {!collapsedSections.has("contact") && (
                  <div className={styles.output}>
                    <div className={styles.contactGrid}>
                      <a href={`mailto:${EMAIL}`} className={styles.contactItem}>
                        <span className={styles.contactIcon}>📧</span>

                        <div>
                          <div className={styles.contactLabel}>{"EMAIL"}</div>
                          <div className={styles.contactValue}>{EMAIL}</div>
                        </div>
                      </a>

                      <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                        <span className={styles.contactIcon}>🐙</span>
                        
                        <div>
                          <div className={styles.contactLabel}>{"GITHUB"}</div>
                          <div className={styles.contactValue}>{`github.com/${GITHUB_USERNAME}`}</div>
                        </div>
                      </a>

                      <a href={`https://linkedin.com/in/${LINKEDIN_USERNAME}`} target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                        <span className={styles.contactIcon}>💼</span>
                        
                        <div>
                          <div className={styles.contactLabel}>{"LINKEDIN"}</div>
                          <div className={styles.contactValue}>{`linkedin.com/in/${LINKEDIN_USERNAME}`}</div>
                        </div>
                      </a>
                    </div>

                    <p className={`${styles.statusMessage} ${styles.hologramText}`}> {"[CONNECTION_ESTABLISHED] Ready to collaborate."} </p>
                  </div>
                )}
              </section>
            )}
          </div>

          <div className={styles.footer}>
            {isMobile === null
              ? // Render nothing on initial server-side render to avoid hydration mismatch
                <div className={styles.prompt} style={{ visibility: "hidden" }}>
                  <span className="glow">{">"}</span>{" "}
                  <span className="cursor"></span>
                </div>
              : isMobile
                ?
                  <div className={styles.mobileMenu}>
                    <button className={styles.mobileMenuItem} onClick={() => handleMenuClick("all")}> {"ALL"} </button>
                    <button className={styles.mobileMenuItem} onClick={() => handleMenuClick("about")}> {"ABOUT"} </button>
                    <button className={styles.mobileMenuItem} onClick={() => handleMenuClick("skills")} > {"SKILLS"} </button>
                    <button className={styles.mobileMenuItem} onClick={() => handleMenuClick("projects")}> {"PROJECTS"} </button>
                    <button className={styles.mobileMenuItem} onClick={() => handleMenuClick("contact")}> {"CONTACT"} </button>
                  </div>
                : <>
                    <div className={styles.prompt} onClick={() => setShowMenu(!showMenu)} style={{ cursor: "pointer" }}>
                      <span className="glow">{">"}</span>{" "}
                      <span className={styles.menuPromptText}>{"Click to navigate sections"}</span>
                      <span className={styles.menuIndicator}>{showMenu ? "▲" : "▼"}</span>
                    </div>

                    {showMenu &&
                      <div className={styles.commandMenu}>
                        <div className={styles.menuHeader}>{"QUICK COMMANDS"}</div>

                        <button className={styles.menuItem} onClick={() => handleMenuClick("all")}>
                          <span className={styles.menuCommand}>{"all"}</span>
                          <span className={styles.menuDesc}>{"Show all sections"}</span>
                        </button>

                        <button className={styles.menuItem} onClick={() => handleMenuClick("about")}>
                          <span className={styles.menuCommand}>{"about"}</span>
                          <span className={styles.menuDesc}>{"View about section"}</span>
                        </button>

                        <button className={styles.menuItem} onClick={() => handleMenuClick("skills")}>
                          <span className={styles.menuCommand}>{"skills"}</span>
                          <span className={styles.menuDesc}>{"View skills"}</span>
                        </button>

                        <button className={styles.menuItem} onClick={() => handleMenuClick("projects")}>
                          <span className={styles.menuCommand}>{"projects"}</span>
                          <span className={styles.menuDesc}>{"View projects"}</span>
                        </button>

                        <button className={styles.menuItem} onClick={() => handleMenuClick("contact")}>
                          <span className={styles.menuCommand}>{"contact"}</span>
                          <span className={styles.menuDesc}>{"View contact info"}</span>
                        </button>

                        <button className={styles.menuItem} onClick={() => handleMenuClick("help")}>
                          <span className={styles.menuCommand}>{"help"}</span>
                          <span className={styles.menuDesc}>{"Show help"}</span>
                        </button>

                        <button className={styles.menuClose} onClick={() => setShowMenu(false)}> {"[ESC] Close Menu"} </button>
                      </div>
                    }
                  </>
            }
          </div>
        </div>
      </div>
    </div>
  </div>
}
