import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import AboutPage from "./Pages/AboutPage.jsx"
import LoginPage from "./Pages/LoginPage.jsx"
import Marquee from "./Pages/Marquee.jsx"

function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/marquee" element={<Marquee />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
