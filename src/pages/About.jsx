import { FaUserGraduate } from "react-icons/fa";

function About() {
    return (
        <section className="page-section">
            <h1 className="page-title">
                <FaUserGraduate />
                About Me
            </h1>

            <div className="card about-card">
                <div className="space-y-4">
                    <p>
                        I am a <span className="text-blue-400 font-semibold">Computer Information Systems student </span>
                        at King Faisal University with a strong interest in
                        <span className="text-blue-400 font-semibold"> Full Stack Web Development</span>.
                    </p>

                    <p>
                        I focus on building <span className="text-blue-400 font-semibold">web-based systems </span>
                        that are practical, user-friendly, and designed to solve real-world problems.
                    </p>

                    <p>
                        I also have a strong interest in
                        <span className="text-blue-400 font-semibold"> Cybersecurity</span>,
                        and completed intensive university training in preparation for the
                        CompTIA Security+ certification.
                    </p>

                    <p>
                        Currently, I am looking for a COOP opportunity where I can gain real experience
                        and continue developing my technical skills.
                    </p>
                </div>
                <div className="about-tags">
                    <span>Full Stack Development</span>
                    <span>Cybersecurity</span>
                    <span>System Analysis</span>
                    <span>Database Management</span>
                </div>
            </div>
        </section>
    );
}

export default About;
