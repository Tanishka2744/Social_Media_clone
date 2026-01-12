import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'

export default function Login() {

    return (
        <div className='login'>
            <div className="card">
                <div className="top">
                    <label>
                        <select>
                            <option value="lang">English(United States)</option>
                            <option value="lang">Hindi(India)</option>
                            <option value="lang">German(Germany)</option>
                            <option value="lang">France(French)</option>........
                            <option value="lang">korea(South Korea)</option>
                        </select>
                    </label>
                </div>
                <div className="middle">
                    <h1>SocialHub</h1>
                    <input type="text" required placeholder='USERNAME' />
                    <input type="password" required placeholder='PASSWORD' />
                    <button type="sumbit" className="btn btn-primary">Log In</button>
                    <h3>Forget your login details?<strong>Get help logging In</strong></h3>
                </div>
                <div className="bottom">
                    <h3>Don't have an account?</h3>
                    <Link to='/signup'>
                        <span>Sign Up</span>
                    </Link>
                </div>
            </div>

        </div>
    )
}
