import * as Styled from './styles';

export type MapImgProps = {
  srcImg: string;
  title: string;
  id: number;
  type: string;
};

export const MapImg = ({ srcImg, title, id, type }: MapImgProps) => {
  return (
    <Styled.MovieFilm>
      <Styled.Link href={`gofilm/details/${type}/${id}`} target="_blank">
        <Styled.Image src={srcImg} alt={title} />
      </Styled.Link>
    </Styled.MovieFilm>
  );
};
