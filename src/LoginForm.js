import { useState } from "react"
import login from "./login"
import "./LoginForm.css"
import userContext from "./contexts/user-context"
import { useContext } from "react"

function LoginForm(){
  const { setUser } = useContext(userContext)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const updateUsername = event => setUsername(event.target.value)
  const updatePassword = event => setPassword(event.target.value)

  const handleLogin = event => {
    event.preventDefault()
    login(username, password)
      .then(user => {
        if (!user) throw new Error("Bad username or password")
        setError("")
        setUser(user)
      }).catch(error => {
        setError(error.message)
      })
  }

  return (
    <form onSubmit={handleLogin} className="LoginForm">
      <h2>Login to Login Depot</h2>
      <label htmlFor="username">Username</label>
      <input required onChange={updateUsername} id="username" value={username} placeholder="name@email.com" />

      <label htmlFor="password">Password</label>
      <input required type="password" onChange={updatePassword} id="password" value={password} />

      <input type="submit" value="Login" />
      {
        error
          && <p className="error">{error}</p>
      }
    </form>
  )
}

export default LoginForm
