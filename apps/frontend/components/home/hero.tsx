import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="absolute top-8">
        <p className="text-center text-lg text-muted-foreground">STAR resume matcher</p>
      </div>
      <div className="relative mb-4 h-[30vh] w-full flex items-center justify-center">
        <h1 className="text-center text-8xl font-semibold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.sky.500),theme(colors.pink.400),theme(colors.violet.600),theme(colors.blue.300),theme(colors.purple.400),theme(colors.pink.300),theme(colors.sky.500))] bg-[length:200%_auto] animate-[gradient_8s_linear_infinite]">
          RESUME MATCHER
        </h1>
      </div>
      <Link href="/dashboard">
        <Button>Continue</Button>
      </Link>
    </div>
  );
}
