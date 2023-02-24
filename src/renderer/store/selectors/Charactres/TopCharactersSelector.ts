import { RootState } from '../../store';

const selectTopCharacters = (state: RootState) => state.topCharacters;

export default selectTopCharacters;
