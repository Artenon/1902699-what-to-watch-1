import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { redirect } from './actions';
import { AppDispatch, State } from '../types/state';
import { Film } from '../types/film';
import { Comment } from '../types/comment';
import { AuthData } from '../types/authData';
import { UserData } from '../types/userData';
import { PostCommentData } from '../types/postCommentData';
import { APIRoute, AppRoute } from '../const';
import { saveUser, removeUser } from '../services/user';
import { toastifyOptions } from '../const';

export const fetchFilms = createAsyncThunk<Film[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}
>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Film[]>(APIRoute.Films);
    dispatch(fetchPromoFilm());
    return data;
  }
);

export const fetchPromoFilm = createAsyncThunk<Film, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}
>(
  'data/fetchPromoFilm',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Film>(APIRoute.Promo);
    return data;
  }
);

export const fetchFilmById = createAsyncThunk<Film, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}
>(
  'data/fetchFilmById',
  async (filmId, {dispatch, extra: api}) => {
    const {data} = await api.get<Film>(`${APIRoute.Films}/${filmId}`);
    dispatch(fetchCommentsById(filmId));
    dispatch(fetchSimilarFilmsById(filmId));
    return data;
  }
);

export const fetchCommentsById = createAsyncThunk<Comment[], string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}
>(
  'data/fetchCommentsById',
  async (filmId, {dispatch, extra: api}) => {
    const {data} = await api.get<Comment[]>(`${APIRoute.Comments}/${filmId}`);
    return data;
  }
);

export const fetchSimilarFilmsById = createAsyncThunk<Film[], string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}
>(
  'data/fetchSimilarFilmsById',
  async (filmId, {dispatch, extra: api}) => {
    const {data} = await api.get<Film[]>(`${APIRoute.Films}/${filmId}${APIRoute.Similar}`);
    return data;
  }
);

export const getAuthorizationStatus = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}
>(
  'user/getAuthorizationStatus',
  async (_arg, {dispatch, extra: api}) => {
    await api.get(APIRoute.Login);
  }
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}
>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveUser(data);
    Reflect.deleteProperty(data, 'token');
    dispatch(redirect(AppRoute.Main));
    toast.success('You have logged in!', toastifyOptions);
    return data;
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}
>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    removeUser();
    dispatch(redirect(AppRoute.Login));
    toast.error('You have logged out!', toastifyOptions);
  }
);

export const postComment = createAsyncThunk<Comment[], PostCommentData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}
>(
  'data/postComment',
  async ({filmId, comment, rating}, {dispatch, extra: api}) => {
    const {data} = await api.post<Comment[]>(`${APIRoute.Comments}/${filmId}`, {comment, rating});
    return data;
  }
);
