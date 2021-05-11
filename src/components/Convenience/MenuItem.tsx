import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Item = styled.li`
    
`;
type TopBarProp ={
    link : string, name : string
}
const MenuItem = (prop : TopBarProp) =>{
    return (<Item><Link href={prop.link}><a>{prop.name}</a></Link></Item>);
};

export default MenuItem;