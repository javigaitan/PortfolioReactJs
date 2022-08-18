import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'




const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Somos One Touch - Centro de Capacitaciones',
    github: 'https://github.com/javigaitan/oneTouch',
    demo: 'https://www.somosonetouch.net/index.html'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Sushi Alta Cordoba - Restaurante',
    github: 'https://github.com/javigaitan/SushiAltacbaJS',
    demo: 'https://javigaitan.github.io/SushiAltacbaJS/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Desarrollos Web - Empresa Fictisia',
    github: 'https://github.com/javigaitan/DesarrollosWeb',
    demo: 'https://javigaitan.github.io/DesarrollosWeb/index.html'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Freyr Hidromiel- Emprendimiento Artesanal',
    github: 'https://github.com/javigaitan/freyrHidromielWeb',
    demo: 'https://javigaitan.github.io/freyrHidromielWeb/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Aikido Store React - Empresa Fictisia',
    github: 'https://github.com',
    demo: 'https://e-commerce-react-topaz.vercel.app/'
  },

]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio