const validate = values => {
  const errors = {};
  const { password, email, about, dateOfBirth, name, phone, gender } = values;

  if (!password) {
    errors.password = "The password is required.";
  } else if (password.trim() && password.length < 6) {
    errors.password = "The password must be at least 6 characters.";
  } else if (password.trim() && password.length > 16) {
    errors.password = "The password may not be greater than 16 characters.";
  }

  if (!email) {
    errors.email = "The email is required.";
  } else if (
    email &&
    !/^[a-z][a-z0-9_.]{2,}@[a-z0-9]{2,}(\.[a-z]{2,}){1,2}$/i.test(email)
  ) {
    errors.email = "The email format is invalid.";
  }

  if (!name) {
    errors.name = "The name is required.";
  } else if (name.trim() && name.length < 5) {
    errors.name = "The name must be at least 5 characters.";
  }

  if (!phone) {
    errors.phone = "The number phone is required.";
  } else if (phone && !/^[0-9]{2,3}[0-9]{9}$/i.test(phone)) {
    errors.phone = "The number phone format is invalid.";
  } else if (phone.trim() && phone.length > 12) {
    errors.phone = "The number phone may not be greater than 12 characters.";
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
