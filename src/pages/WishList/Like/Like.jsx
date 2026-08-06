import Button from "@mui/material/Button";
import Card_1_sumka from "../../../assets/wishlist-img/card-1 sumka.png";
import Card_1_calonka from "../../../assets/wishlist-img/card-1 calonka.png";
import Card_1_pult from "../../../assets/wishlist-img/card-1 pult.png";
import Card_1_kiyim from "../../../assets/wishlist-img/card-1 kiyim.png";

import Card_2_noutbook from "../../../assets/wishlist-img/card-2 noutbook.png";
import Card_2_televezor from "../../../assets/wishlist-img/card-2 televezor.png";
import Card_2_pult from "../../../assets/wishlist-img/card-2 pult.png";
import Card_2_klavyatura from "../../../assets/wishlist-img/card-2 klavyatura.png";

import { GrView } from "react-icons/gr";
import { FaStar } from "react-icons/fa";

import { MdDelete } from "react-icons/md";
import { PiShoppingCartLight } from "react-icons/pi";
import { Link } from "react-router-dom";

function Like() {
  return (
    <>
      <div className="Wishlist">
        <div className="container_1200">
          <div className="mt-[140px] pb-20">
            <div className="flex justify-between items-center">
              <h1 className="text-[22px]">Wishlist (4)</h1>
              <Button variant="outlined">Move All To Bag</Button>
            </div>

            <div className="flex justify-between gap-6 mt-15">
              <div className="bg-[#F5F5F5] w-[270px] rounded-[8px] relative">
                <div className="flex justify-between items-center m-3">
                  <span className="flex items-center justify-center text-white text-xs w-[55px] h-[26px] rounded-[4px] bg-red-700">
                    -30%
                  </span>
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <MdDelete size={18} />
                  </div>
                </div>

                <img
                  src={Card_1_sumka}
                  alt=""
                  className="w-[200px] h-[130px] object-contain m-auto"
                />

                <div className="px-3 mt-3">
                  <h3 className="text-black text-base font-medium truncate">
                    Gucci duffle bag
                  </h3>
                  <div className="flex gap-2 items-center">
                    <span className="text-red-600 text-base">$960</span>
                    <span className="text-gray-400 line-through text-sm">
                      $1160
                    </span>
                  </div>
                </div>

                <Link to={"/Detail"} >
                  <Button
                    variant="contained"
                    sx={{
                      background: "black",
                      width: "100%",
                      marginTop: "12px",
                    }}
                  >
                    <PiShoppingCartLight size={20} className="mr-2" />
                    Add To Cart
                  </Button>
                </Link>
              </div>

              <div className="bg-[#F5F5F5] w-[270px] rounded-[8px] relative">
                <div className="flex justify-between items-center m-3">
                  <span className="flex items-center justify-center text-white text-xs w-[55px] h-[26px] rounded-[4px] bg-red-700">
                    -30%
                  </span>
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <MdDelete size={18} />
                  </div>
                </div>

                <img
                  src={Card_1_calonka}
                  alt=""
                  className="w-[200px] h-[130px] object-contain m-auto"
                />

                <div className="px-3 mt-3">
                  <h3 className="text-black text-base font-medium truncate">
                    RGB liquid CPU Cooler
                  </h3>
                  <span className="text-red-600 text-base">$1960</span>
                </div>

                <Link to={"/Detail"} >
                  <Button
                    variant="contained"
                    sx={{
                      background: "black",
                      width: "100%",
                      marginTop: "12px",
                    }}
                  >
                    <PiShoppingCartLight size={20} className="mr-2" />
                    Add To Cart
                  </Button>
                </Link>
              </div>
              <div className="bg-[#F5F5F5] w-[270px] rounded-[8px] relative">
                <div className="flex justify-between items-center m-3">
                  <span className="flex items-center justify-center text-white text-xs w-[55px] h-[26px] rounded-[4px] bg-red-700">
                    -30%
                  </span>
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <MdDelete size={18} />
                  </div>
                </div>

                <img
                  src={Card_1_pult}
                  alt=""
                  className="w-[200px] h-[130px] object-contain m-auto"
                />

                <div className="px-3 mt-3">
                  <h3 className="text-black text-base font-medium truncate">
                    RGB liquid CPU Cooler
                  </h3>
                  <span className="text-red-600 text-base">$1960</span>
                </div>

                <Link to={"/Detail"} >
                  <Button
                    variant="contained"
                    sx={{
                      background: "black",
                      width: "100%",
                      marginTop: "12px",
                    }}
                  >
                    <PiShoppingCartLight size={20} className="mr-2" />
                    Add To Cart
                  </Button>
                </Link>
              </div>
              <div className="bg-[#F5F5F5] w-[270px] rounded-[8px] relative">
                <div className="flex justify-between items-center m-3">
                  <span className="flex items-center justify-center text-white text-xs w-[55px] h-[26px] rounded-[4px] bg-red-700">
                    -30%
                  </span>
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <MdDelete size={18} />
                  </div>
                </div>

                <img
                  src={Card_1_kiyim}
                  alt=""
                  className="w-[200px] h-[130px] object-contain m-auto"
                />

                <div className="px-3 mt-3">
                  <h3 className="text-black text-base font-medium truncate">
                    RGB liquid CPU Cooler
                  </h3>
                  <span className="text-red-600 text-base">$1960</span>
                </div>
                <Link to={"/Detail"} >
                  <Button
                    variant="contained"
                    sx={{
                      background: "black",
                      width: "100%",
                      marginTop: "12px",
                    }}
                  >
                    <PiShoppingCartLight size={20} className="mr-2" />
                    Add To Cart
                  </Button>
                </Link>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mt-20 ">
                <div className="flex gap-3 items-center">
                  <div className="py-4   px-2 bg-red-700 w-3 h-5"></div>
                  <h5 className="text-2xl">Just For You</h5>
                </div>

                <Button
                  variant="outlined"
                  sx={{ width: "140px", height: "45px" }}
                >
                  See All
                </Button>
              </div>
              <div className="flex justify-between gap-6 mt-15  ">
                <div className="bg-[#F5F5F5] w-[270px] rounded-[8px] relative">
                  <div className="flex justify-between items-center m-3">
                    <span className="flex items-center justify-center text-white text-xs w-[55px] h-[26px] rounded-[4px] bg-red-700">
                      -30%
                    </span>
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <GrView size={25} />
                    </div>
                  </div>

                  <img
                    src={Card_2_noutbook}
                    alt=""
                    className="w-[200px] h-[130px] object-contain m-auto"
                  />

                  <div className="px-3 mt-3 gap-3">
                    <h3 className="text-black text-base font-medium truncate">
                      ASUS FHD Gaming Laptop{" "}
                    </h3>
                    <span className="text-red-600 text-base">$1960</span>
                    <span className="text-gray-400 line-through text-sm ml-3">
                      $1160
                    </span>
                    <div className="flex gap-2 mt-3">
                      <h3>
                        <FaStar size={20} color="orange" />
                      </h3>
                      <h3>
                        <FaStar size={20} color="orange" />
                      </h3>{" "}
                      <h3>
                        <FaStar size={20} color="orange" />
                      </h3>{" "}
                      <h3>
                        <FaStar size={20} color="orange" />
                      </h3>{" "}
                      <h3>
                        <FaStar size={20} color="orange" />
                      </h3>
                      <h3 className="text-gray-500">(65)</h3>
                    </div>
                  </div>

                <Link to={"/Detail"} >
                  <Button
                    variant="contained"
                    sx={{
                      background: "black",
                      width: "100%",
                      marginTop: "12px",
                    }}
                  >
                    <PiShoppingCartLight size={20} className="mr-2" />
                    Add To Cart
                  </Button>
                </Link>
                </div>
                <div className="bg-[#F5F5F5] w-[270px] rounded-[8px] relative">
                  <div className="flex justify-end m-3 ">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <GrView size={25} />
                    </div>
                  </div>

                  <img
                    src={Card_2_televezor}
                    alt=""
                    className="w-[200px] h-[130px] object-contain m-auto"
                  />

                  <div className="px-3 mt-3 gap-3">
                    <h3 className="text-black text-base font-medium truncate">
                      IPS LCD Gaming Monitor{" "}
                    </h3>
                    <span className="text-red-600 text-base">$1160</span>

                    <div className="flex gap-2 mt-3">
                      <h3>
                        <FaStar size={20} color="orange" />
                      </h3>
                      <h3>
                        <FaStar size={20} color="orange" />
                      </h3>{" "}
                      <h3>
                        <FaStar size={20} color="orange" />
                      </h3>{" "}
                      <h3>
                        <FaStar size={20} color="orange" />
                      </h3>{" "}
                      <h3>
                        <FaStar size={20} color="orange" />
                      </h3>
                      <h3 className="text-gray-500">(65)</h3>
                    </div>
                  </div>

                <Link to={"/Detail"} >
                  <Button
                    variant="contained"
                    sx={{
                      background: "black",
                      width: "100%",
                      marginTop: "12px",
                    }}
                  >
                    <PiShoppingCartLight size={20} className="mr-2" />
                    Add To Cart
                  </Button>
                </Link>
                </div>{" "}
                <div className="bg-[#F5F5F5] w-[270px] rounded-[8px] relative">
                  <div className="flex justify-between items-center m-3">
                    <span className="flex items-center justify-center text-white text-xs w-[55px] h-[26px] rounded-[4px] bg-green-500">
                      New
                    </span>
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <GrView size={25} />
                    </div>
                  </div>

                  <img
                    src={Card_2_pult}
                    alt=""
                    className="w-[200px] h-[130px] object-contain m-auto"
                  />

                  <div className="px-3 mt-3 gap-3">
                    <h3 className="text-black text-base font-medium truncate">
                      HAVIT HV-G92 Gamepad{" "}
                    </h3>
                    <span className="text-red-600 text-base">$500</span>

                    <div className="flex gap-2 mt-3">
                      <h3>
                        <FaStar size={20} color="orange" />
                      </h3>
                      <h3>
                        <FaStar size={20} color="orange" />
                      </h3>{" "}
                      <h3>
                        <FaStar size={20} color="orange" />
                      </h3>{" "}
                      <h3>
                        <FaStar size={20} color="orange" />
                      </h3>{" "}
                      <h3>
                        <FaStar size={20} color="orange" />
                      </h3>
                      <h3 className="text-gray-500">(65)</h3>
                    </div>
                  </div>

                <Link to={"/Detail"} >
                  <Button
                    variant="contained"
                    sx={{
                      background: "black",
                      width: "100%",
                      marginTop: "12px",
                    }}
                  >
                    <PiShoppingCartLight size={20} className="mr-2" />
                    Add To Cart
                  </Button>
                </Link>
                </div>
                <div className="bg-[#F5F5F5] w-[270px] rounded-[8px] relative">
                  <div className="flex justify-end items-center m-3">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <GrView size={25} />
                    </div>
                  </div>

                  <img
                    src={Card_2_klavyatura}
                    alt=""
                    className="w-[200px] h-[130px] object-contain m-auto"
                  />

                  <div className="px-3 mt-3 gap-3">
                    <h3 className="text-black text-base font-medium truncate">
                      AK-900 Wired Keyboard{" "}
                    </h3>
                    <span className="text-red-600 text-base">$260</span>

                    <div className="flex gap-2 mt-3">
                      <h3>
                        <FaStar size={20} color="orange" />
                      </h3>
                      <h3>
                        <FaStar size={20} color="orange" />
                      </h3>{" "}
                      <h3>
                        <FaStar size={20} color="orange" />
                      </h3>{" "}
                      <h3>
                        <FaStar size={20} color="orange" />
                      </h3>{" "}
                      <h3>
                        <FaStar size={20} color="orange" />
                      </h3>
                      <h3 className="text-gray-500">(65)</h3>
                    </div>
                  </div>

                <Link to={"/Detail"} >
                  <Button
                    variant="contained"
                    sx={{
                      background: "black",
                      width: "100%",
                      marginTop: "12px",
                    }}
                  >
                    <PiShoppingCartLight size={20} className="mr-2" />
                    Add To Cart
                  </Button>
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Like;
