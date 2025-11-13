import Image from "next/image";
import Logo from "../../../public/img/logo.png";
import Link from "next/link";
import ThemeToggle from "../Them/ThemeToggle";
import MobileMenu from "./mobileMenu";

export default function Navbar() {
  return (
    <>
      <div
        style={{ backgroundColor: "var(--color-bg-navbar)" }}
        className=" py-8 rounded-br-full"
      >
        <header className="container flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div>
                <Image
                  src={Logo}
                  alt="اسکای مووی"
                  width={100}
                  height={100}
                  loading="lazy"
                />
              </div>
              <div className="w-full items-center hidden sm:block">
                <h1 className="text-lg md:text-xl font-bold">اسکای مووی</h1>
              </div>
            </Link>
          </div>

          <div className="hidden md:block">
            <div>
              <ul className="flex justify-between text-blak dark:  items-center w-52">
                <li>
                  <Link
                    href="/movies"
                    className="dark:hover:bg-gray-800 transition-all dark:hover:text-white p-2 rounded-lg  "
                  >
                    فیلم ها
                  </Link>
                </li>
                <li>
                  <Link
                    href="/series"
                    className="dark:hover:bg-gray-800 transition-all dark:hover:text-white p-2 rounded-lg  "
                  >
                    سریال
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    className="dark:hover:bg-gray-800 transition-all dark:hover:text-white p-2 rounded-lg  "
                  >
                    درباره ما
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="hidden md:flex">
            <div className="flex justify-between items-center w-40">
              <div className="">
                <ThemeToggle />
              </div>
              <div className="">
                <button className="dark:hover:bg-gray-800 transition-all dark:hover:text-white px-5 py-2 rounded-lg ">
                  <Link href="/sing-in">ورود \ ثبت نام</Link>
                </button>
              </div>
            </div>
          </div>

          <div className="md:hidden">
            <MobileMenu />
          </div>
        </header>
      </div>
    </>
  );
}
