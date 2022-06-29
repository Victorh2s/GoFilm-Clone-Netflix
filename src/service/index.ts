import { key, ApiBase } from './key';
import fetch from 'node-fetch';

export const GetDatas = async (ApiUrl: string) => {
  try {
    const url = await fetch(ApiUrl);
    const data = await url.json();
    return data;
  } catch (e) {
    return null;
  }
};

export const GetInfo = async (serieId: number, type: string) => {
  try {
    const url = `${ApiBase.url}/${type}/${serieId}?api_key=${key.url}&language=pt-BR&page=1`;
    const info = await GetDatas(url);
    return info;
  } catch (e) {
    return null;
  }
};

export const GetMovieInfo = async (movieId: number) => {
  try {
    const url = `${ApiBase.url}/movie/${movieId}?api_key=${key.url}&language=pt-BR&page=1`;
    const info = await GetDatas(url);
    return info;
  } catch (e) {
    return null;
  }
};

export type baseTopics = {
  type: string;
  title: string;
  slug: string;
  url: string;
};

export const MoviesPopular: baseTopics = {
  type: 'movie',
  title: 'Filmes Populares',
  slug: 'MoviesPopular',
  url: `${ApiBase.url}/movie/popular?api_key=${key.url}&language=pt-BR&page=1`,
};

export const Trending: baseTopics = {
  type: 'tv',
  title: 'Tendência',
  slug: 'Trending',
  url: `${ApiBase.url}/trending/tv/week?api_key=${key.url}&language=pt-BR&page=1`,
};

export const TrendingBrazil: baseTopics = {
  type: 'movie',
  title: 'Tendência no Brasil',
  slug: 'TrendingBrazil',
  url: `${ApiBase.url}/movie/now_playing?api_key=${key.url}&language=pt-BR&page=1&region=BR`,
};

export const TopRated: baseTopics = {
  type: 'movie',
  title: 'Melhores Avaliações',
  slug: 'TopRated',
  url: `${ApiBase.url}/movie/top_rated?api_key=${key.url}&language=pt-BR&page=1`,
};

export const Action: baseTopics = {
  type: 'movie',
  title: 'Ação',
  slug: 'Action',
  url: `${ApiBase.url}/discover/movie?api_key=${key.url}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=flatrate`,
};

export const Adventure: baseTopics = {
  type: 'movie',
  title: 'Aventura',
  slug: 'Adventure',
  url: `${ApiBase.url}/discover/movie?api_key=${key.url}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=12&with_watch_monetization_types=flatrate`,
};

export const Animation: baseTopics = {
  type: 'movie',
  title: 'Animação',
  slug: 'Animation',
  url: `${ApiBase.url}/discover/movie?api_key=${key.url}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16&with_watch_monetization_types=flatrate`,
};

export const Comedy: baseTopics = {
  type: 'movie',
  title: 'Comédia',
  slug: 'Comedy',
  url: `${ApiBase.url}/discover/movie?api_key=${key.url}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35&with_watch_monetization_types=flatrate`,
};

export const Crime: baseTopics = {
  type: 'movie',
  title: 'Crime',
  slug: 'Crime',
  url: `${ApiBase.url}/discover/movie?api_key=${key.url}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=80&with_watch_monetization_types=flatrate`,
};

export const Drama: baseTopics = {
  type: 'movie',
  title: 'Drama',
  slug: 'Drama',
  url: `${ApiBase.url}/discover/movie?api_key=${key.url}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=18&with_watch_monetization_types=flatrate`,
};

export const Documentary: baseTopics = {
  type: 'movie',
  title: 'Documentário',
  slug: 'Documentary',
  url: ` ${ApiBase.url}/discover/movie?api_key=${key.url}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99&with_watch_monetization_types=flatrate`,
};

export const Horror: baseTopics = {
  type: 'movie',
  title: 'Terror',
  slug: 'Horror',
  url: `${ApiBase.url}/discover/movie?api_key=${key.url}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27&with_watch_monetization_types=flatrate`,
};
export const Romance: baseTopics = {
  type: 'movie',
  title: 'Romance',
  slug: 'Romance',
  url: `${ApiBase.url}/discover/movie?api_key=${key.url}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749&with_watch_monetization_types=flatrate`,
};

export const Science_fiction: baseTopics = {
  type: 'movie',
  title: 'Ficção Científica',
  slug: 'Science Fiction',
  url: `${ApiBase.url}/discover/movie?api_key=${key.url}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=878&with_watch_monetization_types=flatrate`,
};

export const War: baseTopics = {
  type: 'movie',
  title: 'Guerra',
  slug: 'War',
  url: `${ApiBase.url}/discover/movie?api_key=${key.url}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10752&with_watch_monetization_types=flatrate`,
};

export const tv: baseTopics = {
  type: 'tv',
  title: 'Séries mais populares',
  slug: 'Séries',
  url: `${ApiBase.url}/tv/popular?api_key=${key.url}&language=pt-BR&page=1`,
};
