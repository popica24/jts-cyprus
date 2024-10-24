import { Parallax } from "react-scroll-parallax";
import Tilt from "react-parallax-tilt";
import { useState } from "react";

const OurBrands = () => {
  const [seeMore, setSeeMore] = useState(window.innerWidth > 527);
  return (
    <Parallax translateY={[0, 100]} className="bg-white">
      <h1 className="text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        We invest in the world’s potential
      </h1>
      <p className="mb-6 text-lg font-normal lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        We proudly collaborate with industry-leading brands to provide
        high-quality photovoltaic panels, inverters, and mounting structures.
        Our trusted partners ensure reliability, innovation, and sustainability
        for all our solar energy solutions.
      </p>
      <div className="flex flex-row flex-wrap justify-center">
        <LogoCard url="static/logos/zeversolar.jpg" />
        <LogoCard url="static/logos/rec.jpg" />
        <LogoCard url="static/logos/sungrow.jpg" />
        <LogoCard url="static/logos/trinasolar.jpg" />

        {seeMore ? (
          <>
            <LogoCard url="static/logos/hanwha.jpg" />
            <LogoCard url="static/logos/canadiansolar.jpg" />
            <LogoCard url="static/logos/fronius.png" />
            <LogoCard url="static/logos/delta.webp" />
            <LogoCard url="static/logos/adani.png" />
            <LogoCard url="static/logos/solax.png" />
            <LogoCard url="static/logos/solaredge.png" />
            <LogoCard url="static/logos/etsolar.jpg" />
            <LogoCard url="static/logos/qcells.jpg" />
            <LogoCard url="static/logos/sunpower.png" />
          </>
        ) : (
          <button
            onClick={() => setSeeMore(true)}
            type="button"
            className="mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-indigo-600 hover:bg-indigo-800  rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            See more brands
            <span className="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
              7
            </span>
          </button>
        )}
      </div>
    </Parallax>
  );
};

export default OurBrands;

function LogoCard({ url }: { url: string }) {
  return (
    <Tilt
      glareEnable={true}
      tiltMaxAngleX={40}
      tiltMaxAngleY={40}
      perspective={800}
      transitionSpeed={1500}
      scale={1.1}
      gyroscope={true}
      className="aspect-square w-[120px] sm:w-[150px] bg-cover bg-center bg-no-repeat m-4 drop-shadow-lg"
      style={{
        backgroundImage: `url(${url})`,
      }}
    ></Tilt>
  );
}
