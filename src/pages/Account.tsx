import Heading from "@components/common/heading/Heading"
import { useAppSelector } from "@store/hooks"

function Profile() {
  const user=useAppSelector((state)=>state.auth.user)
  return (
    <><Heading title="Account Info"/>
    <ul>
      <li>first Name : {user?.firstName }</li>
      <li>last  Name : {user?.lastName}</li>
      <li>email : {user?.email}</li>
    </ul>
    </>
  )
}

export default Profile