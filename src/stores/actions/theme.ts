import {ThemeType} from "@components/Templates/styles/Theme";

export const Theme = {
    dark :'dark',
    light: 'light'
};

export const dark = () => ({type: ThemeType.dark})
export const light = () => ({type: ThemeType.light})


