import { ReactNode } from 'react';
import { TabContent } from '../style/baseTabItem';

interface BaseTabItemProps {
  value: number,
  index: number,
  children?: ReactNode
}

export default function BaseTabItem({ value, index, children }: BaseTabItemProps) {
  return (
    <TabContent>
      {value === index && children}
    </TabContent>
  );
}

BaseTabItem.defaultProps = {
  children: null,
};
