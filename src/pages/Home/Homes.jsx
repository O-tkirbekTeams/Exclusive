import Hero from "./Hero/Hero.jsx";
import FlashSale from "./Sections/flashSale.jsx";
import Browse from "./Sections/Browse.jsx";
import Products from "./Sections/products.jsx";
import ExploreProducts from "./Sections/ExploreProducts.jsx";
import Music from "./Sections/Music.jsx";
import Arrival from "./Sections/Arrival.jsx";
import Comfort from "./Sections/Comfort.jsx";
function Homes() {
  return (
    <>
      <main>
        <Hero />
        <FlashSale />
        <Browse />
        <Products />
        <Music />
        <ExploreProducts />
        <Arrival />
        <Comfort />
      </main>
    </>
  );
}

export default Homes;
