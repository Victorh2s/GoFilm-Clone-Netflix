import { Heading } from '../Heading';
import { SlideFilmsProps } from '../SlideFilms';
import { useEffect, useState } from 'react';
import { GetDatas, GetInfo } from './../../service';
import * as Styled from './styles';
import { ItensApi } from '../ItensApi';

export type HeaderProps = SlideFilmsProps;

export const Header = ({ APIurl }: HeaderProps) => {
  const imagePath = 'https://image.tmdb.org/t/p/original/';
  const [data, setData] = useState([]);
  const [info, setInfo] = useState(Object);
  const genresName = [];

  for (const i in info.genres) {
    genresName.push(info.genres[i].name);
  }

  useEffect(() => {
    const loadDatas = async () => {
      const res = await GetDatas(APIurl.url);
      setData(res.results);

      const randomNumber = Math.floor(Math.random() * res.results.length - 1);
      const Movieid = res.results[randomNumber].id;

      const details = await GetInfo(Movieid, APIurl.type);
      setInfo(details);
    };

    loadDatas();
  }, [APIurl.url, APIurl.type]);

  console.log(data);

  return (
    <Styled.Wrapper
      aria-label="Wrapper"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${imagePath}${info.backdrop_path})`,
      }}
    >
      <Styled.GladientVertical>
        <Styled.GladientHorizontal>
          <Heading colorDark={false} size={'medium'}>
            {info.name}
          </Heading>
          <ItensApi
            id={info.id}
            vote={info.vote_average}
            year={info.first_air_date}
            seasons={info.number_of_seasons}
            description={info.overview}
            genresName={genresName}
          />
        </Styled.GladientHorizontal>
      </Styled.GladientVertical>
    </Styled.Wrapper>
  );
};
