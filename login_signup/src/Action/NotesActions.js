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
                    console.log(response.data, "THis is here");
                    if (response.data.status === Constant.SUCCESS) {
                        dispatch({
                            type: Constant.CREATENOTE
                        })
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },
};