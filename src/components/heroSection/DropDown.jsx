import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

function DropDown() {
  return (
    <Menu as="div" className="relative inline-block text-left pt-9">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-20 rounded-md dark:bg-darkBlueDarkModeEL dark:text-white px-3 py-1 lg:py-2 drop-shadow-2xl shadow-black/20 text-gray-900 shadow-md text-xs lg:text-base">
          Filter Movies
          <FontAwesomeIcon
            icon={faCaretDown}
            aria-hidden="true"
            className="-mr-1 h-5 w-5 lg:pl-12"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute mt-2 w-full origin-top-right divide-y rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in dark:bg-darkBlueDarkModeEL"
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-xs lg:text-base text-gray-700 data-[focus]:bg-gray-600 data-[focus]:text-gray-900 dark:text-white"
            >
              Popularity
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-xs lg:text-base text-gray-700 data-[focus]:bg-gray-600 data-[focus]:text-gray-900 dark:text-white"
            >
              Title
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-xs lg:text-base text-gray-700 data-[focus]:bg-gray-600 data-[focus]:text-gray-900 dark:text-white"
            >
              Release Date
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-xs lg:text-base text-gray-700 data-[focus]:bg-gray-600 data-[focus]:text-gray-900 dark:text-white"
            >
              Votes Average
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}

export default DropDown;
