import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <Header>
      <div className="container header__container">
        <h5>Hola soy</h5>
        <h1>Gaitan Javier Emanuel</h1>
        <h5 className='text-light'>Front End Developer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className='me'>
          <img src={ME} alt='soy YO JAVIER'   /> 
        </div>

        <a href='#contact' className='scroll__down'> Scroll Down</a>


      </div>

    </Header>
  )
}

export default Header