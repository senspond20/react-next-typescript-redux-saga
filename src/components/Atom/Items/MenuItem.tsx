import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Item = styled.li`
    
`;
export type MenuItemType ={
    link : string,
    name : string,
    className? : string
}
const MenuItemOne = (prop : MenuItemType) =>{
    return (<Item className={prop.className}><Link href={prop.link}><a>{prop.name}</a></Link></Item>);
};

export default MenuItemOne;
// export MenuItemOne;