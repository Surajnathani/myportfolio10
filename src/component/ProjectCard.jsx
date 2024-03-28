import { CgProfile } from "react-icons/cg";
import { CiShoppingTag } from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";

const ProjectCard = ({ tech, title, photoUrl, date, codeLink, demoLink }) => {
    return (
        <div className="projectCardContainer">
            <div>
                <img src={photoUrl} alt="" className="projectImage" height={200} />
            </div>
            <div className="projectDescription">
                <div className="projectDescContainer">
                    <div className="projectDesc">
                        <CgProfile />
                        <Link to={demoLink}>Demo</Link>
                    </div>
                    <div className="projectDesc">
                        <CiShoppingTag />
                        <p>{tech}</p>
                    </div>
                </div>
                <div>
                    <h2 className="workTitle">{title}</h2>
                </div>
                <hr />
                <div className="projectDescContainer">
                    <div className="projectDesc">
                        <Link to={codeLink}>Code</Link>
                        <FaAngleRight />
                    </div>
                    <div className="projectDesc">
                        <SlCalender />
                        <p>{date}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard