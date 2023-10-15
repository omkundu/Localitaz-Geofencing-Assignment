import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
// import {Nike} from "../assets/Nike_logo"
const Navbar = () => {
  return (
    <div className="bg-gray-500 text-white border-b-2 sticky top-0 z-50">
      <div className="navbar container mx-auto flex justify-between items-center">
        <a className="btn btn-ghost normal-case text-xl">
          <img className="h-full" src="https://www.nicepng.com/png/full/1-15470_logo-png-svg-vector-nike-just-do-it.png" alt="" />
        </a>
        <ul className="menu menu-horizontal flex">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Shoes Categories</Link>
          </li>
          <li>
            <Link to="/">About Us</Link>
          </li>
        </ul>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="#">Home</Link>
            </li>
            <li>
              <Link to="#">Shoes Categories</Link>
            </li>
            <li>
              <Link to="#">About Us</Link>
            </li>
            <li>
              <Link to="#" className="text-xl">
                <BsCart4 />
              </Link>
            </li>
            <li>
              <div className="dropdown dropdown-bottom dropdown-left">
                <label tabIndex={0} className="avatar">
                  <div className="w-7 rounded-full ring ring-offset-base-100 ring-offset-2">
                    <img src="https://www.thecakepalace.com.au/wp-content/uploads/2022/10/dummy-user.png" alt="" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Profile</a>
                  </li>
                  <li>
                    <a>View Cart</a>
                  </li>
                  <li>
                    <a>Log Out</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
