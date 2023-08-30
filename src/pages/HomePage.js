import { useNavigate } from "react-router";
import MovieByCategory from "../components/MovieByCategory";
import { imageUrl } from "../features/constants";
import { useGetMovieByCategoryQuery } from "../features/movieApi"



const HomePage = () => {


  const nav = useNavigate();
  return (
    <>
      {/* <button onClick={() => nav('/parent')}>Go</button> */}
      <MovieByCategory />

    </>
  )
}
export default HomePage