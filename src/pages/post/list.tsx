import React from "react";
import { GetStaticProps, GetStaticPaths } from 'next'
import Link from 'next/link'
import * as fs from "fs";
import * as Path from "path";
import axios from "axios";
import styled from "styled-components";
type Props = {
    data : Item[]
}
type Item = {
    id : string
    title : string
}
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  user-select:none;
  font-size: 1.5em;
  ul > li {
    max-width: 450px;
    margin: 10px;
    padding: 20px;
    cursor: pointer;
    background-color: #ededed;
    border-radius: 4px;
    border-bottom: 1px solid #eee;
  }

  ul > li:hover {
    background-color: #9dc9f3;
  }
`
const handle = ({data }: Props) =>{
    console.log(data)
    return(
        <Container>
            <h1>Post List</h1>
            <ul>
                {data.map((item,idx)=>(
                    <Link key={idx} href ={`/post/${item.id}`}>
                        <li >
                            <div><label>id : </label><span>{item.id}</span></div>
                            <div><label>title : </label><span>{item.title}</span></div>
                        </li>
                    </Link>

                ))}
            </ul>
        </Container>

    )
}
export const getStaticProps : GetStaticProps= async ({ params }) => {
    try {
        // const response = await axios.get('http://localhost:3000/api/posts');
        // const data = response.data

        const data =[
            {
                id :1,
                writer : '아이린',
                title : '안녕하세요',
                content : '내용입니다'
            },
            {
                id :2,
                writer : '아이투',
                title : '안녕하세요',
                content : 'NextJs 따라할가요? export default (req : NextApiRequest, res : NextApiResponse) => {'
            },
            {
                id :3,
                writer : '아이삼',
                title  : '안녕하십니깡? 새우깡?',
                content : '영구 읍다~~~~~~'
            },
            {
                id :4,
                writer : '아이포',
                title:  '자바랑 자바스크립트',
                content : '자바와 자바스크립트의 차이는? '
            }
        ]
        return { props: {data} }
    } catch (err) {
        return { props: { errors: err.message } }
    }
}

export default handle;

