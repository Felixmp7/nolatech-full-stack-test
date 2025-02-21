import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";
import { Input } from "./input";
import { Label } from "./label";

interface Props {
    className?: string;
    label: string;
    labelProps?: ComponentPropsWithoutRef<"label">;
    inputProps?: ComponentPropsWithoutRef<"input">;
}

export const InputLabel = ({
    className, labelProps, inputProps, label
}: Props) => {
    return (
        <div className={cn("grid gap-2", className)}>
            <Label {...labelProps}>{label}</Label>
            <Input {...inputProps} />
        </div>
    )
}
