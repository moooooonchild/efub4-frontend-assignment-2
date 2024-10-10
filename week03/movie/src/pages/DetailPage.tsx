import React from 'react';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Detail from '../components/Detail';
import { BeatLoader } from 'react-spinners';

export interface Movie {
  title: string;
  medium_cover_image: string;
  year: number;
  rating: number;
  runtime: number;
  genres: string[];
  description_full: string;
}

const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getDetail() {
      try {
        const res = await axios.get(
          `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
        );
        setMovie(res.data.data.movie);
        setLoading(false);
        console.log(movie);
      } catch (error) {
        console.log(error);
      }
    }
    getDetail();
  }, [id]);

  return (
    <Container>
      {loading ? <Loader color="#FFFFFF" /> : movie && <Detail info={movie} />}
    </Container>
  );
};

export default DetailPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Loader = styled(BeatLoader)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
