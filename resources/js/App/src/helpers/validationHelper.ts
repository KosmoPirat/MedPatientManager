import * as yup from "yup";

const nameValidRule = yup.string()
  .required('Обязательное поле для заполнения')
  .min(4, 'Имя должно содержать не мение 4 символов');

const phoneRegExp = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
const phoneValidRule = yup.string()
  .required('Обязательное поле для заполнения')
  .matches(phoneRegExp, 'Телефон введен не верно, пример: +7 (xxx) xxx-xx-xx')
  .min(18, 'Телефон введен не верно, пример: +7 (xxx) xxx-xx-xx')
  .max(18, 'Телефон введен не верно, пример: +7 (xxx) xxx-xx-xx');

const loginValidRule = yup.string()
  .required('Обязательное поле для заполнения')
  .min(4, 'Имя должно содержать не мение 4 символов');

const passwordValidRule = yup.string()
  .required('Обязательное поле для заполнения')
  .min(8, 'Имя должно содержать не мение 4 символов');

const roleValidRule = yup.string()
  .required('Обязательное поле для заполнения');

const idValidRule = yup.number()
  .required('Обязательное поле для заполнения');

const researchValidRule = yup.number().nullable()
  .required('Обязательное поле для заполнения');

const researchLinkValidRule = yup.string().nullable()
  .required('Обязательное поле для заполнения');

const researchParamValidRule = yup.array().nullable();
  //.required('Обязательное поле для заполнения');


export const createUserSchema = yup.object({
  name: nameValidRule,
  phone: phoneValidRule,
  login: loginValidRule,
  password: passwordValidRule,
  roleId: roleValidRule,
});

export const updateUserSchema = yup.object({
  name: nameValidRule,
  phone: phoneValidRule,
  login: loginValidRule,
  roleId: roleValidRule,
});

export const deleteUserSchema = yup.object({
  id: idValidRule,
});

export const updateCancerTypeSchema = yup.object({
  name: nameValidRule,
  phone: phoneValidRule,
  login: loginValidRule,
  roleId: roleValidRule,
});

export const createResearchSchema = yup.object({
  cancerCodeId: researchValidRule,
  cancerCodeParamId: researchParamValidRule,
  cancerTypeId: researchValidRule,
  cancerTypeParamId: researchValidRule,

});

export const isValidPhone = (string: string) => {
  return /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(string);
}

export const isValidLogin = (string: string) => {
  return /^[a-zA-Z0-9]+$/.test(string);
}


