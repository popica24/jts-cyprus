import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className=" max-w-[90vmin] mx-auto md:container lg:px-24 ">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
