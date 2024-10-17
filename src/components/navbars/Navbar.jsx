import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "preline/preline";

import HamburgerMenu from "./HamburgerMenu";
import BrandName from "./BrandName";
import InputSearch from "./InputSearch";
import NavbarLink from "./NavbarLink";

function Navbar({ onChangeSearch }) {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  const isAddNotePage = location.pathname === "/addNote";

  return (
    <>
      <header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap text-white w-full bg text-sm ">
        <nav className="fixed bg-bgNav h-20 max-w-[85rem] w-full mx-auto px-4 md:px-6 flex items-center justify-">
          <BrandName />
          <NavbarLink />

          <div className="flex sm:ms-0  justify-between items-center w-[90%] md:w-1/2">
            <InputSearch {...{ onChangeSearch, isAddNotePage }} />
            <div className="sm:hidden">
              <button
                type="button"
                className="hs-collapse-toggle relative size-7 flex justify-center items-center gap-x-2 text-white  "
                id="hs-navbar-example-collapse"
                aria-expanded="false"
                aria-controls="hs-navbar-example"
                aria-label="Toggle navigation"
                data-hs-collapse="#hs-navbar-example"
              >
                <HamburgerMenu />
                <span className="sr-only">Toggle navigation</span>
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
