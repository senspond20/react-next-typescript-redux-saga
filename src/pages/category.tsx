import React, {useEffect} from "react";
import {getCategorySampleData} from "../repository/category";
import styled from "styled-components";
import {getTree} from "../utils/MultiTable";
import MultiNode from "../utils/MultiNode";

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

  .category-tree {
    color: #393939;
  }

  .category-tree, .category-tree ul {
    list-style: none;
    padding-left: 17px;
  }

  .category-tree *:before {
    width: 17px;
    height: 17px;
    display: inline-block;
  }

  .category-tree label {
    cursor: pointer;
  }

  .category-tree label:before {
    content: '\\f256';
    font-family: fontello;
  }

  .category-tree {
    text-decoration: none;
    color: #393939;
  }

  .category-tree a:before {
    content: '\\e800';
    font-family: fontello;
  }

  .category-tree input[type="checkbox"] {
    display: none;
  }

  .category-tree input[type="checkbox"]:checked ~ ul {
    display: none;
  }

  .category-tree input[type="checkbox"]:checked + label:before {
    content: '\\f255';
    font-family: fontello;
  }
`;
const handle = () =>{

    const data = getCategorySampleData();
    const tree = getTree<String>(data);
    console.log(tree)

    const getObject = () =>{
        return (
            <ul>
                {tree?.getChildren().map((item,idx)=>(
                    <li key={idx}>
                        <span className={'category-item'}>{item.getData()}</span>
                        (<span className={'category-dept'}>{item.getDept()}</span>)
                        {recAppend(item,0)}
                    </li>
                ))}
            </ul>
        )
    };
    // @ts-ignore
    const category = recAppend(tree,0);

    function itemClick(item: MultiNode<String>){
        // alert(item.getData())
        console.log(item.getData())
    }
    let count = 0;
    function recAppend(item: MultiNode<String>,count : number){

        const list = item.getChildren();

        if(list != null){
            ++count;
            return(
                <ul className={'category-tree'}>
                    {list.map((item,idx)=>(

                        <li key={`${idx}${count}`}>
                            <input type ='checkbox' id={`category-node${idx}${count}`} />
                            <label className={'category-item'} htmlFor={`category-node${idx}${count}`} onClick={() => itemClick(item)}>{item.getData()}</label>
                            (<span className={'category-dept'}>{item.getDept()}</span>)
                            {recAppend(item,++count)}
                        </li>

                    ))}
                </ul>
            )
        }

    };


    function getTreeData(array: string | any[]) {
        const map = {};
        for (let i = 0; i < array.length; i++) {
            let obj = {
                "id": array[i]['id'],
                "data": array[i]['data'],
            };
            // @ts-ignore
            obj.items = [];
            // @ts-ignore
            map[obj.id] = obj;
            const parent = array[i]['parentId'] || '-';
            if (!map[parent]) {
                map[parent] = {
                    items: []
                };
            }
            map[parent].items.push(obj);
        }
        return map['-'].items;
    }
    const newData = getTreeData(data)

    console.log(newData)


    // @ts-ignore
    return (
        <Container>
            <h1>Category</h1>
            <hr/>

            <section>

                {/* 1 */}
                <article>
                    <div>
                        <h2>Table Obj</h2>
                        <pre>{JSON.stringify(data,null,2)}</pre>
                    </div>
                </article>

                {/* 2 */}
                <article>
                    <h2>Table</h2>
                    <table>
                        <thead>
                            <tr>
                                { Object.keys(data[0]).map((o,i)=>  (<th key={i}>{o}</th>)) }
                            </tr>
                        </thead>
                        <tbody>
                        {data.map((item,idx)=>(
                            <tr key={idx}>
                                <td>{item.id}</td>
                                <td>{item.parentId}</td>
                                <td>{item.data}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </article>

                {/* 3 */}
                <article>
                    <h2>Convert Object1</h2>
                    <pre>
                        {tree?.print()}
                    </pre>
                </article>

                {/* 4 */}
                <article>
                    <h2>Category</h2>
                    <CateGoryWrapper>
                        {category}
                    </CateGoryWrapper>
                </article>
            </section>


        </Container>
    )
}

export default handle;