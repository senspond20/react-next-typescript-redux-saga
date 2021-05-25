import React from "react";
import styled from 'styled-components';
import common from "@components/Templates/styles/Common";

interface Props{
    data : Array<any>,
    className? : string
}

const DataBoard = (props : Props) =>{
    const data = props.data;
    let head = ( <tr> {Object.keys(data[0]).map((k,idx) => <th key={idx}>{k}</th> )}</tr> )

    let itemList = data.map((item : any, index : number)=>
            (
                <tr key={'tr' + index}>
                    {Object.keys(item).map((k,idx) => <Td key={'td' +idx}>{item[k]}</Td> )}
                </tr>
            )
        )
    return(
        <Table className={props.className}>
            <Thead>
                {head}
            </Thead>
            <Tbody>
                {itemList}
            </Tbody>
        </Table>
    )
}

export default DataBoard;

const Table = styled.table`
    margin: 0 auto;
    text-align: center;
    border: 1px solid #eee;
    border-spacing:15px;
    background-color: rgba(0,0,0,0.015);
    border-radius: 9px;
`;
const Thead = styled.thead`
    color : ${common.palette.BLUE[8]}
    font-size: 1.4em;
`;
const Tbody = styled.tbody`
`;
const Td = styled.td`
     font-size: 1.2em;
     border-bottom:1px solid #eee;
`;