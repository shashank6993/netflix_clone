"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/netflix_logo.svg";
import { usePathname } from "next/navigation";
import { Bell, Search } from "lucide-react";
import UserNav from "./UserNav";
import { motion } from "framer-motion";

interface linkProps {
  name: string;
  href: string;
}

const links: linkProps[] = [
  { name: "Home", href: "/home" },
  { name: "Tv Shows", href: "/home/shows" },
  { name: "Movies", href: "/home/movies" },
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
            alt="Netflix logo"
            priority
            width={220}
            height={140}
          />
        </Link>
        <ul className="lg:flex gap-x-4 ml-14 hidden relative">
          {links.map((link, idx) => {
            const isActive = pathName === link.href;
            return (
              <li key={idx} className="relative flex flex-col items-center">
                <Link
                  href={link.href}
                  className={`transition-colors duration-300 ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-gray-300 font-normal"
                  } text-sm px-2 py-1`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-underline"
                      className="absolute left-0 right-0 -bottom-1 h-0.5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex items-center gap-x-8">
        <Search className="w-5 h-5 text-gray-300 cursor-pointer" />
        <Bell className="h-5 w-5 text-gray-300 cursor-pointer" />
        <UserNav />
      </div>
    </div>
  );
}
