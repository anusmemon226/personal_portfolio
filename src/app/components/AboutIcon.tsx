import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutIcon = ({ title, link }: { title: string; link: string }) => {
  return (
    <>
      {title == "Linkedin" && (
        <Link
          href={link}
          target="_blank"
          className="bg-black p-2 rounded-full hover:bg-gray-950 flex items-center justify-center"
        >
          <Linkedin color="white" />
        </Link>
      )}
      {title == "Github" && (
        <Link
          href={link}
          target="_blank"
          className="bg-black p-2 rounded-full hover:bg-gray-950 flex items-center justify-center"
        >
          <Github color="white" />
        </Link>
      )}
      {title == "Whatsapp" && (
        <Link
          href={link}
          target="_blank"
          className="bg-black p-2 rounded-full hover:bg-gray-950 flex items-center justify-center"
        >
          <Image
            src={"/icons/whatsapp.svg"}
            width={25}
            height={25}
            alt="whatsapp"
            className="invert"
          />
        </Link>
      )}
    </>
  );
};

export default AboutIcon;
