import React from "react";
import styled from "styled-components";
export type CardItem ={
    title : string,
    desc : string
}
const Card = styled.dl`
  margin: 1rem;
  flex-basis: 100%;
  padding: 1.5rem;
  max-width: 100%;
  //min-width: 450px;
  //width: 40%;
  height: 250px;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  cursor: pointer;

  dd {
    text-overflow: ellipsis;

    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  :hover, :focus, :active {
    color: #1d6d93;
    border-color: #35acd7;
  }
`;

const Dt = styled.dt`
  font-weight: bolder;
  margin-bottom: 20px;

  span:{
    font-size: 20px;
  }
`
const Dd = styled.dd`
  
`
const handle = ({title, desc} : CardItem) =>(
    <Card>
        <Dt><h3>{title}<span>&rarr;</span></h3></Dt>
        <Dd>{desc}</Dd>
    </Card>
)

export default handle;