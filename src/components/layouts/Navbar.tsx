import React, { useCallback, useState } from "react";
import SiteLogo from "../SiteLogo";
import { navigationItems } from "../../globals";
import Link from "../Link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu: React.MouseEventHandler<HTMLButtonElement> = useCallback((e) => {
    e.stopPropagation();
    setOpen((p) => !p);
  }, []);

  const closeMenu = useCallback(() => setOpen(false), []);

  return (
    <div className="!max-w-screen-xl">
      <div className="flex flex-col py-5 lg:items-center lg:justify-between lg:flex-row w-full">
        <div className="flex flex-row items-center justify-between">
          <SiteLogo text="GCOIN" />
          <button
            className="rounded-lg lg:hidden p-1 hover:bg-gray-200 focus:outline-none
              focus:bg-gray-100 hover:text-primary focus:text-primary"
            onClick={toggleMenu}
          >
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-8 h-8">
              {/* bars */}
              <path
                className={open ? "hidden" : "inline-block"}
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
              {/* cancel */}
              <path
                className={open ? "inline-block" : "hidden"}
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <nav
          className={`${open ? "block" : "hidden"} lg:block border border-gray-500 p-2 lg:p-0
           bg-black lg:bg-transparent lg:border-none absolute lg:relative top-20 lg:top-0 lg:left-0 left-2
          right-2`}
        >
          <ul className="flex flex-col flex-grow pb-4 lg:pb-0 lg:flex-row lg:justify-end lg:items-center">
            {navigationItems.map((nav) => (
              <li key={nav.id} className="inline-block mt-2 lg:mt-0 text-lg">
                <Link
                  to={nav.href}
                  className="px-5 block py-3 font-semibold bg-transparent rounded-lg
                hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200
                focus:bg-gray-200 focus:outline-none focus:shadow-outline transition-colors duration-300"
                  onClick={closeMenu}
                >
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
