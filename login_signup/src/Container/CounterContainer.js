import { connect } from 'react-redux';
import Counter from '../Component/Counter';
import { Actions } from '../Action/index';

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(Actions.increment()),
    decrement: () => dispatch(Actions.decrement())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
