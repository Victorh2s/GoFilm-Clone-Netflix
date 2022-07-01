import { SectionBackground } from '../SectionBackground';
import { ItensApi } from '../ItensApi';
import * as Styled from './styles';

export type PosterProps = {
  id: number;
  seasons?: number;
  poster: string;
  title: string;
  year: Date;
  vote: number;
  description: string;
  genresName: Array<string>;
};

export const Poster = ({
  poster,
  title,
  year,
  vote,
  seasons,
  description,
  genresName,
  id,
}: PosterProps) => {
  const imagePath = 'https://image.tmdb.org/t/p/original/';

  return (
    <SectionBackground>
      <Styled.Wrapper>
        <Styled.Poster>
          <Styled.Image src={`${imagePath}${poster}`} alt={title} />
        </Styled.Poster>

        <Styled.YearAndSeason>
          <ItensApi
            vote={vote}
            description={description}
            genresName={genresName}
            seasons={seasons}
            year={year}
            id={id}
          />
        </Styled.YearAndSeason>
      </Styled.Wrapper>
    </SectionBackground>
  );
};
