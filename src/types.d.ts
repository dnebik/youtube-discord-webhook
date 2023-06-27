interface IYoutubeEntity {
  kind: string;
  etag: string;
}

interface IChannel extends IYoutubeEntity {
  kind: 'youtube#channel';
  id: string;
  snippet: {
    title: string;
    description: string;
    customUrl: string;
    publishedAt: string;
    thumbnails: unknown,
    localized: unknown,
    country: string;
  }
}

interface IChannelResponse extends IYoutubeEntity {
  pageInfo: { totalResults: number, resultsPerPage: number };
  items: IChannel[]
}
