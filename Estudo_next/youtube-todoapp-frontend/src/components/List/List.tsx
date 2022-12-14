import { Column } from 'components';
import { ITodo } from '../../interfaces';
import { ListItem } from './ListItem';

type ListProps = {
  items: ITodo[];
  selectedIndex: number;
  onClick: (index: number) => void;
};

export const List: React.FC<ListProps> = ({ items, selectedIndex, onClick }) => {
  return (
    <Column py="10px">
      {items.map((item, index) => (
        <ListItem key={index} {...item} isActive={index === selectedIndex} index={index} onClick={onClick} />
      ))}
    </Column>
  );
};
