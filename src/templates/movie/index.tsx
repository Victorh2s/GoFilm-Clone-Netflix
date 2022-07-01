import { Menu } from '../../components/Menu';
import { Poster, PosterProps } from 'components/PosterMovie';

function Movie({
  id,
  description,
  genresName,
  poster,
  title,
  vote,
  year,
  seasons,
}: PosterProps) {
  return (
    <>
      <Menu />
      <Poster
        id={id}
        description={description}
        genresName={genresName}
        poster={poster}
        title={title}
        vote={vote}
        year={year}
        seasons={seasons}
        key={id}
      />
    </>
  );
}

export default Movie;
