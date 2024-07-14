import { Outlet } from "react-router-dom";
import NavMenu from "./components/NavMenu";

function Root() {
  return(
    <div>
      <NavMenu />
      <Outlet />
    </div>
  );
}

export default Root;