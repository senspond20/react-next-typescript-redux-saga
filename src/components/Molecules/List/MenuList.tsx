import React from "react";
import styled from "styled-components";
import MenuItemOne, { MenuItemType} from "../../Atom/Items/MenuItem";

const MenuList = styled.ul`
`;

type Props = {
    className? : string
    list : MenuItemType[]
}

const handle = (props : Props) =>{
    return(
        <MenuList className={props.className}>
            {props.list.map((e, idx) =>{
                return (<MenuItemOne key ={idx} className={e.className} name={e.name} link={e.link}/>)
            })}
        </MenuList>
    )
}

export default handle;