import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="container absolute left-16 top-0 bg-white justify-between flex items-center px-10 shadow-md">
          <div>
            <img className="h-20" src="images/panda_logo_png.png" />
          </div>
          <ul className="flex space-x-10 py-6 font-medium">
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => {
                  return {
                    borderBottom: isActive ? "4px solid teal" : "",
                    // border-b-4 border-teal-300 pb-3
                  };
                }}
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/packs"
                style={({ isActive }) => {
                  return {
                    borderBottom: isActive ? "4px solid teal" : "",
                  };
                }}
              >
                PACKAGES
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/requests"
                style={({ isActive }) => {
                  return {
                    borderBottom: isActive ? "4px solid teal" : "",
                  };
                }}
              >
                REQUESTS
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

// className="border-b-4 border-teal-300 pb-3"
