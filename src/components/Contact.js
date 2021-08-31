import { useMyContext } from './Context'
import { motion } from 'framer-motion'
import { IoIosArrowDropup, IoIosArrowDropdown, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io'
import { IoMail } from 'react-icons/io5'
import { FaFreeCodeCamp } from 'react-icons/fa'

const Contact = () => {
  const { fadeVariant, changeRoute } = useMyContext()
  return (
    <motion.section 
    className='contact-section main'
    initial= 'initial'
    animate= 'animate'
    exit= 'exit'
    variants={fadeVariant}>
      <IoIosArrowDropup onClick={(e) => changeRoute(e)} className='arrow up'/>
      <div className='contact-wrapper'>
        <h2>Contact</h2>
          <h3>You can find me here:</h3>
          <ul>
            <li><a href='https://github.com/emanuelefranceschini' alt='_blank'><IoLogoGithub /> github</a></li>
            <li><a href='https://www.freecodecamp.org/emanuelefranceschini' alt='_blank'><FaFreeCodeCamp /> freecodecamp</a></li>
            <li><a href='' alt='_blank'><IoLogoLinkedin /> linkedIn</a></li>
            <li><a href="mailto:ef96work@gmail.com" alt='_blank'><IoMail /> ef96work@gmail.com</a></li>
          </ul>
      </div>
      <IoIosArrowDropdown className='arrow' style={{visibility: 'hidden'}}/>
    </motion.section>
  )
}

export default Contact
