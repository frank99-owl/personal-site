"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Locale, Dictionary } from "@/lib/locale";
import { Globe } from "../effects/Globe";

type Props = {
  lang: Locale;
  dict: Dictionary["hero"];
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export function Hero({ lang, dict }: Props) {
  const base = `/${lang}`;

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-24 sm:pt-24 sm:pb-32 grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.12, delayChildren: 0.05 }}
          className="space-y-6"
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-base sm:text-lg uppercase tracking-[0.24em] text-orange font-medium"
          >
            {dict.eyebrow}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-serif text-[clamp(2.25rem,5vw,4rem)] leading-[1.08] tracking-tight text-ink"
          >
            {dict.title}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-lg sm:text-xl text-ink-soft leading-relaxed max-w-xl"
          >
            {dict.subtitle}
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-wrap gap-3 pt-4"
          >
            <Link
              href={`${base}/projects`}
              className="group inline-flex items-center gap-2 rounded-full bg-ink text-cream px-6 py-3 text-sm font-medium hover:bg-ink-soft transition-colors"
            >
              {dict.ctaPrimary}
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href={`${base}/about`}
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-ink hover:border-orange hover:text-orange transition-colors"
            >
              {dict.ctaSecondary}
            </Link>
          </motion.div>
        </motion.div>

        {/* Globe */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.1 }}
          className="relative"
        >
          {/* Soft orange halo behind globe */}
          <div
            aria-hidden
            className="absolute inset-0 -z-10 blur-3xl opacity-60"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(217,119,87,0.35), transparent 60%)",
            }}
          />
          <Globe size={560} />
        </motion.div>
      </div>
    </section>
  );
}
