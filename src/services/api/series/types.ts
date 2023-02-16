import type { SearchApiGetResponse, SearchItem } from '@src/services/api/search/types';
import type { ApiGetResult } from '@src/services/api/types/response';

export interface SeriesItem extends SearchItem {
  type: 'series';
}

export interface SeriesApiGetResponse extends SearchApiGetResponse {
  search: SeriesItem[];
}

export type SeriesApiGetResult = ApiGetResult<{ series: SeriesItem[] }>;
