import Footer from "./footer";
import Navbar from "./navbar";
import { Outlet } from "react-router-dom";

const Layouts = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow  bg-slate-300">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layouts;
