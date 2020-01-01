const validate = values => {
  const errors = {};
  const { email } = values;
  if (!email) {
    errors.email = "The email is required.";
  } else if (
    email &&
    !/^[a-z][a-z0-9_.]{2,}@[a-z0-9]{2,}(\.[a-z]{2,}){1,2}$/i.test(email)
  ) {
    errors.email = "The email format is invalid.";
  }
  return errors;
};

export default validate;
