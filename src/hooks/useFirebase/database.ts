import useSWR from 'swr';

import { firebase } from '@src/services/firebase';

export const useCreateAuthor = (data: unknown) =>
  useSWR(['firebase:create-author', { data }], firebase.collections.authors.create);

export const useGetAuthors = () => useSWR('firebase:authors', firebase.collections.authors.getAll);

export const useGetAuthor = (id: string) => useSWR(['firebase:author', { id }], firebase.collections.authors.getOne);
