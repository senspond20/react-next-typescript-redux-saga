import {Theme} from './actionTypes';

export const dark = () => {
    return {
        type: Theme.dark
    }
}

export const light = () => {
    return {
        type: Theme.light
    }
}
