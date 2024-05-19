import { BentoBlock } from "./BentoBlock";
import { SiGithub, SiLinkedin, SiCodepen, SiX } from "react-icons/si";

export const SocialsBlock = () => {
  return (
    <>
      <BentoBlock
        whileHover={{
          scale: 1.05,
          rotate: 2,
        }}
        className="col-span-6 md:col-span-3 bg-green-500"
      >
        <a
          href="#"
          className="grid h-full place-content-center text-3xl text-white"
        >
          <SiGithub />
        </a>
      </BentoBlock>
      <BentoBlock className="col-span-6 md:col-span-3 bg-green-500">
        <a
          href="#"
          className="grid h-full place-content-center text-3xl text-white"
        >
          <SiLinkedin />
        </a>
      </BentoBlock>
      <BentoBlock className="col-span-6 md:col-span-3 bg-green-500">
        <a
          href="#"
          className="grid h-full place-content-center text-3xl text-white"
        >
          <SiCodepen />
        </a>
      </BentoBlock>
      <BentoBlock className="col-span-6 md:col-span-3 bg-green-500">
        <a
          href="#"
          className="grid h-full place-content-center text-3xl text-white"
        >
          <SiX />
        </a>
      </BentoBlock>
    </>
  );
};
