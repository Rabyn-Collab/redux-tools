import {
  Card,
  Input,
  Button,
  Typography,
  Radio,
  Checkbox,
  Select,
  Option, Textarea
} from "@material-tailwind/react";
import { checkData, countryData, genders } from "../data/forms_data";
import * as Yup from 'yup';
import { useFormik } from "formik";


const AddForm = () => {

  const userSchema = Yup.object().shape({
    username: Yup.string().required('username required'),

  });


  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      gender: '',
      habits: [],
      country: '',
      msg: '',
      image: ''
    },
    onSubmit: (val) => {
      console.log(val);
    },
    validationSchema: userSchema
  });



  return (
    <Card color="transparent" shadow={true} className="max-w-lg p-5 mx-auto">

      <Typography color="gray" className="mt-1 font-normal">
        Enter your details.
      </Typography>
      <form onSubmit={formik.handleSubmit} className="mt-3 mb-2 ">
        <div className="mb-4 flex flex-col gap-6">
          <Input
            onChange={formik.handleChange}
            name="username"
            value={formik.values.username}
            size="lg" label="Name" />

          {formik.errors.username && <h1 className="text-pink-300">{formik.errors.username}</h1>}
          <Input
            onChange={formik.handleChange}
            name="email"
            value={formik.values.email}
            size="lg" label="Email" />


          <div>
            <Typography color="gray" className="mt-1 font-normal">
              Select Your gender
            </Typography>


            <div className="flex gap-10">
              {genders.map((gen, i) => {
                return <Radio color={gen.color} name="gender" label={gen.label} value={gen.value}
                  onChange={formik.handleChange}
                  key={i} />;
              })}


            </div>
          </div>


          <div>
            <Typography color="gray" className="mt-1 font-normal">
              Select Your habits
            </Typography>


            <div className="flex gap-10">
              {checkData.map((check, i) => {
                return <Checkbox color={check.color}
                  onChange={formik.handleChange}
                  name="habits" label={check.label} value={check.value} key={i} />;
              })}


            </div>
          </div>


          <div>
            <Typography color="gray" className="mt-1 font-normal">
              Select Your Country
            </Typography>


            <div className="my-3">
              <Select name="country"
                onChange={(e) => formik.setFieldValue('country', e)}
                label="Select Your Contry">
                {countryData.map((country, i) => {
                  return <Option value={country.value} key={i}>{country.label}</Option>
                })}
              </Select>

            </div>
          </div>

          <div className="w-96">
            <Textarea
              onChange={formik.handleChange}
              name="msg"
              value={formik.values.msg}
              label="Message" />
          </div>




          <div>
            <Typography color="gray" className="mt-1 font-normal">
              Select Your Image
            </Typography>
            <Input
              onChange={(e) => {
                const file = e.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.addEventListener('load', (e) => {
                  formik.setFieldValue('image', e.target.result);
                })
              }}
              name="image" type="file" />
            {formik.values.image && <img className="my-2" src={formik.values.image} alt="" />}

          </div>





        </div>

        <Button type="submit" className="mt-6" fullWidth>
          Submit
        </Button>

      </form>
    </Card>
  );
}

export default AddForm