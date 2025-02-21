
import SignupPlaceholder from "@/assets/images/signup-placeholder.webp"
import { SignupForm } from "@/components/forms/sing-up.form"
import { AuthLayout } from "@/components/layouts/auth.layout"

export const SignUpPage = () => (
    <AuthLayout
        imageToLeft
        placeholderAlt="Signup placeholder"
        placeholderImage={SignupPlaceholder}
    >
        <SignupForm />
    </AuthLayout>
)
