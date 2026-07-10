import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../data/portfolioData";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) => link.href.slice(1));
      const scrollPos = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(10,10,15,0.85)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.05)] shadow-lg shadow-[rgba(0,0,0,0.2)]"
          : "bg-transparent"
      }`}
      style={{ padding: scrolled ? "12px 0" : "20px 0" }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <motion.a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
          className="gradient-text"
          style={{
            fontFamily: "'Fira Code', monospace",
            fontSize: "1.3rem",
            fontWeight: 700,
            cursor: "pointer",
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          &lt;Karthik /&gt;
        </motion.a>

        {/* Desktop Nav */}
        <div
          style={{
            display: "flex",
            gap: 32,
            alignItems: "center",
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              style={{
                fontSize: "0.9rem",
                fontWeight: 500,
                color:
                  activeSection === link.href.slice(1)
                    ? "#6C63FF"
                    : "var(--text-secondary)",
                position: "relative",
                cursor: "pointer",
                transition: "color 0.3s",
              }}
              whileHover={{ color: "#6C63FF" }}
            >
              {link.name}
              {activeSection === link.href.slice(1) && (
                <motion.div
                  layoutId="navIndicator"
                  style={{
                    position: "absolute",
                    bottom: -4,
                    left: 0,
                    right: 0,
                    height: 2,
                    background: "var(--accent-gradient)",
                    borderRadius: 1,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}          <motion.button
          className="mobile-menu-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: "var(--text-primary)",
            fontSize: "1.5rem",
            cursor: "pointer",
            padding: 8,
          }}
          whileTap={{ scale: 0.9 }}
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </motion.button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              background: "rgba(10,10,15,0.95)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                padding: "16px 24px 24px",
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  style={{
                    fontSize: "1rem",
                    fontWeight: 500,
                    color:
                      activeSection === link.href.slice(1)
                        ? "#6C63FF"
                        : "var(--text-secondary)",
                    padding: "8px 0",
                    cursor: "pointer",
                  }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;
