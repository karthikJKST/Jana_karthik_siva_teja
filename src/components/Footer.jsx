import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "40px 24px 24px",
        background: "var(--bg-secondary)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 24,
        }}
      >
        {/* Social links */}
        <div style={{ display: "flex", gap: 20 }}>
          {[
            { icon: <FiGithub size={18} />, url: personalInfo.github, label: "GitHub profile" },
            { icon: <FiLinkedin size={18} />, url: personalInfo.linkedin, label: "LinkedIn profile" },
            { icon: <FiMail size={18} />, url: `mailto:${personalInfo.email}`, label: "Send email" },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-muted)",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.06)",
                transition: "var(--transition)",
              }}
              whileHover={{
                color: "var(--accent-1)",
                background: "rgba(108,99,255,0.1)",
                borderColor: "rgba(108,99,255,0.2)",
                y: -3,
              }}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

        {/* Name / Logo */}
        <motion.a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="gradient-text"
          style={{
            fontFamily: "'Fira Code', monospace",
            fontSize: "1.1rem",
            fontWeight: 700,
            cursor: "pointer",
            WebkitTextFillColor: "transparent",
          }}
          whileHover={{ scale: 1.05 }}
        >
          &lt;Karthik /&gt;
        </motion.a>

        {/* Copyright */}
        <p
          style={{
            color: "var(--text-muted)",
            fontSize: "0.85rem",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          &copy; {currentYear} {personalInfo.name}. Built with
          <FiHeart size={14} style={{ color: "var(--accent-3)" }} />
          using React & Framer Motion
        </p>
      </div>
    </footer>
  );
};

export default Footer;
