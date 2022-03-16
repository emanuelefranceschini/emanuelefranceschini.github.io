import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link'
import Arrow from '@mui/icons-material/ArrowCircleUp'

const BackToTopBtn = () => {
  const [visible, setVisible] = useState(false)

  const checkPosition = () => {
    if (window.scrollY > window.innerHeight && !visible) {
      setVisible(true)
    } else if (window.scrollY < window.innerHeight && visible) {
      setVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', checkPosition)
    return () => {
      window.removeEventListener('scroll', checkPosition)
    }
  }, [visible])
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Link
            href='#'
            sx={{
              position: 'fixed',
              right: '30px',
              bottom: '30px',
              zIndex: 2000
            }}
          >
            <IconButton color='secondary'>
              <Arrow fontSize='large' />
            </IconButton>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default BackToTopBtn
