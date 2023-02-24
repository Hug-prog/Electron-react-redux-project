import { createSlice } from '@reduxjs/toolkit';
import fetchAnime from 'renderer/Middleware/AnimeMiddleware';
// import Api from '../../services/fetchApi';
import { AnimeState } from '../../../types/AnimeType';
import { status } from '../../../types/StatusType';
import {
  fetchAnimeFailureCase,
  fetchAnimeStartCase,
  fetchAnimeSuccessCase,
} from '../../actions/anime/AnimesAction';

const initialState: AnimeState = {
  status: status[0],
  list: [],
  error: 'error',
};

export const animesSlice = createSlice({
  name: 'animes',
  // `createSlice` will infer the state type from the `initi alState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAnime.pending, fetchAnimeStartCase);
    builder.addCase(fetchAnime.fulfilled, fetchAnimeSuccessCase);
    builder.addCase(fetchAnime.rejected, fetchAnimeFailureCase);
  },
});

export const animeActions = animesSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default animesSlice.reducer;
