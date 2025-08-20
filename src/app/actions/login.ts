'use server';

import { LoginSchemaType, LoginSchema } from '@/app/schemas';

export const login = async (values: LoginSchemaType) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid fields' };
  }

  return { success: 'Email sent' };
};
