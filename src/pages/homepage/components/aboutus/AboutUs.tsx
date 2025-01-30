import CountUp from "react-countup";
import { Parallax } from "react-scroll-parallax";

const AboutUs = () => {
  return (
    <Parallax translateY={[-10, 40]} className="py-12 relative" id="#about-us">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
          <div
            className="hidden sm:grid w-full justify-center items-start gap-6 grid-cols-2 lg:order-first order-last"
            data-aos="fade-up-right"
            data-aos-anchor-placement="bottom-bottom"
          >
            <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
              <img
                className=" rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1717741205.png"
                alt="about Us image"
              />
            </div>
            <img
              className="sm:ml-0 ml-auto rounded-xl object-cover"
              src="https://pagedone.io/asset/uploads/1717741215.png"
              alt="about Us image"
            />
          </div>
          <div
            className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex"
            data-aos="fade-up-left"
            data-aos-anchor-placement="bottom-bottom"
          >
            <div className="w-full flex-col justify-center items-start gap-8 flex">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                  Powering Tomorrow with Solar Excellence
                </h2>
                <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                  JTS Solar Energy, established in <b>2008</b>, has been a
                  trusted provider of solar energy solutions in <b>Spain</b>,
                  and since <b>2020</b>, we have expanded our services to the
                  <b> Romanian</b> market. We specialize in the installation of
                  photovoltaic panels and inverters, with a reputation for
                  professionalism and excellence. Our team of highly qualified
                  engineers ensures that installations are completed{" "}
                  <b>within just four days</b>. At JTS Solar Energy, we are
                  committed to delivering high-quality, sustainable energy
                  solutions to meet the growing demand for renewable power.
                </p>
              </div>
              <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                <div className="flex-col justify-start items-start inline-flex">
                  <h3 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                    <CountUp
                      end={16}
                      prefix="+"
                      duration={1.5}
                      enableScrollSpy={true}
                    />
                  </h3>
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                    Years of Experience
                  </h6>
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                  <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                    <CountUp
                      end={1500}
                      prefix="+"
                      duration={1.5}
                      enableScrollSpy={true}
                    />
                  </h4>
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                    Successful Projects
                  </h6>
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                  <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                    <CountUp
                      end={40}
                      prefix="+"
                      duration={1.5}
                      enableScrollSpy={true}
                    />
                  </h4>
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                    MW Installed
                  </h6>
                </div>
              </div>
            </div>
            <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
              <span className="px-1.5 text-white text-sm font-medium leading-6">
                Configure yours !
              </span>
            </button>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default AboutUs;
