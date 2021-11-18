import ProfileControl from "./ProfileControl"
import BrandMark from "./BrandMark"
import "./AppHeader.css"
import userContext from "./contexts/user-context"
import { useContext } from "react"

function AppHeader(){
  const { user } = useContext(userContext)

  return (
    <header className="AppHeader">
      <BrandMark />
      {
        user && <ProfileControl user={user} />
      }
    </header>
  )
}

export default AppHeader
