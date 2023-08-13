import { quoteData } from "../dummy/quotes"
import Quote from "./Quote"


const HomePage = () => {

  const showDialog = (quote) => {
    alert(quote);
  }

  return (
    <div>


      <Quote show={showDialog} data={quoteData} age={90} name='hari' />


    </div>
  )
}
export default HomePage