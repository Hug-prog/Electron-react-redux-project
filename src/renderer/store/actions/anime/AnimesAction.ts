import { PayloadAction } from '@reduxjs/toolkit';
import { AnimeState, AnimeType } from 'renderer/types/AnimeType';

export const fetchAnimeStartCase = (state: AnimeState) => {
  state.status = 'loading'; // we change status to `loading`
  state.error = ''; // and clear all the previous errors:
};

export const fetchAnimeSuccessCase = (
  state: AnimeState,
  action: PayloadAction<{ list: AnimeType[] }>
) => {
  const { list } = action.payload;
  state.list = list; // We add all the new anime info into the state
  state.status = 'success'; // and change `status` to `success`:
};

export const fetchAnimeFailureCase = (
  state: AnimeState,
  action: PayloadAction<{ error: string } | undefined>
) => {
  state.error = action.payload ? action.payload.error : 'error'; // We store error message
  state.status = 'failure'; // and change `status` to `failure` again.
};
