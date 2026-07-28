import Hero from "./Hero/Hero";
import FlashSale from "./Sections/flashSale.jsx";
import Browse from "./Sections/Browse.jsx";
import Products from "./Sections/products.jsx";
import ExploreProducts from "./Sections/ExploreProducts.jsx";
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
