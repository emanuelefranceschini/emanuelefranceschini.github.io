import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { motion } from 'framer-motion'
import { skills } from '../../data/skillsSection'
import { WrapperSection } from '../styledComponents'
import { opacityVariant } from '../../styles/motionVariants'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const Skills = () => {
  const mQuery = useMediaQuery(useTheme().breakpoints.up('sm'), {
    noSsr: true
  })
  return (
    <WrapperSection id='skills'>
      <Typography variant='h2'>Skills</Typography>
      <Grid container gap={3}>
        {skills.map((el, index) => (
          <Grid key={el.name} item xs={2.2} sm={2.5}>
            <motion.div
              variants={opacityVariant}
              custom={index}
              initial='initial'
              whileInView='skillsWhileInView'
              viewport={{ once: true }}
              style={{
                height: '100%'}}
            >
              <Card sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}>
                <CardMedia
                  sx={{
                    height: 'auto',
                    width: '100%'
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
