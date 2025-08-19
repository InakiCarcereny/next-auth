import { Button } from '@/components/ui/button';
import { LoginButton } from '@/app/components/LoginButton';

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center bg-zinc-800">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl text-white font-semibold">
          Welcome to NextAuth!
        </h1>
        <p className="text-zinc-200">
          A simple authentication example for testing and demonstration
        </p>
        <div>
          <LoginButton>
            <Button variant="secondary" size="lg">
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
