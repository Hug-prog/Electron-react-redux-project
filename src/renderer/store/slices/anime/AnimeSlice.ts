import { createSlice } from '@reduxjs/toolkit';
// import Api from '../../services/fetchApi';
import { AnimeState, nullAnimeType } from '../../../types/AnimeType';
import { status } from '../../../types/StatusType';
import {
  fetchAnimeFailure,
  fetchAnimeLoad,
  fetchAnimeStart,
} from '../../actions/anime/AnimeAction';

const initialState: AnimeState = {
  status: status[0],
  info: nullAnimeType,
  error: 'error',
};

export const animesSlice = createSlice({
  name: 'animes',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    fetchAnimeFailure,
    fetchAnimeLoad,
    fetchAnimeStart,
  },
});

export const action = animesSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default animesSlice.reducer;
