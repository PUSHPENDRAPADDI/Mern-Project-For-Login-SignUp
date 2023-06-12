import { Constant } from "../Constants";
import axios from "axios";
import urlConstants from "../UrlConstants/urlConstants";

export const NotesActions = {
    createNotes: (newNotes) => {
        return (dispatch, getState) => {
            const updatedNotes = {
                ...newNotes,
                email: getState().login.userData.email,
            };
            axios.post(urlConstants.CREATENOTES, updatedNotes)
                .then(response => {
                    if (response.data.status === Constant.SUCCESS) {
                        dispatch({
                            type: Constant.CREATENOTE
                        })
                        dispatch(NotesActions.getNotes())
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
            axios.get(urlConstants.NOTES + "sunnyrony3011@gmail.com")
                .then(response => {
                    debugger
                    if (response.data.status === Constant.SUCCESS) {
                        console.log(response.data, "Thi saction");
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
};