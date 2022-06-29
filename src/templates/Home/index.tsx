import { Heading } from 'components/Heading';
import {
  Action,
  Adventure,
  Animation,
  Comedy,
  Crime,
  Documentary,
  Drama,
  Horror,
  MoviesPopular,
  Romance,
  Science_fiction,
  TopRated,
  Trending,
  tv,
  War,
} from 'service';
import { Header } from '../../components/Header';
import { SlideFilms } from '../../components/SlideFilms';
import { Menu } from '../../components/Menu';
import { Footer } from 'components/Footer';

function Home() {
  return (
    <>
      <Menu />
      <Header APIurl={tv} />
      <SlideFilms APIurl={MoviesPopular} />
      <SlideFilms APIurl={tv} />
      <SlideFilms APIurl={Trending} />
      <SlideFilms APIurl={TopRated} />
      <SlideFilms APIurl={Action} />
      <SlideFilms APIurl={Adventure} />
      <SlideFilms APIurl={Animation} />
      <SlideFilms APIurl={Comedy} />
      <SlideFilms APIurl={Crime} />
      <SlideFilms APIurl={Drama} />
      <SlideFilms APIurl={Documentary} />
      <SlideFilms APIurl={Horror} />
      <SlideFilms APIurl={Romance} />
      <SlideFilms APIurl={Science_fiction} />
      <SlideFilms APIurl={War} />
      <Footer />
    </>
  );
}

export default Home;
