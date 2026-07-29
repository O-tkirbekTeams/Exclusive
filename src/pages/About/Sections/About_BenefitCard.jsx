import { FaTruck } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
function About_BenefitCard() {
  return (
    <>
      <div className="BenefitCard">
        <div className="container_1200">
          <div className="flex justify-center gap-35 mt-[140px]">
            <div className="flex flex-col items-center text-center  ">
              <div className="w-20 h-20 rounded-full bg-black  flex items-center justify-center">
                <FaTruck size={50} color="white" />
              </div>
              <h1 className="mt-4 text-1xl font-bold">
                FREE AND FAST DELIVERY
              </h1>
              <p className="text-gray-500 text-sm mt-2">
                Free delivery for all orders over $140
              </p>
            </div>
            <div className="flex flex-col items-center text-center ">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
                <FaHeadset size={50} color="black" />
              </div>
              <h1 className="mt-4 text-1xl font-bold">24/7 CUSTOMER SERVICE</h1>
              <p className="text-gray-500 text-sm">
                Friendly 24/7 customer support
              </p>
            </div>
            <div className="flex flex-col items-center text-center  ">
              <div className="w-20 h-20 rounded-full bg-black  flex items-center justify-center">
                <FaShieldAlt size={50} color="white" />
              </div>
              <h1 className="mt-4 text-1xl font-bold">MONEY BACK GUARANTEE</h1>
              <p className="text-gray-500 text-sm">
                We reurn money within 30 days{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About_BenefitCard;
