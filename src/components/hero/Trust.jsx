import { trustList } from "../../utils/data";
import { Container, Heading } from "../../router";

export const Trust = () => {
  return (
    <>
      <section className="trust-section py-12 relative z-10 bg-gray-50">
        <Container>
          <Heading
            title="Trusted By 500+ Businesses."
            subtitle="Join thousands of businesses that rely on us for success."
          />

          <div className="content grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 mt-8">
            {trustList.map((item, index) => (
              <div key={index} className="flex items-center justify-center p-4 border border-gray-300 rounded-xl shadow-md transition-transform duration-300 hover:scale-105">
                <img
                  src={item.profile}
                  alt={`Partner ${index + 1}`}
                  className="w-24 h-24 rounded-full object-contain"
                  onError={(e) => {
                    e.target.onerror = null; // Prevent infinite loop
                    e.target.src = "https://via.placeholder.com/80"; // Placeholder image
                  }}
                />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};
