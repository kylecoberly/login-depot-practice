import "./App.css";
import AppHeader from "./AppHeader"
import AppMain from "./AppMain"

import UserContextProvider from "./UserContextProvider"

function App(){
  return (
    <div className="App">
      <UserContextProvider>
        <AppHeader />
        <AppMain />
      </UserContextProvider>
    </div>
  )
}

export default App;
