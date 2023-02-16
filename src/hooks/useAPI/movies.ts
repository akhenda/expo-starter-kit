import useSWR from 'swr';

import { api } from '@src/services/api';

export const useGetMovies = () => useSWR('api:movies', api.movies);
