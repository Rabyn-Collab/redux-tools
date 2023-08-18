import { useState } from "react"

const UseCount = () => {

  const [count, setCount] = useState(0);

  const incre = () => {
    setCount((prev) => prev + 1);
  }
  return [count, incre]
}
export default UseCount