import { Constant } from "../Constants";

const initialState = {
  count: 0,
  userData: {},
  createdUser: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Constant.INCREMENT:
      return {
        count: state.count + 1
      };
    case Constant.DECREMENT:
      return {
        count: state.count - 1
      };
    case Constant.LOGIN:
      return {
        userData: action.payload
      }
    case Constant.CREATEACCOUNT:
      return {
        createdUser: action.payload
      }
    default:
      return state;
  }
};

export default reducer;
