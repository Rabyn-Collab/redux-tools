import { quoteData } from "../dummy/quotes"
import Quote from "./Quote"


const HomePage = () => {


  return (
    <div>


      <Quote data={quoteData} age={90} name='hari' />


    </div>
  )
}
export default HomePage