import { useNavigate } from 'react-router-dom';
import AngIcon from '../assets/ang.png';
import NanaIcon from '../assets/nana.png';
import styled from 'styled-components';

const EntryPage = () => {
  const nav = useNavigate();

  return (
    <Container>
      <EntryButton onClick={() => nav('/video')} />
    </Container>
  );
};

export default EntryPage;

export const Container = styled.div`
  width: 100%;
  height: 100%;

  background-color: black;

  position: relative;
`;

export const EntryButton = styled.div`
  width: 150px;
  height: 150px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-image: url(${NanaIcon});
  background-size: 100% 100%;
  object-fit: contain;

  &:hover {
    background-image: url(${AngIcon});
  }
`;
