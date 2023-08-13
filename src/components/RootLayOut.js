import { Outlet } from "react-router"

const RootLayOut = () => {
  return (
    <>

      <header>
        <h1>THis is a header</h1>
      </header>
      <Outlet />
    </>
  )
}
export default RootLayOut