import { store } from '../store';
import { AuthorizationStatus } from '../const';
import { UserData } from './userData';
import { Film } from './film';
import { Genre } from '../const';
import { Comment } from './comment';

export type State = ReturnType<typeof store.getState>;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  user: UserData | null;
}

export type FilmData = {
  genre: Genre;
  isLoading: boolean;
  listOfFilms: Film[];
  promoFilm: Film | null;
  favouriteFilms: Film[];
  currentFilm: Film | null;
  comments: Comment[];
  similarFilms: Film[];
}

export type CurrentFilmData = {
  currentFilm: Film | null;
  comments: Comment[];
  similarFilms: Film[];
}

export type AppDispatch = typeof store.dispatch;
