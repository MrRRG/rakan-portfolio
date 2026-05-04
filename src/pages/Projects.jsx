import { FaLaptopCode, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    {
        title: "Faheem Government Digital Assistant",
        status: "Graduation Project",
        desc: "AI-powered government assistant designed to improve Saudi digital services using natural conversation and dialect-aware interaction.",
        tools: ["React", "Tailwind", "Laravel", "MySQL", "AI API", "Vercel", "Railway"],
        github: "https://github.com/MrRRG/Faheem-ai-assistant",
        demo: "https://faheem-teal.vercel.app/",
    },
    {
        title: "Barber Shop Appointment System",
        status: "Academic Project",
        desc: "A modern web-based appointment system that allows users to register, book services, manage appointments, and interact with an admin dashboard in real time.",
        tools: ["React", "Vite", "Tailwind", "React Router", "LocalStorage", "Vercel"],
        github: "#",
        demo: "https://barber-shop-system-ivory.vercel.app/",
    },
    {
        title: "Game List Management System",
        status: "Academic Project",
        desc: "A web application for organizing and managing game information with database integration.",
        tools: ["PHP", "MySQL", "Azure Database"],
        github: "#",
        demo: "#",
    },
];

function Projects() {
    return (
        <section className="page-section">
            <h1 className="page-title">
                <FaLaptopCode />
                Projects
            </h1>

            <p className="section-subtitle">
                A selection of academic and technical projects focused on practical
                systems, databases, web development, and digital transformation.
            </p>

            <div className="project-grid">
                {projects.map((project) => (
                    <div className="project-card advanced-project-card" key={project.title}>
                        <span className="project-status">{project.status}</span>

                        <h3>{project.title}</h3>
                        <p>{project.desc}</p>

                        <div className="project-tags">
                            {project.tools.map((tool) => (
                                <span key={tool}>{tool}</span>
                            ))}
                        </div>

                        <div className="project-actions">
                            <a href={project.github} target="_blank" rel="noreferrer">
                                <FaGithub /> GitHub
                            </a>
                            <a href={project.demo} target="_blank" rel="noreferrer">
                                <FaExternalLinkAlt /> Live Demo
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;