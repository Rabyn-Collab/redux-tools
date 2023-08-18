import { useState } from "react";
import Loading from "../components/Loading";
import ApiHooks from "../hooks/ApiHooks"
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";



const HomePage = () => {


  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const [load, err, data] = ApiHooks('https://www.themealdb.com/api/json/v1/1/categories.php');


  if (load) {
    return <Loading />;
  }

  if (err) {
    return <h1>{err}</h1>
  }

  console.log(data);

  return (
    <div className="p-5 grid grid-cols-3 gap-5 items-start ">

      {data && data.categories.map((mealCa) => {
        return <div onClick={handleOpen} key={mealCa.idCategory} className="shadow-xl space-y-3 cursor-pointer">

          <h1 className="p-3">{mealCa.strCategory}</h1>
          <img src={mealCa.strCategoryThumb} alt="" />
          <p className="p-3">{mealCa.strCategoryDescription.substring(0, 200) + '....'}</p>
          <Dialog size="lg" open={open} handler={handleOpen}>
            <DialogHeader>{mealCa.strCategory}</DialogHeader>
            <DialogBody divider>
              <img src={mealCa.strCategoryThumb} alt="" />
              <p className="p-3">{mealCa.strCategoryDescription}</p>

            </DialogBody>
            <DialogFooter>
              <Button
                variant="text"
                color="red"
                onClick={handleOpen}
                className="mr-1"
              >
                <span>Cancel</span>
              </Button>
              <Button variant="gradient" color="green" onClick={handleOpen}>
                <span>Confirm</span>
              </Button>
            </DialogFooter>
          </Dialog>


        </div>
      })}




    </div>
  )
}
export default HomePage