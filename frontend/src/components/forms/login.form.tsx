import { NavLink } from "react-router";

import { Button } from "@/components/ui/button";
import { useLoginForm } from "@/hooks/forms/useLoginForm";
import { cn } from "@/utils/tw-merge.utils";
import { InputLabel } from "../ui/input.label";

export function LoginForm({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"form">) {
    const { form, handleSubmit } = useLoginForm()
    return (
        <form
            noValidate
            className={cn("flex flex-col gap-6", className)} {...props}
            onSubmit={handleSubmit}>
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Login to your account</h1>
                <p className="text-balance text-sm text-muted-foreground">
                  Enter your email below to login to your account
                </p>
            </div>
            <div className="grid gap-6">
                <form.Field
                    name="email"
                    children={(field) => (
                        <InputLabel
                            label="Email"
                            labelProps={{  htmlFor: "email" }}
                            inputProps={{
                                id:"email",
                                type:"email",
                                placeholder:"m@example.com",
                                value: field.state.value,
                                onBlur: field.handleBlur,
                                onChange: (e) => field.handleChange(e.target.value)
                            }}
                        />
                    )}
                />
                <form.Field
                    name="password"
                    children={(field) => (
                        <InputLabel
                            label="Password"
                            labelProps={{  htmlFor: "password" }}
                            inputProps={{
                                id:"password",
                                type:"password",
                                placeholder:"*******",
                                value: field.state.value,
                                onBlur: field.handleBlur,
                                onChange: (e) => field.handleChange(e.target.value)
                            }}
                        >
                            <a
                                href="#"
                                className="ml-auto text-sm underline-offset-4 hover:underline"
                            >
                          Forgot your password?
                            </a>
                        </InputLabel>
                    )}
                />
                <form.Subscribe
                    selector={(state) => [state.canSubmit, state.isSubmitting]}
                    children={([canSubmit, isSubmitting]) => (
                        <Button type="submit" className="w-full" disabled={!canSubmit}>
                            {isSubmitting ? '...' : 'Login'}
                        </Button>
                    )}
                />
            </div>
            <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <NavLink to="/signup" className="underline underline-offset-4">
                  Sign up
                </NavLink>
            </div>
        </form>
    )
}
