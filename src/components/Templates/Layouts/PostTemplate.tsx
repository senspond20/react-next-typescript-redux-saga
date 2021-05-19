import GoToTop from 'components/Atom/Utils/GoToTop';
import React from 'react';

type Props ={
    title? : string
    children? : React.ReactNode
}

const PostTemplate = (props : Props) =>{
    return(
        <div>
            {props.children}
        </div>
    )
}

export default PostTemplate;