import React from 'react';
import styled from "styled-components";
import common from "@components/Templates/styles/Common";
import MenuList from "@components/Atom/Utils/MenuList";
import {Item} from "@components/Atom/Utils/MenuItem";

const HeroWrapper = styled.header`
  height: 50px;
  float: left;
  .hero-top-nav {
    display: flex;
    padding: 10px 15px;
  }
  .hero-top-nav li {
    list-style: none;
    margin: 0 15px 0 0;
  }
  a:hover {
    color: #468aac;
  }
`;
const navList : Item[]=
    [
        {link:'/', name :'home'},
        {link:'/blog', name :'blog'},
        {link:'/service', name :'Service'},
        {link:'/about', name :'About'},
        {link:'/admin', name :'Admin'},
        {link:'/category2', name :'Category'}
    ];

function Hero(){
    return(
        <HeroWrapper className={"top-hero"}>
            <MenuList className={"hero-top-nav"} list={navList}/>
        </HeroWrapper>
    )
}
export default Hero;