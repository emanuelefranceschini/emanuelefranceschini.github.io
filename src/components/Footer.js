import { useMyContext } from './Context'
import ProfileBtns from './Buttons/ProfileBtns'
import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'
import Box from '@mui/material/Box'

const sections = ['about', 'skills', 'work', 'contact']
const Footer = () => {
  const { NavLink } = useMyContext()

  return (
    <>
      <Box sx={{ pl: '8px' }}>
        <ProfileBtns />
      </Box>
      <MenuList>
        {sections.map((el) => (
          <MenuItem key={el}>
            <NavLink href={`#${el}`}>{el}</NavLink>
          </MenuItem>
        ))}
      </MenuList>
    </>
  )
}

export default Footer
