import React from 'react'
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
}

export const Logo: React.FC<Props> = ({ className }) => {
  return (
    <figure className={cn('flex items-center gap-4', className)}>
      <Image src='/logo.png' alt='Logo' width={35} height={35} />
      <figcaption>
        <h1 className='text-2xl uppercase font-black'>Next Pizza</h1>
        <p className='text-sm text-gray-400 leading-3'>вкусней уже некуда</p>
      </figcaption>
    </figure>
  );
};
