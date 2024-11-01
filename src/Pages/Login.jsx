import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='Auth'>
        <h1>Login</h1>
        <form>
          <input required type="text" placeholder='username' />
          <input required type="password" placeholder='password' />
          <button>Login</button>
          <p>invalid login credential</p>
          <span>Don't have an account? <Link to="/register">Register</Link></span>
        </form>
    </div>
  )
}

export default Login
