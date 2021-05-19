import React, {useEffect} from "react";
import styled from "styled-components";
import commonStyle from "styles/Common";

const TocTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: smaller;
  li{
    margin: 8px;
  }
`
const Anno = styled.span`
  color: ${commonStyle.palette.BLUE[8]};
  font-size: 0.8em;
  transform: translate(5px,-25px);
`
const TocWrap = styled.article`
  //background:  ${commonStyle.palette.GRAY[0]};
  border-right: 1px solid #eee;

  div.toc {
    position: sticky;
    top: 190px; //15
    width: 380px;

    h3 {
      text-align: center;
      color: #cccccc;
    }
  }
`;

const ScrollWrap = styled.div`
  width: 100%;
  position: sticky;
  top:0px;
`
const ScrollScore = styled.span`
  //font-size: 2rem;
  position: absolute;
  top: 10px;
  font-size: 1rem;
  font-weight: 200;
  //color: #333333;
  text-align: center;
  color: white;
  width: 42px;
  background: ${commonStyle.palette.BLUE[8]};
  margin-left: 0.4rem;
  border-radius: 20%;
  //padding: 5px;

`
const ScrollPaging = styled.div`
  height: 5px;
  width: 0;
  opacity: 0.87;
  background: ${commonStyle.palette.BLUE[8]};
`
const handle = ()=>{
    useEffect(() => {
        let maxScrollValue = 0;
        const pagingElem = document.querySelector<HTMLElement>('.paging');
        const outputElem = document.querySelector<HTMLElement>('.output');

        function resizeHandler() {
            maxScrollValue = document.body.offsetHeight - window.innerHeight;
        }
        window.addEventListener('scroll', function () {
            const scrollPer = pageYOffset / maxScrollValue;
            if(outputElem && pagingElem){
                let per = (scrollPer * 100).toFixed(0);
                outputElem.innerHTML = per + '%';
                // if(per == '100'){
                //     outputElem.style.background = `${commonStyle.palette.PINK[6]}`;
                // }else{
                //     outputElem.style.background = `${commonStyle.palette.BLUE[6]}`;
                // }
                pagingElem.style.width = scrollPer * 100 + '%';
                // progress bar
                // pagingElem.style.height = scrollPer * 100 + '%';
            }

        });

        window.addEventListener('resize', resizeHandler);
        resizeHandler();
    },[]);
    return(
        <TocWrap>
            <div>

            </div>
            <div className="toc">
                <h3>[제목입니다] Nginx 어쩌구 설정하기 - 자바스크립트 이렇게 쓰자</h3>
                <ScrollWrap>
                    <ScrollPaging className="paging"></ScrollPaging>
                    <ScrollScore className="output">0</ScrollScore>

                </ScrollWrap>

                <TocTitle>
                    <Anno>Table of Centens </Anno>

                    <ul>
                        <li>1. 목차1sdfsfsddfsdfsfsfdsf dsfsdfsfsdfd</li>
                        <li><a href={'#h2'}>2. 목차2</a></li>
                        <li>3. 목차3</li>
                        <li>4. 목차4</li>
                        <li>5. 목차5</li>
                        <li>6. 목차6</li>
                    </ul>
                    <ScrollPaging className="paging"></ScrollPaging>
                </TocTitle>


            </div>


        </TocWrap>
    )
}

export default handle;