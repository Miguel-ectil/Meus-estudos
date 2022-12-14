import { Column, Row, Text, Icon } from 'components';

export type ListItemProps = {
  index: number;
  id: string;
  task: string;
  isDone: number;
  onClick: (index: number) => void;
  isActive: boolean;
};

export const ListItem: React.FC<ListItemProps> = ({ index, id, task, isDone, isActive, onClick }) => {
  return (
    <Column
      width="100%"
      bg="rgba(0, 0, 0, 0.2)"
      p="20px"
      mb="10px"
      cursor="pointer"
      borderRadius="4px"
      borderLeftWidth="5px"
      borderLeftStyle="solid"
      borderLeftColor={isActive ? '#fff' : 'transparent'}
      onClick={() => onClick(index)}
    >
      <Row>
        <Text flex={1}>{task}</Text>
        {isDone === 1 && <Icon variant="done-white" />}
      </Row>
    </Column>
  );
};
