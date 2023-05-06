import { connect } from 'react-redux';
import { Actions } from '../Action/index';
import Login from '../Component/Login';

const mapStateToProps = (state) => {
  return {
    count: state.count,
    userData: state.userData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (userDetails) => {
      return (
        dispatch(Actions.login(userDetails))
      )
    },
    decrement: () => dispatch(Actions.decrement())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
