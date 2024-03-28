import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { RiDiscordLine } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import Card from "../component/Card";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import ProjectCard from "../component/ProjectCard";
import Testimonial from "../component/Testimonial";
import { useNavigate } from "react-router-dom";

const project = [
    {
        tech: "MERN",
        photoUrl: "https://firebasestorage.googleapis.com/v0/b/portfolio-56f5a.appspot.com/o/streamy.png?alt=media&token=cbf6b42b-cdd0-4c17-af55-f53866a089a3",
        title: "Streamify",
        date: "10th April, 2020",
        codeLink: "test",
        demoLink: "test"
    },
    {
        tech: "React.Js",
        photoUrl: "https://firebasestorage.googleapis.com/v0/b/portfolio-56f5a.appspot.com/o/travelblog.png?alt=media&token=53a17c51-5cbf-45b6-9986-ddcfed3d2c1c",
        title: "travel blog",
        date: "10th April, 2020",
        codeLink: "test",
        demoLink: "test"
    },
    {
        tech: "Next.js",
        photoUrl: "https://firebasestorage.googleapis.com/v0/b/portfolio-56f5a.appspot.com/o/keep-note.png?alt=media&token=9cf36f95-c4ac-4300-a235-833a6e79c9a5",
        title: "Keep note",
        date: "10th April, 2020",
        codeLink: "test",
        demoLink: "test"
    },
];

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="gap">
            <section className="sectionContainer">
                <div className="section homeSection">
                    <div className="rightSection">
                        <h1 className="title">Hey 👋, I’m Suraj</h1>
                        <p className="desc">I am a MERN (MongoDB, Express.js, React, Node.js) and Next.js developer experienced in full-stack web development. With expertise in frontend and backend technologies, I create scalable applications and deliver seamless user experiences. My goal is to meet client requirements and build efficient solutions using the MERN stack.</p>
                        <div className="aboutMe">
                            <button className="button" onClick={() => navigate('/about')}>About me</button>
                            <FaGithub className="socialIcons" />
                            <CiLinkedin className="socialIcons" />
                            <SiLeetcode className="socialIcons" />
                            <RiDiscordLine className="socialIcons" />
                        </div>
                    </div>
                    <div className="leftSection">
                        <img src="/bg.png" className="image" />
                    </div>
                </div>
            </section>
            <div className="section subSection">
                <h1>What Do I Offer?</h1>
                <Card />
            </div>
            <div className="section subSection">
                <h1>About Me</h1>
                <div className="aboutSection">
                    <div className="leftSection">
                        <img src="/bg.png" className="image" />
                    </div>
                    <div className="rightSection">
                        <h1 className="title">I can develop that help people</h1>
                        <p className="desc">I am full-stack web developer specializing in the MERN (MongoDB, Express.js, React, Node.js) stack, augmented with expertise in Next.js. My proficiency in both frontend and backend technologies allows me to craft scalable applications that prioritize seamless user experiences. With MongoDB and Express.js, I design robust backend systems, while React enables me to create dynamic and modular user interfaces on the frontend..</p>
                        <div className="aboutMe">
                            <button className="button" onClick={() => navigate('/about')}>About me</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="completeWorkSection">
                <div className="subSection">
                    <div className="completeSection">
                        <div className="completeWork">
                            <h2 className="workTitle">50+</h2>
                            <p className="workDesc">Project Completed</p>
                        </div>
                        <div className="completeWork">
                            <h2 className="workTitle">65+</h2>
                            <p className="workDesc">Happy Client</p>
                        </div>
                        <div className="completeWork">
                            <h2 className="workTitle">32+</h2>
                            <p className="workDesc">Cup of coffee</p>
                        </div>
                        <div className="completeWork">
                            <h2 className="workTitle">24+</h2>
                            <p className="workDesc">Real professional</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section subSection">
                <h1>Portfolio</h1>
                <div className="projectSection">
                    {
                        project.map(({ tech, title, photoUrl, date, codeLink, demoLink }) => (
                            <ProjectCard key={title} tech={tech} title={title} photoUrl={photoUrl} date={date} codeLink={codeLink} demoLink={demoLink} />
                        ))
                    }
                </div>
                <h2>
                    <button className="button" onClick={() => navigate('/projects')}>Load More...</button>
                </h2>
            </div>
            <div className="section subSection">
                <h1>Testimonial</h1>
                <Testimonial />
            </div>
            <div className="section subSection parallax">
                <div className="completeWork">
                    <h2 className="workTitle">I Am Available For Freelancer Projects.</h2>
                    <p className="workDesc">Obviously I’m a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
                    <button className="button" style={{ color: "white" }} onClick={() => navigate('/contact')}>Hire me.</button>
                </div>
            </div>
            <div className="section subSection">
                <h1>Contact Me</h1>
                <div className="workSection">
                    <div className="rightContact">
                        <h1 className="">Let’s make something amazing together.</h1>
                        <h1 className="">Start by saying hi 👋</h1>
                        <div>
                            <button className="button" onClick={() => navigate('/contact')}>Contact me</button>
                        </div>
                    </div>
                    <div className="leftContact">
                        <div className="cardContactContainer">
                            <div className="contactHeading">
                                <MdLocalPhone className="icons" />
                                <h2 className="workTitle">Phone</h2>
                            </div>
                            <p className="workDesc">+152 534-468-854</p>
                        </div>
                        <div className="cardContactContainer">
                            <div className="contactHeading">
                                <MdOutlineEmail className="icons" />
                                <h2 className="workTitle">Email</h2>
                            </div>
                            <p className="workDesc">contact@example.com</p>
                        </div>
                        <div className="cardContactContainer">
                            <div className="contactHeading">
                                <MdOutlineLocationOn className="icons" />
                                <h2 className="workTitle">Location</h2>
                            </div>
                            <p className="workDesc">View on Google map</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home