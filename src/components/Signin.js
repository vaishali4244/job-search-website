import React  from 'react';
import {Link} from 'react-router-dom';
import './Signin.css';

const Signin = () => {
    
    return (
        
            <div className='container'>
                <h3>Signin here </h3>
                <div className="log-content">
                <div className='pw-content'>
                    <label htmlFor="email">Email </label>
                    <input className='input' type="email" id='email' name='email' />
                </div>

                <div className="pw-content">
                    <label className="" htmlFor="password">Password </label>
                    <input className='input' type="password" name="password" id="password"
                    />
                </div>
                    </div>
                <div>
                <Link to="/dashboard">
                 <button className='btn-s' >Sign in</button>
                 </Link>
                </div>
                 
            </div>
      
    )
}


export default Signin;