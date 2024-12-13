import { projectsItems } from "@/helpers";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiLink, BiLinkExternal } from "react-icons/bi";
import { GrDeliver, GrGithub } from "react-icons/gr";
import { TbExternalLink } from "react-icons/tb";

type Props = {};

const Projects = (props: Props) => {
  return (
    <div className="container mx-auto px-4  py-3 pt-6 text-black dark:text-white mt-10 lg:mt-20">
      <h2 className="font-labilGR font-semibold text-2xl lg:text-4xl">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mt-10">
        {projectsItems.map(({ desc, name, tech, image, categorie, links }) => (
          <div className="">
            <div className="aspect-square  relative max-w-[400px] rounded-[32px] overflow-hidden bg-[#141414] group">
              <div className="absolute top-0 left-0  gap-4 w-full h-full bg-black/75  flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {links?.github && (
                  <Link href={links?.github} target="_blank">
                    <GrGithub size={30} className="text-white/65" />
                  </Link>
                )}
                {links?.live && (
                  <Link href={links?.live} target="_blank">
                    <TbExternalLink size={30} className="text-white/65" />
                  </Link>
                )}
              </div>
              <Image src={image} className="size-full" alt="" />
            </div>
            <div className="mt-6 font-poppins  text-xl">
              <p className="font-semibold text-xl">{name}</p>
              <p className="font-light">{categorie}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
