import { useGetMovieVideoQuery } from "../../features/movieApi";

const PageDetail = ({ data, id }) => {


  const { isError, isLoading, error, data: videoData } = useGetMovieVideoQuery(data.id);
  console.log(videoData);

  return (
    <>



    </>
  )
}
export default PageDetail