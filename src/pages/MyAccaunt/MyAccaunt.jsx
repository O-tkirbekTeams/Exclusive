function MyAccaunt() {
  return (
    <>
      <div className="container_1200 px-4 py-20">
        <div className="flex items-center justify-between text-sm mb-16">
          <div className="flex items-center gap-2 text-[#7D7D7D] ">
            <span  className="cursor-pointer">Home</span>
            <span>/</span>
            <span className="text-black cursor-pointer">My Account</span>
          </div>

          <p className="text-sm">
            Welcome! <span className="text-[#DB4444]">Md Rimel</span>
          </p>
        </div>

        <div className="grid grid-cols-12 gap-20">
          <div className="col-span-3">
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-[16px] text-black cursor-pointer ">
                  Manage My Account
                </h3>

                <div className="flex flex-col gap-3 mt-5 ml-8">
                  <button className="text-left text-[#808080] hover:text-[#DB4444] cursor-pointer ">
                    My Profile
                  </button>

                  <button className="text-left text-[#808080] hover:text-[#DB4444] transition cursor-pointer ">
                    Address Book
                  </button>

                  <button className="text-left text-[#808080] hover:text-[#DB4444] transition cursor-pointer ">
                    My Payment Options
                  </button>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-[16px] text-black cursor-pointer ">
                  My Orders
                </h3>

                <div className="flex flex-col gap-3 mt-5 ml-8">
                  <button className="text-left text-[#808080] hover:text-[#DB4444] transition cursor-pointer ">
                    My Returns
                  </button>

                  <button className="text-left text-[#808080] hover:text-[#DB4444] transition cursor-pointer ">
                    My Cancellations
                  </button>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-[16px] text-black cursor-pointer ">
                  My Wishlist
                </h3>
              </div>
            </div>
          </div>

          <div className="col-span-9">
            <div className="bg-white shadow-[0_1px_13px_rgba(0,0,0,0.05)] rounded-[4px] px-20 py-12">
              <h2 className="text-[#DB4444] text-[20px] font-medium mb-8">
                Edit Your Profile
              </h2>

              <div className="grid grid-cols-2 gap-8">
                                <div>
                  <label className="block text-[16px] mb-2">First Name</label>

                  <input
                    type="text"
                    placeholder="Md"
                    className="w-full h-12 bg-[#F5F5F5] px-4 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[16px] mb-2">Last Name</label>

                  <input
                    type="text"
                    placeholder="Rimel"
                    className="w-full h-12 bg-[#F5F5F5] px-4 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[16px] mb-2">Email</label>

                  <input
                    type="email"
                    placeholder="rimel1111@gmail.com"
                    className="w-full h-12 bg-[#F5F5F5] px-4 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[16px] mb-2">Address</label>

                  <input
                    type="text"
                    placeholder="Kingston, 5236, United State"
                    className="w-full h-12 bg-[#F5F5F5] px-4 outline-none"
                  />
                </div>
              </div>

              <div className="mt-8">
                <label className="block text-[16px] mb-4">
                  Password Changes
                </label>

                <div className="flex flex-col gap-4">
                  <input
                    type="password"
                    placeholder="Current Password"
                    className="w-full h-12 bg-[#F5F5F5] px-4 outline-none"
                  />

                  <input
                    type="password"
                    placeholder="New Password"
                    className="w-full h-12 bg-[#F5F5F5] px-4 outline-none"
                  />

                  <input
                    type="password"
                    placeholder="Confirm New Password"
                    className="w-full h-12 bg-[#F5F5F5] px-4 outline-none"
                  />
                </div>
              </div>
                            <div className="flex items-center justify-end gap-8 mt-10">
                <button className="text-[16px]  cursor-pointer text-black hover:text-[#DB4444] transition">
                  Cancel
                </button>

                <button className="bg-[#DB4444] hover:bg-[#c73939] text-white px-12 h-14 rounded-[4px] transition cursor-pointer ">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyAccaunt;