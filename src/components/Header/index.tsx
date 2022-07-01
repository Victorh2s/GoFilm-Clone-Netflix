import { Heading } from '../Heading';
import * as Styled from './styles';
import { ItensApi } from '../ItensApi';

export type HeaderProps = {
  name: string;
  id: number;
  vote: number;
  year: Date;
  seasons: number;
  description: string;
  srcImg: string;
  genresName: Array<string>;
};

export const Header = ({
  name,
  id,
  vote,
  year,
  seasons,
  description,
  genresName,
  srcImg,
}: HeaderProps) => {
  const imagePath = 'https://image.tmdb.org/t/p/original/';

  return (
    <Styled.Wrapper
      aria-label="Wrapper"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${imagePath}${srcImg})`,
      }}
    >
      <Styled.GladientVertical>
        <Styled.GladientHorizontal>
          <Heading colorDark={false} size={'medium'}>
            {name}
          </Heading>
          <ItensApi
            id={id}
            vote={vote}
            year={year}
            seasons={seasons}
            description={description}
            genresName={genresName}
          />
        </Styled.GladientHorizontal>
      </Styled.GladientVertical>
    </Styled.Wrapper>
  );
};
