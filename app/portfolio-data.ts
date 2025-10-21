// Shared portfolio data across all themes

export const GITHUB_USERNAME = 'FaithWelton';
export const EMAIL = 'email@faithisa.dev';
export const LINKEDIN_USERNAME = 'faithwelton';
export const FEATURED_REPOS: string[] = [];

export const NAME = 'Faith Welton';
export const SUBTITLE = 'Full Stack Developer | UI/UX Enthusiast | Problem Solver';

export const SKILLS = {
  languages: [
    { name: 'TypeScript', level: 90 },
    { name: 'JavaScript', level: 92 },
    { name: 'Golang', level: 85 },
    { name: 'C#', level: 82 },
    { name: 'C/C++', level: 78 },
    { name: 'Python', level: 80 },
  ],
  frontend: [
    { name: 'React', level: 88 },
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 87 },
  ],
  backend: [
    { name: 'Node.js', level: 85 },
    { name: 'MongoDB', level: 83 },
    { name: 'PostgreSQL', level: 80 },
    { name: 'Redis', level: 78 },
  ],
  devops: [
    { name: 'Docker', level: 88 },
    { name: 'Kubernetes', level: 75 },
    { name: 'Azure DevOps', level: 82 },
    { name: 'NGINX', level: 80 },
    { name: 'Git / GitHub', level: 90 },
    { name: 'Figma', level: 85 },
  ],
  other: [
    { name: 'Microservices Architecture', level: 85 },
    { name: 'AI Assisted Dev (Claude)', level: 92 },
    { name: 'AI Assisted Dev (ChatGPT)', level: 90 },
  ],
};

export const ABOUT_TEXT = "I love creating elegant solutions to complex problems. I'm a full-stack developer who cares about the details.";

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  topics: string[];
  stargazers_count: number;
  language: string | null;
  archived: boolean;
  private: boolean;
}

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    if (FEATURED_REPOS.length > 0) {
      const repoPromises = FEATURED_REPOS.map(repoName =>
        fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}`)
          .then(res => res.ok ? res.json() : null)
      );
      const repos = await Promise.all(repoPromises);
      return repos.filter(repo => repo !== null);
    } else {
      const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`);
      if (response.ok) {
        const repos = await response.json();
        return repos
          .filter((repo: GitHubRepo) => !repo.archived && !repo.private)
          .slice(0, 3);
      }
    }
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
  }
  return [];
}
