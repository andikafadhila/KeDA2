import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

const Dropdown = ({
  scrollToElement,
  scrollToElementPricing,
  scrollToElementContact,
}) => {
  return (
    <div>
      <div className="bg-white flex flex-col">
        <div className="flex items-center">
          <div className=" relative inline-block text-left dropdown">
            <span className="rounded-md shadow-sm">
              <button
                className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                type="button"
                aria-haspopup="true"
                aria-expanded="true"
                aria-controls="headlessui-menu-items-117"
              >
                <span>
                  <GiHamburgerMenu />
                </span>
              </button>
            </span>
            <div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
              <div
                className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                aria-labelledby="headlessui-menu-button-1"
                id="headlessui-menu-items-117"
                role="menu"
              >
                <div className="py-1">
                  <a
                    href="/login"
                    tabindex="0"
                    className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                    role="menuitem"
                  >
                    Login
                  </a>
                  <a
                    tabindex="0"
                    className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                    role="menuitem"
                    onClick={scrollToElement}
                  >
                    About
                  </a>
                  <a
                    tabindex="1"
                    className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                    role="menuitem"
                    onClick={scrollToElementPricing}
                  >
                    Pricing
                  </a>

                  <a
                    tabindex="2"
                    className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                    role="menuitem"
                    onClick={scrollToElementContact}
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
