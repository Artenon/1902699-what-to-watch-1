import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Film } from '../../types/film';
import { Genre } from '../../const';
import { Comment } from '../../types/comment';

export const getLoadingStatus = (state: State): boolean => state[NameSpace.Data].isLoading;

export const getFilms = (state: State): Film[] => state[NameSpace.Data].listOfFilms;

export const getPromoFilm = (state: State): Film | null => state[NameSpace.Data].promoFilm;

export const getFavouriteFilms = (state: State): Film[] => state[NameSpace.Data].favouriteFilms;

export const getGenre = (state: State): Genre => state[NameSpace.Data].genre;

export const getCurrentFilm = (state: State): Film | null => state[NameSpace.Data].currentFilm;

export const getComments = (state: State): Comment[] => state[NameSpace.Data].comments;

export const getSimilarFilms = (state: State): Film[] => state[NameSpace.Data].similarFilms;
