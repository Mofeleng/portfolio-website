export interface CoverPhoto {
    url: string;
}

export interface Project {
    id: string;
    name: string;
    slug: string;
    skills: string[];
    url: string;
    coverPhoto: CoverPhoto;
    shortDescription: string;
}

export interface GetVariablePostsResponse {
    projects: Project[];
}

export interface GetVariablePostsVariables {
    work: string;
}
