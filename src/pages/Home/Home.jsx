import Hero from "./Hero/Hero";
import FlashSale from "./flashSale.jsx";
import Browse from "./Browse.jsx";
import Products from "./products.jsx";
import ExploreProducts from "./ExploreProducts.jsx";
function Home() {
  return (
    <>
      <main>
        <Hero />
        <FlashSale />
        <Browse />
        <Products />
        <ExploreProducts />
      </main>
    </>
  );
}

export default Home;
