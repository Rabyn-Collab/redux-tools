import { Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import NotFound from "./pages/NotFound"
import RootLayOut from "./components/RootLayOut"
import MovieByCategory from "./components/MovieByCategory"
import Detail from "./pages/Detail"
import Search from "./pages/Search"
import MoviePage from "./pages/MoviePage"
import Sample from "./pages/Sample"
import Sample1 from "./pages/page_detail/Sample1"
import Sample2 from "./pages/Sample2"



const App = () => {



  return (
    <Routes>
      <Route path="/" element={<RootLayOut />} >
        <Route index element={<HomePage />} />


        <Route path='parent' element={<Sample />} >
          <Route path="1" element={<Sample1 />} />
          <Route path="2" element={<Sample2 />} />
        </Route>
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