'use client';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';

import { Header } from '@/app/components/Header';
import { Social } from '@/app/components/Social';
import { BackButton } from '@/app/components/BackButton';

interface CardWrapperProps {
  children: React.ReactNode;
  headerLable: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export function CardWrapper({
  children,
  headerLable,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: CardWrapperProps) {
  return (
    <Card className="w-[500px] shadow-md">
      <CardHeader>
        <Header label={headerLable} />
      </CardHeader>
      <CardContent>{children}</CardContent>

      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}

      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
}
