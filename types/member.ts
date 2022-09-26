export type Member = {
    name: string;
    email: Link;
    linkedin: Link;
    github: Link;
};

export type Link = {
    url: string;
    displayName: string;
};