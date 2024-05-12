import { motion, MotionProps } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight } from "react-icons/fi";
import { SiGithub, SiLinkedin, SiCodepen, SiX } from "react-icons/si";

export const Bento = () => {
  return (
    <div className="min-h-screen bg-zinc-900 px4 py12 text-zinc-50">
      <div className="mx-auto max-w-4xl grid grid-cols-12 gap-4">
        <HeaderBlock />
        <SocialsBlock />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
      </div>
    </div>
  );
};

type Props = {
  className?: string;
} & MotionProps;

const Block = ({ className, ...rest }: Props) => {
  return (
    <motion.div
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => {
  return (
    <Block className="col-span-12 row-span-2 md:col-span-6">
      <img
        src="https://api.dicebear.com/8.x/big-smile/svg?seed=Bailey"
        alt="avatar"
        className="mb-4 size-14 rounded-full"
      />
      <h1 className="mb-12 text-4xl font-medium leading-tight">
        Hi, I'm AJ.{" "}
        <span className="text-zinc-400">
          I build cool websites like this one.
        </span>
      </h1>
      <a
        href="#"
        className="flex items-center gap-1 text-red-300 hover:underline"
      >
        Contact me <FiArrowRight />
      </a>
    </Block>
  );
};
const SocialsBlock = () => {
  return (
    <>
      <Block 
      whileHover={{
        scale: 1.05,
        rotate: 2,
      }}
      className="col-span-6 md:col-span-3 bg-green-500">
        <a
          href="#"
          className="grid h-full place-content-center text-3xl text-white"
        >
          <SiGithub />
        </a>
      </Block>
      <Block className="col-span-6 md:col-span-3 bg-green-500">
        <a
          href="#"
          className="grid h-full place-content-center text-3xl text-white"
        >
          <SiGithub />
        </a>
      </Block>
      <Block className="col-span-6 md:col-span-3 bg-green-500">
        <a
          href="#"
          className="grid h-full place-content-center text-3xl text-white"
        >
          <SiGithub />
        </a>
      </Block>
      <Block className="col-span-6 md:col-span-3 bg-green-500">
        <a
          href="#"
          className="grid h-full place-content-center text-3xl text-white"
        >
          <SiGithub />
        </a>
      </Block>
    </>
  );
};
