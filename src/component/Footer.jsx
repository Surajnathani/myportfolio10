import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { RiDiscordLine } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
const Footer = () => {
    return (
        <div className="sectionContainer footerContainer">
            <div className="section subSection footerSection">
                <div>
                    <p>All ©️ reserved 2024</p>
                </div>
                <div className="aboutMe">
                    <FaGithub className="socialIcons" />
                    <CiLinkedin className="socialIcons" />
                    <SiLeetcode className="socialIcons" />
                    <RiDiscordLine className="socialIcons" />
                </div>
                <div className="footerCondition">
                    <p>Terms & Condition</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </div>
    )
}

export default Footer