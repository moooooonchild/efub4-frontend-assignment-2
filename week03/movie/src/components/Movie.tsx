import React from 'react';
import styled from 'styled-components';

interface MovieInfo {
  title: string;
  image: string;
}

const Movie: React.FC<MovieInfo> = ({ title, image }) => {
  return (
    <MovieContainer>
      <img src={image} />
      <Title>{title}</Title>
    </MovieContainer>
  );
};

export default Movie;

const MovieContainer = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;
const Title = styled.div`
  font-size: 20px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 5px;
`;
