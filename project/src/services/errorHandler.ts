import { store } from '../store';
import { setError } from '../store/actions';
import { cleanError } from '../store/api-actions';

export const errorHandler = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(cleanError());
};
