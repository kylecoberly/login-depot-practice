import "./App.css";
import { useState } from "react"
import AppHeader from "./AppHeader"
import UserProfile from "./UserProfile"
import LoginForm from "./LoginForm"

function App(){
  const [user, setUser] = useState(null)
  const isLoggedIn = !!user

  return (
    <div className="App">
      <AppHeader user={user} />
      <main>
        {
          isLoggedIn
            ? <UserProfile user={user} setUser={setUser} />
            : <LoginForm setUser={setUser} />
        }
      </main>
    </div>
  )
}

export default App;
