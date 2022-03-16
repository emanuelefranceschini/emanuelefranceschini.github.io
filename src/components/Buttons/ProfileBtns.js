import { useMyContext } from '../Context'
import Link from '@mui/material/Link'

const ProfileBtns = () => {
  const { NavBtn, profiles } = useMyContext()
  return (
    <>
      {profiles.map((el) => (
        <Link key={el.url} href={el.url} target='_blank'>
          <NavBtn>{el.icon}</NavBtn>
        </Link>
      ))}
    </>
  )
}

export default ProfileBtns
