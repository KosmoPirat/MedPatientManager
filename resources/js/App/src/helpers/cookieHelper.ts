import Cookies from "js-cookie";

export const getCookie = (name: string) => {
  return Cookies.get(name);
};

export const setCookie = (name: string, value: string) => {
  const date = new Date();
  date.setTime(date.getTime() + (60 * 60 * 1000));
  return Cookies.set(name, value, {expires: date, sameSite: "lax"});
};

export const removeCookie = (name: string) => {
  return Cookies.remove(name);
};
