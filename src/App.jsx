import React, { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { NAV_ITEMS } from "./data/portfolioData";
import { detailViewVariants, pageTransitionVariants } from "./utils/motion";
import AmbientBackground from "./components/AmbientBackground";
import Navbar from "./components/Navbar";
import HomeView from "./components/views/HomeView";
import AboutView from "./components/views/AboutView";
import ProjectsView from "./components/views/ProjectsView";
import ProjectDetailView from "./components/views/ProjectDetailView";
import ExperienceView from "./components/views/ExperienceView";
import ContactView from "./components/views/ContactView";

const VALID_MENUS = NAV_ITEMS.map((item) => item.id);

function getInitialMenu() {
  if (typeof window === "undefined") return "home";
  const hash = window.location.hash.replace("#", "").toLowerCase();
  return VALID_MENUS.includes(hash) ? hash : "home";
}

export default function App() {
  const [activeMenu, setActiveMenu] = useState(getInitialMenu);
  const [direction, setDirection] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const shimmerTimerRef = useRef(null);

  const triggerShimmer = useCallback(() => {
    setIsTransitioning(true);
    if (shimmerTimerRef.current) clearTimeout(shimmerTimerRef.current);
    shimmerTimerRef.current = setTimeout(() => {
      setIsTransitioning(false);
    }, 440);
  }, []);

  const handleSelectMenu = useCallback(
    (nextMenu) => {
      if (!VALID_MENUS.includes(nextMenu)) return;

      const currentIdx = VALID_MENUS.indexOf(activeMenu);
      const nextIdx = VALID_MENUS.indexOf(nextMenu);

      if (selectedProject) {
        setSelectedProject(null);
      }

      if (nextMenu === activeMenu && !selectedProject) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      setDirection(nextIdx >= currentIdx ? 1 : -1);
      setActiveMenu(nextMenu);
      triggerShimmer();

      if (window.location.hash !== `#${nextMenu}`) {
        window.history.replaceState(null, "", `#${nextMenu}`);
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [activeMenu, selectedProject, triggerShimmer]
  );

  const handleSelectProject = useCallback(
    (project) => {
      setSelectedProject(project);
      if (activeMenu !== "projects") {
        setDirection(1);
        setActiveMenu("projects");
        window.history.replaceState(null, "", "#projects");
      }
      triggerShimmer();
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [activeMenu, triggerShimmer]
  );

  const handleBackFromProject = useCallback(() => {
    setSelectedProject(null);
    triggerShimmer();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [triggerShimmer]);

  // Sync with browser hash changes
  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace("#", "").toLowerCase();
      if (VALID_MENUS.includes(hash) && hash !== activeMenu) {
        handleSelectMenu(hash);
      }
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [activeMenu, handleSelectMenu]);

  // Keyboard shortcuts: 1-5 switch menus, Escape exits project detail
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.defaultPrevented) return;
      const tag = e.target?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || e.metaKey || e.ctrlKey || e.altKey) {
        return;
      }

      if (e.key === "Escape" && selectedProject) {
        handleBackFromProject();
        return;
      }

      const num = parseInt(e.key, 10);
      if (num >= 1 && num <= NAV_ITEMS.length) {
        handleSelectMenu(NAV_ITEMS[num - 1].id);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [handleBackFromProject, handleSelectMenu, selectedProject]);

  useEffect(() => {
    return () => {
      if (shimmerTimerRef.current) clearTimeout(shimmerTimerRef.current);
    };
  }, []);

  const renderMenuView = () => {
    switch (activeMenu) {
      case "about":
        return <AboutView onSelectMenu={handleSelectMenu} />;
      case "projects":
        return (
          <ProjectsView
            onSelectMenu={handleSelectMenu}
            onSelectProject={handleSelectProject}
          />
        );
      case "experience":
        return <ExperienceView onSelectMenu={handleSelectMenu} />;
      case "contact":
        return <ContactView onSelectMenu={handleSelectMenu} />;
      case "home":
      default:
        return (
          <HomeView
            onSelectMenu={handleSelectMenu}
            onSelectProject={handleSelectProject}
          />
        );
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-[#09090b] text-zinc-100 flex flex-col">
        <AmbientBackground activeMenu={activeMenu} />

        <Navbar
          activeMenu={activeMenu}
          onSelectMenu={handleSelectMenu}
          isTransitioning={isTransitioning}
        />

        <main className="relative z-10 flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-28 md:pb-16">
          <AnimatePresence mode="wait" custom={direction}>
            {selectedProject ? (
              <motion.section
                key={`project-detail-${selectedProject.id}`}
                variants={detailViewVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <ProjectDetailView
                  project={selectedProject}
                  onBack={handleBackFromProject}
                  onSelectProject={handleSelectProject}
                />
              </motion.section>
            ) : (
              <motion.section
                key={`menu-${activeMenu}`}
                custom={direction}
                variants={pageTransitionVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {renderMenuView()}
              </motion.section>
            )}
          </AnimatePresence>
        </main>
      </div>
    </MotionConfig>
  );
}
