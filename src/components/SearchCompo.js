import {
  Button,
  Input,
} from "@material-tailwind/react";
import { useFormik } from "formik";
import { useNavigate } from "react-router";




const SearchCompo = () => {
  const nav = useNavigate();
  const formik = useFormik({
    initialValues: {
      search: ''
    },
    onSubmit: (val, { resetForm }) => {
      nav(`/movieSearch/${val.search}`);
      resetForm();
    }
  });
  return (


    <div className="relative flex  gap-2">

      <form onSubmit={formik.handleSubmit}>
        <Input
          onChange={formik.handleChange}
          name="search"
          value={formik.values.search}
          color="white"
          type="search"
          label="Type here..."
          className="pr-20"

        />
        <Button type="submit" size="sm" color="indigo" className="!absolute right-1 top-1 rounded">
          Search
        </Button>

      </form>

    </div>


  )
}
export default SearchCompo