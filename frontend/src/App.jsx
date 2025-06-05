import { BrowserRouter, Routes, Route } from "react-router-dom"
import UserLayout from "./layouts/UserLayout"
import AdminLayout from "./layouts/AdminLayout"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}></Route>
        <Route path="/admin" element={<AdminLayout />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
