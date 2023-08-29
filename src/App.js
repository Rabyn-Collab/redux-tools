import { Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import NotFound from "./pages/NotFound"
import RootLayOut from "./components/RootLayOut"
import MovieByCategory from "./components/MovieByCategory"
import Detail from "./pages/Detail"
import Search from "./pages/Search"
import MoviePage from "./pages/MoviePage"



const App = () => {



  return (
    <Routes>
      <Route path="/" element={<RootLayOut />} >
        <Route index element={<HomePage />} />
        <Route path="movie/:category" element={<MovieByCategory />} />
        <Route path="movieDetail/:id" element={<Detail />} />
        <Route path="movieSearch/:search" element={<Search />} />


        <Route path="movie/:category/:page" element={<MoviePage />} />

      </Route>

      <Route path="*" element={<NotFound />} />

    </Routes>
  )
}
export default App