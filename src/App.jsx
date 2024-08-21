import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./Context/UserContextProvider"

function App() {

  return (
    <UserContextProvider>
      <h1>Context Api</h1>
      <Profile />
      <Login />
    </UserContextProvider>
  )
}

export default App
