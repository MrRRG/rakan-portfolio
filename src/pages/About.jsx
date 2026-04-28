import { FaUserGraduate } from "react-icons/fa";

function About() {
    return (
        <section className="page-section">
            <h1 className="page-title">
                <FaUserGraduate />
                About Me
            </h1>

            <div className="card about-card">
                <p>
                    I am a Computer Information Systems student at King Faisal University,
                    interested in cybersecurity, IT support, system analysis, and digital
                    transformation.
                </p>

                <p>
                    I enjoy building practical systems that solve real problems, improve
                    user experience, and support organizations through technology.
                </p>

                <div className="about-tags">
                    <span>Cybersecurity</span>
                    <span>IT Support</span>
                    <span>System Analysis</span>
                    <span>Web Development</span>
                    <span>Database Management</span>
                </div>
            </div>
        </section>
    );
}

export default About;