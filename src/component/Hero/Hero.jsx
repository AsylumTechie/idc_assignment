import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./styles.css";

export default function Hero({ contactRef }) {
  
  const scrollToContact = () => {
    if (contactRef?.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log("contactRef is null!");
    }
  };

  return (
    <div className="relative w-full h-[60vh] lg:h-[90vh] mt-16">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        effect="fade"
        modules={[Autoplay, Pagination, EffectFade]}
        className="w-full h-full"
      >
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              className="w-full h-full object-cover"
              src="https://source.unsplash.com/1600x900/?technology,ai"
              alt="AI Background"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-6">
              <h1 className="text-4xl lg:text-6xl font-bold mb-4">Welcome to COSMINNOX</h1>
              <p className="text-lg lg:text-xl mb-6">
                Empowering Startups with AI-driven Innovation.
              </p>
              <button
                onClick={scrollToContact}
                className="bg-accent text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-red-600 transition"
              >
                Apply Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              className="w-full h-full object-cover"
              src="https://source.unsplash.com/1600x900/?startup,innovation"
              alt="Startup Innovation"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-6">
              <h1 className="text-4xl lg:text-6xl font-bold mb-4">Accelerate Your Startup</h1>
              <p className="text-lg lg:text-xl mb-6">
                Join our world-class incubation program.
              </p>
              <button
                onClick={scrollToContact}
                className="bg-accent text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-red-600 transition"
              >
                Apply Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              className="w-full h-full object-cover"
              src="https://source.unsplash.com/1600x900/?business,teamwork"
              alt="Business Collaboration"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-6">
              <h1 className="text-4xl lg:text-6xl font-bold mb-4">Build, Scale, Succeed</h1>
              <p className="text-lg lg:text-xl mb-6">
                Get mentorship, funding, and AI-powered insights.
              </p>
              <button
                onClick={scrollToContact}
                className="bg-accent text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-red-600 transition"
              >
                Apply Now
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
