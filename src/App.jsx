import { BrowserRouter,Route, Routes } from "react-router"
import Login from "./pages/login"
import Signup from "./pages/signup"
import Landing from "./pages/Landing"
import { useState } from "react"

function App() {

  const [users, setusers] = useState([
    {
      username: "Kaviya",
      password: "1234"
    }
  ])

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login users={users} setusers={setusers} />}></Route>
          <Route path="/signup" element={<Signup users={users} setusers={setusers} />}></Route>
          <Route path="/landing" element={<Landing />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
