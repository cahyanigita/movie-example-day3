import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");

  }
  return (
    <div className="flex flex-row w-full justify-between px-5 py-3 shadow-md font-bold  bg-slate-500">
      <h2 className="font-bold">NETFLEX</h2>
      <div className="flex flex-row gap-7">
        <Link to={"/"}>Home</Link>
        <Link to={"/movie"}>Movie</Link>
        <Link to={"/tvshow"}>Tv Show</Link>
        <div onClick={handleLogout}>Logout</div>
      </div>
    </div>
  );
}

export default Navbar;
