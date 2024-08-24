// WifeScreen.tsx
import React from 'react';
import CategoryScreen from '@/components/CategoryScreen';

const WifeScreen: React.FC = () => {
  const items = [
    { id: 1, title: 'Wedding Dress', description: 'Beautiful wedding dresses.' },
    { id: 2, title: 'Accessories', description: 'Bridal accessories for your special day.' },
  ];

  return <CategoryScreen categoryName="Wife" items={items} />;
};

export default WifeScreen;
