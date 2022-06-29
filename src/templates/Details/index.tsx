import { SlideFilms } from 'components/SlideFilms';
import { TrendingBrazil } from 'service';
import * as Styled from './styles';

function Details() {
  return (
    <>
      <SlideFilms APIurl={TrendingBrazil} />
    </>
  );
}

export default Details;
