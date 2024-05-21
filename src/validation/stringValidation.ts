const StringValidation = (string: string) => {
  let validate;
  let stringValidation = /^[a-zA-Z0-9]+$/;
  let i: number;
  for (i = 0; i < string.length; i++) {
    if (stringValidation.test(string.charAt(i))) {
      validate = true;
      break;
    } else {
      validate = false;
    }
  }
  return validate;
};

const checkEmail = (value: string) => {
  const condition = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  return condition.test(value);
};
const checkPassword = (value: string) => {
  const condition = new RegExp(/.{6,}$/); // /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*$/gm
  return condition.test(value);
};
const checkNumber = (value: string, length: number) => {
  const condition = new RegExp(/^[0-9-]{length}$/);
  return condition.test(value);
};
const checkNumeric = (value: string) => {
  const condition = new RegExp(/^[0-9]+$/);
  return condition.test(value);
};
const checkPswd = (value: string) => {
  const condition = new RegExp(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-/+_]).{8,}$/,
  );
  return condition.test(value);
};
const checkName = (value: string) => {
  const condition = new RegExp(/^[A-Za-z0-9 ]+$/);
  return condition.test(value);
};
const checkString = (value: string) => {
  const condition = new RegExp(/^[a-zA-Z ]+$/);
  return condition.test(value);
};
const checkUserName = (username: string): boolean => {
  const alphanumericRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
  return alphanumericRegex.test(username);
};
const checkMobileNumber = (value: string) => {
  const condition = new RegExp(/^\d{10}$/);
  return condition.test(value);
};
const checkMobNumber = (value: string) => {
  const condition = new RegExp(/^(?!(\d)\1{4})(?!.*(\d)\2{4})[]\d{9}$/);
  return condition.test(value);
};
const isValidUrl = (url: string): boolean => {
  const urlRegex =
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
  const result = url.match(urlRegex);

  return result !== null;
};
const checkStringForChat = (value: string) => {
  const condition = new RegExp(
    /[a-zA-Z0-9`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/,
  );
  return condition.test(value);
};

const capitalizeFirstLetter = (str: string) => {
  return str?.replace(/\b(\w)/g, function (match) {
    return match.toUpperCase();
  });
};
const strongRegex = new RegExp(
  '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$',
);
export {
  StringValidation,
  checkEmail,
  checkPassword,
  checkNumber,
  checkPswd,
  checkName,
  checkString,
  checkNumeric,
  isValidUrl,
  checkMobileNumber,
  checkUserName,
  checkStringForChat,
  capitalizeFirstLetter,
  checkMobNumber,
  strongRegex
};
