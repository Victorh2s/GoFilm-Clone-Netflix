import * as Styled from './styles';
import { Heading } from '../Heading';
import { useEffect, useState } from 'react';
import { baseTopics, GetDatas } from './../../service';
import { ChevronCompactLeft } from '@styled-icons/bootstrap/ChevronCompactLeft';
import { ChevronCompactRight } from '@styled-icons/bootstrap/ChevronCompactRight';
import { MapImg } from '../MapImg';

export type SlideFilmsProps = {
  APIurl: baseTopics;
};

export const SlideFilms = ({ APIurl }: SlideFilmsProps) => {
  const imagePath = 'https://image.tmdb.org/t/p/w500/';
  const [Scrollx, setScrollx] = useState(0);
  const [data, setData] = useState([]);
  const type = APIurl.type;

  useEffect(() => {
    const loadDatas = async () => {
      const res = await GetDatas(APIurl.url);
      setData(res.results);
    };
    loadDatas();
  }, [APIurl]);

  const MovieRight = () => {
    let x = Scrollx - 200;
    if (x < -2700) {
      x = -2700;
    }
    setScrollx(x);
  };

  const MovieLeft = () => {
    let x = Scrollx + 200;
    if (x > 0) {
      x = 0;
    }
    setScrollx(x);
  };
  return (
    <Styled.Wrapper>
      <Heading as="h2" size="small" colorDark={false}>
        {APIurl.title}
      </Heading>

      <Styled.Container style={{ marginLeft: Scrollx }} aria-label="Container">
        <Styled.ButtonRight onClick={MovieRight} aria-label="Button Right">
          <ChevronCompactRight />
        </Styled.ButtonRight>

        <Styled.ButtonLeft onClick={MovieLeft} aria-label="Button Left">
          <ChevronCompactLeft />
        </Styled.ButtonLeft>
        {data.map((el, key) => (
          <MapImg
            key={key}
            id={el.id}
            type={type}
            srcImg={`${imagePath}${el.poster_path}`}
            title={el.title}
          />
        ))}
      </Styled.Container>
    </Styled.Wrapper>
  );
};

// Quando eu clicko em um botão no lado direito, ele rola o container para esquerdo e vice versa
