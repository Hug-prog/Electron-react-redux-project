/* eslint-disable promise/catch-or-return */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { GET } from 'renderer/services/fetchApi';
import { AnimeType } from 'renderer/types/AnimeType';

const fetchAnime = createAsyncThunk<
  { list: AnimeType[] },
  { url: string },
  { rejectValue: { error: string } }
>('animes/fetchAnimeStart', async (params, thunkAPI) => {
  const { rejectWithValue, fulfillWithValue } = thunkAPI;
  const { url } = params;
  try {
    const response = await GET(url);
    return fulfillWithValue({ list: response });
  } catch (error) {
    return rejectWithValue({
      error: error instanceof Error ? error.message : 'error',
    });
  }
});

export default fetchAnime;
