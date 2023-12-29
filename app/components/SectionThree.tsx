import Link from "next/link";

export default function SectionThree() {
  return (
    <div className="h-screen bg-three flex justify-center items-center flex-col">
      <div className="z-10">
        <p className="text-green-400 font-bold textShadow xs: text-5xl lg:text-7xl">
          Meus Projetos
        </p>
      </div>

      <div className="flex justify-center items-center gap-8 mt-10 flex-wrap ">
        <div className="cursor-pointer">
          <Link
            href="https://blog-front-seven-lake.vercel.app/"
            target="_blank"
          >
            <button className="bg-purple-400 rounded w-32 h-10 font-bold transition-all hover:bg-green-400 ">
              Blog Pessoal
            </button>
          </Link>
        </div>

        <div className="cursor-pointer">
          <Link href="https://windows-peach.vercel.app/" target="_blank">
            <button className="bg-purple-400 rounded w-32 h-10 font-bold transition-all hover:bg-green-400 ">
              Windows 10
            </button>
          </Link>
        </div>

        <div className="cursor-pointer">
          <Link href="https://workout-inky-delta.vercel.app/" target="_blank">
            <button className="bg-purple-400 rounded w-32 h-10 font-bold transition-all hover:bg-green-400">
              Rotina
            </button>
          </Link>
        </div>
        <div className="cursor-pointer">
          <Link
            href="https://e-commerce-sepia-theta.vercel.app/"
            target="_blank"
          >
            <button className="bg-purple-400 rounded w-32 h-10 font-bold transition-all hover:bg-green-400">
              E-commerce
            </button>
          </Link>
        </div>
        <div className="cursor-pointer">
          <Link href="https://desafio-kavak.vercel.app/" target="_blank">
            <button className="bg-purple-400 rounded w-32 h-10 font-bold transition-all hover:bg-green-400">
              Desafio Next
            </button>
          </Link>
        </div>

        <div className="cursor-pointer">
          <Link href="https://tawanzinh9.github.io/lalaa/#/" target="_blank">
            <button className="bg-purple-400 rounded w-32 h-10 font-bold transition-all hover:bg-green-400">
              Tartooga
            </button>
          </Link>
        </div>

        <div className="cursor-pointer">
          <Link href="https://camping-ruddy.vercel.app/" target="_blank">
            <button className="bg-purple-400 rounded w-32 h-10 font-bold transition-all hover:bg-green-400">
              Camping
            </button>
          </Link>
        </div>

        <div className="cursor-pointer">
          <Link
            href="https://dynamic-form-iota-bay.vercel.app/"
            target="_blank"
          >
            <button className="bg-purple-400 rounded w-32 h-10 font-bold transition-all hover:bg-green-400">
              Dynamic Form
            </button>
          </Link>
        </div>

        <div className="cursor-pointer">
          <Link href="https://logitech-puce.vercel.app/" target="_blank">
            <button className="bg-purple-400 rounded w-32 h-10 font-bold transition-all hover:bg-green-400">
              Logitech G-PRO
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
