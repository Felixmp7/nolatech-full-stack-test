export const setAccessToken = (token: string) => localStorage.setItem("@access-token", token);

export const getAccessToken = () => localStorage.getItem("@access-token");

export const isLoggedIn = () => getAccessToken() !== null;

export const removeAccessToken = () => localStorage.removeItem("@access-token");