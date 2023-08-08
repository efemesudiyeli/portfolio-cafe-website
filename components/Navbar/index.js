import Image from "next/image";
import Link from "next/link";
import { Sedgwick_Ave } from "next/font/google";
const sedgwick = Sedgwick_Ave({ subsets: ["latin"], weight: "400" });
import { GrInstagram, GrFacebook, GrTwitter } from "react-icons/gr";

export default function Navbar() {
  return (
    <header className="navbar bg-base-100">
      <nav className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2 ">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a
          className={`btn btn-ghost normal-case text-3xl max-md:text-xl ${sedgwick.className}`}
        >
          Sample Cafe
        </a>
      </nav>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-extrabold z-50">
          <li tabIndex={0}>
            <details>
              <summary>MENU</summary>
              <ul className="px-5 w-60 flex flex-col justify-start items-start rounded-none transition-all duration-75">
                <li>
                  <Link href={"/menu"}>New York Branch</Link>
                </li>
                <li>
                  <Link href={"/menu"}>LA Branch</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link
              href={"https://goo.gl/maps/EeRVVv1aqfKs2jNb8"}
              target="_blank"
            >
              WHERE ARE WE
            </Link>
          </li>

          <li>
            <Link href={"#franchise"}>FRANCHISE</Link>
          </li>
          <li>
            <a>ABOUT</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-4 font-extrabold">
        <Link href={""} target="_blank">
          <GrInstagram />
        </Link>
        <Link href={""} target="_blank">
          <GrFacebook />
        </Link>
        <Link href={""} target="_blank">
          <GrTwitter />
        </Link>
        <a className="btn">Contact</a>
      </div>
    </header>
  );
}
