import { TbChevronRight, TbArrowRight } from "react-icons/tb";
import { FaApple } from "react-icons/fa";

export default function Hero() {
  return (
    <div class="container_1200 px-4 pt-10 font-sans">
      <div class="flex flex-col md:flex-row gap-11">
        
        <aside class="w-full md:w-52  border-r border-gray-300 pr-4">
          <ul class="space-y-4 text-black text-base">
            <li class="flex items-center justify-between cursor-pointer hover:opacity-70">
              <span>Woman's Fashion</span>
              <TbChevronRight class="w-4 h-4" />
            </li>
            <li class="flex items-center justify-between cursor-pointer hover:opacity-70">
              <span>Men's Fashion</span>
              <TbChevronRight class="w-4 h-4" />
            </li>
            <li class="cursor-pointer hover:opacity-70">Electronics</li>
            <li class="cursor-pointer hover:opacity-70">Home &amp; Lifestyle</li>
            <li class="cursor-pointer hover:opacity-70">Medicine</li>
            <li class="cursor-pointer hover:opacity-70">Sports &amp; Outdoor</li>
            <li class="cursor-pointer hover:opacity-70">Baby's &amp; Toys</li>
            <li class="cursor-pointer hover:opacity-70">Groceries &amp; Pets</li>
            <li class="cursor-pointer hover:opacity-70">Health &amp; Beauty</li>
          </ul>
        </aside>

        <div class="flex-1 bg-black text-white relative rounded-none p-8 sm:p-12 flex flex-col justify-between overflow-hidden h-80">
          <div class="flex flex-col md:flex-row items-center justify-between h-full">
            <div class="z-10 max-w-sm flex flex-col items-start gap-4">
              <div class="flex items-center gap-2">
                <FaApple class="w-10 h-10" />
                <span class="text-base tracking-wide">iPhone 14 Series</span>
              </div>

              <h1 class="text-4xl sm:text-5xl font-semibold leading-tight tracking-wider my-2">
                Up to 10%<br />off Voucher
              </h1>

              <a href="#" class="flex items-center gap-2 pt-2 border-b border-white hover:opacity-80 transition-opacity pb-1 font-medium text-base">
                <span>Shop Now</span>
                <TbArrowRight class="w-5 h-5" />
              </a>
            </div>

            <div class="relative mt-6 md:mt-0 max-w-xs md:max-w-md">
              <img 
                src="/public/imgs/iphone.png" 
                alt="iPhone 14 Pro" 
                class="object-contain h-72"
              />
            </div>
          </div>

          <div class="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-3">
            <span class="w-3 h-3 rounded-full bg-gray-500 cursor-pointer"></span>
            <span class="w-3 h-3 rounded-full bg-gray-500 cursor-pointer"></span>
            <span class="w-3.5 h-3.5 rounded-full bg-red-500 border-2 border-white cursor-pointer"></span>
            <span class="w-3 h-3 rounded-full bg-gray-500 cursor-pointer"></span>
            <span class="w-3 h-3 rounded-full bg-gray-500 cursor-pointer"></span>
          </div>
        </div>

      </div>
    </div>
  );
}