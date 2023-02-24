/* eslint-disable promise/catch-or-return */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { GetTopCharacters } from 'renderer/services/fetchApi';
import { TopCharactresType } from 'renderer/types/TopCharactersType';

const fetchTopCharacters = createAsyncThunk<
  { list: TopCharactresType[] },
  { url: string },
  { rejectValue: { error: string } }
>('characters/fetchTopCharactersStart', async (params, thunkAPI) => {
  const { rejectWithValue, fulfillWithValue } = thunkAPI;
  const { url } = params;
  try {
    const response = await GetTopCharacters(url);
    return fulfillWithValue({ list: response });
  } catch (error) {
    return rejectWithValue({
      error: error instanceof Error ? error.message : 'error',
    });
  }
});

export default fetchTopCharacters;
