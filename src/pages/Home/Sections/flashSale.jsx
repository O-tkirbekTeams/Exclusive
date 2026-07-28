import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";
import Card_1 from "../../../assets/FlashSale-img/card-1.png";
import Card_2 from "../../../assets/FlashSale-img/card-2.png";
import Card_3 from "../../../assets/FlashSale-img/card-3.png";
import Card_4 from "../../../assets/FlashSale-img/card-4.png";

import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

function FlashSale() {
  return (
    <div>
      <div className="flashSale ">
        <div className="container_1200">
          <hr className="mt-10 text-gray-400" />

          <div className="flex gap-5 items-center mt-5">
            <div className="bg-red-700 w-4 h-8"></div>
            <h3 className="text-2xl text-red-700">Today's</h3>
          </div>
          <div className=" flex justify-between items-center">
            <div className="flex gap-20 items-center">
              <h1 className="text-2xl font-bold">Flash Sales</h1>
              <div className="flex gap-6 text-center">
                <div className="">
                  <h3>Days</h3>
                  <h1 className="text-2xl font-bold ">03</h1>
                </div>
                <div className="">
                  <h3>Hours</h3>
                  <h1 className="text-2xl font-bold">23</h1>
                </div>
                <div className="">
                  <h3>Minutes</h3>
                  <h1 className="text-2xl font-bold">12</h1>
                </div>
                <div className="">
                  <h3>Seconds</h3>
                  <h1 className="text-2xl font-bold">53</h1>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <FaChevronCircleLeft size={30} />
              <FaChevronCircleRight size={30} />
            </div>
          </div>

          <div className="flex justify-between mt-8 gap-6">
            <div className="">
              <div className="bg-blue-50 relative w-[270px] h-[245px]">
                <span className="absolute bg-red-700 text-white py-1 px-5 top-3 left-3 rounded-2xl">
                  -40%
                </span>
                <FaHeart
                  className="absolute  left-[230px] top-5 text-red-600"
                  size={25}
                />
                <FaEye size={25} className="absolute left-[230px] top-13" />
                <img src={Card_1} alt="" className="py-12 px-12  m-auto " />
              </div>
              <div className="mt-5">
                <h2 className="text-xl">HAVIT HV-G92 Gamepad</h2>
                <span className="text-red-700">$120</span>{" "}
                <span className="text-black ml-3">$160</span>
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
                <span className="absolute bg-red-700 text-white py-1 px-5 top-3 left-3 rounded-2xl">
                  -35%
                </span>
                <FaHeart
                  className="absolute  left-[230px] top-5 text-red-600"
                  size={25}
                />
                <FaEye size={25} className="absolute left-[230px] top-13 " />
                <img
                  src={Card_2}
                  alt=""
                  className="py-12 px-12 pt-16 size-[230px] w-[400px] "
                />
              </div>
              <div className="mt-5">
                <h2 className="text-xl">AK-900 Wired Keyboard</h2>
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
                <span className="absolute bg-red-700 text-white py-1 px-5 top-3 left-3 rounded-2xl">
                  -30%
                </span>
                <FaHeart
                  className="absolute  left-[230px] top-5 text-red-600"
                  size={25}
                />
                <FaEye size={25} className="absolute left-[230px] top-13" />
                <img src={Card_3} alt="" className="py-12 px-12 m-auto pt-16" />
              </div>
              <div className="mt-5">
                <h2 className="text-xl">IPS LCD Gaming Monitor</h2>
                <span className="text-red-700">$330</span>{" "}
                <span className="text-black ml-3">$400</span>
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
                <span className="absolute bg-red-700 text-white py-1 px-5 top-3 left-3 rounded-2xl">
                  -25%
                </span>
                <FaHeart
                  className="absolute  left-[230px] top-5 text-red-600"
                  size={25}
                />
                <FaEye size={25} className="absolute left-[230px] top-13" />
                <img src={Card_4} alt="" className="py-12 px-12 m-auto" />
              </div>
              <div className="mt-5">
                <h2 className="text-xl">S-Series Comfort Chair </h2>
                <span className="text-red-700">$120</span>{" "}
                <span className="text-black ml-3">$160</span>
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
          <div className="flex justify-center mt-22">
            <button className="bg-red-700 text-white rounded-2xl px-10 py-5">
              View All Products
            </button>
          </div>
          <hr className="mt-10 text-gray-400" />
        </div>
      </div>
    </div>
  );
}

export default FlashSale;
