import kiyim from "../../assets/products-img/kiyim.png";
import sumka from "../../assets/products-img/sumka.png";
import kalonka from "../../assets/products-img/kalonka.png";
import stol from "../../assets/products-img/stol.png";

import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
function Products() {
  return (
    <div>
      <div className="product">
        <div className="container ">
          <div className="mt-20">
            <div className="flex items-center gap-3">
              <div className="w-3 h-8 bg-red-700"></div>
              <h3 className="text-red-700 text-2xl">This Month</h3>
            </div>
            <div className="flex justify-between mt-4 ">
              <h1 className="text-2xl font-bold">Best Selling Products</h1>
              <button className="px-7 py-2 rounded-2xl bg-red-600">
                View All
              </button>
            </div>
            <div className="flex justify-between mt-8 gap-6">
              <div className="">
                <div className="bg-blue-50 relative w-[270px] h-[245px]">
                  <FaHeart
                    className="absolute  left-[230px] top-5 text-red-600"
                    size={25}
                  />
                  <FaEye size={25} className="absolute left-[230px] top-13" />
                  <img src={kiyim} alt="" className="py-12 px-12  m-auto " />
                </div>
                <div className="mt-5">
                  <h2 className="text-xl">The north coat</h2>
                  <span className="text-red-700">$260</span>{" "}
                  <span className="text-black ml-3">$360</span>
                  <h1 className="flex gap-3 text-yellow-500 items-center">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar color="gray" />
                    <FaStar color="gray " />
                    <span className="text-gray-600 ">(88)</span>
                  </h1>
                </div>
              </div>
              <div className="">
                <div className="bg-blue-50 relative w-[270px] h-[245px] ">
                  <FaHeart
                    className="absolute  left-[230px] top-5 text-red-600"
                    size={25}
                  />
                  <FaEye size={25} className="absolute left-[230px] top-13 " />
                  <img src={sumka} alt="" className="py-12 px-12  m-auto " />
                </div>
                <div className="mt-5">
                  <h2 className="text-xl">Gucci duffle bag</h2>
                  <span className="text-red-700">$960</span>{" "}
                  <span className="text-black ml-3">$1260</span>
                  <h1 className="flex gap-3 text-yellow-500 items-center">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar color="gray" />
                    <span className="text-gray-600 ">(88)</span>
                  </h1>
                </div>
              </div>
              <div className="">
                <div className="bg-blue-50 relative w-[270px] h-[245px]">
                  <FaHeart
                    className="absolute  left-[230px] top-5 text-red-600"
                    size={25}
                  />
                  <FaEye size={25} className="absolute left-[230px] top-13" />
                  <img
                    src={kalonka}
                    alt=""
                    className="py-12 px-12 m-auto pt-16"
                  />
                </div>
                <div className="mt-5">
                  <h2 className="text-xl">RGB liquid CPU Cooler</h2>
                  <span className="text-red-700">$160</span>{" "}
                  <span className="text-black ml-3">$200</span>
                  <h1 className="flex gap-3 text-yellow-500 items-center">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <span className="text-gray-600 ">(88)</span>
                  </h1>
                </div>
              </div>

              <div className="">
                <div className="bg-blue-50 relative w-[270px] h-[245px]">
                  <FaHeart
                    className="absolute  left-[230px] top-5 text-red-600"
                    size={25}
                  />
                  <FaEye size={25} className="absolute left-[230px] top-13" />
                  <img src={stol} alt="" className="py-12 px-12 m-auto" />
                </div>
                <div className="mt-5">
                  <h2 className="text-xl">Small BookSelf </h2>
                  <span className="text-red-700">$300</span>{" "}
                  <span className="text-black ml-3">$360</span>
                  <h1 className="flex gap-3 text-yellow-500 items-center">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar color="grey" />
                    <span className="text-gray-600 ">(88)</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <hr className="mt-20 text-gray-400" />
        </div>
      </div>
    </div>
  );
}

export default Products;
