import * as _ from './user.actions';
import { IUserState, IUserActionTypes } from './user.types';

const initialState: IUserState = {
  loading: false,
  id: null,
  avatar: '',
  nickname: '',
  name: '',
  description: '',
  posts_count: null,
};

export default (state = initialState, action: IUserActionTypes) => {
  switch (action.type) {
    case _.FETCH_USER_DATA:
      return {
        ...state,
      };

    case _.SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}
