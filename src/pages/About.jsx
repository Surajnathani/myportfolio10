
const About = () => {
    return (
        <div className="gap">
            <div className="section subSection">
                <div className="aboutSection">
                    <div className="leftSection">
                        <img src="/bg.png" className="image" />
                    </div>
                    <div className="rightSection">
                        <h1 className="title">About Me</h1>
                        <p className="desc">I am full-stack web developer specializing in the MERN (MongoDB, Express.js, React, Node.js) stack, augmented with expertise in Next.js. My proficiency in both frontend and backend technologies allows me to craft scalable applications that prioritize seamless user experiences. With MongoDB and Express.js, I design robust backend systems, while React enables me to create dynamic and modular user interfaces on the frontend..</p>
                        <p className="desc">The addition of Next.js to my skill set empowers me to optimize React applications through server-side rendering, enhancing performance and user interactions. My goal is to consistently meet client requirements by building efficient solutions that leverage the strengths of the MERN stack, supplemented by the advantages brought by Next.js. This comprehensive approach ensures the development of high-quality, adaptable applications that cater to current needs while remaining flexible for future advancements.</p>
                        <div className="aboutMe">
                            <button className="button">Resume</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section subSection">
                <h1>What I know</h1>
                <div className="skills">
                    <div className="skill">
                        <h2>Language</h2>
                        <div>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" height="30" alt="c logo" />
                            <img width={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" height="30" alt="cplusplus logo" />
                            <img width={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="30" alt="javascript logo" />
                            <img width={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="30" alt="typescript logo" />
                            <img width={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" height="30" alt="python logo" />
                        </div>
                    </div>
                    <div className="skill">
                        <h2>Front-end</h2>
                        <div>
                            <img width={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="30" alt="html5 logo" />
                            <img width={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="30" alt="css3 logo" />
                            <img width={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" height="30" alt="bootstrap logo" />
                            <img width={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" height="30" alt="sass logo" />
                            <img width={30} src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg" height="30" alt="tailwindcss logo" />
                        </div>
                    </div>
                    <div className="skill">
                        <h2>Frame Work</h2>
                        <div>
                            <img width={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="30" alt="react logo" />
                            <img width={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" height="30" alt="nextjs logo" />
                            <img width={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" height="30" alt="redux logo" />
                        </div>
                    </div>
                    <div className="skill">
                        <h2>Back-end</h2>
                        <div>
                            <img width={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="30" alt="nodejs logo" />
                            <img width={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" height="30" alt="express logo" />
                            <img width={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" height="30" alt="firebase logo" />
                        </div>
                    </div>
                    <div className="skill">
                        <h2>Database</h2>
                        <div>
                            <img width={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" height="30" alt="mongodb logo" />
                            <img width={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" height="30" alt="mysql logo" />
                        </div>
                    </div>
                    <div className="skill">
                        <h2>Developer Tools</h2>
                        <div>
                            <img width={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height="30" alt="git logo" />
                            <img width={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" height="30" alt="github logo" />
                            <img width={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" height="30" alt="npm logo" />
                            <img width={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" height="30" alt="docker logo" />
                            <img width={30} src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" height="30" alt="Postman logo" />
                        </div>
                    </div>
                    <div className="skill">
                        <h2>Software</h2>
                        <div>
                            <img width={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" height="30" alt="vscode logo" />
                            <img width={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" height="30" alt="photoshop logo" />
                            <img width={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" height="30" alt="illustrator logo" />
                            <img width={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-plain.svg" height="30" alt="premierepro logo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About