import { FiHeart, FiSearch, FiShoppingCart } from "react-icons/fi";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header class="w-full font-sans">
        <div class="bg-black text-white text-xs py-3 px-4 sm:px-12">
          <div class="max-w-7xl mx-auto flex items-center justify-between">
            <div class="flex-1 text-center pl-16 sm:pl-24">
              <span>
                Summer Sale For All Swim Suits And Free Express Delivery - OFF
                50%!
              </span>
              <a href="#" class="font-semibold underline ml-2 hover:opacity-80">
                ShopNow
              </a>
            </div>
            <div class="flex items-center gap-1 cursor-pointer">
              <span>English</span>
              <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
        </div>

        <div class="border-b border-gray-300">
          <div class="container_1200 px-4 sm:px-12 pt-10 pb-4 flex items-center justify-between gap-4">
            <a href="#" class="text-2xl font-bold tracking-wide text-black">
              Exclusive
            </a>

            <nav class="hidden md:flex items-center space-x-12 text-base text-black">
              <NavLink to={"/"} class="hover:border-b-2  ">
                Home
              </NavLink>
              <a href="#" class="hover:text-gray-600 hover:border-b-2  transition-colors">
                Contact
              </a>
              <NavLink to={"/about"} class="hover:text-gray-600 hover:border-b-2  transition-colors">
                About
              </NavLink>
              <a href="#" class="hover:text-gray-600 hover:border-b-2  transition-colors">
                Sign Up
              </a>
            </nav>

            <div class="flex items-center space-x-6">
              <div class="relative flex items-center bg-gray-100 rounded px-3 py-2 text-xs w-60">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  class="bg-transparent outline-none w-full pr-6 text-black placeholder-gray-500"
                />
                <FiSearch />
              </div>
              <div className="cursor-pointer">
                <FiHeart />
              </div>
              <div className="cursor-pointer">
                <FiShoppingCart />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Navbar;
