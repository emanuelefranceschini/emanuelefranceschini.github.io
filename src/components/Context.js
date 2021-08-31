import React from 'react'
import { useContext, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom';

const Context = React.createContext();

const ContextAPI = ({ children }) => {
  const location = useLocation()
  const history = useHistory()
  // -- Framer Motion Sections Variant Animation --
  const fadeVariant = {
  initial: {opacity: 0}, 
  animate: { opacity: 1},
  exit: {opacity: 0}}
  const [menu, toggleMenu] = useState(false)

  // -- Sections Path For Arrow BTNs functionality --
  const paths = ['/', '/projects', '/contact']

  const changeRoute = (e) => {
    console.log(e.currentTarget)
    e.currentTarget.classList.contains('up') ? history.push(paths[paths.indexOf(location.pathname) - 1]) : history.push(paths[paths.indexOf(location.pathname) + 1])
  }

  // -- Hiding NavBar When Pressing Hamburger NavBtn --
  const hideNav = () => {
    toggleMenu(false)
  }

  return (
    <Context.Provider value={{menu, toggleMenu, hideNav, fadeVariant, changeRoute}}>
      {children}
    </Context.Provider>
  )
}

export const useMyContext = () => useContext(Context) 
export default ContextAPI