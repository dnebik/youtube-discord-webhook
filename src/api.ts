import axios from 'axios';
import jsonData from '../data.json';

const apiInstance = axios.create({
  params: {
    key: jsonData.token,
  },
});

const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export function getChannel(forUsername: string) {
  return apiInstance.get(`${BASE_URL}/channels`, {
    params: {
      part: 'snippet',
      forUsername,
    },
  }).then(({ data }) => data.items[0]);
}

export function getVideos(channelId: string) {
  return apiInstance.get(`${BASE_URL}/videos`, {
    params: {
      part: 'snippet',
      channelId,
    },
  });
}
