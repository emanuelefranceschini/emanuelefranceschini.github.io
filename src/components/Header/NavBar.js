import { useMyContext } from '../Context'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Drawer from '@mui/material/Drawer'
import MenuItem from '@mui/material/MenuItem'

const sections = ['about', 'skills', 'work', 'contact']
const NavBar = () => {
  const { menu, toggleMenu, NavLink, NavList } = useMyContext()
  const mQuery = useMediaQuery(useTheme().breakpoints.down('sm'), {
    noSsr: true
  })
  return mQuery ? (
    <Drawer
      disableScrollLock
      anchor='right'
      open={menu}
      onClose={() => toggleMenu(false)}
      sx={{
        '& .MuiDrawer-paper': {
          backdropFilter: 'blur(20px)',
          backgroundColor: 'rgba(0, 0, 0, 0.9)'
        }
      }}
    >
      <NavList>
        {sections.map((el) => (
          <MenuItem key={`drawer_${el}`}>
            <NavLink href={`#${el}`} onClick={() => toggleMenu(false)}>
              {el}
            </NavLink>
          </MenuItem>
        ))}
      </NavList>
    </Drawer>
  ) : (
    <NavList>
      {sections.map((el) => (
        <MenuItem key={el}>
          <NavLink href={`#${el}`} onClick={() => toggleMenu(false)}>
            {el}
          </NavLink>
        </MenuItem>
      ))}
    </NavList>
  )
}
export default NavBar
