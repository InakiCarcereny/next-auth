'use client';

import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';

export function Social() {
  const onClick = (provider: 'github' | 'google') => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className="flex items-center justify-center w-full gap-2">
      <Button
        size="lg"
        className="w-[220px]"
        variant="outline"
        onClick={() => onClick('google')}
      >
        <FcGoogle />
      </Button>

      <Button
        size="lg"
        className="w-[220px]"
        variant="outline"
        onClick={() => onClick('github')}
      >
        <FaGithub />
      </Button>
    </div>
  );
}
