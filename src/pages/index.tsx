import React from "react";
import Layout from "@components/Layouts"
import styled from "styled-components";
import BlogTemplate from "@components/Blog/BlogTemplate";
import TocWrap from "@components/Blog/TableOfContents";
import SideBar from "@components/Blog/SideBar";
import PostCard, {CardItem} from "@components/Blog/PostCard";
import PostCardList from "@components/Blog/PostCardList";
const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
  border-radius: 5px;
  //grid-column: 1 / 4;
  width: 100%;
`;

const GridWrap = styled.section`
  //width: 1450px;
  display: grid;
  grid-auto-rows: minmax(100px, auto);
  gap: .5em;
  grid-template-columns: 1fr 4fr 1fr;
`;
const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 960px;
  margin-top: 3rem;
  .post-card{
  }
`;
const Card = styled.div`
  margin: 1rem;
  flex-basis: 100%;
  padding: 1.5rem;
  max-width: 100%;
  //min-width: 450px;
  //width: 40%;
  height: 150px;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  cursor: pointer;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  :hover, :focus, :active {
    color: #35acd7;
    border-color: #35acd7;
  }
  @media (max-width: 685px) {
    .card-wrap {
      width: 100%;
      flex-direction: column;
    }
    .card{
      width: 450px;
    }
  }
`
const postCardList : CardItem[] = [
    {title: '인공 지능 용어', desc:'AI는 온라인에서 고객과 의사 소통하거나 체스를 두는 것과 같이 사람의 입력이 필요했던 복잡한 작업을 수행하는 애플리케이션의 포괄 용어가 되었습니다. 이 용어는 종종\n' +
            '                                머신 러닝 및 딥 러닝을 포함하는 하위 필드와 같은 의미로 사용됩니다. 그러나 차이점이 있습니다. 예를 들어, 머신 러닝은 사용하는 데이터를 기반으로 성능을\n' +
            '                                학습하거나 개선하는 시스템을 구축하는 데 중점을 둡니다. 모든 머신 러닝이 AI이지만 모든 AI가 머신 러닝은 아닙니다.'},
    {title: 'Alan Turing 이란?', desc:'Alan Turing 의 저서 Computing Machinery and Intelligence 에서 기계가 지능적이라고 간주할 수 있는 조건을 언급했다. 만일\\`n +\n' +
            '                            지성있는 사람이 관찰하여 기계가 진짜 인간처럼 보이게 하는데 성공한다면 확실히 그것은 지능적이라고 간주해야 한다고 주장했다. 이 test는 대부분의 사람들을\n' +
            '                            만족시키지만 어떤 철학자들은 납득하지 않는다. 관찰하는 사람과 기계는 상호교류한다. 이때 텔레타이프를 사용하는데 기계는 아직 사람의 외모와 목소리를 완전히 흉내내지\n' +
            '                            못하기 때문이다. 이때 관찰하는 사람에게 자기가 인간이라고 설득함으로써 기계는 관찰자를 바보로 만들려고 시도할것이다.'},
    {title: '고객서비스', desc:'고객에 대한 정보를 샘플링하는 것만으로는 더 이상 충분하지 않습니다. 고객의 실제 행동에 대한 중요한 인사이트를 얻어야 합니다. 이를 위해서는 머신 러닝과 딥 러닝\n' +
            '                                알고리즘을 구동할 수 있는 엄청난 양의 데이터가 필요합니다. IDC가 IBM 빅데이터 인프라가 AI의 성공적인 구현과 편견 없는 진정한 실시간 인사이트를 제공하는\n' +
            '                                핵심이라고 판단하는 이유를 알아봅니다..'},
    {title: '엔터프라이즈의 AI', desc:'AI 기술은 한때 인력이 필요했던 프로세스 또는 작업을 자동화하여 기업의 성능과 생산성을 향상시키고 있습니다. AI는 또한 인간이 할 수 없는 규모의 데이터를 이해할\n' +
            '                                수 있습니다. 이러한 기능은 상당한 비즈니스 이점을 가져다 줄 수 있습니다. 예를 들면 넷플릭스는 머신 러닝을 사용하여 개인화 수준을 제공하며, 이 회사는\n' +
            '                                2017년에 고객 기반을 25% 이상 늘릴 수 있었습니다.'},
    {title: 'AI 운영의 이점과 과제', desc:'AI 기술은 한때 인력이 필요했던 프로세스 또는 작업을 자동화하여 기업의 성능과 생산성을 향상시키고 있습니다. AI는 또한 인간이 할 수 없는 규모의 데이터를 이해할\n' +
            '                                수 있습니다. 이러한 기능은 상당한 비즈니스 이점을 가져다 줄 수 있습니다. 예를 들면 넷플릭스는 머신 러닝을 사용하여 개인화 수준을 제공하며, 이 회사는\n' +
            '                                2017년에 고객 기반을 25% 이상 늘릴 수 있었습니다.'},
    {title: '', desc:''},
    {title: '', desc:''},
    {title: '', desc:''},
    {title: '', desc:''},
    {title: '', desc:''},
    {title: '', desc:''},
]
const handle = () =>{
    return(
        <Layout>
            <BlogTemplate toc={<div></div>} sideBar={<SideBar/>}>
                <Wrapper className={'home-card-wrap'}>
                    <Main >
                        <div>
                            <h1>All</h1>
                        </div>


                        <PostCardList list={postCardList} className={'post-card'}/>
                    </Main>
                </Wrapper>

            </BlogTemplate>
        </Layout>
    )
}
export default handle;