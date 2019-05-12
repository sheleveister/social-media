import * as _ from './user.actions';

export interface IUser {
  id: number,
  avatar: string,
  nickname: string,
  name: string,
  description: string,
  posts_count: number
}

export interface IFetchUserData {
  type: typeof _.FETCH_USER_DATA,
  payload: number
}

export interface ISetUserData {
  type: typeof _.SET_USER_DATA,
  payload: IUser
}

export type IUserActionTypes =
  IFetchUserData |
  ISetUserData;

export interface IUserState {
  loading: boolean,
  id: number|null,
  avatar: string,
  nickname: string,
  name: string,
  description: string,
  posts_count: number|null
}
