const validate = values => {
  const errors = {};
  const { about, dateOfBirth, name, gender } = values;

  if (!name) {
    errors.name = "The name is required.";
  } else if (name.trim() && name.length < 5) {
    errors.name = "The name must be at least 5 characters.";
  }

  if (!dateOfBirth) {
    errors.dateOfBirth = "The data of birth is required.";
  }

  if (gender === null || gender === undefined || gender === "") {
    errors.gender = "The gender is required.";
  }

  if (!about) {
    errors.about = "The about is required.";
  } else if (about.trim() && about.length > 100) {
    errors.about = "The about may not be greater than 100 characters.";
  }

  return errors;
};

export default validate;
