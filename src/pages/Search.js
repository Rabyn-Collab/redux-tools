import { useNavigate, useParams } from "react-router"
import { useGetSearchMovieQuery } from "../features/movieApi";
import Loading from "../components/Loading";
import { imageUrl } from "../features/constants";

const Search = () => {
  const nav = useNavigate();
  const { search } = useParams();
  const { data, isLoading, isError, error } = useGetSearchMovieQuery(search);



  if (isLoading) {
    return <Loading />

  }


  if (data?.results?.length === 0) {
    return <h1 className="p-5 text-pink-700">Try using another keyword</h1>;
  }


  return (
    <div className="grid grid-cols-4 gap-y-11 gap-x-4 px-4 mt-7 items-center">

      {data && data.results.map((movie) => {
        return <div
          onClick={() => nav(`/movieDetail/${movie.id}`)}
          className="cursor-pointer hover:scale-110 h-[450px] overflow-hidden duration-300 ease-in" key={movie.id}>
          <img className="w-full h-[300px]" src={`${imageUrl}${movie.poster_path}`} alt="" />
          <div className="p-2 shadow-lg">
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
          </div>

        </div>
      })}
    </div>
  )
}
export default Search