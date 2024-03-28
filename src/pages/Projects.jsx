import ProjectCard from '../component/ProjectCard'

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

const Projects = () => {
    return (
        <div className="section subSection">
            <h1>Portfolio</h1>
            <div className="projectSection">
                {
                    project.map(({ tech, title, photoUrl, date, codeLink, demoLink }) => (
                        <ProjectCard key={title} tech={tech} title={title} photoUrl={photoUrl} date={date} codeLink={codeLink} demoLink={demoLink} />
                    ))
                }
            </div>
        </div>
    )
}

export default Projects