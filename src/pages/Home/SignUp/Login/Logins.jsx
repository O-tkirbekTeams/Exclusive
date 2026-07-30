import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="py-10">
        <div className="container_1200 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-24">
            <div className="bg-[#C9E3E8]">
              <img
                src="/imgs/cart.png"
                alt=""
                className="w-full h-[560px] object-contain"
              />
            </div>
            <div className="max-w-96 w-full mx-auto">
              <h2 className="text-[42px] font-semibold text-black leading-none">
                Create an account
              </h2>

              <p className="text-[13px] text-[#555] mt-3 mb-12">
                Enter your details below
              </p>

              <form className="space-y-7">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border-b border-[#cfcfcf] pb-3 text-[14px] outline-none placeholder:text-[#a8a8a8]"
                />

                <input
                  type="email"
                  placeholder="Email or Phone Number"
                  className="w-full border-b border-[#cfcfcf] pb-3 text-[14px] outline-none placeholder:text-[#a8a8a8]"
                />

                <input
                  type="password"
                  placeholder="Password"
                  className="w-full border-b border-[#cfcfcf] pb-3 text-[14px] outline-none placeholder:text-[#a8a8a8]"
                />

                <button
                  type="submit"
                  className="w-full h-14 bg-[#db4444] text-white text-[15px] font-medium rounded hover:bg-[#c53b3b] duration-300 cursor-pointer"
                >
                  Create Account
                </button>

                <button
                  type="button"
                  className="w-full h-14 border border-[#d9d9d9] rounded flex items-center justify-center gap-3 text-[15px] text-[#333] cursor-pointer"
                >
                  <img
                    src="/public/imgs/google.png"
                    alt=""
                    className="w-5 h-5"
                  />
                  Sign up with Google
                </button>

                <div className="flex justify-center gap-2 text-[14px] text-[#777] pt-2">
                  <span>Already have account?</span>
                  <Link to={"/Login"} className="font-medium text-black">
                    Log in
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
