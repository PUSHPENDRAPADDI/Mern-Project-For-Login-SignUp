import { Constant } from "../Constants";
import axios from "axios"

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
        return (dispatch) => {
        }
    }
};
