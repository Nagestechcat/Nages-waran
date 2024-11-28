import React from 'react'
import {FaLinkedin,FaGithub,FaInstagram} from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
import logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <a href='/' aria-label='Home'>
                <img src={logo} className='mx-2' width={80} height={80} alt='logo' />
            </a>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
          <a href='https://www.linkedin.com/in/nageswaran-r/'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='LinkedId'
          >
            <FaLinkedin/>
          </a>
          <a href='https://github.com/Nagestechcat'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='GitHub'
          >
            <FaGithub/>
          </a>
          {/* <a href='https://www.twitter.com/in/your-linkedin-profile'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Twitter'
          ><FaSquareXTwitter/></a> */}
        </div>
    </nav>
  )
}

export default Navbar