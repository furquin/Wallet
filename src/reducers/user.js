import { USER_INFO } from '../actions';

const INITIAL_STATE = {
  email: '',
  senha: '',

};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER_INFO: {
    return {
      email: action.email,
    };
  }

  default:
    return state;
  }
};

export default user;
