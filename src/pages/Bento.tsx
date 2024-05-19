import { motion } from "framer-motion";
import { Logo } from "../components/Logo";
import { Footer } from "../components/Footer";
import { HeaderBlock } from "../components/HeaderBlock";
import { SocialsBlock } from "../components/SocialsBlock";
import { BentoBlock } from "../components/BentoBlock";

export const Bento = () => {
  return (
    <div className="min-h-screen bg-zinc-900 px-4 py-12 text-zinc-50">
      <Logo />
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto max-w-4xl grid grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <SocialsBlock />
        <BentoBlock />
        <BentoBlock />
        <BentoBlock />
        <BentoBlock />
        <BentoBlock />
        <BentoBlock />
        <BentoBlock />
        <BentoBlock />
        <BentoBlock />
        <BentoBlock />
        <BentoBlock />
        <BentoBlock />
        <BentoBlock />
        <BentoBlock />
        <BentoBlock />
        <BentoBlock />
        <BentoBlock />
        <BentoBlock />
        <BentoBlock />
        <BentoBlock />
        <BentoBlock />
      </motion.div>
      <Footer />
    </div>
  );
};
