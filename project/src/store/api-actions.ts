import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { loadFilms, loadPromoFilm, setLoadingStatus, updateAuthorizationStatus, loadUserData } from './actions';
import { AppDispatch, State } from '../types/state';
import { Film } from '../types/film';
import { AuthData } from '../types/authData';
import { UserData } from '../types/userData';
import { APIRoute, AuthorizationStatus } from '../const';
import { saveToken } from '../services/token';

export const fetchFilms = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}
>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    const films = await api.get<Film[]>(APIRoute.Films);
    dispatch(loadFilms(films.data));

    const promoFilm = await api.get<Film>(APIRoute.Promo);
    dispatch(loadPromoFilm(promoFilm.data));

    dispatch(setLoadingStatus(false));
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
    await api.get(APIRoute.Login)
      .catch((error) => {
        if (error) {
          dispatch(updateAuthorizationStatus(AuthorizationStatus.NoAuth));
        } else {
          dispatch(updateAuthorizationStatus(AuthorizationStatus.Auth));
        }
      });
  }
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}
>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(updateAuthorizationStatus(AuthorizationStatus.Auth));
    dispatch(loadUserData(data));
  }
);
