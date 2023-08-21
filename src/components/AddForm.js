import {
  Card,
  Input,
  Button,
  Typography,
  Radio
} from "@material-tailwind/react";

const AddForm = () => {


  const genders = [
    { value: 'male', color: 'blue', label: 'Male' },
    { value: 'female', color: 'red', label: 'Female' },
    { value: 'other', color: 'brown', label: 'Other' },
  ];

  const habits = [];

  return (
    <Card color="transparent" shadow={true} className="max-w-lg p-5 mx-auto mt-3">

      <Typography color="gray" className="mt-1 font-normal">
        Enter your details.
      </Typography>
      <form className="mt-8 mb-2 ">
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="Name" />
          <Input size="lg" label="Email" />


          <div>
            <Typography color="gray" className="mt-1 font-normal">
              Select Your gender
            </Typography>


            <div className="flex gap-10">
              {genders.map((gen, i) => {
                return <Radio color={gen.color} name="gender" label={gen.label} value={gen.value} key={i} />;
              })}


            </div>
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