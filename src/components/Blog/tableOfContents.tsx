import React from "react";
import styled from "styled-components";
import TextLogo from "@components/Icon/TextLogo";
const Anno = styled.p`
  color: #4ba1c3;
`
const TocWrap = styled.article`
  div.toc{
    position: sticky;
    top: 190px; //15
    width: 380px;
  }
`;
const handle = ()=>{
    return(
        <TocWrap>
            <div>

            </div>
            <div className="toc">
                <Anno>Table of Centens</Anno>
                <ul>
                    <li>1. 목차1sdfsfsddfsdfsfsfdsf dsfsdfsfsdfd</li>
                    <li>2. 목차2</li>
                    <li>3. 목차3</li>
                    <li>4. 목차4</li>
                    <li>5. 목차5</li>
                    <li>6. 목차6</li>
                </ul>

            </div>

        </TocWrap>
    )
}

export default handle;