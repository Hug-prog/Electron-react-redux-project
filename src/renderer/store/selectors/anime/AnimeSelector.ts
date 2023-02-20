import { RootState } from '../../store';

const selectAnimes = (state: RootState) => state.animes;

export default selectAnimes;
