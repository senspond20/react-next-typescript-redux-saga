import React from "react";
import './style.css';

const LoginFormV2 = () =>{
    return(

            <div className="container">
                <h2>Google Material Design in CSS3<small>Inputs</small></h2>
                <form>
                    <div className="group">
                        <input type="text" required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Name</label>
                    </div>
                    <div className="group">
                        <input type="text" required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Email</label>
                    </div>
                </form>
                <p className="footer">
                    a <a href="https://scotch.io/tutorials/css/google-material-design-input-boxes-in-css3"
                         target="_blank">tutorial</a> by <a href="https://scotch.io" target="_blank">scotch.io</a>
                </p>
            </div>

    )
}
export default LoginFormV2;

