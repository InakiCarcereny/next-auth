'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchemaType, LoginSchema } from '@/app/schemas/index';

import { Input } from '@/components/ui/input';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { CardWrapper } from '@/app/components/CardWrapper';
import { Button } from '@/components/ui/button';
import { FormError } from '@/app/components/FormError';
import { FormSucces } from '@/app/components/FormSucces';

export function LoginForm() {
  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (values: LoginSchemaType) => {
    console.log(values);
  };

  return (
    <CardWrapper
      headerLable="Welcome back"
      backButtonLabel="Dont have an account?"
      backButtonHref="/auth/register"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="john@example.com"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="******" type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormError message="Invalid credentials!" />
          <FormSucces message="Login succesful!" />
          <Button type="submit" className="w-full" variant="default">
            Login
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}
