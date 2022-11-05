import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Film } from '../../types/film';
import { AllGenres } from '../../const';

export const getLoadingStatus = (state: State): boolean => state[NameSpace.Data].isLoading;

export const getFilms = (state: State): Film[] => state[NameSpace.Data].listOfFilms;

export const getPromoFilm = (state: State): Film | null => state[NameSpace.Data].promoFilm;

export const getFavouriteFilms = (state: State): Film[] => state[NameSpace.Data].favouriteFilms;

export const getCurrentGenre = (state: State): string => state[NameSpace.Data].currentGenre;

export const getGenres = (state: State): string[] => state[NameSpace.Data].genres;

export const filterFilmsByGenre = createSelector(
  [getCurrentGenre, getFilms],
  (genre, films) => {
    if (genre === AllGenres) {
      return films;
    }

    return films.filter((film) => film.genre === genre);
  }
);
