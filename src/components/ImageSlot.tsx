"use client";

import { motion } from "framer-motion";
import { Camera } from "lucide-react";

interface ImageSlotProps {
  label?: string;
  className?: string;
  aspectRatio?: string;
  priority?: boolean;
}

export default function ImageSlot({
  label,
  className = "",
  aspectRatio = "aspect-[4/3]",
  priority = false,
}: ImageSlotProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 border border-primary/10 dark:border-accent/10 group ${aspectRatio} ${className}`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Camera className="w-10 h-10 text-primary/30 dark:text-accent/30 mx-auto mb-3" />
          <p className="text-sm font-medium text-muted/60">
            {label || "Dar e Arqam students photo"}
          </p>
          <p className="text-xs text-muted/40 mt-1">
            Replace with actual image
          </p>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      {priority && (
        <div className="absolute top-3 left-3 px-2 py-1 rounded-md bg-accent/20 text-accent text-[10px] font-semibold uppercase tracking-wider">
          LCP Candidate
        </div>
      )}
    </div>
  );
}
