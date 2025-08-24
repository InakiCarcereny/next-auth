import { BackButton } from '@/app/components/BackButton';

export function ErrorCard() {
  return (
    <div className="flex flex-col w-[400px] shadow-md">
      <header>Oops, something went wrong!</header>

      <BackButton label="Back to login" href="/auth/login" />
    </div>
  );
}
