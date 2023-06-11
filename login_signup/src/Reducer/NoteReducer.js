import { Constant } from "../Constants";

const initialState = {
    note_create_status: ""
};

const NoteReducer = (state = initialState, action) => {
    switch (action.type) {
        case Constant.CREATENOTE:
            return {
                note_create_status: "Note is create"
            };
        default:
            return state;
    }
};

export default NoteReducer;
