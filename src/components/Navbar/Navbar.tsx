import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="container absolute left-16 top-0 bg-white justify-between flex items-center px-10">
          <div>
            <img className="h-20" src="images/panda_logo_png.png" />
          </div>
          <ul className="flex space-x-10 py-6 font-medium">
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="packs">PACKAGES</NavLink>
            </li>
            <li>
              <NavLink to="requests">REQUESTS</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

// className="border-b-4 border-teal-300 pb-3"
