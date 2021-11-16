import { useMyContext } from './Context'
import { motion } from 'framer-motion'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import { IoIosArrowDropdown, IoIosArrowDropup } from 'react-icons/io'

const buttonStyle = makeStyles({
  root: {
    color: 'white',
    borderColor: 'white',
    fontFamily: 'var(--textFontFamily)',
    fontSize: 'calc(7px + 0.5vmax)',
    fontWeight: '700'
  }
})

const Projects = () => {
  const { fadeVariant, changeRoute } = useMyContext()
  const buttonClass = buttonStyle()

  return (
    <motion.section 
    className='projects-section main'
    initial= 'initial'
    animate= 'animate'
    exit= 'exit'
    variants={fadeVariant}>
      <IoIosArrowDropup onClick={(e) => changeRoute(e)} className='arrow up'/>
      <div className='projects-wrapper'>
        <h2 className='projects-title'>My projects</h2>
          <article>
            <img src='images/personal-website.png' alt=''/>
            <div>
              <h3>Freelance Personal Website Project</h3>
              <ButtonGroup size='small' aria-label="small outlined button group">
                <Button className={buttonClass.root} href='https://www.emanueledaquino.net/' target='_blank' rel="noreferrer">site</Button>
              </ButtonGroup>
            </div>
            <p>A website showcasing a client’s digital marketing consultation services and articles.<br /><br /><b>Built with:</b> React.js-CSS.
            </p>
          </article>
          <article>
            <img src='images/restaurant.png' alt=''/>
            <div>
              <h3>Freelance Business Website Project</h3>
              <ButtonGroup size='small' aria-label="small outlined button group">
                <Button className={buttonClass.root} href='https://pizzeriadapagni.netlify.app/' target='_blank' rel="noreferrer">site</Button>
              </ButtonGroup>
            </div>
            <p>A restaurant’s website where people can find its menu, services and directions.<br /><br /><b>Built with:</b> React.js-Material-UI.
            </p>
          </article>
          <article>
            <img src='images/sporthub.svg' alt=''/>
            <div>
              <h3>SportHub</h3>
              <ButtonGroup size='small' aria-label="small outlined button group">
                <Button className={buttonClass.root} href='https://emanuelefranceschini.github.io/sporthub/' target='_blank' rel='noreferrer'>site</Button>
                <Button className={buttonClass.root} href='https://github.com/emanuelefranceschini/sporthub' target='_blank' rel='noreferrer'>code</Button>
              </ButtonGroup>
            </div>
            <p>Search & save sport suggestions in your area.<br /><br /><b>Built with:</b> React.js-CSS-Node.js-Express.
            </p>
          </article>
      </div>
      <IoIosArrowDropdown onClick={(e) => changeRoute(e)} className='arrow'/>
    </motion.section>
  )
}

export default Projects
