import { Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import Sample from "./pages/Sample"
import NotFound from "./pages/NotFound"
import RootLayOut from "./components/RootLayOut"

const App = () => {




  return (
    <Routes>
      <Route path="/" element={<RootLayOut />} >
        <Route index element={<HomePage />} />
        <Route path="sample_page" element={<Sample />} />

      </Route>


      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
export default App