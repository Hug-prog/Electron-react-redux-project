import { AnimeState } from '../../../types/AnimeType';

export const fetchAnimeStart = (state: AnimeState) => {
  state.status = 'start';
};
export const fetchAnimeLoad = (state: AnimeState) => {
  state.status = 'loading';
};

export const fetchAnimeFailure = (state: AnimeState) => {
  state.status = 'failure';
};
