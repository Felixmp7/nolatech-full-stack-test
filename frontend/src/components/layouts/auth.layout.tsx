import { GalleryVerticalEnd } from "lucide-react"
import { PropsWithChildren } from "react"

import { GITHUB_REPO_URL } from "@/constants"
import { cn } from "@/lib/utils"

interface Props extends PropsWithChildren {
    placeholderImage: string
    placeholderAlt: string
    imageToLeft?: boolean
}

export const AuthLayout = ({
    placeholderImage, placeholderAlt, imageToLeft = false, children
}: Props) => {
    return (
        <main className="grid min-h-svh lg:grid-cols-2">
            <div className={cn("flex flex-col gap-4 p-6 md:p-10", {
                "order-2": imageToLeft
            })}>
                <header className="flex justify-center gap-2 md:justify-start">
                    <a href={GITHUB_REPO_URL} className="flex items-center gap-2 font-medium" target="_blank" rel="noreferrer">
                        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
                            <GalleryVerticalEnd className="size-4" />
                        </div>
                        360 Feedback
                    </a>
                </header>
                <main className="flex flex-1 items-center justify-center">
                    <div className="w-full max-w-xs">
                        {children}
                    </div>
                </main>
            </div>
            <div className="relative hidden lg:block size-full overflow-hidden order-1">
                <img
                    src={placeholderImage}
                    alt={placeholderAlt}
                    className="absolute inset-0 object-bottom object-cover size-full"
                />
            </div>
        </main>
    )
}