'use server';

import { RegisterSchemaType, RegisterSchema } from '@/app/schemas';

import { db } from '@/lib/db';
import bcrypt from 'bcrypt';
import { getUserByEmail } from '@/app/data/user';

export const register = async (values: RegisterSchemaType) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid fields' };
  }

  const { email, password, name } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: 'Email already exists!' };
  }

  await db.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
    },
  });

  return { success: 'User created' };
};
