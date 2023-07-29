import { connect } from 'react-redux';
import Navbar from '../Common/NavBar';
import { NotesActions } from '../Action/NotesActions';

const mapStateToProps = (state) => {
    return {
        userData: state.login.userData,
        userName: state.login.userName,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
