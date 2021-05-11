import { commonStyle } from '@components/Layouts/Theme';
import Link from 'next/link';
import Image from 'next/image';
import React, {Children, ReactNode} from 'react';
import styled from 'styled-components';
import MenuItem from "@components/Convenience/MenuItem";
import GotoTop from "@components/Convenience/GotoTop";

const Wrapper = styled.div`
  width: 100%;
  ${commonStyle.flex.flexJustify};
  @media(max-width: 1450px){
    .headerMenu{
      display:block;
    }
    .toc{
      grid-row: 4 / 5;
      grid-column: 1 / 4;
    }
    //.home-toc{
    //  display: none;
    //}
    .blog-main{
      grid-column: 1 / 4;
    }
    /* aside{
        grid-row: 3 / 5;
        grid-column: 1 / 4;
    } */
  }
  @media(max-width: 800px){
    .home-card-wrap{
      grid-column: 1 / 4;
    }
  }

`;
const GridWrap = styled.section`
  max-width: 1450px;
  gap: .5em;

`;
const Header = styled.header`
  padding: 1em;
  grid-column: 1 / 4;
  z-index:1000;
  height:30px;
  /* background-color: #fefefe; */
  background-color: #0f3d57;
  ${commonStyle.flex.flexCenter}
      /* ${commonStyle.border.boarderlic} */
  a {
    color:#fff;
  }
  position:sticky;
  top:0;
`;


const Footer = styled.footer`
  padding: 1em;
  //width: 1450px;
  grid-column: 1 / 4;
  ${commonStyle.border.boarderlic};
`;
const FooterItem = styled.footer`
  //width:1400px; 

  /* background-color:red; */
  text-align:center;
  ${commonStyle.flex.flexCenter};
`


const Anno = styled.p`
  color: #4ba1c3;
`
/**
 * ul
 */
const HeaderMenu = styled.ul`
  ${commonStyle.flex.flexJustify}
    /* display:flex; */
  background-color: #0f3d57;
    /*${commonStyle.border.boarderlic} */
  color: #eee;
  padding:10px 15px;
  li {
    list-style:none;
    margin: 0 15px 0 0;
  }
`;

/**
 * li
 */

const ThemeSwitchWrap = styled.div`
    float:right;
`;





const Hero = styled.div`
  height: 50px;
`;

const ContentWrapper = styled.div`
  width: 100%;
  ${commonStyle.flex.flexJustify}
`;
const ContentGrid = styled.div`
  max-width: 1450px;
  display: grid;
  grid-auto-rows: minmax(100px, auto);
  gap: .5em;
  grid-template-columns: 1fr 4fr 1fr;
`;


type Props = {
    children?: ReactNode
    title?: string
};
const handle =({children} : Props)=>{
    return(
        <Wrapper>
            <div>
                <GridWrap>
                    <Hero>
                        Logo
                    </Hero>
                    <Header>
                        {/* <Anno>header</Anno> */}
                        <div>
                            <input type={'text'} placeholder={'검색어를 입력해주세요'}></input>
                            <HeaderMenu className='headerMenu'>
                                <MenuItem link={'/'} name={'Home'}/>
                                <MenuItem link={'/blog'} name={'Blog'}/>
                                <MenuItem link={'/service'} name={'Service'}/>
                                <MenuItem link={'/about'} name={'About'}/>
                            </HeaderMenu>
                            <ThemeSwitchWrap>테마스위치 Light/Dark</ThemeSwitchWrap>
                        </div>

                    </Header>
                    <section>
                        <ContentWrapper>
                            <div>
                                <ContentGrid>
                                    {children}
                                </ContentGrid>
                            </div>
                        </ContentWrapper>
                    </section>
                    <Footer>
                        <Anno>footer</Anno>
                        <FooterItem>
                            <div>
                                <address>dfdfd.com</address>
                            </div>
                        </FooterItem>
                    </Footer>
                </GridWrap>
            </div>
            <GotoTop />
        </Wrapper>
    )
}
export default handle;