import type { JSX } from "react";
import { useTranslation } from "react-i18next";
import "../styles/About.css";
import yourinstructor from "../assets/meet_yourinstructor-1500w.jpg";

export default function About(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className="about-page">
      {/* Banner */}
      <section className="about-banner">
        <div className="about-banner-tint" />
        <h1 className="about-banner-title">{t("header_about")}</h1>
      </section>

      {/* Content */}
      <section className="about-content">
        <div className="about-content-inner">
          <div className="about-text">
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
              className="about-know-more"
            >
              <span>{t("knowMore")}</span>
              <span>&gt;</span>
            </a>
          </div>
          <div className="about-image">
            <img src={yourinstructor} alt="Instructor Roberto" />
          </div>
        </div>
      </section>
    </div>
  );
}
