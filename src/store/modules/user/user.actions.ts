import { IUser } from './user.types';
import { IFetchUserData, ISetUserData } from './user.types';

export const FETCH_USER_DATA = 'FETCH_USER_DATA';
export const SET_USER_DATA = 'SET_USER_DATA';

export const fetchUserData = (id: number): IFetchUserData => ({
  type: FETCH_USER_DATA,
  payload: id
});

export const setUserData = (data: IUser): ISetUserData => ({
  type: SET_USER_DATA,
  payload: data,
});
