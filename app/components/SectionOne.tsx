import Image from "next/image";
import linkedin from "@/public/imgs/linkedin.png";
import github from "@/public/imgs/github.png";
import wpp from "@/public/imgs/wpp.png";
import Link from "next/link";
export default function SectionOne() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center  bg-gray-200 bg-img">
      <div className="overlay"></div>
      <p className="xs: text-4xl sm:text-6xl lg:text-9xl text-white font-bold textShadow">
        Thiago Tawan
      </p>
      <p className="xs: text-3xl sm:text-5xl lg:text-7xl text-blue-500 font-bold textShadow">
        Desenvolvedor Full Stack<span className="text-green-400">..</span>
      </p>
      <p className="italic text-sm textShadow text-gray-300 xs: text-xl sm:text-3xl lg:text-2xl">
        Javascript Typescript NodeJS
      </p>
      <div className="z-10 flex gap-2 justify-center items-center mt-10 flex-wrap max-w-xs ">
        <Link
          href="https://www.linkedin.com/in/thiago-tawan/"
          target="_blank"
          className=" "
        >
          <Image
            src={linkedin}
            alt="linkedin"
            className="hoverImg xs:h-14 sm: h-24 object-cover cursor-pointer"
          />
        </Link>

        <Link
          href="https://github.com/87tawanzinho"
          target="_blank"
          className=""
        >
          <Image
            src={github}
            alt="github"
            className="hoverImg xs:h-14 sm: h-24  object-cover cursor-pointer"
          />
        </Link>

        <Link href="https://wa.me/5575981975144" target="_blank">
          <button className="w-48 bg-green-400 rounded-2xl p-2 mt-10 flex justify-center  gap-2 items-center hoverwhatsapp">
            <p className="text-gray-800 font-bold ">WhatsApp</p>
            <Image src={wpp} alt="wpp" className="h-6 w-6" />
          </button>
        </Link>
      </div>
    </div>
  );
}
