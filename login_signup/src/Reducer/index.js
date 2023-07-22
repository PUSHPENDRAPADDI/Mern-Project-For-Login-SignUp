import { Constant } from "../Constants";

const initialState = {
  count: 0,
  userData: {},
  createdUser: "",
  userName:"",
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
        userData: action.payload,
        userName: action.payload.name.split(' ').filter(word => word !== '').map(word => word[0]).join('')
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
