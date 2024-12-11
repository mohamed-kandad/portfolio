import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="py-12 mt-24">
      <ul className="list-none flex justify-center gap-10 text-sm text-black dark:text-white">
        <li>
          <Link target="_blank" href={"#"}>
            Instagram
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            href={"https://www.linkedin.com/in/mohamed-kandad-0931aa189/"}
          >
            LinkedIn
          </Link>
        </li>
        <li>
          <Link
            href={"https://github.com/MohamedKandadev?tab=repositories"}
            target="_blank"
          >
            GitHub
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
