import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpDown } from 'lucide-react';

interface Props {
  className?: string;
}

export const SortPopup: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('inline-flex items-center gap-1 bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer', className)}>
      <ArrowUpDown size={16} />
      <em className='not-italic'>Сортировка:</em>
      <em className='not-italic text-primary'>популярное</em>
    </div>
  );
};
