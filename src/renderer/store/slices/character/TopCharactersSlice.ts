import { createSlice } from '@reduxjs/toolkit';
import fetchTopCharacters from 'renderer/Middleware/TopCharactersMiddleware';
import {
  fetchTopCharactersFailureCase,
  fetchTopCharactersStartCase,
  fetchTopCharactersSuccessCase,
} from 'renderer/store/actions/character/TopCharactersAction';
import { TopCharactersState } from 'renderer/types/TopCharactersType';
import { status } from '../../../types/StatusType';

const initialState: TopCharactersState = {
  status: status[0],
  list: [],
  error: 'error',
};

export const TopCharactersSlice = createSlice({
  name: 'topCharacters',
  // `createSlice` will infer the state type from the `initi alState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTopCharacters.pending, fetchTopCharactersStartCase);
    builder.addCase(
      fetchTopCharacters.fulfilled,
      fetchTopCharactersSuccessCase
    );
    builder.addCase(fetchTopCharacters.rejected, fetchTopCharactersFailureCase);
  },
});

export const animeActions = TopCharactersSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default TopCharactersSlice.reducer;
