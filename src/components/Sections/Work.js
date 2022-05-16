import { motion } from 'framer-motion'
import { work } from '../../data/workSection'
import { WrapperSection, WrapperWorkExp, TextLink } from '../styledComponents'
import { opacityVariant } from '../../styles/motionVariants'
import Carousel from '../Carousel'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

const Work = () => {
  return (
    <WrapperSection id='work'>
      <Typography variant='h2'>Work</Typography>
      <WrapperWorkExp>
        <Typography variant='h4'>My Work Experience</Typography>
        {work.workExperiences.map((exp) => (
          <motion.div
            key={exp.title}
            variants={opacityVariant}
            initial='initial'
            whileInView='sectionsWhileInView'
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader title={exp.title} subheader={exp.role} />
              <List>
                {exp.list.map((item) => (
                  <ListItem key={item.text}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItem>
                ))}
              </List>

              <Carousel
                slides={exp.projects.map((project) => (
                  <Card
                    sx={{
                      margin: '16px 0',
                      backgroundColor: 'rgba(40,40,40,0.3)'
                    }}
                  >
                    <CardMedia image={project.image} alt='' component='img' />
                    <CardHeader title={project.projectTitle} />
                    <CardActions>
                      <TextLink
                        neoncolor='neon'
                        href={project.url}
                        target='_blank'
                        rel='noreferrer'
                      >
                        Website
                      </TextLink>
                    </CardActions>
                  </Card>
                ))}
              />
            </Card>
          </motion.div>
        ))}
      </WrapperWorkExp>
      <Typography variant='h4'>My Personal Projects</Typography>
      <Grid container gap={3}>
        {work.personalProjects.map((el, index) => (
          <Grid key={el.title} item xs={12} sm={3.5}>
            <motion.div
              style={{ height: '100%' }}
              variants={opacityVariant}
              custom={index}
              initial='initial'
              whileInView='projectsWhileInView'
              viewport={{ once: true }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <CardMedia image={el.img} alt='' component='img' />
                <CardHeader title={el.title} />
                <CardContent>
                  <Typography variant='body1' color='text.secondary'>
                    {el.text.map((text) => text)}
                  </Typography>
                </CardContent>
                <CardActions>
                  {el.links.map((link) => (
                    <TextLink
                      key={link.name}
                      neoncolor={link.color}
                      href={link.url}
                      target='_blank'
                      rel='noreferrer'
                    >
                      {link.name}
                    </TextLink>
                  ))}
                </CardActions>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </WrapperSection>
  )
}

export default Work
