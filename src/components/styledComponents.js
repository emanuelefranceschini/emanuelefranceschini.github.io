import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import MenuList from '@mui/material/MenuList'
import IconButton from '@mui/material/IconButton'

export const WrapperSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(10),
  '@media (min-width: 600px)': {
    marginBottom: theme.spacing(15)
  },
  '@media (min-width: 900px)': {
    marginBottom: theme.spacing(20)
  },
  '@media (min-width: 1440px)': {
    marginBottom: theme.spacing(30)
  }
}))

export const WrapperWorkExp = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2.5),
  marginBottom: theme.spacing(5),
  '@media (min-width: 600px)': {
    marginBottom: theme.spacing(7.5),
    gap: theme.spacing(3.5)
  },
  '@media (min-width: 900px)': {
    marginBottom: theme.spacing(10),
    gap: theme.spacing(5)
  },
  '@media (min-width: 1440px)': {
    marginBottom: theme.spacing(15),
    gap: theme.spacing(7.5)
  }
}))

export const NavList = styled(MenuList)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '55vw',
  height: '100%',
  '@media (min-width: 600px)': { flexDirection: 'row', width: 'auto' }
}))

export const NavLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  textTransform: 'capitalize',
  pointerEvents: 'auto',
  '&:hover': {
    color: theme.palette.secondary.main,
    textShadow: `0px 0px 4px ${theme.palette.secondary.main}`
  }
}))

export const TextLink = styled(Link)(({ theme, neoncolor }) => ({
  pointerEvents: 'auto',
  color: theme.palette[neoncolor].dark,
  textShadow: `0px 0px 3px ${theme.palette[neoncolor].main}`,
  textDecoration: 'underline',
  '&:hover': {
    color: theme.palette[neoncolor].main
  }
}))

export const NavBtn = styled(IconButton)(({ theme }) => ({
  color: theme.palette.navBtn.main,
  '&:hover': {
    color: theme.palette.secondary.main
  }
}))
