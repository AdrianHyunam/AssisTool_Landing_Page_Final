import {Navbar} from "./navbar"

export const Header = () => {
  return (
    <header className="relative flex justify-between items-center px-4 md:px-8 py-2 z-10">
      <a href="/">
        <img
          className="w-35 bg-White font-bold rounded-full p-2"
          src="/images/assisTool.png"
          alt="Logo"
        />
      </a>
      <Navbar />
    </header>
  );
};

//  default Header
