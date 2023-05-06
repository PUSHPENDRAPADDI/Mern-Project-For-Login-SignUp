import { connect } from 'react-redux';
import { Actions } from '../Action/index';
import CreateAccount from '../Component/CreateAccount';

const mapStateToProps = (state) => {
    return {
        createdUser: state.login.createdUser,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createAccount: (inputdata) => {
            return (
                dispatch(Actions.createAccount(inputdata))
            )
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);
