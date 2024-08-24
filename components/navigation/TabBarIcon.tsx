// components/navigation/TabBarIcon.tsx
import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';

interface TabBarIconProps {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}

const TabBarIcon: React.FC<TabBarIconProps> = ({ name, color }) => {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} name={name} color={color} />;
};

export default TabBarIcon;
