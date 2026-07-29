import OurStory from "../../../../src/assets/About-img/OurStory-img/Side Image.png";

function About_OurStory() {
  return (
    <div>
      <div className="OurStory">
        <div className="container_1200 mt-[80px]">
          <div className="flex gap-3">
            <a href="">Home</a>
            <span>/</span>
            <a href="">About</a>
          </div>
          <div className="flex items-center gap-30 mt-[42px]">
            <div className="left w-[550px] ">
              <div className="w-[470px]">
                <h1 className="text-[45px] text-black font-bold">Our Story</h1>
                <p className="text-[16px] text-black mt-5">
                  Launced in 2015, Exclusive is South Asia’s premier online
                  shopping makterplace with an active presense in Bangladesh.
                  Supported by wide range of tailored marketing, data and
                  service solutions, Exclusive has 10,500 sallers and 300 brands
                  and serves 3 millioons customers across the region.{" "}
                </p>
                <p className="text-[16px] text-black mt-5">
                  Exclusive has more than 1 Million products to offer, growing
                  at a very fast. Exclusive offers a diverse assotment in
                  categories ranging from consumer.
                </p>
              </div>
            </div>
            <div className="right w-[550px]">
              <img src={OurStory} alt="" className="w-full h-ful" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About_OurStory;
