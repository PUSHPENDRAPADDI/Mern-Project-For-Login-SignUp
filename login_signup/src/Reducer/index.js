import { Constant } from "../Constants";

const initialState = {
  count: 0
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

      }
    default:
      return state;
  }
};

export default reducer;
