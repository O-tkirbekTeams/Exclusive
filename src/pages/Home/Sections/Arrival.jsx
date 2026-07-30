function Arrival() {
  return (
    <>
      <section className="container_1200 mx-auto px-4 py-15 font-sans">
        <div className="flex items-center gap-4 mb-5">
          <div className="w-5 h-10 bg-[#DB4444] rounded"></div>
          <span className="text-[#DB4444] font-semibold text-base">Featured</span>
        </div>

        <h2 className="text-4xl font-semibold text-black tracking-wider mb-15">
          New Arrival
        </h2>

        <div className="grid grid-cols-2 gap-7 h-[550px]">
          <div className="relative bg-black rounded overflow-hidden flex items-end p-8 group">
            <img
              src="/public/imgs/ps2.png"
              alt="PlayStation 5"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="relative z-10 max-w-[242px] text-white">
              <h3 className="text-2xl font-semibold tracking-wide mb-2">
                PlayStation 5
              </h3>
              <p className="text-sm text-[#FAFAFA] font-light leading-relaxed mb-4">
                Black and White version of the PS5 coming out on sale.
              </p>
              <a
                href="#"
                className="inline-block font-medium border-b border-white/50 hover:border-white text-white transition-colors pb-1"
              >
                Shop Now
              </a>
            </div>
          </div>

          <div className="grid grid-rows-2 gap-8 h-full">
            <div className="relative bg-[#0D0D0D] rounded overflow-hidden flex items-end p-6">
              <img
                src="/public/imgs/women.png"
                alt="Women's Collections"
                className="absolute right-0 bottom-0 h-full object-contain object-right"
              />
              <div className="relative z-10 max-w-[255px] text-white">
                <h3 className="text-2xl font-semibold tracking-wide mb-2">
                  Women’s Collections
                </h3>
                <p className="text-sm text-[#FAFAFA] font-light leading-relaxed mb-4">
                  Featured woman collections that give you another vibe.
                </p>
                <a
                  href="#"
                  className="inline-block font-medium border-b border-white/50 hover:border-white text-white transition-colors pb-1"
                >
                  Shop Now
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 h-full">
              <div className="relative bg-[#0D0D0D] rounded overflow-hidden flex items-end p-6">
                <img
                  src="/public/imgs/speaker.png"
                  alt="Speakers"
                  className="absolute inset-0 w-full h-full object-contain object-center p-4"
                />
                <div className="relative z-10 text-white">
                  <h3 className="text-2xl font-semibold tracking-wide mb-2">
                    Speakers
                  </h3>
                  <p className="text-xs text-[#FAFAFA] font-light mb-2">
                    Amazon wireless speakers
                  </p>
                  <a
                    href="#"
                    className="inline-block text-sm font-medium border-b border-white/50 hover:border-white text-white transition-colors pb-1"
                  >
                    Shop Now
                  </a>
                </div>
              </div>

              <div className="relative bg-[#0D0D0D] rounded overflow-hidden flex items-end p-6">
                <img
                  src="/public/imgs/parfume.png"
                  alt="Perfume"
                  className="absolute inset-0 w-full h-full object-contain object-center p-4"
                />
                <div className="relative z-10 text-white">
                  <h3 className="text-2xl font-semibold tracking-wide mb-2">
                    Perfume
                  </h3>
                  <p className="text-xs text-[#FAFAFA] font-light mb-2">
                    GUCCI INTENSE OUD EDP
                  </p>
                  <a
                    href="#"
                    className="inline-block text-sm font-medium border-b border-white/50 hover:border-white text-white transition-colors pb-1"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Arrival;
