import { useTranslation } from "react-i18next";
import '../styles/TravelExperience.css'

const offerImages = [
  "https://images.unsplash.com/photo-1568402102990-bc541580b59f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fG1leGljb3xlbnwwfHx8fDE2ODU0OTI4NTV8MA&ixlib=rb-4.0.3&w=1500",
  "https://images.unsplash.com/photo-1603855873822-0931a843ee3a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fG1leGljYW58ZW58MHx8fHwxNjg1NDk0Mzk0fDA&ixlib=rb-4.0.3&w=1500",
  "https://images.unsplash.com/photo-1582234372722-50d7ccc30ebd?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDl8fG1leGljYW4lMjBmb29kfGVufDB8fHx8MTY4NTQ5NDI5Mnww&ixlib=rb-4.0.3&w=1500",
];

export default function TravelExperience() {
  const { t } = useTranslation();

  const offers = [
    { img: offerImages[0], title: t("offerCard1Title"), desc: t("offerCard1Desc") },
    { img: offerImages[1], title: t("offerCard2Title"), desc: t("offerCard2Desc") },
    { img: offerImages[2], title: t("offerCard3Title"), desc: t("offerCard3Desc") },
  ];

  return (
    <section className="travel-experience-section">
      {/* Features / Benefits Bar */}
      <div className="benefits-bar">
        <div className="benefits-container">
          <div className="benefit-item">
            <h3>{t("nativeKnowledgeTitle")}</h3>
            <p>{t("nativeKnowledgeDesc")}</p>
          </div>
          <div className="benefit-item">
            <h3>{t("culturalInsightTitle")}</h3>
            <p>{t("culturalInsightDesc")}</p>
          </div>
          <div className="benefit-item">
            <h3>{t("conversationalMethodTitle")}</h3>
            <p>{t("conversationalMethodDesc")}</p>
          </div>
        </div>
      </div>

      {/* Travel Heading */}
      <div className="travel-content">
        <h2>{t("enhancedTravelTitle")}</h2>
        <p>{t("enhancedTravelDesc")}</p>
      </div>

      {/* Offer Cards */}
      <div className="travel-offers">
        {offers.map((offer, i) => (
          <div key={i} className="travel-offer-card">
            <img src={offer.img} alt={offer.title} className="travel-offer-image" />
            <div className="travel-offer-content">
              <span className="travel-offer-title">{offer.title}</span>
              <span className="travel-offer-desc">{offer.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
