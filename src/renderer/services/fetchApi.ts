/* eslint-disable no-return-await */
import axios from 'axios';
import { AnimeType } from 'renderer/types/AnimeType';
import { TopCharactresType } from 'renderer/types/TopCharactersType';

export const axiosApiInstance = axios.create();

export const GET = async (url: string): Promise<AnimeType[]> => {
  return await axiosApiInstance
    .request<{ data: AnimeType[] }>({
      method: 'GET',
      url,
    })
    .then((response) => response.data.data);
};

export const GetTopCharacters = async (
  url: string
): Promise<TopCharactresType[]> => {
  return await axiosApiInstance
    .request<{ data: TopCharactresType[] }>({
      method: 'GET',
      url,
    })
    .then((response) => response.data.data);
};
