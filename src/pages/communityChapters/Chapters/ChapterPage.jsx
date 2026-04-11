import React from "react";
import { useParams } from "react-router-dom";
import { chaptersData } from "./chapterData";
import "../../../assets/css/ChapterPage.css";

const ChapterPage = () => {
  const { city } = useParams();
  const data = chaptersData[city];

  if (!data) return <h2>Chapter not found</h2>;

  return (
    <div className="chapter-page">

      {/* HERO */}
      <section
        className="chapter-hero"
        style={{ backgroundImage: `url(${data.image})` }}
      >
        <div className="chapter-hero-overlay" />

        <div className="chapter-hero-content">
          <h1>
            {data.city} <span>Chapter</span>
          </h1>
          <p className="tagline">{data.tagline}</p>
        </div>
      </section>


      <section className="chapter-container">

        {data.sections.map((section, index) => {

          // ✅ SPECIAL FULL-WIDTH CTA SECTION
          if (section.id === "join") {
            return (
              <div key={index} className="chapter-cta-full">

                <div className="cta-inner">
                  <h2>{section.title}</h2>
                  <p>{section.content}</p>
                  <button>{section.cta}</button>
                </div>

              </div>
            );
          }

          // ✅ NORMAL CARDS
          return (
            <div key={index} className="chapter-card">

              <h2>{section.title}</h2>
              <p>{section.content}</p>

              {section.leads && (
                <div className="leads-grid">
                  {section.leads.map((lead, i) => (
                    <div key={i} className="lead-card">

                      <img
                        src={lead.image}
                        alt={lead.name}
                        className="lead-avatar"
                      />

                      <h4>{lead.name}</h4>
                      <p>{lead.role}</p>
                    </div>
                  ))}
                </div>
              )}
            
              {section.tags && (
                <div className="tags">
                  {section.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>
              )}

            </div>
          );
        })}

      </section>
    </div>
  );
};

export default ChapterPage;
