import React from "react";
import axios from "axios";
import {GetServerSideProps} from "next";


const getDate =  (props : any ) =>{
    console.log(props.data)
    return(
        <div>
            {JSON.stringify(props.data,null,2)}
        </div>
    )
}
export default getDate;

export const getServerSideProps : GetServerSideProps = async() => {
    const response = await axios.get('http://senspond.iptime.org:8083/api/board/all');
    const data = response.data;
    return {
        props : {
            data
        }
    }
}
