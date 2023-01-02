import CategoryHeader from "../components/category/CategoryHeader";
import Box from "../components/home/Box";
import TopBanner from "../components/home/TopBanner";
import ProductItemWrapper from "../components/products/ProductItemWrapper";

export default function Home() {
  return (
    <section>
      <TopBanner />
      <h1 class="product-header">RECENT PRODUCTS</h1>
      <div className="product-wrapper">
        <ProductItemWrapper />
      </div>
      <Box />
    </section>
  );
}
