import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { GetInfo } from 'service';

export default function Index() {
  const router = useRouter();
  const { id } = router.query;
  const [Details, setDetails] = useState(Object);

  useEffect(() => {
    const loadDatas = async () => {
      const details = await GetInfo(+id, 'movie');
      console.log(details);
      setDetails(details);
    };
    loadDatas();
  }, [id]);

  return (
    <>
      <h1>Olá{Details.original_title}</h1>
      <p>teste</p>
    </>
  );
}
