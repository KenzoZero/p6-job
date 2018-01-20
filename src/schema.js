module.exports = `
  type Profile {
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
    profile: Profile
  }

  type Query {
    users: [User!],
    user(_id: String): User!
  }

  input UserProfile {
    firstName: String
    lastName: String
    avatar: String
  }

  input UserAttributes {
    status: Int!
    profile: UserProfile
  }

  input UserCreate {
    username: String!
    email: String!
    password: String!
    status: Int!
    profile: UserProfile
  }

  type Mutation {
    addUser(attributes: UserCreate): User!
    updateUser(_id: String, attributes: UserAttributes): User!
    removeUser(_id: String): User!
  }
`;