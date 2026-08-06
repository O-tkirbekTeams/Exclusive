import card_1 from "../../assets/product-d/card-1.png";
import card_2 from "../../assets/product-d/card-2.png";
import card_3 from "../../assets/product-d/card-3.png";
import card from "../../assets/product-d/card.png";
import { FaStar, FaRegStar, FaRegHeart } from "react-icons/fa";
import { LuTruck, LuRefreshCw } from "react-icons/lu";
function Detail() {
  return (
    <>
      <div className="Product">
        <div className="container_1200">
          <div className=" py-15 px-10">
            <div className="text-sm text-gray-400 mb-6">
              Account <span className="mx-1 ">/</span> Gaming{" "}
              <span className="mx-1">/</span>{" "}
              <span className="text-gray-700">Havic HV G-92 Gamepad</span>
            </div>
            <div className="flex gap-20 ">
              <div className="left w-[400px] h-[450px]">
                <div className="flex gap-3">
                  <div>
                    <div className="w-[130px] h-[100px]p-2 bg-[#F5F5F5] rounded-lg">
                      <img
                        src={card_1}
                        alt=""
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="w-[130px] h-[100px] mt-2 p-2 bg-[#F5F5F5] rounded-lg">
                      <img
                        src={card_2}
                        alt=""
                        className="w-full h-full object-contain"
                      />
                    </div>{" "}
                    <div className="w-[130px] h-[100px]mt-2 p-2 bg-[#F5F5F5] rounded-lg">
                      <img
                        src={card_1}
                        alt=""
                        className="w-full h-full object-contain"
                      />
                    </div>{" "}
                    <div className="w-[130px] h-[100px] mt-2 p-2 bg-[#F5F5F5] rounded-lg">
                      <img
                        src={card_3}
                        alt=""
                        className="w-full h-full object-contain"
                      />
                    </div>{" "}
                  </div>
                  <div className="w-[290px] h-[455px] flex items-center justify-center bg-[#F5F5F5] rounded-lg">
                    <img
                      src={card}
                      alt=""
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                </div>
              </div>
              <div className="right w-[350px]">
                <h1 className="text-xl font-semibold text-gray-800">
                  Havic HV G-92 Gamepad
                </h1>

                <div className="flex items-center gap-2 mt-2">
                  <div className="flex text-yellow-400 text-xs gap-0.5">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaRegStar className="text-gray-300" />
                  </div>
                  <span className="text-gray-400 text-xs">(150 Reviews)</span>
                  <span className="text-gray-300 text-xs">|</span>
                  <span className="text-green-500 text-xs">In Stock</span>
                </div>

                <h2 className="text-lg font-semibold text-gray-800 mt-3">
                  $192.00
                </h2>

                <p className="text-gray-500 text-xs leading-relaxed mt-3 w-full">
                  PlayStation 5 Controller Skin High quality vinyl with air
                  channel adhesive for easy bubble free install & mess free
                  removal Pressure sensitive.
                </p>

                <div className="border-t border-gray-200 mt-4"></div>

                <div className="flex items-center gap-3 mt-4">
                  <span className="text-gray-700 text-sm font-medium">
                    Colours:
                  </span>
                  <div className="w-4 h-4 rounded-full bg-gray-800 border border-white ring-1 ring-gray-300 cursor-pointer"></div>
                  <div className="w-4 h-4 rounded-full bg-red-400 border border-white ring-1 ring-gray-300 cursor-pointer"></div>
                </div>

                <div className="flex items-center gap-2 mt-4">
                  <span className="text-gray-700 text-sm font-medium mr-1">
                    Size:
                  </span>
                  <button className="w-7 h-7 border border-gray-300 rounded-md text-xs text-gray-600 hover:bg-red-400 hover:border-red-400 hover:text-white transition-all ">
                    XS
                  </button>
                  <button className="w-7 h-7 border border-gray-300 rounded-md text-xs text-gray-600 hover:bg-red-400 hover:border-red-400 hover:text-white transition-all ">
                    S
                  </button>
                  <button className="w-7 h-7 border border-gray-300 rounded-md text-xs text-gray-600 hover:bg-red-400 hover:border-red-400 hover:text-white transition-all ">
                    M
                  </button>
                  <button className="w-7 h-7 border border-gray-300 rounded-md text-xs text-gray-600 hover:bg-red-400 hover:border-red-400 hover:text-white transition-all ">
                    L
                  </button>
                  <button className="w-7 h-7 border border-gray-300 rounded-md text-xs text-gray-600 hover:bg-red-400 hover:border-red-400 hover:text-white transition-all ">
                    XL
                  </button>
                </div>

                <div className="flex items-center gap-3 mt-5">
                  <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                    <button className="w-7 h-8 flex items-center justify-center text-gray-500 text-sm hover:bg-gray-100">
                      −
                    </button>
                    <span className="w-7 h-8 flex items-center justify-center text-gray-800 text-sm">
                      2
                    </span>
                    <button className="w-7 h-8 flex items-center justify-center text-gray-500 text-sm hover:bg-gray-100">
                      +
                    </button>
                  </div>

                  <button className="bg-red-500 text-white text-sm font-medium px-6 h-8 rounded-md hover:bg-red-600 transition-colors cursor-pointer border-red-500">
                    Buy Now 
                  </button>

                  <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md text-gray-400 hover:text-red-500 hover:border-red-300 transition-colors">
                    <FaRegHeart size={14} />
                  </button>
                </div>

                <div className="border border-gray-200 rounded-lg mt-6 w-full">
                  <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-200">
                    <LuTruck size={20} className="text-gray-700" />
                    <div>
                      <p className="text-gray-800 font-medium text-xs">
                        Free Delivery
                      </p>
                      <p className="text-gray-400 text-[11px] underline cursor-pointer">
                        Enter your postal code for Delivery Availability
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 px-4 py-3">
                    <LuRefreshCw size={20} className="text-gray-700" />
                    <div>
                      <p className="text-gray-800 font-medium text-xs">
                        Return Delivery
                      </p>
                      <p className="text-gray-400 text-[11px]">
                        Free 30 Days Delivery Returns.{" "}
                        <span className="underline cursor-pointer">
                          Details
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
