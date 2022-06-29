import { Text } from '../Text';
import * as Styled from './styles';
import { AddToList } from '@styled-icons/entypo/AddToList';

export type ButtonListProps = {
  id: number;
};

export const ButtonList = ({ id }: ButtonListProps) => {
  return (
    <Styled.button2>
      <Styled.link2 href={`list/add/${id}`}>
        <AddToList /> <Text>Minha Lista</Text>
      </Styled.link2>
    </Styled.button2>
  );
};
