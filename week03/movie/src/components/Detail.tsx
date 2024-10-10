import React from 'react';
import styled from 'styled-components';
import { Movie } from '../pages/DetailPage';

interface DetailProps {
  info: Movie;
}

const Detail: React.FC<DetailProps> = ({ info }) => {
  const title: string = info.title;
  const img: string = info.medium_cover_image;
  const year: number = info.year;
  const rating: number = info.rating;
  const runtime: number = info.runtime;
  const genres: string[] = info.genres;
  const description: string = info.description_full;

  return (
    <div>
      <Title>{title}</Title>
      <ImgAndInfo>
        <img src={img} />
        <Info>
          <Div>Year : {year}</Div>
          <Div>Rating : {rating}</Div>
          <Div>Runtime : {runtime} min</Div>
          <Div>Genres : {genres.join(', ')}</Div>
        </Info>
      </ImgAndInfo>
      <Div>Description</Div>
      <Desc>{description}</Desc>
    </div>
  );
};

export default Detail;

const Title = styled.div`
  font-size: 40px;
  margin: 10px;
`;
const ImgAndInfo = styled.div`
  display: flex;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;
const Desc = styled.div`
  font: 10px;
  margin: 10px;
`;

const Div = styled.div`
  font-size: 23px;
  margin: 10px;
`;
