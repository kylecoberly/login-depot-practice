import UserProfile from "./UserProfile"
import LoginForm from "./LoginForm"
import userContext from "./contexts/user-context"
import { useContext } from "react"

function AppMain(){
  const { user } = useContext(userContext)
  const isLoggedIn = !!user

  return (
    <main>
      {
        isLoggedIn
          ? <UserProfile />
          : <LoginForm />
      }
    </main>
  )
}

export default AppMain;
