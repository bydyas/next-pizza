'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { FilterChecboxProps, FilterCheckbox } from './filter-checkbox';
import { Input } from '../ui';

interface Props {
  title: string;
  items: FilterChecboxProps[];
  defaultItems: FilterChecboxProps[];
  limit?: number;
  searchInputPlaceholder?: string;
  onChange?: (values: string[]) => void;
  defaultValue?: string[];
  className?: string;
}

export const CheckboxFiltesGroup: React.FC<Props> = ({ 
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = 'Поиск...',
  onChange,
  defaultValue,
  className,
 }) => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');

  const list = showAll 
    ? items.filter(({ text }) => text.toLowerCase().includes(searchValue.toLowerCase())) 
    : defaultItems.slice(0, limit);

  return (
    <div className={cn('', className)}>
      <p className='font-bold mb-3'>{title}</p>
      {showAll && (
        <div className='mb-5'>
          <Input onChange={(e) => setSearchValue(e.target.value)} placeholder={searchInputPlaceholder} className='bg-gray-50 border-none' />
        </div>
      )}
      <div className='flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar'>
        {list.map((item, index) => (
          <FilterCheckbox
            key={index}
            text={item.text}
            value={item.value}
            endAdornment={item.endAdornment}
            checked={false}
            onCheckedChange={(ids) => console.log(ids)}
          />
        ))}
      </div>
      {items.length > limit && (
        <div className={cn(showAll && 'border-t border-t-neutral-100 mt-4')}>
          <button onClick={() => setShowAll((prev) => !prev)} className='text-primary mt-3'>
            {showAll ? 'Скрыть' : '+ Показать все'}
          </button>
        </div>
      )}
    </div>
  );
};
