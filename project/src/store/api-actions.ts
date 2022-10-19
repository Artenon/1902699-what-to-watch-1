import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { loadFilms, setLoadingStatus } from './actions';
import { AppDispatch, State } from '../types/state';
import { Film } from '../types/film';
import { APIRoute } from '../const';

export const fetchFilms = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}
>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Film[]>(APIRoute.Films);
    dispatch(loadFilms(data));
    dispatch(setLoadingStatus(false));
  }
);
