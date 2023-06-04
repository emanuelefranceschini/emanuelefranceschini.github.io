import { motion } from 'framer-motion'
import { work } from '../../data/workSection'
import { WrapperSection, WrapperWorkExp, TextLink } from '../styledComponents'
import { opacityVariant } from '../../styles/motionVariants'
import Carousel from '../Carousel'
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
        {work.workExperiences.map((exp) => (
          <motion.div
            id={exp.anchorLink}
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
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      backgroundColor: 'rgba(40,40,40,0.3)',
                    }}
                  >
                    <CardMedia image={project.image} alt='' component='img' />
                    <CardHeader title={project.projectTitle} />
                    {project.projectDescr && <CardContent>
                      <Typography>{project.projectDescr}</Typography>
                    </CardContent>}
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
    </WrapperSection>
  )
}

export default Work
