import { IoIosMenu } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'
import { useMyContext } from './Context'

const BrgrBtn = () => {
  const { menu, toggleMenu } = useMyContext()
  return (
      menu ? <IoClose className='brgr-btn close' onClick={() => toggleMenu(!menu)} /> : <IoIosMenu className='brgr-btn' onClick={() => toggleMenu(!menu)}/>
  )
}

export default BrgrBtn