import { Button } from "@mui/material";

function Music() {
  return (
    <>
      <div className="container_1200 px-10 py-10 ">
        <div className="  bg-black text-white px-8 py-12 md:px-16 md:py-16 rounded-lg flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="z-10 flex flex-col items-start space-y-8 max-w-xl">
            <span className="text-[#00FF66] font-semibold text-sm ">
              Categories
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Enhance Your
              <br />
              Music Experience
            </h2>

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-white text-black flex flex-col items-center justify-center font-bold shadow">
                <span className="text-base leading-none">23</span>
                <span className="text-[10px] font-normal leading-tight text-gray-800">
                  Hours
                </span>
              </div>

              <div className="w-16 h-16 rounded-full bg-white text-black flex flex-col items-center justify-center font-bold shadow">
                <span className="text-base leading-none">05</span>
                <span className="text-[10px] font-normal leading-tight text-gray-800">
                  Days
                </span>
              </div>

              <div className="w-16 h-16 rounded-full bg-white text-black flex flex-col items-center justify-center font-bold shadow">
                <span className="text-base leading-none">59</span>
                <span className="text-[10px] font-normal leading-tight text-gray-800">
                  Minutes
                </span>
              </div>

              <div className="w-16 h-16 rounded-full bg-white text-black flex flex-col items-center justify-center font-bold shadow">
                <span className="text-base leading-none">35</span>
                <span className="text-[10px] font-normal leading-tight text-gray-800">
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

          <div className="relative flex-1 flex justify-center items-center w-full">
            <div className="absolute inset-0 bg-white/5 rounded-full blur-3xl transform scale-75 pointer-events-none"></div>

            <img
              src="/public/imgs/musiccc.png"
              alt="JBL Boombox Speaker"
              className="relative z-10 w-full max-w-lg object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Music;
