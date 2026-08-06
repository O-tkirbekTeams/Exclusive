import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import c1 from "../../../assets/ExploreProducts-img/1.png";
import c2 from "../../../assets/ExploreProducts-img/2.png";
import c3 from "../../../assets/ExploreProducts-img/3.png";
import c4 from "../../../assets/ExploreProducts-img/4.png";
import B1 from "../../../assets/ExploreProducts-img/2_1.png";
import B2 from "../../../assets/ExploreProducts-img/2_2.png";
import B3 from "../../../assets/ExploreProducts-img/2_3.png";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { PiShoppingCartLight } from "react-icons/pi";

function ExploreProducts() {
  return (
    <div>
      <div className="ExploreProducts">
        <div className="container_1200">
          <div className="mt-20">
            <div className="flex items-center gap-3">
              <div className="w-3 h-8 bg-red-700"></div>
              <h3 className="text-red-700 text-2xl">Our Products </h3>
            </div>
            <div className="flex justify-between mt-4 ">
              <h1 className="text-2xl font-bold">Explore Our Products</h1>
              <div className="flex gap-5">
                <FaChevronCircleLeft size={30} />
                <FaChevronCircleRight size={30} />
              </div>
            </div>
            {/* cardlar -1 */}
            <div className="flex justify-between mt-8 gap-6">
              <div className="">
                <div className="bg-blue-50 relative w-[270px] h-[245px]">
                  <FaHeart
                    className="absolute  left-[230px] top-5 text-red-600"
                    size={25}
                  />
                  <FaEye size={25} className="absolute left-[230px] top-13" />
                  <img src={c1} alt="" className="py-12 px-12  m-auto " />
                </div>
                <div className="mt-5">
                  <h2 className="text-xl">Breed Dry Dog Food</h2>

                  <h1 className="flex gap-3 text-yellow-500 items-center">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar color="gray" />
                    <FaStar color="gray " />
                    <span className="text-gray-600 ">(88)</span>
                  </h1>
                </div>
                <Link to={"/Detail"}>
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
              <div className="">
                <div className="bg-blue-50 relative w-[270px] h-[245px] ">
                  <FaHeart
                    className="absolute  left-[230px] top-5 text-red-600"
                    size={25}
                  />
                  <FaEye size={25} className="absolute left-[230px] top-13 " />
                  <img src={c2} alt="" className="py-12 px-12  m-auto " />
                </div>
                <div className="mt-5">
                  <h2 className="text-xl">CANON EOS DSLR Camera</h2>

                  <h1 className="flex gap-3 text-yellow-500 items-center">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar color="gray" />
                    <span className="text-gray-600 ">(88)</span>
                  </h1>
                </div>
                <Link to={"/Detail"}>
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
              <div className="">
                <div className="bg-blue-50 relative w-[270px] h-[245px]">
                  <FaHeart
                    className="absolute  left-[230px] top-5 text-red-600"
                    size={25}
                  />
                  <FaEye size={25} className="absolute left-[230px] top-13" />
                  <img src={c3} alt="" className="py-12 px-12 m-auto pt-10" />
                </div>
                <div className="mt-5">
                  <h2 className="text-xl">ASUS FHD Gaming Laptop</h2>
                  <h1 className="flex gap-3 text-yellow-500 items-center">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <span className="text-gray-600 ">(88)</span>
                  </h1>
                </div>
                <Link to={"/Detail"}>
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

              <div className="">
                <div className="bg-blue-50 relative w-[270px] h-[245px]">
                  <FaHeart
                    className="absolute  left-[230px] top-5 text-red-600"
                    size={25}
                  />
                  <FaEye size={25} className="absolute left-[230px] top-13" />
                  <img src={c4} alt="" className="py-12 px-12 m-auto" />
                </div>
                <div className="mt-5">
                  <h2 className="text-xl">GP11 Shooter USB Gamepad </h2>
                  <h1 className="flex gap-3 text-yellow-500 items-center">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar color="grey" />
                    <span className="text-gray-600 ">(88)</span>
                  </h1>
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
            {/* cardlar-2 */}

            <div className="flex justify-between mt-8 gap-6">
              <div className="">
                <div className="bg-blue-50 relative w-[270px] h-[245px]">
                  <span className="absolute left-3 top-3 bg-green-500 text-white text-xs px-3 py-1 rounded ">
                    New
                  </span>
                  <FaHeart
                    className="absolute  left-[230px] top-5 text-red-600"
                    size={25}
                  />
                  <FaEye size={25} className="absolute left-[230px] top-13" />
                  <img src={B1} alt="" className="py-12 px-12  m-auto " />
                </div>
                <div className="mt-5">
                  <h2 className="text-xl">Kids Electric Car</h2>
                  <h1 className="flex gap-3 text-yellow-500 items-center">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar color="gray" />
                    <FaStar color="gray " />
                    <span className="text-gray-600 ">(88)</span>
                  </h1>
                </div>
                
                <div className="flex gap-2 mt-2">
                  <div className="bg-red-700 w-5 h-5 border-2  rounded-2xl"></div>
                  <div className="bg-black w-5 h-5 rounded-2xl"></div>
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
              <div className="">
                <div className="bg-blue-50 relative w-[270px] h-[245px] ">
                  <FaHeart
                    className="absolute  left-[230px] top-5 text-red-600"
                    size={25}
                  />
                  <FaEye size={25} className="absolute left-[230px] top-13 " />
                  <img src={B2} alt="" className="py-12 px-12  m-auto " />
                </div>
                <div className="mt-5">
                  <h2 className="text-xl">Jr. Zoom Soccer Cleats</h2>

                  <h1 className="flex gap-3 text-yellow-500 items-center">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar color="gray" />
                    <span className="text-gray-600 ">(88)</span>
                  </h1>
                </div>
                <div className="flex gap-2 mt-2">
                  <div className="bg-green-700 w-5 h-5 border-2  rounded-2xl"></div>
                  <div className="bg-yellow-700 w-5 h-5 rounded-2xl"></div>
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
              <div className="">
                <div className="bg-blue-50 relative w-[270px] h-[245px]">
                  <span className="absolute left-3 top-3 bg-green-500 text-white text-xs px-3 py-1 rounded ">
                    New
                  </span>
                  <FaHeart
                    className="absolute  left-[230px] top-5 text-red-600"
                    size={25}
                  />
                  <FaEye size={25} className="absolute left-[230px] top-13" />
                  <img src={B3} alt="" className="py-12 px-12 m-auto pt-12" />
                </div>
                <div className="mt-5">
                  <h2 className="text-xl">Quilted Satin Jacket</h2>
                  <h1 className="flex gap-3 text-yellow-500 items-center">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <span className="text-gray-600 ">(88)</span>
                  </h1>
                </div>
                <div className="flex gap-2 mt-2">
                  <div className="bg-blue-700 w-5 h-5 border-2  rounded-2xl"></div>
                  <div className="bg-red-700 w-5 h-5 rounded-2xl"></div>
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

              <div className="">
                <div className="bg-blue-50 relative w-[270px] h-[245px]">
                  <FaHeart
                    className="absolute  left-[230px] top-5 text-red-600"
                    size={25}
                  />
                  <FaEye size={25} className="absolute left-[230px] top-13" />
                  <img src={c2} alt="" className="py-12 px-12 m-auto" />
                </div>
                <div className="mt-5">
                  <h2 className="text-xl">CANON EOS DSLR Camera </h2>
                  <h1 className="flex gap-3 text-yellow-500 items-center">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar color="grey" />
                    <span className="text-gray-600 ">(88)</span>
                  </h1>
                </div>
                <div className="flex gap-2 mt-2">
                  <div className="bg-blue-700 w-5 h-5 border-2  rounded-2xl"></div>
                  <div className="bg-black w-5 h-5 rounded-2xl"></div>
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
            {/* card-2 yopildi */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreProducts;
