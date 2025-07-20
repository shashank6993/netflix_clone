"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { Heart, PlayCircle } from "lucide-react";
import PlayVideoModal from "./PlayVideoModal";
import { useState } from "react";
import { addTowatchlist, deleteFromWatchlist } from "../action";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface iAppProps {
  title: string;
  overview: string;
  movieId: number;
  watchList: boolean;
  wachtListId: string;
  youtubeUrl: string;
  year: number;
  age: number;
  time: number;
}

export function MovieCard({
  movieId,
  overview,
  title,
  wachtListId,
  watchList,
  youtubeUrl,
  age,
  time,
  year,
}: iAppProps) {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      }}
      className="relative bg-zinc-900 rounded-lg overflow-hidden cursor-pointer transition-all duration-300"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-between p-4 z-20"
      >
        <div className="flex justify-end gap-2">
          <button
            onClick={() => setOpen(true)}
            className="-mt-2"
            title="Play Movie"
          >
            <PlayCircle className="h-10 w-10 text-white hover:text-pink-400 transition-colors" />
          </button>
          {watchList ? (
            <form action={deleteFromWatchlist} className="inline">
              <input type="hidden" name="watchlistId" value={wachtListId} />
              <input type="hidden" name="pathname" value={pathName} />
              <Button variant="outline" size="icon">
                <Heart className="w-4 h-4 text-red-500" />
              </Button>
            </form>
          ) : (
            <form action={addTowatchlist} className="inline">
              <input type="hidden" name="movieId" value={movieId} />
              <input type="hidden" name="pathname" value={pathName} />
              <Button variant="outline" size="icon">
                <Heart className="w-4 h-4" />
              </Button>
            </form>
          )}
        </div>
        <div className="mt-auto">
          <h1 className="font-bold text-lg line-clamp-1 text-white drop-shadow-lg">
            {title}
          </h1>
          <div className="flex gap-x-2 items-center text-white/80">
            <p className="font-normal text-sm">{year}</p>
            <p className="font-normal border py-0.5 px-1 border-gray-200 rounded text-sm">
              {age}+
            </p>
            <p className="font-normal text-sm">{time}h</p>
          </div>
          <p className="line-clamp-1 text-sm text-gray-200 font-light">
            {overview}
          </p>
        </div>
      </motion.div>
      {/* Movie image or background can go here if available */}
      <PlayVideoModal
        youtubeUrl={youtubeUrl}
        key={movieId}
        title={title}
        overview={overview}
        state={open}
        changeState={setOpen}
        age={age}
        duration={time}
        release={year}
      />
    </motion.div>
  );
}
