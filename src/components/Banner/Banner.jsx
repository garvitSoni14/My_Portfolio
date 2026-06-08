import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { CardGridSection } from "./CardGridSection";
import { ContactSection } from "./ContactSection";
import { HomeGrid } from "./HomeGrid";
import { SectionHeader } from "./SectionHeader";
import { SkillsSection } from "./SkillsSection";
import { sectionDetails } from "./portfolioData";
import "./Banner.css";

export const Banner = () => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const syncSectionFromHash = () => {
      const key = window.location.hash.replace("#", "");
      setActiveSection(sectionDetails[key] ? key : null);
    };

    syncSectionFromHash();
    window.addEventListener("hashchange", syncSectionFromHash);
    return () => window.removeEventListener("hashchange", syncSectionFromHash);
  }, []);

  const openSection = (sectionId) => {
    window.location.hash = sectionId;
    window.dispatchEvent(new CustomEvent("portfolio:navigate", { detail: { id: sectionId } }));
  };

  const showHome = () => {
    history.pushState("", document.title, window.location.pathname + window.location.search);
    setActiveSection(null);
    window.dispatchEvent(new CustomEvent("portfolio:navigate", { detail: { id: "home" } }));
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  };

  const detail = activeSection ? sectionDetails[activeSection] : null;

  const renderSection = () => {
    if (activeSection === "skills") {
      return <SkillsSection detail={detail} />;
    }

    if (activeSection === "contact") {
      return <ContactSection detail={detail} />;
    }

    return <CardGridSection activeSection={activeSection} detail={detail} />;
  };

  return (
    <section className="banner" id="home">
      <Container>
        {!detail ? (
          <HomeGrid onOpenSection={openSection} />
        ) : (
          <main
            className={`page-section ${activeSection}-page`}
            aria-labelledby={`${activeSection}-title`}
            key={`${activeSection}-view`}
          >
            <SectionHeader activeSection={activeSection} detail={detail} onHome={showHome} />
            {renderSection()}
          </main>
        )}
      </Container>
    </section>
  );
};
