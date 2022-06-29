import { Play } from '@styled-icons/bootstrap';
import { Text } from '../Text';
import * as Styled from './styles';

export type ButtonPlayProps = {
  id: number;
};

export const ButtonPlay = ({ id }: ButtonPlayProps) => {
  return (
    <Styled.button>
      <Styled.link href={`/watch/${id}`}>
        <Play role="Play" /> <Text>Assistir</Text>
      </Styled.link>
    </Styled.button>
  );
};
