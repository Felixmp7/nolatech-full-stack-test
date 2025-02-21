import { ComponentPropsWithoutRef } from "react";
import { NavLink } from "react-router";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { InputLabel } from "../ui/input.label";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "../ui/select";

export function SignupForm({
    className,
    ...props
}: ComponentPropsWithoutRef<"form">) {
    return (
        <form className={cn("flex flex-col gap-6", className)} {...props}>
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Sign Up</h1>
                <p className="text-balance text-sm text-muted-foreground">
                  Complete the following information to sign up
                </p>
            </div>
            <div className="grid gap-6">
                <InputLabel
                    label="Email"
                    inputProps={{
                        required: true,
                        id: "email",
                        type:"email",
                        placeholder:"m@example.com"
                    }}
                />
                <InputLabel
                    label="Password"
                    inputProps={{
                        required: true,
                        id: "password",
                        type:"password",
                        placeholder:"*******"
                    }}
                />
                <InputLabel
                    label="Full Name"
                    inputProps={{
                        required: true,
                        id: "fullname",
                        type:"text",
                        placeholder:"John Doe"
                    }}
                />
                <InputLabel
                    label="Position"
                    inputProps={{
                        required: true,
                        id: "position",
                        type:"text",
                        placeholder:"Systems Engineer"
                    }}
                />
                <Select>
                    <SelectTrigger className="text-white">
                        <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="manager">Manager</SelectItem>
                        <SelectItem value="employee">Employee</SelectItem>
                    </SelectContent>
                </Select>
                <Button type="submit" className="w-full">
                  Signup
                </Button>
            </div>
            <div className="text-center text-sm">
                Do you already have an account?{" "}
                <NavLink to="/login" className="underline underline-offset-4">
                  Login
                </NavLink>
            </div>
        </form>
    )
}
