import React from 'react'
import './signup.css'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <div className='signup'>
        <div className="card">
            <div className="top">
                <h1>socialhub</h1>
                <h4>Sign up to see photos,videos from your friends</h4>
            </div>
            <div className="middle">
                <input type="text" required placeholder='EMAIL OR MOBILE NUMBER'/>
                <input type="text" required placeholder='FULL NAME'/>
                <input type="text" required placeholder='USERNAME'/>
                <input type="password" required placeholder='PASSWORD'/>
                <Link to='/login'>
                <button type="sumbit" className="btn btn-primary">Sign Up</button>
                </Link>
            </div>
              <div className="bottom">
                <h3>Have an account?<span>Log In</span></h3>
              </div>
        </div>
      
    </div>
  )
}
