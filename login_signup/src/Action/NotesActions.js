import { Constant } from "../Constants";
import axios from "axios";
import urlConstants from "../UrlConstants/urlConstants";

export const NotesActions = {
    createNotes: (newNotes) => {
        return (dispatch, getState) => {
            const updatedNotes = {
                ...newNotes,
                email: getState().login.userData.email,
                idForfind: getState().NoteReducer.Edit_note_id
            };
            const formData = new FormData();
            formData.append('title', updatedNotes.title)
            formData.append('description', updatedNotes.description)
            formData.append('image', updatedNotes.image)
            formData.append('email', updatedNotes.email)
            formData.append('idForfind', updatedNotes.idForfind)
            axios.post(urlConstants.CREATENOTES, formData)
                .then(response => {
                    if (response.data.status === Constant.SUCCESS) {
                        dispatch({
                            type: Constant.CREATENOTE
                        })
                        dispatch(NotesActions.getNotes());
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },
    getNotes: () => {
        return (dispatch, getState) => {
            const email = getState().login.userData.email
            axios.get(urlConstants.NOTES + email)
                .then(response => {
                    if (response.data.status === Constant.SUCCESS) {
                        dispatch({
                            type: Constant.GETNOTES,
                            payload: response.data.notes
                        })
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },
    forEdit: (item) => {
        return (dispatch, getState) => {
            dispatch({
                type: Constant.EDITNOTES,
                payload: item
            })
        }
    },
    resetEditData: () => {
        return (dispatch, getState) => {
            dispatch(
                {
                    type: Constant.RESET_EDITDATA
                }
            )
        }
    }
};