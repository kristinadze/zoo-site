const Navbar = () => {
  return (
    <>
      <nav>
        <div className="container absolute top-0 bg-white justify-between flex items-center px-10">
          <div>
            <img className="h-20" src="images/panda_logo_png.png" />
          </div>
          <ul className="flex space-x-10 py-6 font-medium">
            <li>
              <a href="#" className="border-b-4 border-teal-300 pb-3">
                HOME
              </a>
            </li>
            <li>
              <a href="#">PACKAGES</a>
            </li>
            <li>
              <a href="#">REQUESTS</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
