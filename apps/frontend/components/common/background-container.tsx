import React from 'react';
import { cn } from '@/lib/utils';

interface BackgroundContainerProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
}

const BackgroundContainer: React.FC<BackgroundContainerProps> = ({
  children,
  className,
  innerClassName,
}) => {
  return (
    <div className={cn('relative', className)}>
      <div className={cn('relative z-10', innerClassName)}>{children}</div>
    </div>
  );
};

export default BackgroundContainer;
