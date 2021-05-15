import React from "react";
import Link from "next/link";
import count from "@stores/reducers/count";

type props ={
    id : number
}
const PostLink = ({id}:props) => (
    <li>
        <Link href="/post/[id]" as={`/post/${id}`}>
            <a>Post {id}</a>
        </Link>
    </li>

)

function Dummy() {
    const rendering = () => {
        const result = [];
        for (let i = 0; i < 100; i++) {
            result.push(<PostLink id={i+1}/>);
        }
        return result;
    };
    return <ul>{rendering()}</ul>;
}

function App() {
    const weekArr = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

    const rendering = () => {
        const result = [];
        for (let i = 0; i < weekArr.length; i++) {
            result.push(<span key={i}>{weekArr[i] + " / "}</span>);
        }
        return result;
    };

    return <div>{rendering()}</div>;
}

const handle = () =>{
    const iArr = new Array(100);
    // @ts-ignore
    return(
        <div>
            <Dummy/>
            <App/>
        </div>
    )
};

export default handle;