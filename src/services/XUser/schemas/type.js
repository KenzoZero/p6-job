module.exports = `
  type UserProfile {
    firstName: String
    lastName: String
    avatar: String
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    status: Int!
    profile: UserProfile,
    createdAt: String!
    updatedAt: String!
  }

  type Account {
    _id: ID!
    username: String!
    email: String!
    status: Int!
    profile: UserProfile
  }

  type AccountToken {
    accessToken: String!
    refreshToken: String!
  }

  type Role {
    _id: ID!
    name: String!
    status: Int!
    permissions: [String!]
  }
`;
