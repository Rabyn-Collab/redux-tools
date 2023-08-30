import { Outlet, useLocation, useNavigate } from "react-router"

const Sample = () => {
  const nav = useNavigate();
  const data = useLocation();
  console.log(data);
  return (
    <>


      <button onClick={() => nav('1')}>Next TO</button>
      <button onClick={() => nav('2')}>Next TO1</button>


      <Outlet />
    </>
  )
}
export default Sample