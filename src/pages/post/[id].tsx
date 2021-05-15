import React from "react";
import { GetStaticProps, GetStaticPaths } from 'next'
import * as fs from "fs";
import * as Path from "path";
import axios from "axios";
import styled from "styled-components";
type Props ={
    id : string
    writer : string
    title : string
    content : string
    errors? : string
}
const Container = styled.div`
  width: 100%;
  font-size: 1.5rem;
  article {
    margin: 0 auto;
    width: 400px;
    div {padding:5px}
  }
`;
const handle = ( item: Props ) =>{
    return(
        <Container>
            <article>
                <div><label>id : </label><span>{item.id}</span></div>
                <div><label>writer : </label><span>{item.writer}</span></div>
                <div><label>title : </label><span>{item.title}</span></div>
                <div><label>content : </label><span>{item.content}</span></div>
            </article>
        </Container>

    )
};


export const getStaticPaths : GetStaticPaths = async () => {
    let paths;
    try {
        const response = await axios.get('http://localhost:3000/api/posts');
        const data = response.data
        paths = data.map((item : Props)=>({
            params : {id : item.id.toString()}
        }))
    }catch (e) {
        paths = [];
    }
    finally {
        return {
            paths,
            fallback: false
        }
    }
}


export const getStaticProps : GetStaticProps= async ({ params }) => {
    try {
        const response = await axios.get('http://localhost:3000/api/posts');
        const data = response.data
        const item = data.find((q: { id: string; })=> q.id.toString() === params?.id)
        return { props: item }
    } catch (err) {
        return { props: { errors: err.message } }
    }
}

export default handle;

// Returns an array that looks like this:
// [
//   {
//     params: {
//       id: 'ssg-ssr'
//     }
//   },
//   {
//     params: {
//       id: 'pre-rendering'
//     }
//   }
// ]
// return files.map(fileName => {
//     return {
//         params: {
//             id: fileName.replace(/\.md$/, '')
//         }
//     }
// })