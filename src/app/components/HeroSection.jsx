"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="lg:py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 my-4">
        <div className="col-span-7 place-self-center place-items-center grid lg:place-items-start">
          <h1 className="text-white mb-4 lg:text-6xl text-4xl font-extrabold">
            <span className="text-transparent lg:text-6xl text-5xl bg-clip-text bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
              Halihallo, I&apos;m{"  "}
            </span>{" "}
            <br></br>
            <TypeAnimation
              sequence={[
                "Bushra",
                1000,
                "Web Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] mb-6 text-lg lg:text-xl">
          Front-End Web Developer React.js | Next.js | UI/UX Designer, I weave code like a skilled hand with needles, crafting ready-to-wear websites that seamlessly blend style and functionality where innovation meets aesthetics.🌐✨
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br  from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
              <Link href="#contact">Hire Me</Link>
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br  from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                <Link href="https://app.enhancv.com/share/8fc093c6/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic">
                  Download CV
                </Link>
              </span>
            </button>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center mt-14 lg:mt-0"
        >
          <div className="lg:w-[500px] lg:h-[400px] w-[250px] h-[250px] rounded-full relative">
            <Image
              src="/images/coder.jpg"
              alt="hero image"
              className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
              priority={true}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;