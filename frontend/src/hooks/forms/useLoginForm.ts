import { useForm } from '@tanstack/react-form';
import { FormEvent } from 'react';
import { useNavigate } from "react-router";
import { toast } from 'sonner';

import { PATHS } from '@/constants';
import { loginService } from '@/lib/services/auth.service';
import { LoginForm } from '@/models/auth.interfaces';
import { setAccessToken } from '@/utils/localstorage.utils';
import { handleFormSubmit } from '@/utils/tanstack-form.utils';
import { loginSchema } from '@/validations/auth.schema';

export const useLoginForm = () => {
    const navigate = useNavigate();
    const form = useForm({
        defaultValues: { email: '', password: '' } as LoginForm,
        validators: { onChange: loginSchema },
        onSubmit: async ({ value: formValues }) => {
            const response = await loginService({ ...formValues })
            if (response.isSuccess) {
                setAccessToken(response.data.token);
                toast.success('Login successful')

                return navigate(PATHS.root, { replace: true });
            }
            toast.error(response.errors ? response.errors[0] : 'Something went wrong');
        },
    })


    return {
        form,
        handleSubmit: (event: FormEvent<HTMLFormElement>) => handleFormSubmit(event)(form.handleSubmit)
    }
}
