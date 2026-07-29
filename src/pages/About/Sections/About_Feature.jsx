import img1 from "../../../assets/About-img/Featuew-img/img-1.png";
import img2 from "../../../assets/About-img/Featuew-img/img-2.png";
import img3 from "../../../assets/About-img/Featuew-img/img-3.png";
import { LuTwitter } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

function About_Feature() {
  return (
    <>
      <div className="Feature">
        <div className="container_1200">
          <div className="flex justify-center gap-5 mt-[140px]">
            <div className="flex-col items-center ">
              <img src={img1} alt="" className="w-[300px] h-[330px] " />
              <h2 className="text-3xl mt-3">Tom Cruise</h2>
              <p>Founder & Chairman</p>
              <div className="flex gap-3 mt-3">
                <LuTwitter />
                <FaInstagram />
                <FaLinkedinIn />
              </div>
            </div>
            <div className="flex-col items-center ">
              <img src={img2} alt="" className="w-[300px] h-[330px] " />
              <h2 className="text-3xl mt-3">Emma Watson</h2>
              <p>Managing Director</p>
              <div className="flex gap-3 mt-3">
                <LuTwitter />
                <FaInstagram />
                <FaLinkedinIn />
              </div>
            </div>{" "}
            <div className="flex-col items-center ">
              <img src={img3} alt="" className="w-[300px] h-[330px] " />
              <h2 className="text-3xl mt-3">Will Smith</h2>
              <p>Product Designer</p>
              <div className="flex gap-3 mt-3">
                <LuTwitter />
                <FaInstagram />
                <FaLinkedinIn />
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-3 mt-12">
            <button className="w-3 h-3  rounded-[100px] bg-black"></button>
            <button className="w-3 h-3  rounded-[100px] bg-black"></button>
            <button className="w-3 h-3  rounded-[100px] bg-red-700"></button>
            <button className="w-3 h-3  rounded-[100px] bg-black"></button>
            <button className="w-3 h-3  rounded-[100px] bg-black"></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default About_Feature;
