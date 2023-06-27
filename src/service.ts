import jsonData from '../data.json';
import { getChannel } from './api';

export async function init() {
  const userNames = jsonData.channels.map((channel) => channel.url.split('/').slice(-1)[0].replace('@', ''));
  const channels = await Promise.all(userNames.map(getChannel));
  console.log(channels);

  // console.log(channels.map((channel) => ({ title: channel.snippet.title, id: channel.id })));
}
