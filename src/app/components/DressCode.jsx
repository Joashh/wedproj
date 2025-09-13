"use client";
import { motion } from "framer-motion";

export default function DressCode() {
  return (
    <div className="flex flex-col gap-2 justify-center">
      {/* Left item */}
      <motion.span
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-sm text-center bg-white p-4 shadow-md rounded-lg border leading-relaxed text-gray-700"
      >
        ❈ Male: Barong in Beige paired with Black slacks.
      </motion.span>

      {/* Right item */}
      <motion.span
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-sm text-center bg-white p-4 shadow-md rounded-lg border leading-relaxed text-gray-700"
      >
        ❈ Female: Long gown in Champagne/Champagne Gold.
      </motion.span>
    </div>
  );
}
