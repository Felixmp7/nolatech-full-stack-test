import { Schema, z } from 'zod';

import { LoginForm } from '@/models/auth.interfaces';

export const loginSchema: Schema<LoginForm> = z.object({
    email: z.string().email(),
    password: z.string().min(6),
})