import { Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import NotFound from "./pages/NotFound"
import RootLayOut from "./components/RootLayOut"
import About from "./pages/web_info/About"
import Contact from "./pages/web_info/Contact"

// deploy
const App = () => {


  return (
    <Routes>
      <Route path="/" element={<RootLayOut />} >
        <Route index element={<HomePage />} />
        <Route path="about-us" element={<About />} />
        <Route path="contact-us" element={<Contact />} />

      </Route>


      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
export default App