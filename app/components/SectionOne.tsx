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
          <button className="w-[150px]  gap-5 bg-zinc-800 mt-10 h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
            <p className="text-white font-bold ">WhatsApp</p>
            <Image src={wpp} alt="wpp" className="h-6 w-6" />
          </button>
        </Link>
      </div>
    </div>
  );
}
