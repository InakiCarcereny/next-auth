'use client';

import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

export function Social() {
  return (
    <div className="flex items-center justify-center w-full gap-2">
      <Button
        size="lg"
        className="w-[220px]"
        variant="outline"
        onClick={() => {}}
      >
        <FcGoogle />
      </Button>

      <Button
        size="lg"
        className="w-[220px]"
        variant="outline"
        onClick={() => {}}
      >
        <FaGithub />
      </Button>
    </div>
  );
}
