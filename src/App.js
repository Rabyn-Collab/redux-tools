import { Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import Sample from "./pages/Sample"
import NotFound from "./pages/NotFound"

const App = () => {




  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="sample_page" element={<Sample />} />
      <Route path="*" element={<NotFound />} />


    </Routes>
  )
}
export default App