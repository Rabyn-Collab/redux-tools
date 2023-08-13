


const Quote = ({ age, name, data, show }) => {

  return (
    <div>
      {data.quotes.map((d) => {
        return <div key={d.id}>
          <h1>{d.quote}</h1>
          <p>{d.author}</p>
          <button onClick={() => show(d.quote)}>show the quote</button>

        </div>
      })}
    </div>
  )
}
export default Quote