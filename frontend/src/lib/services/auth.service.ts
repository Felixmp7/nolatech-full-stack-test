import { API_PATHS } from "@/constants"
import { LoginForm, LoginResponse } from "@/models/auth.interfaces"
import { APIResponse } from "@/models/global.types"

export const loginService = async ({ email, password }: LoginForm): Promise<APIResponse<LoginResponse>> => {
    try {
        const response = await fetch(API_PATHS.login, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        })
        return await response.json() as APIResponse<LoginResponse>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        return {
            success: false,
            data: null,
            error: error instanceof Error ? error.message : String(error),
        } as APIResponse<LoginResponse>;
    }
}