import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Fruit {
    id: Int
    name: String
  }

  type Query {
    fruits: [Fruit]
  }
`;
