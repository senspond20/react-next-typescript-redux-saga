import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    
    align-items: center;
    background: linear-gradient(45deg, #111, #1e90ff);
    display: flex;
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;
    justify-content: center;
    margin: 0;
    min-height: 100vh;
    overflow-x: hidden;
    padding: 0;
    width: 100vw;
  
  svg {
    height: 30px;
    width: 30px;
  }
  button {
    align-items: center;
    background: 0;
    border: 4px solid #fff;
    border-radius: 100%;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    height: 44px;
    left: 50%;
    margin: 30px 20px 0 20px;
    top: 50%;
    transition: background 0.5s;
    width: 44px;
  }
  button:hover {
    background: rgba(255,255,255,0.25);
  }
  .card-track {
    height: 300px;
    margin: 0;
    padding: 0;
    perspective: 1000px;
    position: relative;
    transform-style: preserve-3d;
    width: 200px;
  }
  .card-actions {
    display: flex;
    justify-content: center;
  }
  .card {
    background: #fff;
    border-radius: 6px;
    color: #000;
    height: 100%;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    transform-origin: left;
    transition: transform 0.5s, filter 0.5s, z-index 0.5s, opacity 0.5s;
    width: 100%;
    opacity: 0;
  }
  .card[data-gone='true'] .card__content-mark {
    clip-path: polygon(100% 70%, 0% 30%, 0% 100%, 100% 100%);
  }
  .card[data-gone='true'] {
    transform: rotateY(-20deg) translate(-100%, 0) translate(-10%, 0) rotateY(-20deg) translate(-100%, 0) translate(-10%, 0) translate(-100%, 0) rotateY(-20deg) translate(-10%, 0);
  }
  .card[data-coming='true'] .card__content-mark {
    clip-path: polygon(100% 30%, 0% 70%, 0% 100%, 100% 100%);
  }
  .card[data-coming='true'] {
    transform: translate(100%, 0) rotateY(20deg) translate(10%, 0) translate(100%, 0) rotateY(20deg) translate(10%, 0) translate(100%, 0) rotateY(20deg) translate(10%, 0);
  }
  .card[data-pos='0'] {
    opacity: 1;
  }
  .card[data-pos='1'],
  .card[data-pos='-1'] {
    filter: grayscale(0.8);
    opacity: 0.8;
  }
  .card[data-pos='2'],
  .card[data-pos='-2'] {
    filter: grayscale(0.6);
    opacity: 0.6;
  }
  .card[data-pos='1'] {
    transform: translate(100%, 0) rotateY(20deg) translate(10%, 0);
  }
  .card[data-pos='-1'] {
    transform: rotateY(-20deg) translate(-100%, 0) translate(-10%, 0);
  }
  .card[data-pos='2'] {
    transform: translate(100%, 0) rotateY(20deg) translate(10%, 0) translate(100%, 0) rotateY(20deg) translate(20%, 0);
  }
  .card[data-pos='-2'] {
    transform: rotateY(-20deg) translate(-100%, 0) translate(-10%, 0) rotateY(-20deg) translate(-100%, 0) translate(-20%, 0);
  }
  .card__hero {
    background: #db0a5b;
    height: 70%;
    object-fit: cover;
    width: 100%;
  }
  .card__content-mark {
    background: #fafafa;
    bottom: 0;
    clip-path: polygon(100% 50%, 0% 50%, 0% 100%, 100% 100%);
    height: 100%;
    left: -1px;
    position: absolute;
    right: -1px;
    transition: clip-path 0.5s, background 0.5s;
  }
  .card__content {
    bottom: 0;
    height: 50%;
    left: 0;
    padding: 30px 10px 10px 10px;
    position: absolute;
    right: 0;
  }
  .card__title {
    align-items: center;
    color: #111;
    display: flex;
    font-size: 1.25rem;
    height: 5rem;
    justify-content: center;
    margin: 10px 0 0 0;
    padding: 0;
    text-align: center;
  }
  .card__author {
    bottom: 10px;
    color: #db0a5b;
    font-size: 0.75rem;
    font-weight: 300;
    left: 0;
    margin: 0;
    padding: 0;
    position: absolute;
    text-align: center;
    text-transform: uppercase;
    width: 100%;
  }
  .card__avatar {
    background: #87d37c;
    border-radius: 100%;
    height: 60px;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
  }
`
function ListSilder(){
    return(
        <Wrapper>

        </Wrapper>
    )
}
export default ListSilder;