import { StatusType } from './StatusType';

/* eslint-disable no-use-before-define */
export interface Images {
  jpg: Jpg;
}
export interface Jpg {
  image_url: string;
}
export interface TopCharactresType {
  mal_id: number;
  url: string;
  website_url: string;
  images: Images;
  name: string;
  given_name: string;
  family_name: string;
  alternate_names: string[];
  birthday: string;
  favorites: number;
  about: string;
}

// ***************************************************************

// state
export type TopCharactersState = {
  status: StatusType;
  list: TopCharactresType[];
  error: string;
};
