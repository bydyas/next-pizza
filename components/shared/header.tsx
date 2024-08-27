import React from 'react';
import { ArrowRight, ShoppingCart, User } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Container } from './container';
import { Button, Logo } from '../ui';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('border border-b', className)}>
      <Container className='flex items-center justify-between py-8'>
        <Logo />
        <div className='flex items-center gap-3'>
          <Button variant={'outline'} className='flex items-center gap-1'>
            <User size={16} />
            Войти
          </Button>

          <div>
            <Button className='group relative'>
              <em className='not-italic'>520 UAH</em>
              <span className='h-full w-[1px] bg-white/30 mx-3'/>
              <div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
                <ShoppingCart className='size-4 relative' strokeWidth={2} />
                <em className='not-italic'>3</em>
              </div>
              <ArrowRight
                size={20}
                className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
              />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
