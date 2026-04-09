import { useTranslation } from "react-i18next";
import "../styles/EducationalProgram.css";

const articleImages = [
  "https://images.unsplash.com/photo-1460518451285-97b6aa326961?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIzfHxzdHVkZW50c3xlbnwwfHx8fDE2ODU0OTU3MTN8MA&ixlib=rb-4.0.3&w=1500",
  "https://images.unsplash.com/photo-1531088908835-39526ed12409?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDUzfHxtZXhpY2FuJTIwdHJhdmVsZXJ8ZW58MHx8fHwxNjg1NDk1NjMwfDA&ixlib=rb-4.0.3&w=1500",
  "https://images.unsplash.com/photo-1564762332974-5bf63a654c9d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE0fHxtZXhpY2FuJTIwY3VsdHVyZXxlbnwwfHx8fDE2ODU0OTU1OTV8MA&ixlib=rb-4.0.3&w=1500",
  "https://images.unsplash.com/photo-1521335751419-603f61523713?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQxfHx0cmF2ZWxlcnN8ZW58MHx8fHwxNjg1NDk1NDg5fDA&ixlib=rb-4.0.3&w=1500",
];

export default function EducationalProgram() {
  const { t } = useTranslation();

  const articles = [
    { img: articleImages[0], title: t("article1Title"), desc: t("article1Desc") },
    { img: articleImages[1], title: t("article2Title"), desc: t("article2Desc") },
    { img: articleImages[2], title: t("article3Title"), desc: t("article3Desc") },
    { img: articleImages[3], title: t("article4Title"), desc: t("article4Desc") },
  ];

  return (
    <section className="edu-section">
      <div className="edu-inner">
        <div className="edu-heading">
          <h2 className="edu-title">{t("educationalProgramTitle")}</h2>
          <p className="edu-subtitle">{t("educationalProgramSubtitle")}</p>
        </div>
        <div className="edu-list">
          <div className="edu-row">
            {articles.slice(0, 2).map((article, i) => (
              <div key={i} className="edu-article">
                <img src={article.img} alt={article.title} className="edu-article-image" />
                <div className="edu-article-content">
                  <h2 className="edu-article-header">{article.title}</h2>
                  <p className="edu-article-desc">{article.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="edu-row">
            {articles.slice(2).map((article, i) => (
              <div key={i} className="edu-article">
                <img src={article.img} alt={article.title} className="edu-article-image" />
                <div className="edu-article-content">
                  <h2 className="edu-article-header">{article.title}</h2>
                  <p className="edu-article-desc">{article.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
