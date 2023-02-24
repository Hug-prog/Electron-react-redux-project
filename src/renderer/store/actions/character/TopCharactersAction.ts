import { PayloadAction } from '@reduxjs/toolkit';
import {
  TopCharactersState,
  TopCharactresType,
} from 'renderer/types/TopCharactersType';

export const fetchTopCharactersStartCase = (state: TopCharactersState) => {
  state.status = 'loading'; // we change status to `loading`
  state.error = ''; // and clear all the previous errors:
};

export const fetchTopCharactersSuccessCase = (
  state: TopCharactersState,
  action: PayloadAction<{ list: TopCharactresType[] }>
) => {
  const { list } = action.payload;
  state.list = list; // We add all the new anime info into the state
  state.status = 'success'; // and change `status` to `success`:
};

export const fetchTopCharactersFailureCase = (
  state: TopCharactersState,
  action: PayloadAction<{ error: string } | undefined>
) => {
  state.error = action.payload ? action.payload.error : 'error'; // We store error message
  state.status = 'failure'; // and change `status` to `failure` again.
};
