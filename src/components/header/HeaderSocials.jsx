import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import './Header.css'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/javier-emanuel-gaitan/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/javigaitan" target='_blank'><BsGithub/></a>
        
        
    </div>
  )
}

export default HeaderSocials