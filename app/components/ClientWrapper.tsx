"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={pathName}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-7xl mx-auto sm:px-6 lg:px-8"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
