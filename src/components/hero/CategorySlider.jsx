import { categorylists } from "../../utils/data";
import { CategoryCard, Container, Heading } from "../../router";

export const CategorySlider = () => {
  return (
    <>
      <section className="category-slider py-16 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 rounded-lg shadow-lg">
        <Container className="text-center">
          <Heading 
            title="Explore Our Categories" 
            subtitle="Dive into the most popular and top-selling categories"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8 my-10">
            {categorylists.map((item) => (
              <div className="flex justify-center transition-transform transform hover:scale-105" key={item.id}>
                <CategoryCard item={item} className="transition-shadow duration-300 hover:shadow-xl rounded-lg" />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <button className="bg-primary text-white py-3 px-8 rounded-full shadow-lg hover:bg-primary-dark transition duration-300">
              View All Categories
            </button>
          </div>
        </Container>
      </section>
    </>
  );
};
