import { NavBtn } from '../styledComponents'
import { profiles } from '../../data/profiles'
import Link from '@mui/material/Link'

const ProfileBtns = () => {
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
