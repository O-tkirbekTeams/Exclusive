import { IoCallOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
function Contact() {
  return (
    <>
      <div className="contact">
        <div className="container_1200">
          <div className="flex mt-[90px] mb-[140px]  gap-[61px] items-center">
            <div className="left w-[350px]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-700 rounded-full ">
                  <IoCallOutline color="white" size={40} className="p-1" />
                </div>
                <h3 className="font-bold">Call To Us</h3>
              </div>
              <div className="mt-6">
                <h3>We are available 24/7, 7 days a week.</h3>
                <h3 className="mt-2 text-gray-700">Phone: +998 93 855 12 09</h3>
              </div>
              <hr className="w-[260px] mt-10" />
              <div className="mt-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-700 rounded-full ">
                    <HiOutlineMail color="white" size={40} className="p-1" />
                  </div>
                  <h3 className="font-bold">Write To US</h3>
                </div>
                <div className="mt-6">
                  <h3 className="">
                    Fill out our form and we will contact <br /> you within 24
                    hours.
                  </h3>
                  <h3 className="mt-3">Emails: customer@exclusive.com</h3>
                  <h3 className="mt-2">Emails: support@exclusive.com</h3>
                </div>
              </div>
            </div>
            <div className="right">
              <div>
                <div className="flex gap-4">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Your Name *"
                    className=" bg-[#f5f5f5] w-[235px] h-[50px] p-5 text-[15px]  "
                  />
                  <input
                    type="Number"
                    name=""
                    id=""
                    placeholder="Your Phone *"
                    className=" bg-[#f5f5f5] w-[235px] h-[50px] p-5 text-[15px]  "
                  />{" "}
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Your Email"
                    className=" bg-[#f5f5f5] w-[235px] h-[50px] p-5 text-[15px]  "
                  />
                </div>
                <div className="mt-[32px]">
                  <textarea
                    placeholder="Your Message"
                    className="bg-[#f5f5f5] w-[735px] h-[207px] p-5 text-[15px] resize-none outline-none"
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-end mt-3">
                <button className="bg-red-600 text-white py-3 px-20 rounded-2xl items-end">
                  send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
