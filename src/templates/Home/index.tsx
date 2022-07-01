import {
  Action,
  Adventure,
  Animation,
  Comedy,
  Crime,
  Documentary,
  Drama,
  GetDatas,
  GetInfo,
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
import { ShowPosters } from '../../components/ShowPosters';
import { Menu } from '../../components/Menu';
import { Footer } from 'components/Footer';
import { useEffect, useState } from 'react';

function Home() {
  const [info, setInfo] = useState(Object);
  const genresName = [];

  for (const i in info.genres) {
    genresName.push(info.genres[i].name);
  }

  useEffect(() => {
    const loadDatas = async () => {
      const res = await GetDatas(tv.url);

      const randomNumber = Math.floor(Math.random() * res.results.length - 1);
      const Movieid = res.results[randomNumber].id;

      const details = await GetInfo(Movieid, tv.type);
      setInfo(details);
    };

    loadDatas();
  }, []);

  return (
    <>
      <Menu />
      <Header
        id={info.id}
        description={info.overview}
        genresName={genresName}
        name={info.name}
        seasons={info.number_of_seasons}
        srcImg={info.backdrop_path}
        vote={info.vote_average}
        year={info.first_air_date}
        key={info.id}
      />
      <ShowPosters APIurl={MoviesPopular} />
      <ShowPosters APIurl={tv} />
      <ShowPosters APIurl={Trending} />
      <ShowPosters APIurl={TopRated} />
      <ShowPosters APIurl={Action} />
      <ShowPosters APIurl={Adventure} />
      <ShowPosters APIurl={Animation} />
      <ShowPosters APIurl={Comedy} />
      <ShowPosters APIurl={Crime} />
      <ShowPosters APIurl={Drama} />
      <ShowPosters APIurl={Documentary} />
      <ShowPosters APIurl={Horror} />
      <ShowPosters APIurl={Romance} />
      <ShowPosters APIurl={Science_fiction} />
      <ShowPosters APIurl={War} />
      <Footer />
    </>
  );
}

export default Home;
