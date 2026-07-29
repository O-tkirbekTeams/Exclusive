import { Link } from "react-router-dom";

function SignIns() {
  return (
    <>
      <section class="container_1200 mx-auto py-12 flex flex-col md:flex-row items-center justify-between gap-12">
        <div class="w-full md:w-1/2 bg-[#CBE4E8] flex justify-center items-center rounded-r-md overflow-hidden">
          <img
            src="/public/imgs/cart.png"
            alt="Log in to Exclusive"
            class="w-full h-auto object-cover"
          />
        </div>

        <div class="w-full md:w-1/2 max-w-96 mx-auto md:mx-0 px-4">
          <h1 class="text-3xl font-semibold tracking-wide text-black mb-3">
            Log in to Exclusive
          </h1>
          <p class="text-sm text-black mb-10">Enter your details below</p>

          <form class="flex flex-col gap-8">
            <input
              type="text"
              placeholder="Email or Phone Number"
              class="w-full border-b border-gray-300 pb-2 text-sm outline-none focus:border-black transition-colors bg-transparent placeholder-gray-400"
            />

            <input
              type="password"
              placeholder="Password"
              class="w-full border-b border-gray-300 pb-2 text-sm outline-none focus:border-black transition-colors bg-transparent placeholder-gray-400"
            />

            <div class="flex items-center justify-between pt-2">
              <Link to={"/SignIns"}
                type="submit"
                class="bg-[#DB4444] hover:bg-[#c33838] text-white text-sm font-medium py-3.5 px-10 rounded transition-colors cursor-pointer"
              >
                Log In
              </Link>

              <a href="#" class="text-[#DB4444] text-sm hover:underline">
                Forget Password?
              </a>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default SignIns;
