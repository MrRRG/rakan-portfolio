import { FaGraduationCap, FaUniversity, FaCalendarAlt } from "react-icons/fa";

function Education() {
    return (
        <section className="page-section">
            <h1 className="page-title">
                <FaGraduationCap />
                Education
            </h1>

            <div className="education-card">

                <div className="education-icon">
                    <FaUniversity />
                </div>

                <h2>King Faisal University</h2>
                <h3>Bachelor of Computer Information Systems (CIS)</h3>

                <p>
                    Focused on Cybersecurity, IT Support, System Analysis,
                    Databases, and Digital Transformation.
                </p>

                <div className="education-details">
                    <span>
                        <FaCalendarAlt />
                        {"2021 – 2026 (Expected)"}
                    </span>
                </div>

            </div>
        </section>
    );
}

export default Education;