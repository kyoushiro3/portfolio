import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import { IoMdMoon, IoMdSunny } from "react-icons/io";

export default function Social(){
    const icon_size = {
        small: 20,
        medium: 24,
        large: 32,
      }
    
    const links = {
        instagram: "https://www.instagram.com/kimdarren.ig",
        twitter: "https://www.twitter.com/kimdarren.ig",
        linkedin: "https://linkedin.com/kim-darren-peralta",
        github: "https://github.com/kyoushiro3",
      };
    
    const colors ={
        gray: "#4d4d4d",
        yellow: "#F1C40F",
      }
    return(
        <div className="flex flex-row space-x-4 items-center">
        <a href={links.instagram} target="_blank" rel="noopener noreferrer">
          <FaInstagram size={icon_size.small} color={colors.gray} />
        </a>
        <a href={links.twitter} target="_blank" rel="noopener noreferrer">
        <FaTwitter size={icon_size.small} color={colors.gray}/>
        </a>
        <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={icon_size.small} color={colors.gray}/>
        </a>
        <a href={links.github} target="_blank">
        <FaGithub size={icon_size.small} color={colors.gray}/>
        </a>
        <div className="p-3">
        <IoMdSunny size={icon_size.small} color={colors.yellow}/>
      </div>
      </div>
    )
}