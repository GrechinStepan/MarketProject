const validate = (regex, text) => {
  return regex.test(text);
};

const formValidator = (form) => {
  if (Object.keys(form).length === 0) {
    return false;
  }
  if (Object.keys(form).length !== 8) {
    return false;
  }
  for (const key in form) {
    if (key === "cardHolder") {
      if (
        !validate(new RegExp("^[a-zA-Zа-яА-Я]+ [a-zA-Zа-яА-Я]+$"), form[key])
      ) {
        return false;
      }
    } else if (key === "cvc") {
      if (!validate(new RegExp("^[0-9]{3}$"), form[key])) {
        return false;
      }
    } else if (key === "due") {
      if (!validate(new RegExp(".+"), form[key])) {
        return false;
      }
    } else if (key === "card") {
      if (!validate(new RegExp("^[0-9]{16}$"), form[key])) {
        return false;
      }
    } else if (key === "name") {
      if (!validate(new RegExp(".+"), form[key])) {
        return false;
      }
    } else if (key === "phone") {
      if (!validate(new RegExp(/^\+?7(\d{10})$/), form[key])) {
        return false;
      }
    } else if (key === "address") {
      if (!validate(new RegExp(".+"), form[key])) {
        return false;
      }
    } else if (key === "date") {
      if (!validate(new RegExp(".+"), form[key])) {
        return false;
      }
    }
  }
  return true;
};

export default formValidator;
