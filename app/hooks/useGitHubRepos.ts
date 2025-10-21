"use client";

import { useEffect, useState } from 'react';
import { fetchGitHubRepos, GitHubRepo } from '../portfolio-data';

export function useGitHubRepos() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGitHubRepos().then(data => {
      setRepos(data);
      setLoading(false);
    });
  }, []);

  return { repos, loading };
}
