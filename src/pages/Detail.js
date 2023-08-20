import { useParams } from "react-router"
import ApiHooks from "../hooks/ApiHooks";
import Loading from "../components/Loading";
import { Image, Shimmer } from 'react-shimmer'
const Detail = () => {

  const { id } = useParams();
  const [load, err, data] = ApiHooks(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`);


  if (load) {
    return <Loading />;
  }

  if (err) {
    return <h1>{err}</h1>
  }




  return (
    <div className="p-5 grid grid-cols-3 gap-5 items-start ">

      {data && data.meals.map((meal) => {
        return <div key={meal.idMeal} className="shadow-xl space-y-3 cursor-pointer">

          <h1 className="p-3">{meal.strMeal}</h1>

          <Image
            src={meal.strMealThumb}
            fallback={<Shimmer width={800} height={500} duration={3000} />}
          />




        </div>
      })}

    </div>
  )
}
export default Detail