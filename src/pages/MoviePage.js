import { useNavigate, useParams } from "react-router"
import Loading from "../components/Loading";
import { useGetMovieByPageQuery } from "../features/movieApi";
import { imageUrl } from "../features/constants";
import { useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";

const MoviePage = () => {
  const { category, page } = useParams();
  const nav = useNavigate();
  const { data, isLoading, isError, error } = useGetMovieByPageQuery({
    category,
    page
  });


  // useEffect(() => {
  //   window.addEventListener("load", () => {
  //     window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  //   });
  // }, []);


  if (isLoading) {
    return <Loading />

  }




  return (
    <>
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
      <div className="flex justify-center space-x-3 my-7">

        <button onClick={() => nav(-1)} disabled={data?.page === 1 ? true : false} className={data?.page == 1 ? "bg-gray-500 text-white px-3 py-1 rounded-lg" : "bg-black text-white px-3 py-1 "}>Prev</button>
        <h1 className="text-xl">{data?.page}</h1>
        <button onClick={() => nav(`/movie/popular/${data?.page + 1}`)} className="bg-black text-white px-3 py-1 rounded-lg">Next</button>

      </div>
      <ScrollToTop smooth />
    </>
  )
}
export default MoviePage