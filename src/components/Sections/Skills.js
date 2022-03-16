import { useMyContext } from '../Context'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { motion } from 'framer-motion'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import react from '../../assets/images/skills/react.svg'
import gatsby from '../../assets/images/skills/gatsby.svg'
import redux from '../../assets/images/skills/redux.svg'
import js from '../../assets/images/skills/javascript.svg'
import css from '../../assets/images/skills/css3.svg'
import html from '../../assets/images/skills/html5.svg'
import markdown from '../../assets/images/skills/markdown.svg'
import git from '../../assets/images/skills/git.svg'
import mui from '../../assets/images/skills/mui.svg'
import framer from '../../assets/images/skills/framer.svg'
import figma from '../../assets/images/skills/figma.svg'
import github from '../../assets/images/skills/github.svg'

const skills = [
  { name: 'React', img: react },
  { name: 'Gatsby', img: gatsby },
  { name: 'Javascript', img: js },
  { name: 'Redux', img: redux },
  { name: 'HTML', img: html },
  { name: 'CSS', img: css },
  { name: 'Markdown', img: markdown },
  { name: 'Git', img: git },
  { name: 'Material UI', img: mui },
  { name: 'Framer', img: framer },
  { name: 'Figma', img: figma },
  { name: 'GitHub', img: github }
]

const Skills = () => {
  const { WrapperSection } = useMyContext()
  const mQuery = useMediaQuery(useTheme().breakpoints.up('sm'), {
    noSsr: true
  })
  return (
    <WrapperSection id='skills'>
      <Typography variant='h2'>Skills</Typography>
      <Grid container gap={3}>
        {skills.map((el, index) => (
          <Grid key={el.name} item xs={2.5}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ opacity: { delay: index / 10 } }}
              viewport={{ once: true }}
            >
              <Card>
                <CardMedia
                  sx={{
                    height: '100%'
                  }}
                  image={el.img}
                  alt={el.name}
                  component='img'
                />
                {mQuery && (
                  <CardContent>
                    <Typography variant='h6'>{el.name}</Typography>
                  </CardContent>
                )}
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </WrapperSection>
  )
}

export default Skills
