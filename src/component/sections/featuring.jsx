import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function StartupShowcase() {
  const { t } = useTranslation();

  const startups = [
    {
      name: "TechNova AI",
      description: t("A cutting-edge AI startup revolutionizing automation and deep learning."),
      image: "https://source.unsplash.com/400x300/?startup,tech",
    },
    {
      name: "Green Energy Labs",
      description: t("Developing sustainable energy solutions for a greener future."),
      image: "https://source.unsplash.com/400x300/?solar,energy",
    },
    {
      name: "FinSecure",
      description: t("A fintech startup making digital transactions safer and smarter."),
      image: "https://source.unsplash.com/400x300/?finance,technology",
    },
    {
      name: "MediTech Solutions",
      description: t("Advancing healthcare with AI-driven diagnostics."),
      image: "https://source.unsplash.com/400x300/?healthcare,technology",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="px-6 py-12 bg-[#F5F5F5]">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-[#1A1A2E]">
        {t("Startup Showcase")}
      </h1>
      <Slider {...sliderSettings} className="w-full">
        {startups.map((startup, index) => (
          <div key={index} className="p-4">
            <div className="bg-[#FFFFFF] shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-2xl border border-[#E94560]">
              <img
                src={startup.image}
                alt={startup.name}
                className="w-full h-48 object-cover rounded-md"
              />
              <h2 className="text-xl font-semibold mt-4 text-[#16213E]">{startup.name}</h2>
              <p className="text-[#333333] mt-2">{startup.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
