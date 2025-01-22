export type ListProps = { label: string; description: string; path: string; };
export type MenuItem = { label: string; route: string; };

export type UserProfile = {
    username: string;
    avatar_url: string;
    html_url: string;
    name: string;
    location: string;
    email: string;
    bio: string[];
};
  
export type UserRepo = {
    id: number;
    name: string;
    private: boolean;
    html_url: string;
    description: string;
    language: string;
    languages_url: string;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    has_wiki: boolean;
    archived: boolean;
    license: string | null;
    visibility: string;
};