import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import styled from 'styled-components';

class Login extends Component {

    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            id: '',
            name: '',
            provider: '',
        }
    }
    // Google Login
    responseGoogle = (res: any) => {
        console.log(res)
    }

    // Login Fail
    responseFail = (err: any) => {
        console.error(err);
    }

    render() {
        return (
            <Container>
                <GoogleLogin
                    clientId="304210542468-tg4qh5fqdb0fbbkp51tl96ap21mspaaq.apps.googleusercontent.com"
                    buttonText="Google"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseFail}
                    cookiePolicy={'single_host_origin'}
                />
            </Container>
        );
    }
}

const Container = styled.div`
    display: flex;
    flex-flow: column wrap;
`


export default Login;