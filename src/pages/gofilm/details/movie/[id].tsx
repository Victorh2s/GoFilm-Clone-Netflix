import { useRouter } from 'next/router';
import { useState } from 'react';
import { GetInfo } from 'service';
import Movie from 'templates/movie';

export default function Index() {
  const [Details, setDetails] = useState(Object);
  const router = useRouter();
  const { id } = router.query;
  const setGenres = [];
  for (const i in Details.genres) {
    setGenres.push(Details.genres[i].name);
  }

  const loadDatas = async () => {
    const details = await GetInfo(+id, 'movie');
    setDetails(details);
  };
  loadDatas();

  return (
    <>
      <Movie
        description={Details.overview}
        genresName={setGenres}
        poster={Details.poster_path}
        title={Details.original_title}
        id={+id}
        vote={Details.vote_average}
        year={Details.release_date}
        key={`${id}${Details.original_title}`}
        seasons={null}
      />
    </>
  );
}
