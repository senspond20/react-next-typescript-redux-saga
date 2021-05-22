import React from "react";
import MenuItem from "@components/Atom/Items/MenuItem";
import styled from "styled-components";
import Category from "@components/Organisms/Menu/CategoryMenu";
const Anno = styled.p`
  color: #4ba1c3;
`
const Aside = styled.div`
    div.aside_hero{
        img{
            border-radius:50%;
        }
    }
    ul.aside_category{
        li{
                
        }
    }
`;
const AsideSticky = styled.div`
    position: sticky;
   top: 190px; //15
`;
const handle = () =>{
    return(
        <Aside className={'blog-sidebar'}>
            <Anno>sidebar</Anno>
            <div className='aside_hero'>
                <img
                    src="https://images.unsplash.com/photo-1580894742597-87bc8789db3d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    alt="hero"
                    width={230}
                    height={230}
                />
                <p>오늘도 코딩... </p>
                <hr />
            </div>

            <AsideSticky className={"side-sticky"}>
                <h3>Category</h3>
                <Category/>
                <ul className='aside_tag'>
                    <h4>Tag</h4>
                    <MenuItem link={'/'} name={'home'}/>
                    <MenuItem link={'/about'} name={'about'}/>
                </ul>
                <ul>
                    <h4>인기글</h4>
                    <li>1글이 인기많습니다.</li>
                    <li>자바스크립트란?</li>
                </ul>
            </AsideSticky>

        </Aside>
    )
}

export default handle;