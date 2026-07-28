import Hero from "./Hero/Hero";
import FlashSale from "./Sections/flashSale.jsx";
import Browse from "./Sections/Browse.jsx";
import Products from "./Sections/products.jsx";
import ExploreProducts from "./Sections/ExploreProducts.jsx";
import Music from "./Sections/Music.jsx";
function Home() {
  return (
    <>
      <main>
        <Hero />
        <FlashSale />
        <Browse />
        <Products />
        <Music/>
        <ExploreProducts />
      </main>
    </>
  );
}

export default Home;
