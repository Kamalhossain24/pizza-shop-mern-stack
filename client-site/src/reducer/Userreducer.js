import { bindActionCreators } from "redux";

export const regiterUserReducer = (state = {}, action) => {
    switch (action.type) {
        case 'REGISTER_USER_REQUIEST':
            return {
                loading: true
            }
        case 'REGISTER_USER_SUCCESS':
            return {
                loading: false,
                success: true
            }
        case 'REGISTER_USER_FAIL':
            return {
                loading: true,
                error: action.payload
            }

        default:
            return {
                state
            }
    }
}


export const loginUserReducer = (state = {}, action) => {
    switch (action.type) {
      case "USER_LOGIN_REQUEST":
        return {
          loading: true,
        };
      case "USER_LOGIN_SUCCESS":
        return {
          loading: false,
          success: true,
          currentUser: action.payload,
        };
      case "USER_LOGIN_FAIL":
        return {
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };


  
export const getAllUsersReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "GET_USERS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_USERS_SUCCESS":
      return {
        users: action.payload,
        loading: false,
      };
    case "GET_USERS_FAIL":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
