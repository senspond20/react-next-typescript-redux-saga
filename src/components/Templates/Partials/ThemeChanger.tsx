import React, {useCallback} from "react";
import {dark, light} from "@stores/actions/theme";
import {useDispatch} from "react-redux";

type Props ={
    mode : boolean;
}

const ThemeChanger = (props : Props) =>{
    const dispatch = useDispatch();
    const onDark = useCallback(() => { dispatch(dark())}, [])
    const onLight = useCallback(() =>{ dispatch(light())}, [])
    const toggleTheme = () =>{ (props.mode) ? onDark() : onLight() }

    return (
        <button onClick={toggleTheme}>테마스위치</button>
    )
}
export default ThemeChanger;