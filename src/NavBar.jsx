import { useDispatch, useSelector } from "react-redux";
import {Link, useNavigate} from "react-router-dom"
import { BASE_URL } from "./utils/constant";
import axios from "axios";
import { removeUser } from "./utils/userSlice";
import { removeListener } from "@reduxjs/toolkit";


const NavBar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async()=>{
    try{
      await axios.post(BASE_URL+"/logout",{},{withCredentials:true});
      dispatch(removeUser());
      return navigate("/login")

    }
    catch(err){
      console.log(error)
    }
  }

  return (
    <div className="navbar bg-base-300 px-4">
      <div className="flex-1">
        <Link to="/feed" className="btn btn-ghost text-xl">👩‍💻 DevTinder</Link>
      </div>

      {user && (
        <div className="flex items-center gap-4">
          <span className="text-sm">Welcome, {user.firstName}</span>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full overflow-hidden">
                <img
                  alt="user"
                  src={user.photoUrl}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile <span className="badge">New</span>
                </Link>
              </li>
              <li>
               <Link to='/connections'>Connections</Link>
              </li>
                <li>
                <Link to="/requests">Requests</Link>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
