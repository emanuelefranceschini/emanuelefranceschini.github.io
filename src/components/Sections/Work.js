import { useState } from 'react'
import { useMyContext } from '../Context'
import { motion } from 'framer-motion'
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
import Popper from '@mui/material/Popper'
import Fade from '@mui/material/Fade'
import GppMaybeIcon from '@mui/icons-material/GppMaybe'

const Work = () => {
  const { WrapperSection, WrapperWorkExp, TextLink, work } = useMyContext()
  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)

  const handlePopper = (e) => {
    setOpen(!open)
    setAnchorEl(e.currentTarget)
  }

  return (
    <WrapperSection id='work'>
      <Typography variant='h2'>Work</Typography>
      <WrapperWorkExp>
        <Typography variant='h4'>My Work Experience</Typography>
        {work.workExperiences.map((exp) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardMedia image={exp.image} alt='' component='img' />
              <CardHeader title={exp.title} subheader={exp.role} />
              <CardContent>
                <List>
                  {exp.list.map((item) => (
                    <ListItem key={item.text}>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText
                        sx={item.popper && { flexGrow: 0, mr: 1 }}
                        primary={item.text}
                      />
                      {item.popper && (
                        <>
                          <GppMaybeIcon
                            color='secondary'
                            onMouseEnter={handlePopper}
                            onMouseLeave={handlePopper}
                            fontSize='small'
                          />
                          <Popper
                            open={open}
                            anchorEl={anchorEl}
                            placement='right'
                            transition
                          >
                            {({ TransitionProps }) => (
                              <Fade {...TransitionProps} timeout={200}>
                                <Card sx={{ p: 2, ml: 1 }}>
                                  <Typography
                                    variant='subtitle2'
                                    color='text.secondary'
                                  >
                                    <i>{item.popper}</i>
                                  </Typography>
                                </Card>
                              </Fade>
                            )}
                          </Popper>
                        </>
                      )}
                    </ListItem>
                  ))}
                </List>
              </CardContent>
              <CardActions>
                <TextLink
                  neoncolor='neon'
                  href={exp.url}
                  target='_blank'
                  rel='noreferrer'
                >
                  Website
                </TextLink>
              </CardActions>
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
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ opacity: { delay: index / 3 } }}
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
