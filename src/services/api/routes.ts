import { compile } from 'path-to-regexp';

export const API_ROUTES = {
  movies: '?s=Stargate&type=movie',
  series: '?s=Stargate&type=series',
};

export const pathToUrl = (path: string, params = {}) => compile(path)(params);
