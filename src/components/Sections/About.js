import { useMyContext } from '../Context'
import { motion } from 'framer-motion'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const Home = () => {
  const { TextLink } = useMyContext()
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <Box
        id='about'
        sx={{
          minHeight: 'calc(100vh - 64px)',
          '@media (max-width: 600px)': {
            minHeight: 'calc(100vh - 56px)'
          },
          '@media (orientation: landscape) and (max-width: 600px)': {
            minHeight: 'calc(100vh - 48px)'
          }
        }}
      >
        <Grid
          container
          direction='column'
          justifyContent='center'
          alignItems='start'
          sx={{ minHeight: 'inherit' }}
        >
          <Grid item>
            <Typography variant='title'>Emanuele Franceschini</Typography>
          </Grid>
          <Grid item>
            <Typography variant='h6' color='text.secondary'>
              Hi! I'm a Frontend Web Developer based in London. Check out{' '}
              <TextLink href='#work' neoncolor='neon'>
                my work
              </TextLink>{' '}
              or{' '}
              <TextLink href='#contact' neoncolor='secondary'>
                get in touch!
              </TextLink>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </motion.div>
  )
}

export default Home
