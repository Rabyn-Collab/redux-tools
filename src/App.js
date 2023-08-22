import { Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import NotFound from "./pages/NotFound"
import RootLayOut from "./components/RootLayOut"
import About from "./pages/web_info/About"
import Contact from "./pages/web_info/Contact"
import AddForm from "./components/AddForm"
//import * as Hi from './data/data';

const App = () => {

  // console.log(Hi.default);
  return (
    <Routes>
      <Route path="/" element={<RootLayOut />} >
        <Route index element={<HomePage />} />

        <Route path="about-us" element={<About />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="add/user" element={<AddForm />} />


      </Route>


      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
export default App