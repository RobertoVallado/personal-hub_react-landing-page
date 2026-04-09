import type { JSX } from "react";
import { useTranslation } from "react-i18next";
import "../styles/Home.css";
import TravelExperience from "./TravelExperience";
import InstructorIntro from "./InstructorIntro";
import EducationalProgram from "./EducationalProgram";

export default function Home(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className="home-page">
      {/* Hero */}
      <section className="home-hero">
        <div className="home-hero-tint" />
        <div className="home-hero-content">
          <h1 className="home-hero-title">{t("hero_title")}</h1>
          <p className="home-hero-subtitle">{t("hero_subtitle")}</p>
        </div>
      </section>

      {/* Features bar + Travel heading + Offer cards */}
      <TravelExperience />

      {/* Instructor */}
      <InstructorIntro />

      {/* Educational Program */}
      <EducationalProgram />

      {/* CTA */}
      <section className="home-cta">
        <div className="home-cta-inner">
          <h2 className="home-cta-title">{t("contact_title")}</h2>
          <p className="home-cta-desc">{t("contact_description")}</p>
          <a
            href="mailto:contact@ethinkspanish.ca?subject=SPANISH%20LESSON%20INFO&body=I%20would%20like%20to%20know%20more%20about%20your%20program!"
            className="home-cta-link"
          >
            {t("contact_button")}
          </a>
        </div>
      </section>
    </div>
  );
}
