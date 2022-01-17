import React from 'react';
import { useState } from 'react';
import Appbar from '../Appbar';
const Login = () => {
    const [app,setApp]=useState(null)
    const logedIn=()=>{
        alert('you have loged in successfully')
        setApp(Appbar)
        
    }
    return (
        <div>
            <h3>User Login</h3>
            <form onSubmit={logedIn}>
            <label htmlFor="">username</label>
            <input type="text" name="" id="" placeholder='enter username' /><br /> <br />
            <label htmlFor="">password</label>
            <input type="password" name="" id="" placeholder='enter your password'/> <br />
            <input type="submit" name="" id="" />
            </form>
            <div>{app}</div>
        </div>
    );
};

export default Login;