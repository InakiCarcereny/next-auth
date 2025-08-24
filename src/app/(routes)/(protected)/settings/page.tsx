import { auth, signOut } from '@/auth';

export default async function Settings() {
  const session = await auth();

  return (
    <div className="flex flex-col gap-2">
      {JSON.stringify(session)}

      <button
        className="cursor-pointer"
        onClick={async () => {
          'use server';

          await signOut();
        }}
      >
        Logout
      </button>
    </div>
  );
}
