import React from "react";
import NoJsButton from "@components/Button/NoJsButton";

const handle = ()=>{
    return(
        <div>
            <NoJsButton idx={1}>Button</NoJsButton>
            <NoJsButton idx={2} children={'Button'} activeBgColor={'red'}/>
            <NoJsButton idx={3}
                defaultStyle={'width:100px; background:red'}
                children={'Button3'}
            />
            <NoJsButton idx={4}
                        width={'200px'}
                        defaultStyle={'background:blue; color:white;'}
                        children={'Button4'}
            />
            <NoJsButton idx={5}
                        width={'50px'} height={'50px'}
                        defaultStyle={'background:blue; color:white; border-radius: 50%'}
                        children={'+'}
            />
        </div>


    )
}
export default handle;

