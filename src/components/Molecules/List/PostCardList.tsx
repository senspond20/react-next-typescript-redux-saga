import React from "react";
import styled from "styled-components";

import PostCard, {CardItem} from "@components/Atom/Items/PostCard";

const PostCardList = styled.div`
`;

type Props = {
    className? : string
    list : CardItem[]
}
const handle = ({className, list} : Props) =>{
    // console.log(props.list)
    return(
        <PostCardList className = {className}>
            {list.map((e, idx) =>{
                return (<PostCard key ={idx} title={e.title} desc={e.desc}/>)
            })}
        </PostCardList>
    )
}

export default handle;