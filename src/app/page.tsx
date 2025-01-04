"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { GiPlayButton } from "react-icons/gi";
import { templatesTitle } from "./editor/data/templates";

const Page = () => {
  const router = useRouter();

  const handleAcessEditor = (id: string) => {
    router.push(`/editor/create?id=${id}`);
  };

  return (
    <div className="bg-zinc-950 text-zinc-200 flex flex-col items-center py-10 p-4 justify-center min-h-screen  ">
      <div className="space-y-4 text-center">
        <div className=" relative flex items-center justify-center overflow-hidden  h-6 w-full">
          <motion.div 
           initial={{ y: -30 }}
           transition={{ type: "spring", duration: 0.6 }}
           whileHover={{
            y: 28
           }}
           animate={{ y: 0 }}
          className="flex justify-start items-start  flex-col">
            <h2 className="text-2xl font-bold ">
              YOKOCODE
            </h2>
            <h2 className="text-2xl font-bold ">
              YOKOCODE
            </h2>
            <h2 className="text-2xl font-bold  ">
              YOKOCODE
            </h2>
          </motion.div>
        </div>
        <p className="text-xl">Escolha um template para começar</p>
      </div>
      <div className="mt-4 py-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 flex-wrap gap-8  px-4 max-w-[800px]">
        {templatesTitle.map((template, index) => (
          <motion.div
            initial={{ scale: 0 }}
            transition={{ type: "spring", duration: ".1", delay: index / 30}}
            animate={{ scale: 1 }}
            className="border w-40 flex p-2 rounded items-center justify-between cursor-pointer hover:bg-slate-200 hover:text-zinc-950 group transition-all"
            onClick={() => handleAcessEditor(template.stack)}
            key={template.stack}
          >
            <p className="text-sm font-medium group-hover:hidden transition-all">{template.stack}</p>          
            <span className="text-2xl">
              <template.svg />
            </span>
            <motion.span 
            initial={{x: -30}}
            whileInView={{x:0}}
            transition={{type: "tween", duration: .2}}
            className="text-sm font-medium hidden group-hover:block transition-all">
              <GiPlayButton/>
            </motion.span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Page;
