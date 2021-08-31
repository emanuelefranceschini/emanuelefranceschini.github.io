import { useMyContext } from './Context'
import { motion } from 'framer-motion'
import { IoIosArrowDropdown } from 'react-icons/io'

const Home = () => {
  const { fadeVariant, changeRoute } = useMyContext()
  return (
    <motion.section 
    className='about-section main'
    initial= 'initial'
    animate= 'animate'
    exit= 'exit'
    variants={fadeVariant}>
      <div className='title-wrapper'>
        <h1>Emanuele Franceschini</h1>
        <span className='short-desc'>Frontend Web Developer</span>
      </div>
      <section className='skillsTools'>
        <article>
          <h3>Skills</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>AJAX</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express</li>
          </ul>
        </article>
        <article>
          <h3>Tools</h3>
          <ul>
            <li>Git</li>
            <li>Github</li>
            <li>Heroku</li>
            <li>Material-ui</li>
            <li>Framer-motion</li>
          </ul>
        </article>
      </section>
      <IoIosArrowDropdown onClick={(e) => changeRoute(e)} className='arrow'/>
    </motion.section>
  )
}

export default Home
