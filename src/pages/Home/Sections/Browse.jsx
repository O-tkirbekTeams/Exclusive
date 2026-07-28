import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";
import Phone from "../../../assets/Browse-img/Phone.png";
import Computers from "../../../assets/Browse-img/Computers.png";
import SmartWatch from "../../../assets/Browse-img/SmartWatch.png";
import Camera from "../../../assets/Browse-img/Camera.png";
import HeadPhones from "../../../assets/Browse-img/HeadPhones.png";
import Gaming from "../../../assets/Browse-img/Gaming.png";

function Browse() {
  return (
    <div>
      <div className="Browse">
        <div className="container_1200">
          <div>
            <div className="flex gap-5 items-center mt-[40px]">
              <div className="bg-red-700 w-4 h-8"></div>
              <h3 className="text-2xl text-red-700">Categories</h3>
            </div>
            <div className=" flex justify-between items-center mt-5">
              <div className="flex gap-20 items-center">
                <h1 className="text-2xl font-bold">Browse By Category</h1>
              </div>
              <div className="flex gap-3">
                <FaChevronCircleLeft size={30} />
                <FaChevronCircleRight size={30} />
              </div>
            </div>

            <div className="flex justify-between mt-10">
              <div className="w-[170px] h-[145px] border rounded-2xl flex items-center border-gray-500 ">
                <div className="m-auto text-center">
                  <img src={Phone} alt="kampyuter" />
                  <h3>phone</h3>
                </div>
              </div>
              <div className="w-[170px] h-[145px] border rounded-2xl flex items-center border-gray-500 ">
                <div className="m-auto text-center">
                  <img src={Computers} alt="kampyuter" />
                  <h3>Computers</h3>
                </div>
              </div>
              <div className="w-[170px] h-[145px] border rounded-2xl flex items-center border-gray-500 ">
                <div className="m-auto text-center">
                  <img src={SmartWatch} alt="kampyuter" />
                  <h3>SmartWatch</h3>
                </div>
              </div>
              <div className="w-[170px] h-[145px] border rounded-2xl flex items-center border-gray-500 ">
                <div className="m-auto text-center">
                  <img src={Camera} alt="kampyuter" />
                  <h3>Camera</h3>
                </div>
              </div>
              <div className="w-[170px] h-[145px] border rounded-2xl flex items-center border-gray-500 ">
                <div className="m-auto text-center">
                  <img src={HeadPhones} alt="kampyuter" />
                  <h3>HeadPhones</h3>
                </div>
              </div>
              <div className="w-[170px] h-[145px] border rounded-2xl flex items-center border-gray-500 ">
                <div className="m-auto text-center">
                  <img src={Gaming} alt="kampyuter" />
                  <h3>Gaming</h3>
                </div>
              </div>
              <hr className="mt-20" />
            </div>
            <hr className="mt-20 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Browse;
