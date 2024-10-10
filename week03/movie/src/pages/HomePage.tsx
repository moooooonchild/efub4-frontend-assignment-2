import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Movie from '../components/Movie';
import { BeatLoader } from 'react-spinners';

interface MovieType {
  id: number;
  title: string;
  medium_cover_image: string;
}

const HomePage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [sort, setSort] = useState<string>('download_count');

  useEffect(() => {
    async function getMovies() {
      try {
        const res = await axios.get(
          `https://yts.mx/api/v2/list_movies.json?limit=50&sort_by=${sort}`
        );
        setMovies(res.data.data.movies);
        setLoading(false);
        console.log(movies);
      } catch (error) {
        console.log(error);
      }
    }
    getMovies();
  }, [sort]);

  const sorting = (sort: string) => () => {
    setLoading(true);
    setSort(sort);
  };

  return (
    <Container>
      <SortContainer>
        <Text>50 Movies sorted by {sort}</Text>
        <SortList>
          <div onClick={sorting('download_count')}>Download Count</div>
          <div onClick={sorting('like_count')}>Like Count</div>
          <div onClick={sorting('rating')}>Rating</div>
        </SortList>
      </SortContainer>
      {loading ? (
        <Loader color="#FFFFFF" />
      ) : (
        <div>
          <MovieList>
            {movies.map((movie) => {
              return (
                <StyledLink key={movie.id} to={`/detail/${movie.id}`}>
                  <Movie title={movie.title} image={movie.medium_cover_image} />
                </StyledLink>
              );
            })}
          </MovieList>
        </div>
      )}
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Loader = styled(BeatLoader)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const SortContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SortList = styled.div`
  margin-top: 10px;
  margin-right: 30px;
`;

const MovieList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Text = styled.div`
  font-size: 40px;
  margin-left: 15px;
  margin-top: 5px;
`;
