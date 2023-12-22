import Image from "next/image";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";

export default function Home() {
  return (
    <div>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  );
}
