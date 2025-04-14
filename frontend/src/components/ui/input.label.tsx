import { cn } from "@/utils/tw-merge.utils";
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { Input } from "./input";
import { Label } from "./label";

interface Props extends PropsWithChildren {
    className?: string;
    label: string;
    labelProps?: ComponentPropsWithoutRef<"label">;
    inputProps?: ComponentPropsWithoutRef<"input">;
    errorMessage?: string;
}

export const InputLabel = ({
    className, labelProps, inputProps, label, children, errorMessage,
}: Props) => (
    <div className={cn("grid gap-2", className)}>
        <Label {...labelProps}>{label}</Label>
        <Input {...inputProps} />
        {!!errorMessage && (<span>{errorMessage}</span>)}
        {children}
    </div>
)
