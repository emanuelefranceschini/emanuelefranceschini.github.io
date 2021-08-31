import { Route, Switch } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {

  return (
    <>
      <Header />
      <Route render={({ location }) => (
        <AnimatePresence exitBeforeEnter initial={true}>
          <Switch location={location} key={location.pathname} >
            <Route path='/' exact render={() => (
              <>
                <About />
              </>
            )}
            />
            <Route path='/projects' render={() => (
              <>
                <Projects />
              </>
            )}
            />
            <Route path='/contact' render={() => (
              <>
                <Contact />
              </>
            )}
            />
          </Switch>
          </AnimatePresence>
      )}
      />
    </>
  )
}

export default App;
