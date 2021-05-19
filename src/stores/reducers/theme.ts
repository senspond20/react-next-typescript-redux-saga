import { ActionProps } from '../types/state';
import {ThemeType} from "@components/Templates/styles/Theme";

/**
 * 기본테마
 */
const initialState = {
    mode : ThemeType.light
};

const handle = (state = initialState, action: ActionProps) => {
    switch (action.type) {
        case ThemeType.dark:
            return { ...state, mode: state.mode = ThemeType.dark }
        case ThemeType.light:
            return { ...state, mode: state.mode = ThemeType.light }
        default:
            return state;
    }
}
export default handle;