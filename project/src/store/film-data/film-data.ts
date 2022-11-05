import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { FilmData } from '../../types/state';
import {
  fetchFilms,
  fetchPromoFilm,
  fetchFilmById,
  fetchCommentsById,
  fetchSimilarFilmsById,
  postComment
} from '../api-actions';
import { Genre } from '../../const';
import { toast } from 'react-toastify';
import { toastifyOptions } from '../../const';

const initialState: FilmData = {
  listOfFilms: [],
  promoFilm: null,
  favouriteFilms: [],
  isLoading: true,
  genre: Genre.AllGenres,
  currentFilm: null,
  comments: [],
  similarFilms: []
};

export const filmData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilms.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.listOfFilms = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchFilms.rejected, (state) => {
        toast.error('Couldn\'t get films', toastifyOptions);
      })
      .addCase(fetchPromoFilm.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPromoFilm.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchFilmById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFilmById.fulfilled, (state, action) => {
        state.currentFilm = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCommentsById.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(fetchSimilarFilmsById.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
      })
      .addCase(postComment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.comments = action.payload;
      });
  }
});
