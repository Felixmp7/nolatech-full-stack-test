import { Route, Routes } from "react-router";

import { LoginPage } from "@/app/login/page";
import { SignUpPage } from "@/app/signup/page";

export const Router = () => (
    <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignUpPage />} />
    </Routes>

)