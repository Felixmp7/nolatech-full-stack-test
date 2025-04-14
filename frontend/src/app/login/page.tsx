
import LoginPlaceholder from "@/assets/images/login-placeholder.webp"
import { LoginForm } from "@/components/forms/login.form"
import { AuthLayout } from "@/components/layouts/auth.layout"

export const LoginPage = () => (
    <AuthLayout
        placeholderImage={LoginPlaceholder}
        placeholderAlt="Login placeholder"
    >
        <LoginForm />
    </AuthLayout>
)
