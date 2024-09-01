import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import { IoMdMoon, IoMdSunny } from "react-icons/io";

export default function Social() {
  const icon_size = {
    small: 20,
    medium: 24,
    large: 32,
  };

  const links = {
    instagram: "https://www.instagram.com/kimdarren.ig",
    twitter: "https://www.twitter.com/kimdarren.ig",
    linkedin: "https://linkedin.com/kim-darren-peralta",
    github: "https://github.com/kyoushiro3",
  };

  return (
    <div className="hidden md:block">
    <ul className="flex flex-row space-x-4 items-center">
      <li>
        <a href={links.instagram} target="_blank" rel="noopener noreferrer">
          <FaInstagram size={icon_size.small}             className="opacity-70 hover:opacity-100" />
        </a>
      </li>
      <li>
        <a href={links.twitter} target="_blank" rel="noopener noreferrer">
          <FaTwitter size={icon_size.small}             className="opacity-70 hover:opacity-100"/>
        </a>
      </li>
      <li>
        <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={icon_size.small}            className="opacity-70 hover:opacity-100"/>
        </a>
      </li>
      <li>
        <a href={links.github} target="_blank">
          <FaGithub
            size={icon_size.small}
            className="opacity-70 hover:opacity-100"
          />
        </a>
      </li>
    </ul>
    </div>
  );
}
