export type NavItem = {
    [key: string]: { name: string; };
};

export type ListProps = { name: string; description: string; path: string; };

export type MenuItem = { label: string; route: string; };