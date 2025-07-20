import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";

interface iAppProps {
  title: string;
  overview: string;
  youtubeUrl: string;
  state: boolean;
  changeState: any;
  release: number;
  age: number;
  duration: number;
}

export default function PlayVideoModal({
  changeState,
  overview,
  state,
  title,
  youtubeUrl,
  age,
  duration,
  release,
}: iAppProps) {
  return (
    <AnimatePresence>
      {state && (
        <Dialog open={state} onOpenChange={() => changeState(!state)}>
          <DialogContent asChild>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.3 }}
            >
              <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription className="line-clamp-3">
                  {overview}
                </DialogDescription>
                <div className="flex gap-x-2 items-center">
                  <p>{release}</p>
                  <p className="border py-o.5 px-1 border-gray-200 rounded">
                    {age}+
                  </p>
                  <p>{duration}h</p>
                </div>
              </DialogHeader>
              <iframe src={youtubeUrl} height={250} className="w-full"></iframe>
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
