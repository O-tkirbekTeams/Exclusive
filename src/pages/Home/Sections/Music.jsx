import { Button } from "@mui/material";

function Music() {
  return (
    <>
      <div class="container_1200 px-10 py-10 ">
        <div class="  bg-black text-white px-8 py-12 md:px-16 md:py-16 rounded-lg flex flex-col md:flex-row items-center justify-between gap-8">
          <div class="z-10 flex flex-col items-start space-y-8 max-w-xl">
            <span class="text-[#00FF66] font-semibold text-sm ">
              Categories
            </span>

            <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Enhance Your
              <br />
              Music Experience
            </h2>

            <div class="flex items-center gap-4">
              <div class="w-16 h-16 rounded-full bg-white text-black flex flex-col items-center justify-center font-bold shadow">
                <span class="text-base leading-none">23</span>
                <span class="text-[10px] font-normal leading-tight text-gray-800">
                  Hours
                </span>
              </div>

              <div class="w-16 h-16 rounded-full bg-white text-black flex flex-col items-center justify-center font-bold shadow">
                <span class="text-base leading-none">05</span>
                <span class="text-[10px] font-normal leading-tight text-gray-800">
                  Days
                </span>
              </div>

              <div class="w-16 h-16 rounded-full bg-white text-black flex flex-col items-center justify-center font-bold shadow">
                <span class="text-base leading-none">59</span>
                <span class="text-[10px] font-normal leading-tight text-gray-800">
                  Minutes
                </span>
              </div>

              <div class="w-16 h-16 rounded-full bg-white text-black flex flex-col items-center justify-center font-bold shadow">
                <span class="text-base leading-none">35</span>
                <span class="text-[10px] font-normal leading-tight text-gray-800">
                  Seconds
                </span>
              </div>
            </div>

            <Button
              variant="contained"
              sx={{
                background: "#00FF66",
                textTransform: "none",
                py:"10px",
                px:"40px"
              }}
            >
             Buy Now!
            </Button>
          </div>

          <div class="relative flex-1 flex justify-center items-center w-full">
            <div class="absolute inset-0 bg-white/5 rounded-full blur-3xl transform scale-75 pointer-events-none"></div>

            <img
              src="/public/imgs/musiccc.png"
              alt="JBL Boombox Speaker"
              class="relative z-10 w-full max-w-lg object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Music;
