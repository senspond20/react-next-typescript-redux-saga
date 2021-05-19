import { ActionProps } from '../types/state';
import {Theme} from '../actions/theme'
import React from "react";

/**
 * 기본테마
 */
const initialState = {
    mode : Theme.light
};

const handle = (state = initialState, action: ActionProps) => {
    switch (action.type) {
        case Theme.dark:
            return { ...state, mode: state.mode = Theme.dark }
        case Theme.light:
            return { ...state, mode: state.mode = Theme.light }
        default:
            return state;
    }
}
export default handle;