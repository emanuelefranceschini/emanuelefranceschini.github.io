import ProfileBtns from '../Buttons/ProfileBtns'
import NavBar from './NavBar'
import MenuBtn from './MenuBtn'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import logo from '../../assets/images/logo.svg'

const Header = () => {
  return (
    <AppBar>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box
          src={logo}
          component='img'
          sx={{
            height: '36px',
            '@media (min-width:0px) and (orientation: landscape)': {
              height: '28px'
            },
            '@media (min-width: 600px)': { height: '44px' }
          }}
        />
        <Stack direction='row' alignItems='center'>
          <ProfileBtns />
          <NavBar />
          <MenuBtn />
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default Header
