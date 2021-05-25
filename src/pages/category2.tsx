import React, {useEffect} from "react";
import {getCategorySampleData} from "../repository/category";
import styled from "styled-components";
import {getTree, MultiTable} from "components/Atom/Items/MultiTable";
import MultiNode from "components/Atom/Items/MultiNode";
import {GetServerSideProps, GetStaticProps} from "next";
import axios from "axios";

const Container = styled.div`
  section {
    width: 100vw;
    display: flex;
    justify-items: center;
    article{
      width: 40%;
      table {
        thead{
          background: #eee;
        }
        border-collapse: collapse;
        td,th{
          border: 1px solid #555;
          padding: 10px;
          text-align: center;
        }
      }
    }
  }
`
const CateGoryWrapper = styled.div`
  ul{
    
  }
  ul li{
    
    cursor: pointer;
  }
  
  label.category-item{
    font-size: 1.6rem;
    font-weight: 500;
    cursor: pointer;
  }
  span.category-dept{
    color: red;
  }

  .tree {
    color: #393939;
  }

  .tree, .category-tree ul {
    list-style: none;
    padding-left: 17px;
  }

  .tree *:before {
    width: 17px;
    height: 17px;
    display: inline-block;
  }

  .tree label {
    cursor: pointer;
  }

  .tree label:before {
    content: '-';
    font-family: fontello;
  }

  .tree {
    text-decoration: none;
    color: #393939;
  }

  .tree a:before {
    content: '0';
    font-family: fontello;
  }

  .tree input[type="checkbox"] {
    display: none;
  }

  .tree input[type="checkbox"]:checked ~ ul {
    display: none;
  }

  .tree input[type="checkbox"]:checked + label:before {
    content: '+';
    font-family: fontello;
  }
`;


const clickThis = (item : MultiNode<any>) =>{
    console.log(item)
}
const getTreeNode = (data : any) =>{
    const tab = new Array<MultiTable<any>>();
    data.map((item : any)=>{
        tab.push(new MultiTable<any>( item.id,item.parent_id,item));
    })
    return getTree(tab)
}
const recAppend = (item: MultiNode<any>,count : number) =>{
    const list = item?.getChildren();
    if(list != null){
        ++count;
        return(
        <ul className={'tree'}>
            {list.map((item,idx)=>(

                <li key={`${idx}${count}`}>
                    <input type ='checkbox' id={`category-node${idx}${count}`} />
                    <label className={'category-item'} htmlFor={`category-node${idx}${count}`}
                    onClick={() => clickThis(item)}
                    >{item.getData().category_name}</label>
                    (<span className={'category-dept'}>{item.getDept()}</span>)
                    {recAppend(item,++count)}
                </li>

            ))}
        </ul>
        )
    }
};

const handle = ({data}: any) =>{
    let node = getTreeNode(data);
    console.log(node?.print());

    // @ts-ignore
    let category = recAppend(node,0);
    return (
        <Container>
            <h1>Category</h1>
            <section>
                <article>
                    <pre>{node?.print()}</pre>
                </article>
                <article>
                    <CateGoryWrapper>
                        {category}
                    </CateGoryWrapper>
                </article>
            </section>
        </Container>
    )
}
// handle.getInitialProps = async () => {
export const getServerSideProps : GetServerSideProps= async () => {
    let data;
    try {
        const response = await axios.get('http://localhost:8080/api/category');
        data = response.data;
    }catch (e) {
        data = [];
    }finally {
        return{
            props :{
                data
            }
        }
    }
}
export default handle;


