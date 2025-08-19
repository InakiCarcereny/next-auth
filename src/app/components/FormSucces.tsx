import { BsCheckCircle } from 'react-icons/bs';

interface FormErrorProps {
  message: string;
}

export function FormSucces({ message }: FormErrorProps) {
  if (!message) return null;

  return (
    <div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-2 text-sm text-emerald-500">
      <BsCheckCircle className="h-5 w-5" />
      <p>{message}</p>
    </div>
  );
}
