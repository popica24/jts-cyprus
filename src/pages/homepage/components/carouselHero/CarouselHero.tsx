import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { Link } from "react-router-dom";

const CarouselHero = () => {
  return (
    <Carousel
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
    >
      <ParallaxBanner className="w-full h-[500px] bg-cover rounded-xl z-10 bg-center relative">
        <ParallaxBannerLayer image="static/panels.avif" speed={-20} />
        <div className="absolute inset-0 bg-black/25 rounded-xl"></div>
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 backdrop-fade p-8">
          <h1 className="text-2xl md:text-3xl text-white font-extrabold tracking-wider drop-shadow-md">
            JTS SOLAR ENERGY
          </h1>
          <p className="text-white font-medium text-base md:text-xl my-2 drop-shadow-md">
            Top market offers in Cyprus
          </p>
          <a
            href="#exclusive-offers"
            className="text-white underline underline-offset-2 drop-shadow-md hover:underline-offset-4 transition-all"
          >
            See offers here
          </a>
        </div>
      </ParallaxBanner>
      <ParallaxBanner className="w-full h-[500px] bg-cover rounded-xl z-10 bg-center relative">
        <ParallaxBannerLayer image="static/invertor.avif" speed={-20} />
        <div className="absolute inset-0 bg-black/25 rounded-xl"></div>
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 backdrop-fade p-8">
          <h1 className="text-2xl md:text-3xl text-white font-extrabold tracking-wider drop-shadow-md">
            JTS SOLAR ENERGY
          </h1>
          <p className="text-white font-medium text-base md:text-xl my-2 drop-shadow-md">
            Custom pricing made easy for you
          </p>
          <Link
            to="custom-pricing"
            className="text-white underline underline-offset-2 drop-shadow-md hover:underline-offset-4 transition-all"
          >
            See calculator here
          </Link>
        </div>
      </ParallaxBanner>
      <ParallaxBanner className="w-full h-[500px] bg-cover rounded-xl z-10 bg-center relative">
        <ParallaxBannerLayer image="static/working-guy.avif" speed={-20} />
        <div className="absolute inset-0 bg-black/25 rounded-xl"></div>
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 backdrop-fade p-8">
          <h1 className="text-2xl md:text-3xl text-white font-extrabold tracking-wider drop-shadow-md">
            JTS SOLAR ENERGY
          </h1>
          <p className="text-white font-medium text-base md:text-xl my-2 drop-shadow-md">
            Top engineers at your service
          </p>
          <a
            href="#projects"
            className="text-white underline underline-offset-2 drop-shadow-md hover:underline-offset-4 transition-all"
          >
            See our projects here
          </a>
        </div>
      </ParallaxBanner>
    </Carousel>
  );
};

export default CarouselHero;
