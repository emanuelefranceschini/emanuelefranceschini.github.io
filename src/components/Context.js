import React, { useContext, useState } from 'react'
import { styled } from '@mui/material/styles'
import personalWebsite from '../assets/images/work/personalWebsiteMockup-min.png'
import businessWebsite from '../assets/images/work/businessWebsiteMockup-min.png'
import sporthub from '../assets/images/work/sporthubMockup-min.png'
import gematria from '../assets/images/work/gematriaMockup-min.png'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import MenuList from '@mui/material/MenuList'
import IconButton from '@mui/material/IconButton'
import CableIcon from '@mui/icons-material/Cable'
import ConstructionIcon from '@mui/icons-material/Construction'
import DesignServicesIcon from '@mui/icons-material/DesignServices'
import EqualizerIcon from '@mui/icons-material/Equalizer'
import LinkedIn from '@mui/icons-material/LinkedIn'
import GitHub from '@mui/icons-material/GitHub'

const Context = React.createContext()

const WrapperSection = styled(Box)(({ theme }) => ({
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

const WrapperWorkExp = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(5),
  '@media (min-width: 600px)': {
    marginBottom: theme.spacing(7.5)
  },
  '@media (min-width: 900px)': {
    marginBottom: theme.spacing(10)
  },
  '@media (min-width: 1440px)': {
    marginBottom: theme.spacing(15)
  }
}))

const NavList = styled(MenuList)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '55vw',
  height: '100%',
  '@media (min-width: 600px)': { flexDirection: 'row', width: 'auto' }
}))

const NavLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  textTransform: 'capitalize',
  pointerEvents: 'auto',
  '&:hover': {
    color: theme.palette.secondary.main,
    textShadow: `0px 0px 4px ${theme.palette.secondary.main}`
  }
}))

const TextLink = styled(Link)(({ theme, neoncolor }) => ({
  pointerEvents: 'auto',
  color: theme.palette[neoncolor].dark,
  textShadow: `0px 0px 3px ${theme.palette[neoncolor].main}`,
  textDecoration: 'underline',
  '&:hover': {
    color: theme.palette[neoncolor].main
  }
}))

const NavBtn = styled(IconButton)(({ theme }) => ({
  color: theme.palette.navBtn.main,
  '&:hover': {
    color: theme.palette.secondary.main
  }
}))

const work = {
  workExperiences: [
    {
      title: 'Gematria Technologies',
      image: gematria,
      role: 'Frontend Web Developer - Internship',
      url: 'https://gematria.tech',
      list: [
        {
          icon: <ConstructionIcon color='secondary' />,
          text: 'Migrated the website (HTML-CSS to Gatsby) improving maintainability, performance and responsiveness, while following the redesign specifications.'
        },
        {
          icon: <DesignServicesIcon color='secondary' />,
          text: 'Implemented a modern design system (Material-UI), improving code reusability and visual consistency.'
        },
        {
          icon: <CableIcon color='secondary' />,
          text: 'Integrated a state management system (Redux), for improved code readability and organization.'
        },
        {
          icon: <EqualizerIcon color='secondary' />,
          text: 'Designed and developed four data analysis dashboards with multiple filters, using React and modern charting libraries.',
          popper: 'Subject to NDA. Further details available privately.'
        }
      ]
    }
  ],
  personalProjects: [
    {
      title: 'Freelance Personal Website',
      img: personalWebsite,
      text: [
        "A website showcasing a client's digital marketing consultation services and articles.",
        <br key='br0' />,
        <br key='br1' />,
        'Built with: React.js-CSS.'
      ],
      links: [
        {
          name: 'Website',
          url: 'https://www.emanueledaquino.net/',
          color: 'neon'
        }
      ]
    },
    {
      title: 'Freelance Business Website',
      img: businessWebsite,
      text: [
        "A restaurant's website where people can find its menu, services and directions..",
        <br key='br2' />,
        <br key='br3' />,
        'Built with: React.js-Material-UI.'
      ],
      links: [
        {
          name: 'Website',
          url: 'https://pizzeriadapagni.netlify.app/',
          color: 'neon'
        }
      ]
    },
    {
      title: 'SportHub',
      img: sporthub,
      text: [
        'Search & save sport suggestions in your area.',
        <br key='br4' />,
        <br key='br5' />,
        'Built with: React.js-CSS-Node.js-Express.'
      ],
      links: [
        {
          name: 'Website',
          url: 'https://emanuelefranceschini.github.io/sporthub/',
          color: 'neon'
        },
        {
          name: 'Code',
          url: 'https://github.com/emanuelefranceschini/sporthub',
          color: 'secondary'
        }
      ]
    }
  ]
}

const profiles = [
  {
    icon: <LinkedIn />,
    url: 'https://www.linkedin.com/in/emanuele-franceschini/'
  },
  { icon: <GitHub />, url: 'https://github.com/emanuelefranceschini' }
]

const formValuesInitialState = [
  {
    name: 'full name',
    label: 'Full Name',
    value: '',
    valid: false,
    regex: /^[a-z\s]+$/i
  },
  { name: 'company', label: 'Company', value: '', valid: true },
  {
    name: 'email',
    label: 'Email',
    value: '',
    valid: false,
    regex: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
  },
  {
    name: 'message',
    label: 'Message',
    value: '',
    valid: false,
    regex: /^(?!\s*$).+/
  }
]

const ContextAPI = ({ children }) => {
  const [menu, toggleMenu] = useState(false)

  return (
    <Context.Provider
      value={{
        menu,
        toggleMenu,
        WrapperSection,
        WrapperWorkExp,
        NavLink,
        TextLink,
        NavList,
        NavBtn,
        profiles,
        work,
        formValuesInitialState
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useMyContext = () => useContext(Context)
export default ContextAPI
