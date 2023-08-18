import axios from "axios";
import { useEffect, useState } from "react"

const HomePage = () => {




  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState(null);

  const getData = async () => {
    axios.get('');
  }


  useEffect(() => {

  }, []);


  return (
    <div>



    </div>
  )
}
export default HomePage