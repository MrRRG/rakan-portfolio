import {
    FaEnvelope,
    FaLinkedin,
    FaGithub,
    FaMapMarkerAlt,
    FaAddressCard,
} from "react-icons/fa";

function Contact() {
    return (
        <section className="page-section">
            <h1 className="page-title">
                <FaAddressCard />
                Contact Me
            </h1>
            <p className="section-subtitle">
                Feel free to reach out for COOP training opportunities, collaborations, or technical projects.
            </p>

            <div className="contact-grid">

                <div className="contact-card">
                    <div className="contact-icon">
                        <FaEnvelope />
                    </div>
                    <h3>Email</h3>
                    <a href="mailto:rakan.y.alrasheed@gmail.com">
                        rakan.y.alrasheed@gmail.com
                    </a>
                </div>

                <div className="contact-card">
                    <div className="contact-icon">
                        <FaLinkedin />
                    </div>
                    <h3>LinkedIn</h3>
                    <a
                        href="https://www.linkedin.com/in/rakan-al-rasheed-524b093a7/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        View Profile
                    </a>
                </div>

                <div className="contact-card">
                    <div className="contact-icon">
                        <FaGithub />
                    </div>
                    <h3>GitHub</h3>
                    <a
                        href="https://github.com/MrRRG"
                        target="_blank"
                        rel="noreferrer"
                    >
                        View GitHub
                    </a>
                </div>

                <div className="contact-card">
                    <div className="contact-icon">
                        <FaMapMarkerAlt />
                    </div>
                    <h3>Location</h3>
                    <p>Al Ahsa, Saudi Arabia</p>
                </div>

            </div>
        </section>
    );
}

export default Contact;