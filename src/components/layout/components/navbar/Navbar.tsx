import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleBarsIconClick = () => {
    toggleModal();
  };

  const handleMobileNavigation = (url: string) => {
    navigate(url);
    setShowModal(false);
  };

  const navLinks = [
    { title: "About Us", url: "#about-us" },
    { title: "Exclusive Offers", url: "#exclusive-offers" },
    { title: "Testimonials", url: "#testimonials" },
    { title: "Custom Pricing", url: "#custom-pricing" },
    { title: "Our Projects", url: "#our-projects" },
  ];

  const bgColor = "white";
  const modalColor = "bg-[#16436A]";

  return (
    <>
      {!isMobile ? (
        // Laptop Navbar Code Here
        <nav className={`${bgColor} container mx-auto`}>
          <div className="flex justify-between mx-auto items-center py-4 lg:px-24">
            <img
              className="w-[120px] lg:w-[200px]"
              src="static/logo.webp"
              alt=""
            />
            <ul className="flex gap-8 md:gap-16 items-center justify-center text-center cursor-pointer">
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className="text-[#16436A] text-xs whitespace-nowrap font-medium border-b border-white hover:border-[#16436A] underline-offset-4 transition-colors"
                >
                  <a href={link.url}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      ) : (
        // Mobile Navbar Code Here
        <nav className={`${bgColor} py-4 px-4`}>
          <div className="mx-auto flex justify-between items-center ">
            <img
              src="https://www.jtssolar.ro/wp-content/uploads/2022/03/JTS-Install-Construct-logo-200px.png"
              alt=""
            />
            <div className="flex justify-end items-center gap-6 text-white cursor-pointer">
              <FaBars
                onClick={handleBarsIconClick}
                className="text-[#16436A] cursor-pointer"
              />
            </div>
          </div>
          {showModal && (
            <div className="fixed inset-0 flex justify-center items-center z-50">
              <div className={`absolute inset-0 ${modalColor}`} />
              <FaTimes
                className="absolute top-6 right-4 text-white cursor-pointer"
                onClick={toggleModal}
                style={{ fontSize: "16px" }}
              />
              <div className="relative bg-[#16436A] w-full">
                <div className="flex flex-col gap-8 items-center justify-center h-full">
                  {navLinks.map((link, index) => (
                    <span
                      onClick={() => handleMobileNavigation(link.url)}
                      key={index}
                      className="text-white font-light text-2xl cursor-pointer"
                    >
                      {link.title}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </nav>
      )}
    </>
  );
};

export default Navbar;
