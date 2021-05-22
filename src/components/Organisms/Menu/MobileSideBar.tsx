import React from "react"
import styled from "styled-components"
import {MenuItemType} from "@components/Atom/Items/MenuItem";
import MenuList from "@components/Molecules/List/MenuList";

const Container = styled.div`
    .background-wrap{
      width: 100vw;  height: 100vh;
      background: rgba(0,0,0,0.45);
      position: fixed;  left: 0; top:0; bottom: 0; right: 0;
    }
    .mobile-wrap{
        width: 457px; height: 100vh; background-color: #eee;
        z-index: 800; position: fixed; top:0; right: 0;
    }
`;
const list : MenuItemType[]= [
    {link:"/web1", name:"web1"},
    {link:"/web2", name:"web2"},
    {link:"/web3", name:"web3"},
    {link:"/web4", name:"web4"},
]
const MobileMenu = () =>(<MenuList list={list} className={'aside-menu'}/> )

export default function MobileSideBar(){
    return (
        <Container>
            <div className={'background-wrap'}></div>
            <div className='mobile-wrap'>
                <MobileMenu/>
            </div>
        </Container>
    )
}