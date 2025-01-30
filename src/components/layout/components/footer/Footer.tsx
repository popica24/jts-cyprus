import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { Parallax } from "react-scroll-parallax";

const Footer = () => {
  return (
    <Parallax translateY={[60, 80]}>
      <footer className="bg-white">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a
                href="https://jtssolarenergy.com/"
                className="flex items-center"
              >
                <img
                  src="static/logo.webp"
                  alt=""
                  className="w-[120px] lg:w-[200px]"
                />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-black">
                  Resources
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Configurator
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Exclusive Offers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Testimonials
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-black">
                  Follow us
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline ">
                      Facebook
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline ">
                      Tiktok
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-black uppercase">
                  Legal
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Return Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm sm:text-center text-gray-500">
              © 2024{" "}
              <a href="https://jtssolarenergy.com/" className="hover:underline">
                JTS Solar Energy™
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" className="text-gray-500 hover:text-black">
                <FaFacebookF />
                <span className="sr-only">Facebook page</span>
              </a>

              <a href="#" className="text-gray-500 hover:text-black mx-4">
                <FaTiktok />
                <span className="sr-only">Tiktok page</span>
              </a>

              <a href="#" className="text-gray-500 hover:text-black">
                <FaInstagram />
                <span className="sr-only">Instagram page</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </Parallax>
  );
};

export default Footer;
