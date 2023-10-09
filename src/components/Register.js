import React from 'react';
import {Link} from 'react-router-dom';
import './Register.css';

const Register = () => {
    
    return (
        
            <div className='container'>
                <h3>Register below</h3>
                <form >
                    <div className='pw-content'>
                        <label htmlFor="name">Name </label>
                        <input className='input' type="text" id='name' name='name' />
                    </div>
                    <div className='pw-content'>
                        <label htmlFor="email">Email</label>
                        <input className='input' type="email" id='email' name='email' />
                    </div>

                    <div className="pw-content">
                        <label className="" htmlFor="password">Password</label>
                        <input className='input' type="password" name="password" id="password" />
                    </div>
                    <div>
                    <Link to="/dashboard">
                        <button >Submit Now</button>
                        </Link>
                    </div>
                </form>
            </div>
     
    )
}


export default Register;