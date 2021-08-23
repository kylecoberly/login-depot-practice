import ProfileControl from "./ProfileControl"
import BrandMark from "./BrandMark"
import "./AppHeader.css"

function AppHeader({ user }){
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
