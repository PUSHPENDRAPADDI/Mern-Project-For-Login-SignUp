import { Constant } from "../Constants";

const initialState = {
    note_create_status: "",
    note_list: [],
};

const NoteReducer = (state = initialState, action) => {
    switch (action.type) {
        case Constant.CREATENOTE:
            return {
                note_create_status: "Note is create"
            };
        case Constant.GETNOTES:
            return {
                note_list: action.payload
            };
        default:
            return state;
    }
};

export default NoteReducer;
