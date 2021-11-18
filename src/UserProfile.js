import "./UserProfile.css"
import userContext from "./contexts/user-context"
import { useContext } from "react"

function UserProfile(){
  const logout = () => setUser(null)
  const { user, setUser } = useContext(userContext)

  return (
    <div className="UserProfile">
      <h2>Manage Profile</h2>
      <div className="profile-container">
        <img src={user.avatarUrl} alt={`Avatar of ${user.username}`} />
        <section>
          <p className="description">{user.description}</p>
          <button onClick={logout} className="logout">Logout {user.username}</button>
        </section>
      </div>
    </div>
  )
}

export default UserProfile
