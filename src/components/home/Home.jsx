
import { useContext } from "react";
import hero_img from "../../assets/images/png/hero-img.png";
import { LanguageContext } from "./LangContext";

const Home = () => {
  const { language, toggleLanguage, text } =
    useContext(LanguageContext);

  return (
    <section className="bg-lite-orange pt-7.5 pb-37.5">
      <div className="mx-auto w-full max-w-305 px-5">
        
        <div className="flex items-center justify-between gap-7.25">
          <a
            href="#"
            className="text-custom-4xl text-bright-orange work-sans font-semibold leading-118"
          >
            Digi<span className="text-dark-gray">ency</span>
          </a>

          <div className="flex w-full max-w-198.75 items-center justify-between gap-7.25">
            <ul className="flex items-center justify-center gap-7.25">
              {text.navLinks.map((item) => (
                <li key={item.key}>
                  <a
                    href="#"
                    className="text-dark-gray text-xl leading-150 transition-all duration-300 ease-in hover:text-bright-orange"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex gap-3">

              <button className="group relative flex cursor-pointer overflow-hidden rounded-[5px] border border-dark-gray bg-lite-orange px-5.5 py-2.5 font-medium transition-all duration-300 ease-in hover:border-bright-orange">
                <span className="relative z-30 text-xl leading-145 text-dark-gray group-hover:text-white">
                  {text.talk}
                </span>
                <span className="absolute inset-0 translate-x-[-110%] bg-bright-orange transition-all duration-300 ease-in group-hover:translate-x-0" />
              </button>
            </div>
          </div>
        </div>

        
        <div className="mt-37.5 flex flex-wrap items-end justify-between gap-6 max-xl:justify-center">
          <div>
            <h1 className="max-w-150.5 text-custom-5xl font-bold leading-150 text-dark-gray max-lg:max-w-full max-lg:text-center">
              {text.heading}
            </h1>

            <div className="mb-7.5 mt-4.5 max-w-146.5 max-lg:max-w-full">
              <p className="text-base text-lite-gray max-lg:text-center">
                {text.description}
              </p>
            </div>

            <div className="mb-4.75 flex gap-4 max-lg:justify-center">
              <button className="group relative flex cursor-pointer overflow-hidden rounded-[5px] border border-bright-orange bg-bright-orange px-5.5 py-2.5 font-medium transition-all duration-300 ease-in">
                <span className="relative z-10 text-xl leading-145 text-white group-hover:text-bright-orange">
                  {text.getStarted}
                </span>
                <span className="absolute inset-0 z-0 translate-x-[-110%] bg-white transition-all duration-300 ease-in group-hover:translate-x-0" />
              </button>

               <button
                onClick={toggleLanguage}
                className="rounded-[5px] border border-dark-gray px-4 py-2.5 text-dark-gray hover:border-bright-orange"
              >
                {language === "en" ? "हिन्दी" : "English"}
              </button>
            </div>
          </div>

          <div className="flex">
            <img
              height={470}
              width={553}
              src={hero_img}
              alt="HERO_ILLUSTRAION"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
