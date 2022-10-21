import { UserData } from '../types/userData';

const KEY_NAME = 'user-data';

export const getUser = (): UserData | null => {
  const user = localStorage.getItem(KEY_NAME);
  return user !== null ? JSON.parse(user) : null;
};

export const saveUser = (user: UserData): void => {
  localStorage.setItem(KEY_NAME, JSON.stringify(user));
};

export const removeUser = (): void => {
  localStorage.removeItem(KEY_NAME);
};
