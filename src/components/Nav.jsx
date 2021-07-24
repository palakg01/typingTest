import React from 'react';
import { SocialIcon } from 'react-social-icons';
const Nav=()=>{
  return(
    <div className='nav-container'>
      <div className='nav-left'>
        <img className='logo' alt='logo' 
        src='https://raw.githubusercontent.com/TheLeanProgrammer/flashtype/master/src/assets/logo.png' />
        <p className='logo-title'>FlashType</p>
      </div>
      <div className='nav-right'>
        <ul className='links'>
          <li className='link'><SocialIcon url="https://linkedin.com/in/palakgupta19" target='_blank' bgColor="#FFFAFA"
          style={{ height: 35, width: 35}} /></li>
          <li className='link'><SocialIcon url="https://github.com/palakg01" target='_blank' bgColor="#FFFAFA"
          style={{ height: 35, width: 35 }} /></li>         
        </ul>
      </div>
    </div>
  )
}

export default Nav;