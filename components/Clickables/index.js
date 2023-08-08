"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Clickables() {
  return (
    <section className="bg-gray-50 text-black">
      <div className="flex justify-center items-center max-md:flex-col ">
        {/* Images Start*/}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100, damping: 20 },
          }}
          className="p-5  flex justify-center items-center flex-col max-lg:hidden"
        >
          <h2 className="font-extrabold text-3xl text-base-100">
            New York Branch
          </h2>
          <Image
            src={"/images/frame.png"}
            width={0}
            height={0}
            sizes="100%"
            className="w-72"
            alt="qr"
          />
        </motion.div>
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100, damping: 20 },
          }}
          className="p-5 flex justify-center items-center flex-col max-lg:hidden"
        >
          <h2 className="font-extrabold text-3xl text-base-100">LA Branch</h2>
          <Image
            src={"/images/frame.png"}
            width={0}
            height={0}
            sizes="100%"
            className="w-72"
            alt="qr"
          />
        </motion.div>
        {/* Images End*/}

        {/* Menu Link Start*/}
        <div className="p-5 flex flex-col items-center justify-center">
          <h2 className="text-4xl font-extrabold self-start text-base-100">
            Our Cafe Menu
          </h2>
          <p className="font-extralight max-w-sm">
            Indulge in Culinary Delights: Explore Our Exquisite Menu!.
          </p>
          <motion.button
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 1.2,
            }}
            className="bg-white border-2 border-base-100 px-5 py-2 self-start mt-5 text-base-100"
          >
            Menu
          </motion.button>
        </div>
        {/* Menu Link End*/}
      </div>
    </section>
  );
}
