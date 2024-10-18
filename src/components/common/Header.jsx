import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

// Design
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import { Container, CustomNavLink, CustomNavLinkList, ProfileCard } from "../../router";
import { User1 } from "../hero/Hero";
import { menulists } from "../../utils/data";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenuOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeMenuOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", closeMenuOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Check if it's the home page
  const isHomePage = location.pathname === "/";
  const role = "buyer";

  return (
    <header className={`header ${isHomePage ? "bg-primary" : "bg-white shadow-s1"} ${isScrolled ? "scrolled" : ""}`} style={{ transition: 'background-color 0.3s ease' }}>
      <Container>
        <nav className="p-4 flex justify-between items-center relative">
          <div className="flex items-center gap-14">
            <div>
              <img
                src={isHomePage && !isScrolled ? "../images/common/header-logo.png" : "../images/common/header-logo2.png"}
                alt="Logo"
                className="h-11"
                style={{ transition: 'opacity 0.3s ease' }}
              />
            </div>
            <div className="hidden lg:flex items-center justify-between gap-8">
              {menulists.map((list) => (
                <li key={list.id} className="capitalize list-none">
                  <CustomNavLinkList
                    href={list.path}
                    isActive={location.pathname === list.path}
                    className={`menu-link ${isScrolled || !isHomePage ? "text-black" : "text-white"}`}
                    style={{
                      padding: '10px',
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {list.link}
                  </CustomNavLinkList>
                </li>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-8 icons">
            <div className="hidden lg:flex lg:items-center lg:gap-8">
              <IoSearchOutline size={23} className={`search-icon ${isScrolled || !isHomePage ? "text-black" : "text-white"}`} />
              {role === "buyer" && (
                <CustomNavLink
                  href="/seller/login"
                  className={`text-link ${isScrolled || !isHomePage ? "text-black" : "text-white"}`}
                  style={{ transition: 'color 0.3s ease' }}
                >
                  Become a Seller
                </CustomNavLink>
              )}
              <CustomNavLink
                href="/login"
                className={`text-link ${isScrolled || !isHomePage ? "text-black" : "text-white"}`}
                style={{ transition: 'color 0.3s ease' }}
              >
                Sign in
              </CustomNavLink>
              <CustomNavLink
                href="/register"
                className={`join-button ${!isHomePage || isScrolled ? "bg-green" : "bg-white"} px-8 py-2 rounded-full text-primary shadow-md`}
                style={{
                  transition: 'background-color 0.3s ease, color 0.3s ease',
                }}
              >
                Join
              </CustomNavLink>
              <CustomNavLink href="/dashboard">
                <ProfileCard>
                  <img src={User1} alt="" className="w-full h-full object-cover" />
                </ProfileCard>
              </CustomNavLink>
            </div>
            <div className={`icon flex items-center justify-center gap-6 ${isScrolled || !isHomePage ? "text-primary" : "text-white"}`}>
              <button onClick={toggleMenu} className="lg:hidden w-10 h-10 flex justify-center items-center bg-black text-white focus:outline-none transition-transform duration-200">
                {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
              </button>
            </div>
          </div>

          {/* Responsive Menu */}
          <div ref={menuRef} className={`lg:flex lg:items-center lg:w-auto w-full p-5 absolute right-0 top-full menu-container ${isOpen ? "open" : "closed"}`}>
            {menulists.map((list) => (
              <li key={list.id} className="uppercase list-none">
                <CustomNavLink className="text-white menu-item" style={{ padding: '10px', transition: 'color 0.3s ease' }}>
                  {list.link}
                </CustomNavLink>
              </li>
            ))}
          </div>
        </nav>

        <style jsx>{`
          .bg-primary {
            background-color: #007bff; /* Change to your desired primary color */
          }

          .bg-white {
            background-color: white;
          }

          .scrolled {
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
          }

          .menu-container {
            transition: max-height 0.3s ease;
          }

          .open {
            max-height: 500px; /* Adjust based on your needs */
          }

          .closed {
            max-height: 0;
            overflow: hidden;
          }

          .join-button {
            transition: background-color 0.3s ease, color 0.3s ease;
          }

          .menu-link:hover, .text-link:hover {
            color: #ff4081; /* Example hover color */
          }
        `}</style>
      </Container>
    </header>
  );
};
