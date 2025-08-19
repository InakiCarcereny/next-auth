import { BsExclamationTriangle } from 'react-icons/bs';

interface FormErrorProps {
  message: string;
}

export function FormError({ message }: FormErrorProps) {
  if (!message) return null;

  return (
    <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-2 text-sm text-destructive">
      <BsExclamationTriangle className="h-5 w-5" />
      <p>{message}</p>
    </div>
  );
}
