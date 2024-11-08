import React, { useEffect, useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getVideoList } from '../api/youtube';
import YouTube from 'react-youtube';
import styled from 'styled-components';
import mj1 from '../assets/mj1.png';
import mj2 from '../assets/mj2.png';

import { fallingKeyframes, getRandomX } from '../animation/falling';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${fallingKeyframes}
`;

const VideoPage = () => {
  const [target, setTarget] = useState(null);
  const VIDEO_LIMIT = 50;

  const [images, setImages] = useState([]);
  const [images_, setImages_] = useState([]);

  useEffect(() => {
    const interval = setInterval(createImage, 1500);
    const timeoutId = setTimeout(() => {
      const interval_ = setInterval(createImage_, 1500);

      // 컴포넌트가 언마운트될 때 두 번째 interval도 정리
      return () => clearInterval(interval_);
    }, 750);

    return () => {
      clearInterval(interval);
      clearTimeout(timeoutId);
    };
  }, []);

  const createImage = () => {
    const startX = getRandomX();
    const finishX = getRandomX();
    const newImage = {
      id: Date.now(),
      key: Date.now(),
      startX,
      finishX,
      startY: window.scrollY - 200, // scrollY 대신 window.scrollY 사용
    };
    setImages((prev) => [...prev, newImage]);
  };

  const createImage_ = () => {
    const startX = getRandomX();
    const finishX = getRandomX();
    const newImage = {
      id: Date.now(),
      key: Date.now(),
      startX,
      finishX,
      startY: window.scrollY - 200, // scrollY 대신 window.scrollY 사용
    };
    setImages_((prev) => [...prev, newImage]);
  };

  const handleAnimationEnd = (id) => {
    setImages((prevImages) => prevImages.filter((image) => image.id !== id));
  };

  const handleAnimationEnd_ = (id) => {
    setImages_((prevImages) => prevImages.filter((image) => image.id !== id));
  };

  //   const {
  //     data,
  //     error,
  //     fetchNextPage,
  //     hasNextPage,
  //     isFetching,
  //     isFetchingNextPage,
  //   } = useInfiniteQuery({
  //     queryKey: ['posts'],
  //     queryFn: getVideoList,
  //     getNextPageParam: (lastPage) => lastPage.nextPageToken || undefined,
  //   });

  //   const totalVideos =
  //     data?.pages.reduce((acc, page) => acc + page.items.length, 0) || 0;

  //   useEffect(() => {
  //     let observer;
  //     if (target) {
  //       observer = new IntersectionObserver(onIntersect, { threshold: 0.2 });
  //       observer.observe(target);
  //     }
  //     return () => observer && observer.disconnect();
  //   }, [target]);

  //   const onIntersect = async ([entry], observer) => {
  //     if (entry.isIntersecting && hasNextPage && totalVideos < VIDEO_LIMIT) {
  //       observer.unobserve(entry.target);
  //       await fetchNextPage();
  //       observer.observe(entry.target);
  //     }
  //   };

  //   if (isFetching && !isFetchingNextPage) {
  //     return (
  //       <Container>
  //         <Text>Loading...</Text>
  //       </Container>
  //     );
  //   }

  //   if (error) {
  //     return (
  //       <Container>
  //         <Text>ERROR</Text>
  //       </Container>
  //     );
  //   }

  return (
    <>
      <GlobalStyle />
      <Container>
        {images.map((image) => (
          <MJ
            key={image.key}
            src={mj1}
            onAnimationEnd={() => handleAnimationEnd(image.id)}
            style={{
              left: image.startX,
              top: `${image.startY}px`,
              '--finish-x': image.finishX,
            }}
          />
        ))}
        {images_.map((image) => (
          <MJ
            key={image.key}
            src={mj2}
            onAnimationEnd={() => handleAnimationEnd_(image.id)}
            style={{
              left: image.startX,
              top: `${image.startY}px`,
              '--finish-x': image.finishX,
            }}
          />
        ))}
        <Text>
          Yesterday is history,
          <br />
          tomorrow is a mystery,
          <br />
          today is a gift of God,
          <br />
          which is why we call it
          <br />
          <Point>the present</Point>
        </Text>
        <VideoList>
          <VideoWrapper>
            <YouTube
              key="IO3EHVtHI8Q"
              videoId="IO3EHVtHI8Q"
              opts={{
                width: '100%',
                height: '100%',
                playerVars: {
                  autoplay: 0,
                  rel: 0,
                  modestbranding: 1,
                },
              }}
            />
          </VideoWrapper>

          <VideoWrapper>
            <YouTube
              key="IO3EHVtHI8Q"
              videoId="IO3EHVtHI8Q"
              opts={{
                width: '100%',
                height: '100%',
                playerVars: {
                  autoplay: 0,
                  rel: 0,
                  modestbranding: 1,
                },
              }}
            />
          </VideoWrapper>

          <VideoWrapper>
            <YouTube
              key="IO3EHVtHI8Q"
              videoId="IO3EHVtHI8Q"
              opts={{
                width: '100%',
                height: '100%',
                playerVars: {
                  autoplay: 0,
                  rel: 0,
                  modestbranding: 1,
                },
              }}
            />
          </VideoWrapper>

          {/* {data?.pages.map((page) =>
            page.items.map((video) => (
              <YouTube
                key={video.id.videoId}
                videoId={video.id.videoId}
                opts={{ width: '100%', height: '300' }}
              />
            ))
          )}

          {totalVideos < VIDEO_LIMIT && (
            <div ref={setTarget} style={{ height: '1px' }} />
          )}
          {isFetchingNextPage && <div>Loading more videos...</div>} */}
        </VideoList>
      </Container>
    </>
  );
};

export default VideoPage;

export const Container = styled.div`
  height: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: black;
  position: relative;
`;

export const Text = styled.div`
  @import url('https://fonts.cdnfonts.com/css/perpetua-titling-mt');
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;

  margin-top: 50px;

  font-family: 'Perpetua Titling MT', sans-serif;
  text-align: center;
  font-size: 50px;

  z-index: 0;
`;

export const Point = styled.div`
  color: #ffd000;
  font-size: 60px;
`;

export const VideoList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  margin: 50px 0;
  gap: 30px;

  z-index: 0;
`;

export const VideoWrapper = styled.div`
  width: 70%;
  max-width: 1080px;
  aspect-ratio: 16/9;

  div,
  iframe {
    width: 100%;
    height: 100%;
    border-radius: 30px;
  }
`;

export const MJ = styled.img`
  width: 150px;
  height: 150px;
  object-fit: contain;
  position: absolute;
  animation: ${fallingKeyframes} 5s linear forwards;

  z-index: 1;
`;
