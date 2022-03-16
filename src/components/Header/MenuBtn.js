import { useMyContext } from '../Context'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import IconButton from '@mui/material/IconButton'
import Close from '@mui/icons-material/Close'
import Menu from '@mui/icons-material/Menu'

const MenuBtn = () => {
  const { menu, toggleMenu } = useMyContext()
  const mQuery = useMediaQuery(useTheme().breakpoints.down('sm'), {
    noSsr: true
  })
  return (
    mQuery && (
      <IconButton
        color='navBtn'
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        onClick={() => toggleMenu(!menu)}
      >
        {menu ? <Close /> : <Menu />}
      </IconButton>
    )
  )
}

export default MenuBtn
