import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='Register'>
            <h1>Register</h1>
            <form className='RegisterForm'>
                <label>Username</label>
                <input required type='text' className='RegisterInput' placeholder='Enter your username'/>
                <label>Email</label>
                <input required type='email' className='RegisterInput' placeholder='Enter your email'/>
                <label>Password</label>
                <input required type='password' className='RegisterInput' placeholder='Enter your password'/>
                <button className='RegisterButton'>Register</button>
                <p>This is an error!</p>
                <span>Don't you have an account? <Link to='/login'>Login</Link></span>
            </form>
        </div>
    );
}

export default Register;