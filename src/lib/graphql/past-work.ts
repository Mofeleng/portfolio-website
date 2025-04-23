import { gql } from "graphql-request";
import { base_client } from "./init";
import { Project, CoverPhoto, GetVariablePostsResponse, GetVariablePostsVariables } from "../interfaces/projects";

export const getVariablePosts = async (work: string): Promise<Project[]> => {
    const query = gql`
        query MyQuery($work: ProjectType!) {
            projects(where: {type: $work}) {
                id
                name
                slug
                skills
                url
                coverPhoto {
                    url
                }
                shortDescription
            }
        }
    `;

    const variables: GetVariablePostsVariables = {
        work
    };

    const data = await base_client.request<GetVariablePostsResponse>(query, variables);
    return data.projects;
};