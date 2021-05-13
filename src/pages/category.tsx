import React, {useEffect} from "react";
import {getCategorySampleData} from "../repository/category";
import styled from "styled-components";
import {getTree} from "../utils/MultiTable";
import MultiNode from "../utils/MultiNode";

const Container = styled.div`
  section {
    //width: 100vw;
    display: flex;
    justify-items: center;
    align-items: center;
    article{
      width: 40%;
    }
  }
`

const handle = () =>{

    const data = getCategorySampleData();
    const tree = getTree<String>(data)


    console.log(data)
    console.log(tree)


    useEffect(()=>{
        function printTree(data: any[], dom: any){
            const root = document.createElement('ul');
            let lvl = 1; //first lvl
            data.forEach(function(item){
                const li = document.createElement('li')
                const span = document.createElement('span');

                span.append(`${item.name}(${lvl})`);
                li.appendChild(span)
                root.appendChild(li)
                const list = item.items;
                recAppend(list,li,lvl)
            })
            // console.log(root)
            // recAppend(data,root,lvl)
            return root;
        };

        function recAppend(list: { name: any; items: any; }[], ele: HTMLLIElement, lvl : number){
            if(list.length !=0){
                lvl++;
                const ul = document.createElement('ul');
                list.forEach(function(item: { name: any; items: any; }){
                    const li = document.createElement('li')
                    const span = document.createElement('span');
                    span.append(`${item.name}(${lvl})`);
                    li.appendChild(span)
                    ul.appendChild(li)
                    return recAppend(item.items, li,lvl);
                })
                ele.appendChild(ul);
            }
        };

    },[])


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
            <section>
                <article>
                    <h2>Table</h2>
                    <table>
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>pId</th>
                            <th>data</th>
                        </tr>
                        </thead>
                        <thead>
                        {data.map((item,idx)=>(
                            <tr key={idx}>
                                <td>{item.id}</td>
                                <td>{item.parentId}</td>
                                <td>{item.data}</td>
                            </tr>
                        ))}
                        </thead>
                    </table>
                </article>
                <article>
                    <h2>Object1</h2>
                    <pre>
                        { tree?.print()}
                    </pre>
                </article>
                <article>
                    <h2>Object2</h2>
                    <pre>

                    </pre>
                </article>
            </section>


        </Container>
    )
}

export default handle;