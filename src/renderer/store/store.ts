import { configureStore } from '@reduxjs/toolkit';
import { animesSlice } from './slices/anime/AnimeSlice';
// ...

export const storeApp = configureStore({
  reducer: {
    animes: animesSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof storeApp.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof storeApp.dispatch;
