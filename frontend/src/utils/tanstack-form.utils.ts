import { FormEvent } from "react"

export const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => (handleSubmit: VoidFunction) => {
    event.preventDefault()
    event.stopPropagation()
    void handleSubmit()
}