'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { useIntersection } from 'react-use';
import { Title } from './title';
import { ProductCard } from './product-card';
import { useCategoryStore } from '@/store/useCategoryStore';

interface Props {
  title: string;
  products: any[];
  categoryId: number;
  listClassName?: string;
  className?: string;
}

export const ProductsGroupList: React.FC<Props> = ({ 
  title,
  products,
  categoryId,
  listClassName,
  className,
}) => {
  const setActiveCategoryId = useCategoryStore((store) => store.setActiveId);
  const intersactionRef = React.useRef(null);
  const intersaction = useIntersection(intersactionRef, {
    threshold: 0.4,
  });

  React.useEffect(() => {
    if (intersaction?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [categoryId, intersaction, setActiveCategoryId]);

  return (
    <section id={title} ref={intersactionRef} className={cn('', className)}>
      <Title text={title} size='lg' className='font-extrabold mb-5' />
      <ul className={cn('grid grid-cols-3 gap-[5px]', listClassName)}>
        {products.map((product) => <ProductCard key={product.id} {...product} />)}
      </ul>
    </section>
  );
};
