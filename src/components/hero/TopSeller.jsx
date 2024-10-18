import { Caption, Container, Heading, ProfileCard, Title } from "../../router";
import { topSellerList } from "../../utils/data";

export const TopSeller = () => {
  return (
    <>
      <section className="top-seller py-16 bg-gray-50">
        <Container>
          <Heading
            title="Top Sellers"
            subtitle="Meet our star sellers who are dedicated to providing top-notch service and quality products."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-10">
            {topSellerList.map((item, index) => (
              <div
                className="flex flex-col items-center justify-between border rounded-xl bg-white p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
                key={index + 1}
              >
                <ProfileCard className="w-20 h-20 mb-4 border-4 border-green-500">
                  <img
                    src={item.profile}
                    alt=""
                    className="w-full h-full rounded-full object-cover"
                  />
                </ProfileCard>
                <Title level={5} className="font-bold text-lg text-center">
                  {item.title}
                </Title>
                <Caption className="text-gray-600 text-center mb-2">
                  ${item.amount * item.id}
                </Caption>
                <Title level={3} className="text-gray-300">
                  0{item.id}
                </Title>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};
