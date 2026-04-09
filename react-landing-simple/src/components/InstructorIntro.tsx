import { useTranslation } from "react-i18next";
import yourinstructor from "../assets/meet_yourinstructor-1500w.jpg";
import '../styles/InstructorIntro.css'

export default function InstructorIntro() {
    const { t } = useTranslation();

    return (
        <section className="instructor-section">
            <div className="instructor-section-inner">
                <div className="instructor-content">
                    <h2>{t("meetInstructor")}</h2>
                    <p>{t("greeting")}</p>
                    <p>{t("intro")}</p>
                    <p>{t("developerLife")}</p>
                    <p>{t("languages")}</p>
                    <p>{t("tutoringExperience")}</p>
                    <p>{t("mentoringJob")}</p>
                    <p>{t("mentorshipBelief")}</p>
                    <a
                        href="https://www.linkedin.com/in/roberto-vallado/"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="instructor-know-more"
                    >
                        <span>{t("knowMore")}</span>
                        <span>&gt;</span>
                    </a>
                </div>

                <div className="instructor-image">
                    <img src={yourinstructor} alt="Instructor Roberto" />
                    <div className="instructor-rectangle" />
                </div>
            </div>
        </section>
    );
}
