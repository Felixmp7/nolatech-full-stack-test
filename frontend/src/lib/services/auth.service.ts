import { API_PATHS } from "@/constants"
import { LoginForm } from "@/models/auth.interfaces"

export const loginService = async ({ email, password }: LoginForm) => {
    try {
        const response = await fetch(API_PATHS.login, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        })
        const data = await response.json()
        return {
            success: response.ok,
            error: null,
            data,
        };
    } catch (error: any) {
        return {
            success: false,
            error: error?.message || "Internal Server Error",
            data: null,
        };
    }
}