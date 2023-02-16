import type { SearchApiGetResponse, SearchItem } from '@src/services/api/search/types';
import type { ApiGetResult } from '@src/services/api/types/response';

export interface Movie extends SearchItem {
  type: 'movie';
}

export interface MoviesApiGetResponse extends SearchApiGetResponse {
  search: Movie[];
}

export type MoviesApiGetResult = ApiGetResult<{ movies: Movie[] }>;
