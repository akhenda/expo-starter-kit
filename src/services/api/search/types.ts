export interface SearchItem {
  title: string;
  year: number;
  imdbID: string;
  type: 'movie' | 'series';
  poster: string;
}

export interface SearchApiGetResponse {
  search: SearchItem[];
  totalResults: string;
  response: string;
}
