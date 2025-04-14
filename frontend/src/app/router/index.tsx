import {
    createBrowserRouter,
    redirect,
} from "react-router";

import { LoginPage } from "@/app/login/page";
import { SignUpPage } from "@/app/signup/page";
import { PATHS } from "@/constants";
import { isLoggedIn } from "@/utils/localstorage.utils";

export const router = createBrowserRouter([
    {
        index: true,
        loader: () => {
            const auth = isLoggedIn();
            if (!auth) {
                return redirect(PATHS.login);
            }
            return '...loading'
        },
        element: <div>HOME</div>,
    },
    {
        path: PATHS.login,
        loader: () => {
            const auth = isLoggedIn();
            if (auth) {
                return redirect(PATHS.root);
            }
            return '...loading'
        },
        Component: LoginPage,
    },
    {
        path: PATHS.signup,
        Component: SignUpPage,
    },
]);
