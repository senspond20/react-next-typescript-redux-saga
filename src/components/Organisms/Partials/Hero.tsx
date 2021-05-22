import React from 'react';
import Image from "next/image";
import styled from "styled-components";
import common from "@components/Templates/styles/Common";
import MenuList from "@components/Molecules/List/MenuList";
import {MenuItemType} from "@components/Atom/Items/MenuItem";
import TextLogo from "@components/Atom/Icon/TextLogo";

const HeroWrapper = styled.header`
  width: 100%;
  height: 300px;
  float: left;
  //background: #0055aa;
  //background: url('https://source.unsplash.com/a2NRu2Wxa2o/');
  //background-size: cover;
  //background-position: center;
  
`;


function Hero(){
    const url : string = 'https://images.unsplash.com/photo-1509718443690-d8e2fb3474b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60';
    return(
        <HeroWrapper className={"top-hero"}>
            {/*<TextLogo text={'Welcome'}/>*/}
            {/*<MenuList className={"hero-top-nav"} list={navList}/>*/}
            {/*<Image src={'https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'}*/}
            {/*        alt={''}*/}
            {/*        width={'100%'}*/}
            {/*        height={'100%'}/>*/}
            {/*<img src={url} width={'100vw'} height={'100%'}/>*/}
            <div className="hero">

                <div className="parallax-layer layer-6"></div>
                <div className="parallax-layer layer-5"></div>
                <div className="parallax-layer layer-4"></div>
                <div className="parallax-layer bike-1"></div>
                <div className="parallax-layer bike-2"></div>
                <div className="parallax-layer layer-3"></div>
                <div className="parallax-layer layer-2"></div>
                <div className="parallax-layer layer-1"></div>
                <div className="logo">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/24650/logo.svg" alt=""/>
                    {/*<TextLogo text={'안녕하세요'}/>*/}
                </div>
            </div>

            {/*<nav className={'header-nav'}>*/}
            {/*    <ul>*/}
            {/*        <li><a href="#">Forside</a></li>*/}
            {/*        <li><a href="#">Vejr</a></li>*/}
            {/*        <li><a href="#">Tilmelding</a></li>*/}
            {/*        <li><a href="#">Galleri</a></li>*/}
            {/*        <li><a href="#">Sponsorer</a></li>*/}
            {/*        <li><a href="#">kontakt</a></li>*/}
            {/*    </ul>*/}
            {/*</nav>*/}


            {/*<script>*/}
            {/*    WebFontConfig = {*/}
            {/*    google: {families: [ 'Lato:400,300,300italic,400italic,700,700italic,900,900italic:latin' ]}*/}
            {/*};*/}
            {/*    (function() {*/}
            {/*    var wf = document.createElement('script');*/}
            {/*    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';*/}
            {/*    wf.type = 'text/javascript';*/}
            {/*    wf.async = 'true';*/}
            {/*    var s = document.getElementsByTagName('script')[0];*/}
            {/*    s.parentNode.insertBefore(wf, s);*/}
            {/*})();*/}
            {/*</script>*/}
        </HeroWrapper>
    )
}

export default Hero;