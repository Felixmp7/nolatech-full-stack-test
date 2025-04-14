export const BASE_URL = import.meta.env.VITE_BASE_URL;
export const API = import.meta.env.VITE_API;

export const GITHUB_REPO_URL = "https://github.com/Felixmp7/nolatech-full-stack-test";

export const API_PATHS = {
    login: `${BASE_URL}${API}/auth/login`,
}

export const PATHS = {
    root: '/',
    login: '/login',
    signup: '/signup',
}
