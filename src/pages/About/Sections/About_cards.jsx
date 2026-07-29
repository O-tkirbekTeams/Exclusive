import { IoStorefrontSharp } from "react-icons/io5";
import { CiDollar } from "react-icons/ci";
import { MdCardGiftcard } from "react-icons/md";
import { FaSackDollar } from "react-icons/fa6";

function About_cards() {
  return (
    <div>
      <div className="Cards">
        <div className="container_1200">
          <div className="flex justify-center gap-8 mt-[140px]">
            <div className="flex flex-col items-center text-center border border-gray-300 h-[230px] w-[230px] p-7">
              <div className="w-20 h-20 rounded-full bg-black  flex items-center justify-center">
                <IoStorefrontSharp size={50} color="white" />
              </div>
              <h1 className="mt-4 text-2xl font-bold">10.5k</h1>
              <p className="text-gray-500 text-sm">Sellers active our site</p>
            </div>
            <div className="bg-red-700 flex flex-col items-center text-center border border-gray-300 h-[230px] w-[230px] p-7">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
                <CiDollar size={50} color="black" />
              </div>
              <h1 className="mt-4 text-2xl font-bold">33k</h1>
              <p className="text-gray-500 text-sm">Mopnthly Produduct Sale</p>
            </div>
            <div className="flex flex-col items-center text-center border border-gray-300 h-[230px] w-[230px] p-7">
              <div className="w-20 h-20 rounded-full bg-black  flex items-center justify-center">
                <MdCardGiftcard size={50} color="white" />
              </div>
              <h1 className="mt-4 text-2xl font-bold">45.5k</h1>
              <p className="text-gray-500 text-sm">
                Customer active in our site
              </p>
            </div>
            <div className="flex flex-col items-center text-center border border-gray-300 h-[230px] w-[230px] p-7">
              <div className="w-20 h-20 rounded-full bg-black  flex items-center justify-center">
                <FaSackDollar size={50} color="white" />
              </div>
              <h1 className="mt-4 text-2xl font-bold">25.6k</h1>
              <p className="text-gray-500 text-sm">Sellers active our site</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About_cards;
