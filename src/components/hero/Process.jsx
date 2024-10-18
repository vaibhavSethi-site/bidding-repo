import { processList } from "../../utils/data";
import { Container, Heading, Title } from "../../router";

export const Process = () => {
  return (
    <>
      <section className="process py-24 bg-primary relative overflow-hidden">
        <div className="bg-white w-full py-20 -mt-10 rounded-b-[40px] z-10 absolute top-0"></div>
        <Container className="py-16 pt-24 text-white relative z-20">
          <Heading title="How It Works" subtitle="Follow these 4 easy steps" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-10">
            {processList.map((item, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center flex-col text-center transition-transform duration-300 hover:scale-105"
              >
                <div className="w-20 h-20 mb-4 flex items-center justify-center rounded-full bg-white shadow-lg">
                  <img src={item.cover} alt="" className="w-14 h-14" />
                </div>
                <Title level={5} className="my-3 font-semibold text-white">
                  {item.title}
                </Title>
                <p className="text-gray-200">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
        <div className="bg-white w-full py-16 rounded-t-[40px] z-10 absolute -bottom-20"></div>
      </section>
    </>
  );
};
