import {
    FaGoogle,
    FaShieldAlt,
    FaDatabase,
    FaFileExcel,
    FaMicrosoft,
    FaAward,
} from "react-icons/fa";

import { SiCisco } from "react-icons/si";
import { MdSecurity } from "react-icons/md";

const certificates = [
    {
        title: "Google IT Support Professional Certificate",
        issuer: "Google • Coursera",
        icon: <FaGoogle />,
        tags: ["IT Support", "Networking", "Security"],
    },
    {
        title: "CompTIA Security Fundamentals",
        issuer: "King Faisal University",
        icon: <FaShieldAlt />,
        tags: ["Security+", "Cybersecurity", "30 Hours"],
    },
    {
        title: "Microsoft SQL Server Database Analysis and Modeling",
        issuer: "Edraak",
        icon: <FaDatabase />,
        tags: ["SQL", "Database", "ERD"],
    },
    {
        title: "Build Your First Data Model using Power BI",
        issuer: "Microsoft Learn",
        icon: <FaMicrosoft />,
        tags: ["Power BI", "Data Model", "Analytics"],
    },
    {
        title: "Excel Skills for Business: Essentials",
        issuer: "Macquarie University • Coursera",
        icon: <FaFileExcel />,
        tags: ["Excel", "Business", "Data"],
    },
    {
        title: "Introduction to Data Science",
        issuer: "Cisco Networking Academy",
        icon: <SiCisco />,
        tags: ["Data Science", "Analytics", "AI"],
    },
    {
        title: "Cyber Threat Intelligence and Incident Response",
        issuer: "Coursera Specialization",
        icon: <MdSecurity />,
        tags: ["Cybersecurity", "Threat Intelligence", "Incident Response"],
    },
    {
        title: "Cyber Incident Response",
        issuer: "Infosec • Coursera",
        icon: <FaShieldAlt />,
        tags: ["Cybersecurity", "Response", "Security"],
    }
];

function Certificates() {
    return (
        <section className="page-section">
            <h1 className="page-title">
                <FaAward />
                Certificates
            </h1>

            <div className="certificate-grid">
                {certificates.map((cert) => (
                    <div className="certificate-card" key={cert.title}>
                        <div className="certificate-icon">{cert.icon}</div>

                        <h3>{cert.title}</h3>
                        <p>{cert.issuer}</p>

                        <div className="certificate-tags">
                            {cert.tags.map((tag) => (
                                <span key={tag}>{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Certificates;