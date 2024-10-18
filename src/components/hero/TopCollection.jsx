import { topList } from "../../utils/data";
import { Caption, Container, Heading } from "../../router";

export const TopCollection = () => {
  return (
    <>
      <section className="top-collection py-16 relative z-10 bg-gray-50">
        <Container>
          <Heading
            title="Top Collection"
            subtitle="Explore the world's best & largest Bidding marketplace with our exquisite products. Join us in your journey of success and growth."
          />

          <div className="content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            {topList.map((item, index) => (
              <div
                className="bg-white shadow-lg rounded-xl relative overflow-hidden transition-transform duration-300 hover:scale-105"
                key={index + 1}
              >
                <div className="h-64">
                  <img src={item.img1} alt={item.catgeory} className="w-full h-full object-cover rounded-t-xl" />
                </div>
                <div className="absolute top-[-30%] left-[50%] transform -translate-x-1/2 w-32 h-32 border-4 border-green-600 rounded-full overflow-hidden shadow-lg">
                  <img src={item.img2} alt={item.catgeory} className="w-full h-full object-cover" />
                </div>
                <div className="grid grid-cols-3 gap-3 mt-14 px-3 pb-4">
                  <div className="h-20 overflow-hidden">
                    <img src={item.img3} alt="" className="w-full h-full object-cover rounded-md" />
                  </div>
                  <div className="h-20 overflow-hidden">
                    <img src={item.img4} alt="" className="w-full h-full object-cover rounded-md" />
                  </div>
                  <div className="h-20 overflow-hidden">
                    <img src={item.img2} alt="" className="w-full h-full object-cover rounded-md" />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4 px-3">
                  <Caption className="font-semibold text-gray-700">{item.catgeory}</Caption>
                  <span className="px-4 py-1 text-sm rounded-md bg-green-600 text-white">{item.total} Items</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};
