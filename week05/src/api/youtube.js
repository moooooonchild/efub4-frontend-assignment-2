import axios from 'axios';

export const getVideoList = async ({ pageParam = '' }) => {
  const response = await axios.get(
    `https://www.googleapis.com/youtube/v3/search`,
    {
      params: {
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
        part: 'snippet',
        q: '더보이즈 현재 직캠',
        maxResult: 5,
        pageToken: pageParam,
        type: 'video',
      },
    }
  );

  return response.data;
};
