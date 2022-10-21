import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { loadFilms, loadPromoFilm, setLoadingStatus, updateAuthorizationStatus } from './actions';
import { AppDispatch, State } from '../types/state';
import { Film } from '../types/film';
import { APIRoute, AuthorizationStatus } from '../const';

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

export const getLoginRequest = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}
>(
  'login/getLoginRequest',
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
