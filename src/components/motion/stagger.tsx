"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type StaggerProps = {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
};

export function Stagger({ children, className, stagger = 0.08 }: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}