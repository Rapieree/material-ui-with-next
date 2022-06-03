const userSchemaOptions = {
  login: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
};

const userSchema = {
  login: userSchemaOptions.login,
  password: userSchemaOptions.password,
};

export {
  userSchema,
};
