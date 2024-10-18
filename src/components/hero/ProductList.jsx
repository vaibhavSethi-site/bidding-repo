import { Container, Heading } from "../../router";
import { productlists } from "../../utils/data";
import { ProductCard } from "../cards/ProductCard";

export const ProductList = () => {
  return (
    <>
      <section className="product-home bg-gradient-to-b from-gray-50 to-white py-20">
        <Container>
          <Heading
            title="Live Auction"
            subtitle="Explore the world's best & largest Bidding marketplace with our stunning Bidding products. We aim to contribute to your joy, success, and future growth."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 my-12">
            {productlists?.slice(0, 12)?.map((item, index) => (
              <ProductCard item={item} key={index} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};
