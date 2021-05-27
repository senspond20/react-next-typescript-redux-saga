import React, {EventHandler} from "react";
import InputBoxGroup from "@components/Molecules/Items/InputBoxGroup";
import styled from "styled-components";
import ButtonV1 from "@components/Atom/Buttons/ButtonV1";

const IMG = 'https://images.unsplash.com/photo-1582056615449-5dcb2332b3b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80';

export default function LoginForm(){

    const onSubmitHandle = (e: { preventDefault: () => void; }) =>{
        e.preventDefault();
    }

    return(
        <Form onSubmit={onSubmitHandle}>
            <div className={'login-form-container'}>
                <div>
                    <div className={'img-wrapper'}>
                        <div id={'login-form-msg'}>
                            <h1>Login</h1>
                        </div>
                    </div>
                    <div className={'input-group-wrapper'}>
                        <div>
                            <InputBoxGroup label={'Email'} type={'text'} required={true}/>
                            <InputBoxGroup label={'Password'} type={'password'} required={true}/>
                            <ButtonV1>로그인</ButtonV1>
                        </div>
                    </div>
                </div>
            </div>
        </Form>
    )
};

const Form = styled.form`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .img-wrapper{
    background-image: url(${IMG});
    background-size: cover;
    width: 450px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    #login-form-msg{
      transform: translateY(50px);
      user-select: none;
      h1{
        color: #aaaaaa;
      }
    }
  }
  .login-form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ededed;
    border-radius: 20px;
    height: auto;
    .input-group-wrapper{
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 50px 0px;
    }
  }

`
