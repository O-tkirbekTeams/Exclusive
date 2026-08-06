import { useState } from "react";
import {
  FiHeart,
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiShoppingBag,
  FiXCircle,
  FiStar,
  FiLogOut,
} from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="w-full font-sans">
        <div className="bg-black text-white text-xs py-3 px-4 sm:px-12">
          <div className="container_1200 flex items-center justify-between">
            <div className="flex-1 text-center pl-16 sm:pl-24">
              <span>
                Summer Sale For All Swim Suits And Free Express Delivery - OFF
                50%!
              </span>
              <Link to={"/Detail"}
                className="font-semibold underline ml-2 hover:opacity-80"
              >
                ShopNow
              </Link>
            </div>
            <div className="flex items-center gap-1 cursor-pointer">
              <span>English</span>
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-300">
          <div className="container_1200 px-4 sm:px-12 pt-10 pb-4 flex items-center justify-between gap-4">
            <Link
              to={"/"}
              className="text-2xl font-bold tracking-wide text-black"
            >
              Exclusive
            </Link>

            <nav className="hidden md:flex items-center space-x-12 text-base text-black">
              <NavLink to={"/"} className="hover:border-b-2">
                Home
              </NavLink>
              <NavLink
                to={"/contact"}
                className="hover:text-gray-600 hover:border-b-2  transition-colors"
              >
                Contact
              </NavLink>
              <NavLink
                to={"/about"}
                className="hover:text-gray-600 hover:border-b-2  transition-colors"
              >
                About
              </NavLink>
              <NavLink
                to={"/signUp"}
                className="hover:text-gray-600 hover:border-b-2  transition-colors"
              >
                Sign Up
              </NavLink>
            </nav>

            <div className="flex items-center space-x-6">
              <div className="relative flex items-center bg-gray-100 rounded px-3 py-2 text-xs w-60">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="bg-transparent outline-none w-full pr-6 text-black placeholder-gray-500"
                />
                <FiSearch />
              </div>
              <Link to={"/Like"} className="cursor-pointer">
                <FiHeart />
              </Link>
              <Link to={"/Cart"} className="cursor-pointer">
                <FiShoppingCart />
              </Link>
              <div className="relative">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="cursor-pointer bg-[#DB4444] p-1.5 rounded-full text-white text-[20px]"
                >
                  <FiUser />
                </button>

                {isOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setIsOpen(false)}
                    />

                    <div className="absolute right-1 top-10 z-50">
                      <div className="w-72 rounded bg-[#69606A] from-[#B9B4BC] to-[#221A29] py-6 px-7 shadow-2xl">
                        <div className="flex flex-col gap-6">
                          <Link
                            to="/Account"
                            className="flex items-center gap-4 text-white text-[20px] cursor-pointer"
                          >
                            <FiUser className="text-[28px]" />
                            <span>Manage My Account</span>
                          </Link>

                          <div
                            className="flex items-center gap-4 text-white text-[20px] cursor-pointer"
                          >
                            <FiShoppingBag className="text-[28px]" />
                            <span>My Order</span>
                          </div>

                          <div className="flex items-center gap-4 text-white text-[20px] cursor-pointer" 
                          >
                            <FiXCircle className="text-[28px]" />
                            <span>My Cancellations</span>
                          </div>

                          <div className="flex items-center gap-4 text-white text-[20px] cursor-pointer"
                          >
                            <FiStar className="text-[28px]" />
                            <span>My Reviews</span>
                          </div>

                          <button className="flex items-center gap-4 text-white text-[20px] text-left cursor-pointer">
                            <FiLogOut className="text-[28px]" />
                            <span>Logout</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Navbar;
