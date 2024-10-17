import { NavLink } from "react-router-dom";

export default function NavbarLink() {
  return (
    <div
      id="hs-navbar-example"
      className="z-50 absolute sm:relative md:left-12 left-0 top-[100%] sm:top-0 ps-5 pb-6 sm:pb-0 sm:pe-0 w-full sm:flex hidden bg-bgNav sm:bg-transparent hs-collapse overflow-hidden transition-all duration-300"
      aria-labelledby="hs-navbar-example-collapse"
    >
      <div className="flex pt-1 flex-col gap-8 sm:gap-4 md:gap-10 sm:flex-row w-full sm:items-center sm:mt-0 sm:ps-5 text-[16px]">
        <NavLink to="/" className="font-medium focus:outline-none">
          Home
        </NavLink>
        <NavLink to="/addNote" className="font-medium focus:outline-none">
          Add Note
        </NavLink>
        <NavLink to="/archive" className="font-medium focus:outline-none">
          Archive
        </NavLink>
      </div>
    </div>
  );
}
