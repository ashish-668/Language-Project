import React from "react";

import hero_img from "../../assets/images/png/hero-img.png";

const Home = () => {
  return (
    <>
      <section className="bg-lite-orange pt-7.5 pb-37.5">
        <div className="mx-auto px-5 max-w-305 w-full">
          <div className="flex justify-between items-center gap-7.25">
            <div className="flex">
              <a
                href="#"
                className="text-custom-4xl text-bright-orange work-sans font-semibold leading-118"
              >
                Digi<span className="text-dark-gray">ency</span>
              </a>
            </div>

            <div className="flex items-center justify-between max-w-198.75 gap-7.25 w-full">
              <div>
                <ul className="flex items-center justify-center gap-7.25">
                  <li className="flex">
                    <a
                      href="#"
                      className="text-dark-gray text-xl leading-150 hover:text-bright-orange transition-all duration-300 ease-in"
                    >
                      Home
                    </a>
                  </li>

                  <li className="flex">
                    <a
                      href="#"
                      className="text-dark-gray text-xl leading-150 hover:text-bright-orange transition-all duration-300 ease-in"
                    >
                      About Us
                    </a>
                  </li>

                  <li className="flex">
                    <a
                      href="#"
                      className="text-dark-gray text-xl leading-150 hover:text-bright-orange transition-all duration-300 ease-in"
                    >
                      Services
                    </a>
                  </li>

                  <li className="flex">
                    <a
                      href="#"
                      className="text-dark-gray text-xl leading-150 hover:text-bright-orange transition-all duration-300 ease-in"
                    >
                      Portfolio
                    </a>
                  </li>

                  <li className="flex">
                    <a
                      href="#"
                      className="text-dark-gray text-xl leading-150 hover:text-bright-orange transition-all duration-300 ease-in"
                    >
                      Blog
                    </a>
                  </li>

                  <li className="flex">
                    <a
                      href="#"
                      className="text-dark-gray text-xl leading-150 hover:text-bright-orange transition-all duration-300 ease-in"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <button className="group relative overflow-hidden flex border-dark-gray border rounded-[5px] px-5.5 py-2.5 font-medium bg-lite-orange cursor-pointer hover:border-bright-orange transition-all duration-300 ease-in">
                  <span className="relative z-30 text-dark-gray text-xl leading-145 group-hover:text-white">
                    Let’s Talk
                  </span>
                  <span className="bg-bright-orange absolute inset-0 top-0 translate-x-[-110%] transition-all duration-300 ease-in group-hover:translate-x-0"></span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto px-5 w-full max-w-305">
          <div className="flex items-end justify-between gap-6 mt-37.5 flex-wrap max-xl:justify-center">
            <div>
              <h1 className="text-custom-5xl font-bold text-dark-gray max-w-150.5 leading-150 max-lg:max-w-full max-lg:text-center">
                Choose What Matters To Your Business & Your Customers.
              </h1>

              <div className="mt-4.5 max-w-146.5  max-lg:max-w-full mb-7.5">
                <p className="text-base text-lite-gray max-lg:text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam in digni ssim euismod purus donec mus vulputate
                  habitant iaculis. Com odo enim ornare turpis tempus enim, nibh
                  nulla. Rhoncus sed.
                </p>
              </div>
              <div className="flex max-lg:justify-center mb-4.75">
                <button className="group relative overflow-hidden flex border-bright-orange border rounded-[5px] px-5.5 py-2.5 font-medium bg-bright-orange cursor-pointer transition-all duration-300 ease-in">
                  <span className="relative text-white z-30 text-xl leading-145 group-hover:text-bright-orange">
                    Get Start Now
                  </span>
                  <span className="bg-white absolute inset-0 top-0 translate-x-[-110%] transition-all duration-300 ease-in group-hover:translate-x-0 z-0"></span>
                </button>
              </div>
            </div>
            <div className="flex">
              <img height={470} width={553} src={hero_img} alt="HERO_IMAGE" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
