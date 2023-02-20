import { StatusType } from './StatusType';

export type AnimesType = {
  // ...
  id: number;
  name: string;
};

export type AnimeState = {
  status: StatusType;
  info: AnimesType;
  error: string;
};

export const nullAnimeType: AnimesType = {
  id: 1,
  name: 'test',
};
