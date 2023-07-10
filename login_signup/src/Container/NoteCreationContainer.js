import { connect } from 'react-redux';
import NoteCreation from '../Component/NoteCreation';
import { NotesActions } from '../Action/NotesActions'

const mapStateToProps = (state) => {
    return {
        userData: state.login.userData,
        Edit_note: state.NoteReducer.Edit_note,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createNotes: (newNotes) => {
            return (
                dispatch(NotesActions.createNotes(newNotes))
            )
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteCreation);
