import { CiMobile3 } from "react-icons/ci";
import { FaFileCode } from "react-icons/fa";
import { MdOutlineMonitor } from "react-icons/md";

const Card = () => {
    return (

        <div className="workSection">
            <div className="cardContainer">
                <MdOutlineMonitor className="icons" />
                <h2>UX / UI Design</h2>
                <p>Continue indulged speaking the was horrible for domestic position. Seeing get rather her you not esteem men settle is genius take excuse. Deal say over you age comparison new ham melancholy.</p>
            </div>
            <div className="cardContainer">
                <CiMobile3 className="icons" />
                <h2>App Designer</h2>
                <p>Continue indulged speaking the was horrible for domestic position. Seeing get rather her you not esteem men settle is genius take excuse. Deal say over you age comparison new ham melancholy.</p>
            </div>
            <div className="cardContainer">
                <FaFileCode className="icons" />
                <h2>UX / UI Design</h2>
                <p>Continue indulged speaking the was horrible for domestic position. Seeing get rather her you not esteem men settle is genius take excuse. Deal say over you age comparison new ham melancholy.</p>
            </div>
        </div>
    )
}

export default Card