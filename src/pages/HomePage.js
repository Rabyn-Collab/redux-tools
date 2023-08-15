import { useEffect, useState } from "react"

const HomePage = () => {


  const [i, setI] = useState(0);
  const [i1, setI1] = useState(0);




  useEffect(() => {
    console.log('hello');
    setI((p) => p + 1);
  }, []);

  return (
    <div>
      <button onClick={(e) => setI1((p) => p + 1)}>click</button>
      <h1>{i}</h1>
    </div>
  )
}
export default HomePage