import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import myPhoto from "./profile.png";

function Home() {
    return (
        <section className="hero">
            <div className="hero-text">
                <div className="status">
                    <span></span>
                    Available for COOP Training & Opportunities
                </div>

                <h1>
                    Hi, I'm <strong>Rakan Al-Rasheed</strong>
                </h1>

                <h2>راكان الرشيد</h2>

                <p className="hero-title">
                    Computer Information Systems Student
                </p>

                <p className="hero-desc">
                    Interested in Cybersecurity, Full stack development, System Analysis, and building
                    practical digital solutions that improve user experience.
                </p>

                <div className="hero-actions">
                    <a href="/projects" className="btn primary">
                        View Projects
                    </a>

                    <a href="/contact" className="btn secondary">
                        Contact Me
                    </a>
                </div>

                <div className="socials">
                    <a
                        href="mailto:rakan.y.alrasheed@gmail.com"
                        title="Email"
                    >
                        <FiMail />
                    </a>

                    <a
                        href="https://github.com/MrRRG"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="GitHub"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/rakan-al-rasheed-524b093a7/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                </div>
            </div>

            <div className="hero-card profile-card">
                <img className="profile-photo" src={myPhoto} alt="Rakan Al-Rasheed" />
            </div>
        </section >
    );
}

export default Home;
