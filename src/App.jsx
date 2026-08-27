import Header from "./components/Header";
import Hero from "./components/Hero";
import Performance from "./components/Performance";
import DesignLanguage from "./components/DesignLanguage";
import FinalCta from "./components/FinalCta";
import BackToTop from "./components/BackToTop";
import useHeaderNavigationState from "./hooks/useHeaderNavigationState";

export default function App() {
  const { compact, activeSection } = useHeaderNavigationState();

  return (
    <>
      <div className="site-shell">
        <Header compact={compact} activeSection={activeSection} />
        <main>
          <Hero />
          <DesignLanguage />
          <Performance />
          <FinalCta />
        </main>
      </div>
      <BackToTop />
    </>
  );
}
