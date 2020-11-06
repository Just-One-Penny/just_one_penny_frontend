import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState, NewsFeedErrorType, NewsFeedSuccess } from './types';

// The initial state of the NewsFeed container
export const initialState: ContainerState = {
  articles: [],
  loading: false,
  error: null,
};

const newsFeedSlice = createSlice({
  name: 'newsFeed',
  initialState,
  reducers: {
    loadingFeed(state) {
      state.loading = true;
    },
    feedLoaded(state, action: PayloadAction<NewsFeedSuccess>) {
      state.loading = false;
      state.articles = action.payload.articles;
    },
    feedError(state, action: PayloadAction<NewsFeedErrorType>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { actions, reducer, name: sliceKey } = newsFeedSlice;
