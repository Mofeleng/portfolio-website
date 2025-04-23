import { GraphQLClient } from "graphql-request";

export const base_client = new GraphQLClient((process.env.GRAPHQL_API_URL as string));