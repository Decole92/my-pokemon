import Image from "next/image";

function Header() {
  return (
    <header className="sticky top-0 z-22 flex text-white items-center text-sm justify-between px-5 md:px-20 py-1 bg-[#FF3E4E] w-full shadow-md">
      <Image
        src={require("../../public/logo.png")}
        alt="logo_pic"
        height={55}
        width={160}
      />
      <nav>
        <ul>
          <li className="flex font-bold justify-between space-x-10">
            <a className="pt-2">
              <h1>o nas</h1>
            </a>
            <a href="/" className="border-t-2 pt-2">
              Pokemoni
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
