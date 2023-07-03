import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='Login'>
            <h1>Login</h1>
            <form className='LoginForm'>
                <label>Email</label>
                <input type='text' className='LoginInput' placeholder='Enter your email'/>
                <label>Password</label>
                <input type='password' className='LoginInput' placeholder='Enter your password'/>
                <button className='LoginButton'>Login</button>
                <p>This is an error!</p>
                <span>Don't you have an account? <Link to='/register'>Register</Link></span>
            </form>
        </div>
    );
}

export default Login;