import jwtDecode from "jwt-decode";

const token_name = "token";

const getToken = () => localStorage.getItem(token_name);
const setToken = (token) => localStorage.setItem(token_name, token);
const removeToken = () => localStorage.removeItem(token_name);
const user = getToken() ? jwtDecode(getToken()) : null;

export { getToken, setToken, removeToken, user };
