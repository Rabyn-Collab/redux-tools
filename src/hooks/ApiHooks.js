import axios from "axios";
import { useEffect, useState } from "react";




const ApiHooks = (url) => {


  const [data, setData] = useState(null);
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState(false);


  const getData = async () => {
    setLoad(true);
    try {
      const response = await axios.get(url);
      setData(response.data);
      setLoad(false);

    } catch (err) {
      setErr(err.message);
      setLoad(false);
    }
  }


  useEffect(() => {
    getData();
  }, []);


  return [load, err, data];
}
export default ApiHooks