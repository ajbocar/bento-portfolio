import { BentoBlock } from "./BentoBlock";
import { SiGithub, SiLinkedin, SiX, SiYoutube } from "react-icons/si";

export const SocialsBlock = () => {
  return (
    <>
      <BentoBlock
        whileHover={{
          scale: 1.05,
          rotate: 2,
        }}
        className="col-span-6 md:col-span-3 bg-white"
      >
        <a
          href="https://github.com/ajbocar"
          target="_blank"
          className="grid h-full place-content-center text-3xl text-black"
        >
          <SiGithub />
        </a>
      </BentoBlock>
      <BentoBlock
        whileHover={{
          scale: 1.05,
          rotate: -2,
        }}
        className="col-span-6 md:col-span-3 bg-blue-500"
      >
        <a
          href="https://www.linkedin.com/in/abocar/"
          target="_blank"
          className="grid h-full place-content-center text-3xl text-white"
        >
          <SiLinkedin />
        </a>
      </BentoBlock>
      <BentoBlock
        whileHover={{
          scale: 1.05,
          rotate: 2,
        }}
        className="col-span-6 md:col-span-3 bg-black"
      >
        <a
          href="https://x.com/ajbocar"
          target="_blank"
          className="grid h-full place-content-center text-3xl text-white"
        >
          <SiX />
        </a>
      </BentoBlock>
      <BentoBlock
        whileHover={{
          scale: 1.05,
          rotate: -2,
        }}
        className="col-span-6 bg-red-500 md:col-span-3"
      >
        <a
          href="https://www.youtube.com/@AJBTriesCoding-e3p"
          target="_blank"
          className="grid h-full place-content-center text-3xl text-white"
        >
          <SiYoutube />
        </a>
      </BentoBlock>
    </>
  );
};
