export type Role = "admin" | "user" | "employee";

export type APIResponse<T> = {
    status: number
    isSuccess: boolean
    data: T
    errors: null | string[]
}