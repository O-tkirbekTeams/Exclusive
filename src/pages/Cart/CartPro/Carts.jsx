import { Link } from "react-router-dom";

function Carts() {
  return (
    <>
      <div className="container_1200 mx-auto px-4 py-10 font-sans text-black">
        <div className="text-sm text-gray-400 mb-10">
          <span>Home</span> /{" "}
          <span className="text-black font-medium">Cart</span>
        </div>

        <div className="bg-white rounded shadow-sm border border-gray-100 px-10 py-6 mb-6 grid grid-cols-4 items-center text-sm font-normal">
          <div>Product</div>
          <div className="text-center">Price</div>
          <div className="text-center">Quantity</div>
          <div className="text-right">Subtotal</div>
        </div>

        <div className="space-y-6 mb-6">
          <div className="bg-white rounded shadow-sm border border-gray-100 px-10 py-6 grid grid-cols-4 items-center">
            <div className="flex items-center space-x-5">
              <div className="relative">
                <span className="absolute -top-2 -left-2 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs cursor-pointer">
                  ✕
                </span>
                <img
                  src="/public/imgs/Tv.png"
                  alt="LCD Monitor"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <span className="text-sm font-medium">LCD Monitor</span>
            </div>
            <div className="text-center text-sm">$650</div>
            <div className="flex justify-center">
              <input
                type="number"
                defaultValue="01"
                className="w-16 h-11 border border-gray-300 rounded text-center text-sm focus:outline-none"
              />
            </div>
            <div className="text-right text-sm">$650</div>
          </div>

          <div className="bg-white rounded shadow-sm border border-gray-100 px-10 py-6 grid grid-cols-4 items-center">
            <div className="flex items-center space-x-5">
              <img
                src="/public/imgs/Game.png"
                alt="H1 Gamepad"
                className="w-12 h-12 object-contain"
              />
              <span className="text-sm font-medium">H1 Gamepad</span>
            </div>
            <div className="text-center text-sm">$550</div>
            <div className="flex justify-center">
              <input
                type="number"
                defaultValue="02"
                className="w-16 h-11 border border-gray-300 rounded text-center text-sm focus:outline-none"
              />
            </div>
            <div className="text-right text-sm">$1100</div>
          </div>
        </div>

        <div className="flex justify-between items-center mb-20">
          <button className="px-12 py-4 border border-gray-400 rounded text-sm font-medium hover:bg-gray-50 transition cursor-pointer">
            Return To Shop
          </button>
          <button className="px-12 py-4 border border-gray-400 rounded text-sm font-medium hover:bg-gray-50 transition cursor-pointer">
            Update Cart
          </button>
        </div>

        <div className="flex justify-between items-start">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Coupon Code"
              className="w-72 px-6 py-4 border border-black rounded text-sm focus:outline-none"
            />
            <button className="px-12 py-4 bg-[#DB4444] text-white rounded text-sm font-medium hover:bg-red-600 transition cursor-pointer">
              Apply Coupon
            </button>
          </div>

          <div className="w-md border border-black rounded px-6 py-8">
            <h3 className="text-xl font-medium mb-6">Cart Total</h3>

            <div className="flex justify-between items-center text-sm pb-4 border-b border-gray-300">
              <span>Subtotal:</span>
              <span>$1750</span>
            </div>

            <div className="flex justify-between items-center text-sm py-4 border-b border-gray-300">
              <span>Shipping:</span>
              <span>Free</span>
            </div>

            <div className="flex justify-between items-center text-sm py-4 mb-4">
              <span>Total:</span>
              <span>$1750</span>
            </div>

            <div className="text-center">
              <Link
                to={"/checkout"}
                className="px-12 py-4 bg-[#DB4444] text-white rounded text-sm font-medium hover:bg-red-600 transition cursor-pointer"
              >
                Procees to checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Carts;
