import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import common from "@components/Templates/styles/Common";
import MobileMenu from "@components/Organisms/Menu/MobileMenu";
import HamburgerButton from "@components/Atom/Buttons/HamburgerButton";
import {MenuItemType} from "@components/Atom/Items/MenuItem";
import MenuList from "@components/Molecules/List/MenuList";


const HeaderWrapper = styled.header`
  content: ''; clear: both; //padding: 1em;
  grid-column: 1 / 4; z-index: 1000;
  //width: auto;
  //height: 50px;
  /* background-color:background: rgb(2,0,36); */
//background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
/* background : ${({theme}) => theme.body.fgColor}; */
  /* background-color: ${common.palette.BLUE[9]}; */
  border-bottom: 1px solid #eee;
  /* ${common.flex.flexCenter}; */
  
  .hamburger-wrap{
    position: fixed;
    top : 8px;
    right: 15px;
    opacity: 1;
    z-index: 9999;
    
  }
  .header-nav {
    //background-color: #12212f;
    overflow: hidden;
    background: #fefeff;
    ul {
      list-style: none;
      //max-width: 900px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      //justify-content: space-between;
    }
    li {
      //@media (max-width: 700px) {
      //  width: 50%;
      //  text-align: center;
      //}
      padding: 10px 10px;
    }
    a {
      /* Tilmelding: */
      font-weight: 500;
      font-size: 1em;
      text-transform: uppercase;
      //color: #fff;
      text-decoration: none;
    }
  }
  //@media(max-width: 1150px) {
  //  .hamburger-wrap {
  //    opacity: 1 !important;
  //  }
  //}
`;




const navList : MenuItemType[]=
    [
        {link:'/', name :'home'},
        {link:'/blog', name :'blog'},
        {link:'/service', name :'Service'},
        {link:'/about', name :'About'},
        // {link:'/admin', name :'Admin'},
        // {link:'/category2', name :'Category'}
    ];

// http://blog.302chanwoo.com/2016/08/react-redux-resize/ 
// 이거 해보자
function Header(){
    const [isShowSideBar, setShowSideBar] = useState(false);

    const ToggleHamburger = (e: { preventDefault: () => void; } )=>{
        e.preventDefault();
        (isShowSideBar) ? close() : open();
    }
    const body = document.querySelector('body');

    /**
     * 사이드바 열기
     */
    function open(){
        setShowSideBar(true)
        // @ts-ignore
        body.style.overflow='hidden'; // 사이드바를 열였을때 스크롤바 없애기
    }

    /**
     * 사이드바 닫기
     */
    function close(){
        setShowSideBar(false);
        // @ts-ignore
        body.style.overflow='visible';
    }

    /**
     * 사이드바를 열여놓고 리사이즈를 해버릴 경우 닫아버린다
     */
    useEffect(()=>{
        window.addEventListener("resize", close);
        return () => window.removeEventListener("resize", close);
    },[])

    return(
        <HeaderWrapper className={'header-wrap'}>
            <nav className={'header-nav'}>
                <MenuList className={"top-nav"} list={navList}/>
                <div className ='hamburger-wrap' onClick={ToggleHamburger}>
                    <HamburgerButton isChecked={isShowSideBar}/>
                </div>

            </nav>
            <div>
            {isShowSideBar ? <MobileMenu/> : null}
        </div>
        </HeaderWrapper>
    )
}
export default Header;