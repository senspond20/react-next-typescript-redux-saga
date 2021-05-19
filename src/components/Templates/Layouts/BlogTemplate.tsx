import React, {ReactNode} from "react";
import styled from "styled-components";
import commonStyle from "styles/Common";

const Anno = styled.p`
  color: #4ba1c3;
`
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const GridWrap = styled.section`
    max-width: 1400px;
    display: grid;
    grid-auto-rows: minmax(100px, auto);
    gap: .5em;
    grid-template-columns: 1fr 4fr 1fr;
`;



const Article = styled.article`
    /* background-color: lightyellow; */
    background-color: rgba(0,0,0,0.009);
    padding: 3em;
    min-height: 960px;
    //border-left: 1px solid #eee;
    border-right: 1px solid #eee;
    // ${commonStyle.border.boarderlic}; 
  //width: 960px;
`
const BottomNav = styled.nav`
  //background-color:rgba(0,0,0,0.15);
  padding: 1em;
  position: relative;
  width: 100%;
  grid-column: 1 / 4;
  border-top: 1px solid #eee;
  // background: ${commonStyle.palette.BLUE[9]};
  background: #333;
  //border: 1px solid #999;
  //border-radius:8px;
`;

type Props = {
    toc? : JSX.Element
    children?: ReactNode
    sideBar? : JSX.Element
};
const handle =({toc, children,sideBar} : Props) =>{
    return(
        // <Layout>
            <Wrapper>
                <GridWrap>
                    {toc}
                    <Article className={'blog-main'}>
                        <main>
                            {children}
                        </main>
                    </Article>
                    {sideBar}

                    <BottomNav>
                        <Anno>Navigation</Anno>
                        <p>슬라이드</p>
                    </BottomNav>
                </GridWrap>
            </Wrapper>
        // </Layout>
    )
}

export default handle;
