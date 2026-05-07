import { FaLaptopCode, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    {
        title: "Saudi Social Media Sentiment Analytics Dashboard",
        status: "Data Analytics Project",
        desc: "End-to-end data analytics and NLP dashboard for social media sentiment analysis using Python, Streamlit, Pandas, Matplotlib, and Scikit-learn. The project includes data cleaning, EDA, text mining, visualization, statistical insights, and interactive dashboard filtering.",
        tools: ["Python", "Streamlit", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "NLP", "Data Analytics"],
        github: "https://github.com/MrRRG/saudi-sentiment-dashboard",
        demo: "https://saudi-sentiment-dashboard-pkf5gnyct38cruvervzzrx.streamlit.app/",
        images: [
            "/images/sentiment-dashboard/dashboard.png",
            "/images/sentiment-dashboard/wordcloud.png",
        ]
    },
    {
        title: "Faheem Government Digital Assistant",
        status: "Graduation Project",
        desc: "AI-powered government digital assistant designed to improve Saudi digital services through natural conversation, dialect-aware interaction, and intelligent user support using modern web technologies and AI integration.",
        tools: ["React", "Tailwind", "Laravel", "MySQL", "AI API", "Vercel", "Railway"],
        github: "https://github.com/MrRRG/Faheem-ai-assistant",
        demo: "https://faheem-teal.vercel.app/",
        images: [
            "/images/faheem/faheem-home.png",
            "/images/faheem/faheem-challenge.png",
        ]
    },
    {
        title: "Barber Shop Appointment System",
        status: "Academic Project",
        desc: "A modern web-based appointment system that allows users to register, book services, manage appointments, and interact with an admin dashboard in real time.",
        tools: ["React", "Vite", "Tailwind", "React Router", "LocalStorage", "Vercel"],
        github: "https://github.com/MrRRG",
        demo: "https://barber-shop-system-ivory.vercel.app/",
        images: [
            "/images/barber/menu.png",
            "/images/barber/services.png",
        ]
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

                        {project.images && (
                            <div className="project-images-grid">
                                {project.images.map((img, index) => (
                                    <img key={index} src={img} alt={`${project.title} preview ${index + 1}`} className="project-image" loading="lazy" />
                                ))}
                            </div>
                        )}

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