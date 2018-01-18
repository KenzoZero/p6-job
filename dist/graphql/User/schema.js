"use strict";
exports.__esModule = true;
exports["default"] = "\n  type UserProfile {\n    firstName: String\n    lastName: String\n    avatar: String\n  }\n\n  type User {\n    _id: ID!\n    username: String!\n    email: String!\n    password: String!\n    status: Int!\n    profile: UserProfile\n  }\n\n  type Query {\n    users: [User!]\n  }\n\n  input Profile {\n    firstName: String\n    lastName: String\n    avatar: String\n  }\n\n  type Mutation {\n    addUser(\n      username: String!\n      email: String!\n      password: String!\n      status: Int!\n      profile: Profile\n    ): User!\n  }\n";
//# sourceMappingURL=schema.js.map