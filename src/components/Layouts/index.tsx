import {commonStyle, darkTheme, lightTheme} from '@components/Layouts/Theme';
import Link from 'next/link';
import Image from 'next/image';
import React, {Children, ReactNode, useCallback, useEffect} from 'react';
import styled, {ThemeProvider} from 'styled-components';
import MenuItem, {Item} from "@components/Convenience/MenuItem";
import GotoTop from "@components/Convenience/GotoTop";
import MenuList from "@components/Convenience/MenuList";
import GlobalStyles from "@components/Layouts/globalStyle";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@stores/reducers";
import {dark, light} from "@stores/actions/theme";
import {Theme} from "@stores/actions/actionTypes";
import TextLogo from "@components/Icon/TextLogo";

const Wrapper = styled.div`
  width: 100%;
`;

const GridWrap = styled.section`
  max-width: 1450px;
  margin:0 auto;
  gap: .5em;
`;


const ToggleSideBar = ()=>{
    document.querySelector('blog-sidebar')?.classList.add('');
}


const Anno = styled.p`
  color: #4ba1c3;
`


const Hero = styled.div`
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


const Header = styled.header`
  content: '';
  clear: both;
  padding: 1em;
  grid-column: 1 / 4;
  z-index: 1000;
  width: auto;
  height: 50px;
  /* background-color: #fefefe; */
  background-color: #f3f3f8;
  border-bottom: 1px solid #eee;
  // ${commonStyle.flex.flexCenter} 
          //a {
          //  color:#fff;
          //}
  //position: sticky;
  //top: 0;
`;


const Footer = styled.footer`
  padding: 1em;
  //width: 1450px;
  //background: #333;
  border-top: 1px solid #eee;
  grid-column: 1 / 4;
  text-align:center;
    // ${commonStyle.border.boarderlic};
`;
const FooterHighlight = styled.footer`
  //width:1400px; 
  border-bottom: 1px solid #eeeeee;
  /* background-color:red; */
  //text-align:center;
//  ${commonStyle.flex.flexCenter};
`





const Content = styled.div`
  min-height: 980px;
  
`

const ToggleBtn = styled.div`
  float: right;
  cursor: pointer;
`;


/**
 *
 */
type Props = {
    children?: ReactNode
    title?: string
};
const navList : Item[]=
    [
        {link:'/', name :'home'},
        {link:'/blog', name :'blog'},
        {link:'/service', name :'Service'},
        {link:'/about', name :'About'},
        {link:'/admin', name :'Admin'}
    ];

const handle =({children} : Props)=>{


    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state.theme)

    let isLight = state.mode === Theme.light;
    const theme = (isLight) ? lightTheme : darkTheme;

    const toggleTheme = () =>{ (isLight) ? onDark() : onLight() }
    const onDark = useCallback(() => { dispatch(dark())}, [])
    const onLight = useCallback(() =>{ dispatch(light())}, [])

    return(
     <ThemeProvider theme={theme}>
        <GlobalStyles />
         <Wrapper>
            <GridWrap>
                <Hero className={"top-hero"}>

                    <MenuList className={"hero-top-nav"} list={navList}/>
                </Hero>
                <Header>
                    <div>
                        <ToggleBtn onClick={ToggleSideBar}>Toggle</ToggleBtn>


                        <button onClick={toggleTheme}>테마스위치</button>


                        {/* <Anno>header</Anno> */}
                        {/*<div>*/}
                        {/*    <input type={'text'} placeholder={'검색어를 입력해주세요'}></input>*/}
                        {/*    <HeaderMenu className='headerMenu'>*/}
                        {/*        <MenuItem link={'/'} name={'Home'}/>*/}
                        {/*        <MenuItem link={'/blog'} name={'Blog'}/>*/}
                        {/*        <MenuItem link={'/service'} name={'Service'}/>*/}
                        {/*        <MenuItem link={'/about'} name={'About'}/>*/}
                        {/*    </HeaderMenu>*/}
                        {/*    <ThemeSwitchWrap>테마스위치 Light/Dark</ThemeSwitchWrap>*/}
                        {/*    <button onClick={ToggleSideBar}>Toggle</button>*/}
                        {/*</div>*/}


                    </div>
                </Header>


                <section>
                    {/*<ContentWrapper>*/}
                    {/*    <div>*/}
                            <Content>
                                {children}
                            </Content>
                    {/*    </div>*/}
                    {/*</ContentWrapper>*/}
                </section>
                <Footer>
                    {/*<Anno>footer</Anno>*/}
                    <FooterHighlight>
                        {/*<div>*/}
                            <TextLogo text={'S`ㅂㄺ!'}/>

                            {/*<address>dfdfd.com</address>*/}
                        {/*</div>*/}
                    </FooterHighlight>
                    <div>
                        <p style={{color:'red'}}>footer</p>
                    </div>

                </Footer>
                <GotoTop />
            </GridWrap>
        </Wrapper>
     </ThemeProvider>
    )
}
export default handle;