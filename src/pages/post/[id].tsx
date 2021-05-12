import React from "react";
import { GetStaticProps, GetStaticPaths } from 'next'
import * as fs from "fs";
import * as Path from "path";

type Props ={
    id : string
    name : string
    errors? : string
}
const handle = ({id, name}: Props) =>{

    return(
        <div>
            <div><label>id : </label><span>{id}</span></div>
            <div><label>name : </label><span>{name}</span></div>
        </div>
    )
}
export default handle;

export const getStaticPaths :GetStaticPaths = async () => {
    const path = Path.join('D:\\2. WorkSpace\\React\\react-next-typescript-redux-saga', 'test')
    const files = String(fs.readdirSync(path,'utf-8'))
    const paths = [];
    let i = 0;
    while (i < 100){
        paths.push({ params: { id: (++i ).toString()}})
    }
    console.log(paths)

    return {
        paths,
        fallback: false
    }
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps : GetStaticProps= async ({ params }) => {
    try {
        const id = params?.id
        // const name = params?.name
        // const item = repository.find((data) => data.id === Number(id))
        console.log('sdfsdfsd' + id)
        return { props: { id}}
    } catch (err) {
        return { props: { errors: err.message } }
    }
}

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