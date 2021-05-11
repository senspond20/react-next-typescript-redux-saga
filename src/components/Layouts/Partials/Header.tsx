import React, { useCallback } from "react";
import styled from "styled-components";
import {commonStyle} from "@components/Layouts/Theme";
import Link from "next/link";
import {useDispatch} from "react-redux";

import { dark, light } from "@stores/actions/theme";
const Nav = styled.ul`
    ${commonStyle.flex.flexCenter};
    
`;
const NavItem = styled.li`
    margin : ${commonStyle.margins.base};
`;
type Props ={
    isLight : boolean,
    mode : string;
}
function handle(prop : Props){
    const dispatch = useDispatch();
    const toggleTheme = () =>{ (prop.isLight) ? onDark() : onLight() }
    const onDark = useCallback(() => { dispatch(dark())}, [])
    const onLight = useCallback(() =>{ dispatch(light())}, [])

    return(
        <header>
            <Nav>
                <NavItem><Link href={'/'}><a>Home</a></Link></NavItem>
                <NavItem><Link href={'/counter'}><a>Counter(CSR)</a></Link></NavItem>
                <NavItem><a href={'/counter'}>Counter(SSR)</a></NavItem>
                <NavItem>   
                    <div>
                        <p>현재 모드 : {prop.mode}</p>
                        <button onClick={toggleTheme}>Switch</button>
                    </div>  
                </NavItem>
            </Nav>
        </header>
    )
}


export default handle;
