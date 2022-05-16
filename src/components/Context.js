import React, { useContext, useState } from 'react'

const Context = React.createContext()

const ContextAPI = ({ children }) => {
  const [menu, toggleMenu] = useState(false)

  return (
    <Context.Provider
      value={{
        menu,
        toggleMenu
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useMyContext = () => useContext(Context)
export default ContextAPI
