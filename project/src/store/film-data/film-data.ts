import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { FilmData } from '../../types/state';
import { fetchFilms, fetchPromoFilm } from '../api-actions';
import { Genre } from '../../const';
import { toast } from 'react-toastify';
import { toastifyOptions } from '../../const';

const initialState: FilmData = {
  listOfFilms: [],
  promoFilm: null,
  favouriteFilms: [],
  isLoading: true,
  genre: Genre.AllGenres
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
      });
  }
});
