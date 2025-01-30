import TextRotator from "./TextRotator";
import Image from "next/image";

const HeroTexts = () => {
  return (
    <div className="flex flex-col items-center sm:items-start">
      <div className="flex flex-col items-center sm:flex-row sm:items-center">
        <Image
          src="/focallogo.webp"
          alt="Focal Sprint Logo"
          width={110}
          height={110}
          className="object-contain w-20 h-20 sm:w-28 sm:h-28 md:w-[110px] md:h-[110px]"
        />
        <div className="relative mt-4 sm:mt-0 sm:ml-4">
          <h1 className="font-rubik text-4xl sm:text-5xl md:text-[5.5rem] text-primary tracking-tight text-center sm:text-left">
            focal Sprint
          </h1>
          <div className="absolute left-0 bottom-[-0.5rem] w-full sm:w-36 h-1.5 sm:h-2.5 bg-[#2f7df4]" />
        </div>
      </div>
      <div className="mt-4 sm:mt-2">
        <TextRotator />
      </div>
    </div>
  );
};

export default HeroTexts;
