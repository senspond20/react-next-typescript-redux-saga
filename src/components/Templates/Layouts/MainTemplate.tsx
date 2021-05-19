import GoToTop from 'components/Atom/Utils/GoToTop';
import React from 'react';

type Props ={
    title? : string
    children? : React.ReactNode
}

const MainTemplate = (props : Props) =>{
    return(
        <div>
            {props.children}
            <GoToTop/>
        </div>
    )
}

export default MainTemplate;