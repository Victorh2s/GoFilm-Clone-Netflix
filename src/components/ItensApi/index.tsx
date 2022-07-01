import { ButtonList } from '../ButtonList';
import { ButtonPlay } from '../ButtonPlay';
import * as Styled from './styles';

export type ItensApiProps = {
  id: number;
  vote: number;
  year: Date;
  seasons: number;
  description: string;
  genresName: Array<string>;
};

export const ItensApi = ({
  id,
  vote,
  year,
  seasons,
  description,
  genresName,
}: ItensApiProps) => {
  const date = new Date(year).getFullYear();
  return (
    <Styled.itens>
      <Styled.Vote> {vote} pontos</Styled.Vote>
      <Styled.Year> {date}</Styled.Year>
      <Styled.Season>
        {seasons === null ? '' : `${seasons} temporada`}
        {seasons > 1 ? 's' : ''}
      </Styled.Season>
      <Styled.Description>{description}</Styled.Description>
      <Styled.Genres>
        <strong>Gêneros: </strong>
        {genresName.join(', ')}
      </Styled.Genres>

      <ButtonPlay id={id} />
      <ButtonList id={id} />
    </Styled.itens>
  );
};
