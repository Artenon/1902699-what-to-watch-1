import { createReducer } from '@reduxjs/toolkit';
import { promoFilm } from '../mocks/promoFilm';
import { Genre } from '../const';
import { changeGenre, sortFilmsByGenre, loadFilms, setLoadingStatus } from './actions';
import { Film } from '../types/film';
import { Promo } from '../types/promo';

type stateType = {
  genre: Genre;
  listOfFilms: Film[];
  promoFilm: Promo;
  favouriteFilms: Film[];
  isLoading: boolean;
}

const initialState: stateType = {
  genre: Genre.AllGenres,
  listOfFilms: [],
  promoFilm,
  favouriteFilms: [],
  isLoading: true
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(sortFilmsByGenre, (state) => {
      state.listOfFilms = state.listOfFilms.filter((film) => {
        if (state.genre === Genre.AllGenres) {
          return state.listOfFilms;
        }
        else if (state.genre === film.genre) {
          return film;
        }
        return null;
      });
    })
    .addCase(loadFilms, (state, action) => {
      state.listOfFilms = action.payload;
    })
    .addCase(setLoadingStatus, (state, action) => {
      state.isLoading = action.payload;
    });
});
