import useSWR from 'swr';

import { api } from '@src/services/api';

export const useGetSeries = () => useSWR('api:series', api.series);
