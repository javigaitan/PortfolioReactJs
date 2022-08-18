import React from 'react'
import './about.css'
import ME from '../../assets/about-me.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import {RiTeamLine} from 'react-icons/ri'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <RiTeamLine className='about__icon'/>
              <h5>Leadership</h5>
              <small>5+ Years </small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Teamwork</h5>
              
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Analytic</h5>
              
            </article>
          </div>

          <p>
            Me gustan los deporte en equipo e individuales y particularmente las artes marciales tiene un lugar importante en mi vida, llevo mas de 10 años practiando AIKIDO donde aprendi muchas de las cosas que aplico en mi rutina diaria. 
            
          </p>
          

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About