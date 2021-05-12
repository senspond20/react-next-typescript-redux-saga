import React, {useState} from "react";
import InputWithLabel from "@components/Form/InputWithLabel";
import GoogleAuth from '@components/Auth/GoogleAuth';

// import LoginForm from "@components/Form/LoginForm";
// import LoginWrapper from "@components/Form/LoginWrapper";
const onSubmitCk = ()=>{

}
const handle = () =>{
    const [inputs, setInputs] = useState({
        email: '',
    });

    const { email } = inputs

    const onChange = (e:any) => {
        const { email, value } = e.target
        const nextInputs = {
            ...inputs,
            [email]: value,
        }
        setInputs(nextInputs)
    }
    const onReset = (e:any) => {
        e.preventDefault();
        const resetInputs = {
            email: '',
        }
        setInputs(resetInputs)
    }
    return(
        <>
            <form onSubmit={onSubmitCk} action={'/api/login'} method={'post'}>
                {/*<InputWithLabel label="이메일" name="email" placeholder="이메일" />*/}
                {/*<InputWithLabel label="password"  type ='password' name="password" placeholder="비밀번호" />*/}
                <button>전송</button>
                <button type={"reset"} >취소</button>
            </form>

            <GoogleAuth/>
        </>


    )
};
export default handle;