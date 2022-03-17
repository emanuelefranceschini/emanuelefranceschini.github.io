import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import '@fontsource/audiowide'
import '@fontsource/ubuntu'
import vector from '../assets/images/Vector.svg'
import arrowDown from '../assets/images/arrowDown.svg'
import arrowUp from '../assets/images/arrowUp.svg'

let theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(0,0,0)'
    },
    secondary: {
      main: '#FF400A',
      dark: 'rgba(255, 64, 10, 0.7)'
    },
    neon: {
      light: '#9bffd9',
      main: '#00FFBF',
      dark: 'rgba(0, 255, 191, 0.7)'
    },
    navBtn: {
      main: '#ffffff'
    },
    text: {
      primary: 'rgba(255,255,255)',
      secondary: 'rgba(255,255,255,0.7)',
      disabled: 'rgba(255,255,255,0.5)',
      hint: 'rgba(255,255,255,0.38)'
    },
    background: {
      default: 'rgb(0,0,0)',
      paper: '#000000'
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: 'smooth',
          cursor: `url(${vector}), auto`
        },
        '::-webkit-scrollbar': {
          width: '10px'
        },
        '::-webkit-scrollbar-track': {
          width: 'rgb(0,0,0)'
        },
        '::-webkit-scrollbar-button:single-button:vertical': {
          height: '10px',
          width: '10px',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain'
        },
        '::-webkit-scrollbar-button:single-button:vertical:decrement': {
          backgroundImage: `url(${arrowUp})`
        },
        '::-webkit-scrollbar-button:single-button:vertical:increment': {
          backgroundImage: `url(${arrowDown})`
        },
        '::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(255, 64, 10, 0.7)',
          borderRadius: '50px'
        },
        '::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#FF400A'
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          position: 'sticky',
          zIndex: 1500,
          width: '100%'
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          width: 'fit-content',
          pointerEvents: 'none'
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontFamily: 'Audiowide',
          textDecoration: 'none'
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(20px)',
          backgroundColor: 'rgba(30,30,30,0.3)'
        }
      }
    },
    MuiCardMedia: {
      styleOverrides: {
        root: {
          padding: '16px'
        }
      }
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: '16px',
          marginTop: 'auto'
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInput-underline:after': {
            borderColor: 'rgb(255,255,255)'
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgba(255,255,255, 0.7)'
            },
            '&: hover fieldset': {
              borderColor: 'rgba(255,255,255, 0.9)'
            },
            '&.Mui-focused fieldset': {
              borderColor: 'rgb(255,255,255)'
            },
            '&.Mui-error fieldset': {
              borderColor: '#d32f2f'
            }
          }
        }
      }
    }
  },
  typography: {
    fontFamily: ['Ubuntu', 'Robot', 'Helvetica', 'sans-serif'].join(','),
    title: {
      fontSize: '40px',
      fontFamily: 'Audiowide',
      textShadow: '0 0 10px rgba(255,255,255, 0.8)',
      '@media (min-width: 600px)': {
        fontSize: '48px'
      },
      '@media (min-width: 900px)': {
        fontSize: '56px'
      },
      '@media (min-width: 1200px)': {
        fontSize: '64px'
      },
      '@media (min-width: 1500px)': {
        fontSize: '72px'
      }
    },
    h2: {
      fontFamily: 'Audiowide',
      textShadow: '0 0 10px rgba(255,255,255, 0.8)'
    }
  }
})
theme.typography.h2.marginBottom = theme.spacing(5)
theme.typography.h4.marginBottom = theme.spacing(3)
theme = responsiveFontSizes(theme)

export default theme
