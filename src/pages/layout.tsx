import { common } from '@components/Layouts/Theme';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    @media(max-width: 1450px){
            .toc{
                grid-row: 4 / 5;
                grid-column: 1 / 4;
            }
            /* aside{
                grid-row: 3 / 5;
                grid-column: 1 / 4;
            } */
            section{
                grid-column: 1 / 4;
            }
        }
`;
const GridWrap = styled.section`
   max-width: 1600px;
   display: grid;
   grid-auto-rows: minmax(100px, auto);
   gap: .5em;
   grid-template-columns: 1fr 4fr 1fr;
`;
const Header = styled.header`
    border: 1px solid #333;
    padding: 1em;
    grid-column: 1 / 4;
`;

const Nav = styled.nav`
    background-color:rgba(0,0,0,0.15);
    border: 1px solid #333;
    padding: 1em;
    grid-column: 1 / 4;
`;
const Footer = styled.footer`
  border: 1px solid #333;
  padding: 1em;
  grid-column: 1 / 4;

`;
const FooterItem = styled.footer`
    /* width:960px; */
    /* background-color:red; */
    text-align:center;
    ${common.flex.flexCenter};
`

const Section = styled.section`
    background-color: lightyellow;
    border: 1px solid #333;
    padding: 1em;
`


const TopBtn = styled.div`
    position: fixed; bottom: 20px; right: 20px; width: 50px; height: 50px; background-color: #333; color: white; display: flex; justify-content: center; align-items: center; cursor: pointer;
`;
const Anno = styled.p`
    color: #4ba1c3;
`
const goToTop = () =>{
    window.scrollTo(0, 0)
}
const handle =()=>{
    return(
        <Wrapper>
        <div>
            <GridWrap>
            <Header>
                <Anno>header</Anno>
            

            </Header>
                <aside className="toc"><Anno>Table of Centens</Anno></aside>
                <Section>
                    <main>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga inventore praesentium temporibus labore veniam similique quaerat nihil velit illo architecto. Illo officiis veritatis dolorum! Itaque repellat maxime nobis perspiciatis eum, corporis consequatur quis ut enim veritatis, animi deserunt facilis aspernatur! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error harum qui repellendus corporis dignissimos nostrum culpa temporibus, consequuntur, ratione, perferendis totam veritatis fugiat? Minus quam harum dignissimos dolorum ipsum veritatis non laborum beatae, modi perferendis! Praesentium vitae quia cumque quis quae inventore laudantium itaque quos! Voluptates vero optio temporibus excepturi!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia nihil eius omnis quasi corporis unde doloremque vel a? Facilis laborum voluptates voluptate vero inventore nemo minus esse amet, veritatis itaque!
                        Aspernatur numquam velit at repudiandae perspiciatis et officiis aperiam ipsam qui ullam expedita quibusdam maiores maxime, assumenda quisquam impedit ab sapiente molestiae omnis temporibus sit. Ex, dicta nihil. Ipsam, quod.
                        Maiores sit quo in hic ex voluptates possimus sunt libero saepe accusantium facere aliquid labore dolores officia consectetur, laboriosam soluta quae officiis numquam perferendis eos quaerat temporibus ipsum. A, ullam?
                        Velit in possimus perspiciatis incidunt adipisci eaque at blanditiis, consequatur eos natus amet, animi, mollitia veniam commodi asperiores nesciunt quasi tempore perferendis hic voluptates quis doloribus! Sit ducimus eos laudantium!
                        Optio officiis impedit rerum ipsam, corrupti a maiores. Dolore molestias nulla ratione enim voluptas esse commodi reprehenderit, repellat magnam ea, corporis aliquid obcaecati est corrupti, nemo expedita iste totam ipsum.
                        Sit, quidem inventore? Quas iure assumenda quae ipsum ipsa, dignissimos rem magni optio rerum incidunt placeat saepe inventore necessitatibus alias at molestiae repudiandae odit debitis dolorum veritatis quia est consectetur!
                        Non placeat modi tempore ipsum. Dolorem odio blanditiis quam doloremque inventore a. Quia, rerum quis velit id expedita accusantium cum odio temporibus pariatur eveniet dicta eius sequi perferendis, nostrum hic.
                        Aperiam quis accusantium, vero repudiandae nulla magni quam? Alias beatae pariatur odio harum saepe perferendis nemo ipsum fugiat eius obcaecati assumenda corrupti qui fugit, facere dignissimos accusantium rem dicta. A.
                        Suscipit cupiditate rerum id voluptatem debitis perferendis, vel quos voluptate ab tenetur expedita et blanditiis error corrupti sequi deleniti dolores temporibus ducimus eius exercitationem corporis nisi a. Dicta, at nostrum.
                        Commodi sint quas repudiandae nostrum. Dolores consequuntur quaerat, facere culpa voluptatibus natus, voluptates libero facilis dicta modi doloremque asperiores incidunt. Quasi enim nobis expedita eveniet ipsa, tempore illo aperiam sed!
                        Consequatur quaerat commodi neque cupiditate incidunt praesentium libero, tenetur quas numquam mollitia minima! Veniam, esse obcaecati maiores delectus eveniet expedita nulla error ea ipsam dolorum nisi qui? Quidem, quam. Illum.
                        Error ipsam molestiae odio. Sit eligendi nam aperiam modi porro officiis illo neque ad quae. Eius, dolores! Officiis esse minima dolore corporis laudantium porro facilis error, ratione consectetur numquam et.
                    </main>
                </Section>
                <aside id="sidebar">
                    <Anno>sidebar</Anno>
                
                
                </aside>
            <Nav>
                <Anno>Navigation</Anno>
                <p>슬라이드</p>
            </Nav>
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
        <TopBtn onClick={goToTop}>Top</TopBtn>
        </Wrapper>
    )
}
export default handle;