import pult from "../../assets/chacout-img/Pult.png";
import Monitor from "../../assets/chacout-img/Monitor.png";
import Karta1 from "../../assets/chacout-img/Karta1.png";
import Karta2 from "../../assets/chacout-img/Karta2.png";
import Karta3 from "../../assets/chacout-img/Karta3.png";
import Button from "@mui/material/Button";

function Chacout() {
  return (
    <>
      <div className="Chacount  ">
        <div className="container_1200 pb-20">
          <div className="pt-10 pb-20">
            <div className="flex gap-3 text-gray-400  ">
              <a href="">Home /</a>
              <a href="">MyAccaunt /</a>
              <a href="">Product /</a>
              <a href="">View cart /</a>
              <a href="">ChackOut</a>
            </div>
            <div className="flex items-center ">
              <div className="left w-[550px] ">
                <div className="pt-15">
                  <h1 className="text-5xl font-bod ">Billing Details</h1>
                  <div className="flex flex-col pt-10">
                    <label
                      htmlFor=""
                      className="text-gray-500 text-[16px] pb-4"
                    >
                      First Name*
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="w-[450px] h-12 bg-[#F5F5F5] pt-4 outline-none text-red-700"
                    />
                  </div>
                  <div className="flex flex-col pt-5">
                    <label
                      htmlFor=""
                      className="text-gray-500 text-[16px] pb-4"
                    >
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="w-[450px] h-12 bg-[#F5F5F5] pt-4 outline-none text-red-700"
                    />
                  </div>
                  <div className="flex flex-col pt-5">
                    <label
                      htmlFor=""
                      className="text-gray-500 text-[16px] pb-4"
                    >
                      Street Address*{" "}
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="w-[450px] h-12 bg-[#F5F5F5] pt-4 outline-none text-red-700"
                    />
                  </div>
                  <div className="flex flex-col pt-5">
                    <label
                      htmlFor=""
                      className="text-gray-500 text-[16px] pb-4"
                    >
                      Apartment, floor, etc. (optional)
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="w-[450px] h-12 bg-[#F5F5F5] pt-4 outline-none text-red-700"
                    />
                  </div>
                  <div className="flex flex-col pt-5">
                    <label
                      htmlFor=""
                      className="text-gray-500 text-[16px] pb-4"
                    >
                      Town/City*{" "}
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="w-[450px] h-12 bg-[#F5F5F5] pt-4 outline-none text-red-700"
                    />
                  </div>{" "}
                  <div className="flex flex-col pt-5">
                    <label
                      htmlFor=""
                      className="text-gray-500 text-[16px] pb-4"
                    >
                      Phone Number*{" "}
                    </label>
                    <input
                      type="number"
                      name=""
                      id=""
                      className="w-[450px] h-12 bg-[#F5F5F5] pt-4 outline-none text-red-700"
                    />
                  </div>
                  <div className="flex flex-col pt-5">
                    <label
                      htmlFor=""
                      className="text-gray-500 text-[16px] pb-4"
                    >
                      Email Address*{" "}
                    </label>
                    <input
                      type="email"
                      name=""
                      id=""
                      className="w-[450px] h-12 bg-[#F5F5F5] pt-4 outline-none text-red-700"
                    />
                  </div>
                  <div className="flex gap-4 items-center pt-5">
                    <input type="checkbox" name="" id="" className="w-4 h-4" />

                    <h3>
                      Save this information for faster check-out next time
                    </h3>
                  </div>
                </div>
              </div>
              <div className="right w-[550px]">
                <div>
                  <div className="w-[402px]">
                    <div className="flex justify-between items-center">
                      <div className="flex gap-5 items-center">
                        <img src={pult} alt="" />
                        <h3>H1 Gamepad</h3>
                      </div>
                      <div>
                        <h2>$660</h2>
                      </div>
                    </div>
                    <div className="flex justify-between items-center pt-8">
                      <div className="flex gap-5 items-center">
                        <img src={Monitor} alt="" />
                        <h3> LCD Monitor</h3>
                      </div>
                      <div>
                        <h2>$1100</h2>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="flex justify-between items-center">
                        <h2>Subtotal:</h2>
                        <h2>$1750</h2>
                      </div>
                      <hr className="mt-3 text-red-900" />
                      <div className="flex justify-between items-center pt-3">
                        <h2>Shopping</h2>
                        <h2>Free</h2>
                      </div>
                      <hr className="mt-3 text-red-900" />
                      <div className="flex justify-between items-center pt-3">
                        <h2>Total</h2>
                        <h2>$1750</h2>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="flex justify-between">
                        <div className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="Bank"
                            id="Bank"
                            className="w-5 h-5"
                          />
                          <label htmlFor="">Bank</label>
                        </div>
                        <div className="flex items-center gap-4">
                          <img src={Karta1} alt="" />
                          <img src={Karta2} alt="" />
                          <img src={Karta3} alt="" />
                          <img src={Karta2} alt="" />
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mt-5">
                        <input
                          type="radio"
                          name=""
                          id=""
                          className="w-5 h-5"
                          color="black"
                        />
                        <label htmlFor="">Cash on deliver</label>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-10 mb-6">
                    <input
                      type="text"
                      placeholder="Coupon Code"
                      className="border border-black rounded w-[300px] px-6 py-4 text-sm focus:outline-none"
                    />
                    <Button
                      variant="contained"
                      className="w-50"
                      sx={{ background: "#dc2626" }}
                    >
                      Apply Coupon
                    </Button>
                  </div>
                  <Button
                    variant="contained"
                    className="w-40  "
                    sx={{ background: "#dc2626" }}
                  >
                    Place Order{" "}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chacout;
