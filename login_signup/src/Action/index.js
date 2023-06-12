import { Constant } from "../Constants";
import axios from "axios";
import urlConstants from "../UrlConstants/urlConstants";

export const Actions = {
    increment: () => {
        return {
            type: Constant.INCREMENT
        };
    },
    decrement: () => {
        return {
            type: Constant.DECREMENT
        };
    },
    login: (userDetails) => {
        return (dispatch, getState) => {
            const currentState = getState();
            axios.post(urlConstants.LOGIN, userDetails)
                .then(response => {
                    if (response.data.authoken) {
                        dispatch({
                            type: Constant.LOGIN,
                            payload: response.data.userData
                        })
                        // dispatch(push('/'));
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },
    createAccount: (userDetails) => {
        return (dispatch, getState) => {
            axios.post(urlConstants.CREATEACCOUNT, userDetails)
                .then(response => {
                    if (response.data.authoken) {
                        dispatch({
                            type: Constant.CREATEACCOUNT,
                            payload: response.data.authoken
                        })
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
};
