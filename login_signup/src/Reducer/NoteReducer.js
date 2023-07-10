import { Constant } from "../Constants";

const initialState = {
    note_create_status: "",
    note_list: [],
    Edit_note:{},
    Edit_note_id:'',
};

const NoteReducer = (state = initialState, action) => {
    switch (action.type) {
        case Constant.CREATENOTE:
            return {
                ...state,
                note_create_status: "Note is create"
            };
        case Constant.GETNOTES:
            return {
                ...state,
                note_list: action.payload
            };
        case Constant.EDITNOTES:
            return{
                ...state,
                Edit_note: action.payload,
                Edit_note_id: action.payload._id
            }
        default:
            return state;
    }
};

export default NoteReducer;
