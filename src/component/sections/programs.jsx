import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

AOS.init();

export default function ProgramsSection() {
  const { t } = useTranslation();

  const programs = [
    {
      title: t("Startup Incubation"),
      description: t("Helping early-stage startups with mentorship and resources."),
      icon: "🚀",
    },
    {
      title: t("Tech Accelerator"),
      description: t("Fast-tracking tech startups with funding and expert guidance."),
      icon: "💡",
    },
    {
      title: t("AI Research Program"),
      description: t("Advancing AI innovation through research and development."),
      icon: "🤖",
    },
    {
      title: t("Entrepreneur Bootcamp"),
      description: t("Empowering entrepreneurs with essential business skills."),
      icon: "📈",
    },
  ];

  return (
    <div className="px-6 py-12 bg-[#F5F5F5]">
      <div data-aos="fade-up" data-aos-duration="600">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-[#1A1A2E]">
          {t("Our Programs")}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF] p-6 shadow-lg rounded-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl border border-[#E94560]"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-5xl">{program.icon}</div>
              <h2 className="text-xl font-semibold mt-4 text-[#16213E]">
                {program.title}
              </h2>
              <p className="text-[#333333] mt-2">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
