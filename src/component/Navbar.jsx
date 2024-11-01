import React from 'react'
import Logo from "../assets/logo.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'> 
      <div className="nab-container">
        <div className="logo"><img src={Logo} alt="" /></div>
        <div className="links">
          <Link className='link' to="/?cat=art">
          <h6>Art</h6>
          </Link>
          <Link className='link' to="/?cat=Science">
          <h6>Science</h6>
          </Link>
          <Link className='link' to="/?cat=Tech">
          <h6>Technology</h6>
          </Link>
          <Link className='link' to="/?cat=Cinema">
          <h6>Cinema</h6>
          </Link>
          <Link className='link' to="/?cat=Tech">
          <h6>Design</h6>
          </Link>
          <Link className='link' to="/?cat=food">
          <h6>Food</h6>
          </Link>
          <span >Abdull</span>
          <Link className='link' to="login"><span>Logout</span>
          </Link>
          
          <span className='write'>
            <Link to="write" className='link-write'>
            Post
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
