"use client";

import Link from "next/link";
import Logo from "../public/netflix_logo.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface linkProps {
  name: string;
  href: string;
}

const links: linkProps[] = [
  { name: "Home", href: "/home" },
  { name: "Movies", href: "/home/movies" },
  { name: "TV Shows", href: "/home/shows" },
  { name: "Recently Added", href: "/home/recently" },
  { name: "My List", href: "/home/user/list" },
];

export default function Navbar() {
  const pathName = usePathname();
  return (
    <div className="w-full max-w-7xl mx-auto items-center justify-between px-5 sm:px-6 py-5 lg:px-8 flex">
      <div className="flex items-center">
        <Link href="/home" className="w-32">
          <Image
            src={Logo}
            alt="netflix logo"
            priority
            width={220}
            height={140}
          />
        </Link>
        <ul className="lg:flex gap-x-4 ml-14 hidden">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathName === link.href ? (
                <Link
                  href={link.href}
                  className="text-white text-sm font-semibold"
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-gray-400 text-sm font-semibold"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
