import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import { FiGithub, FiLinkedin, FiMail, FiChevronDown } from "react-icons/fi";

const Hero = () => {
  const [cursorPos, setCursorPos] = useState({ x: -1000, y: -1000 });
  const [mouseMoved, setMouseMoved] = useState(false);

  useEffect(() => {
    const handleMouse = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      setMouseMoved(true);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const floatingShapes = [
    { size: 60, x: "15%", y: "20%", delay: 0 },
    { size: 40, x: "80%", y: "15%", delay: 0.3 },
    { size: 30, x: "70%", y: "70%", delay: 0.6 },
    { size: 50, x: "20%", y: "75%", delay: 0.9 },
  ];

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "120px 24px 80px",
      }}
      className="bg-grid"
    >
      {/* Cursor glow */}
      {mouseMoved && (
        <div
          className="cursor-glow"
          style={{
            left: cursorPos.x,
            top: cursorPos.y,
          }}
        />
      )}

      {/* Floating shapes */}
      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          className="floating-shape"
          style={{
            position: "absolute",
            left: shape.x,
            top: shape.y,
            width: shape.size,
            height: shape.size,
            borderRadius: shape.size % 3 === 0 ? "50%" : "30%",
            background: `linear-gradient(135deg, rgba(108,99,255,0.1), rgba(0,212,255,0.05))`,
            border: "1px solid rgba(108,99,255,0.15)",
            zIndex: 0,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay,
          }}
        />
      ))}

      {/* Gradient orbs */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          right: "-10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(108,99,255,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-20%",
          left: "-10%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          maxWidth: 800,
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <motion.p
          variants={itemVariants}
          style={{
            fontFamily: "'Fira Code', monospace",
            fontSize: "0.95rem",
            color: "var(--accent-1)",
            marginBottom: 16,
            letterSpacing: 2,
          }}
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          variants={itemVariants}
          style={{
            fontSize: "clamp(2.5rem, 7vw, 4.5rem)",
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: 12,
            color: "var(--text-primary)",
          }}
        >
          {personalInfo.name}
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="gradient-text"
          style={{
            fontSize: "clamp(1.2rem, 3vw, 2rem)",
            fontWeight: 600,
            marginBottom: 24,
            WebkitTextFillColor: "transparent",
          }}
        >
          {personalInfo.title}
        </motion.h2>

        <motion.p
          variants={itemVariants}
          style={{
            fontSize: "1.1rem",
            color: "var(--text-secondary)",
            maxWidth: 600,
            margin: "0 auto 40px",
            lineHeight: 1.7,
          }}
        >
          {personalInfo.summary}
        </motion.p>

        <motion.div
          variants={itemVariants}
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <motion.a
            href={`mailto:${personalInfo.email}`}
            className="glow-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiMail /> Get In Touch
          </motion.a>

          <motion.a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 28px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "var(--radius-sm)",
              color: "var(--text-primary)",
              fontWeight: 600,
              fontSize: "0.95rem",
              cursor: "pointer",
              transition: "var(--transition)",
            }}
            whileHover={{
              scale: 1.05,
              background: "rgba(255,255,255,0.1)",
              borderColor: "rgba(108,99,255,0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <FiGithub /> GitHub
          </motion.a>

          <motion.a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 28px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "var(--radius-sm)",
              color: "var(--text-primary)",
              fontWeight: 600,
              fontSize: "0.95rem",
              cursor: "pointer",
              transition: "var(--transition)",
            }}
            whileHover={{
              scale: 1.05,
              background: "rgba(255,255,255,0.1)",
              borderColor: "rgba(108,99,255,0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <FiLinkedin /> LinkedIn
          </motion.a>
        </motion.div>

        {/* Social links sidebar */}
        <div
          className="social-sidebar"
          style={{
            position: "fixed",
            left: 40,
            bottom: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
            zIndex: 10,
          }}
        >          {[
    { icon: <FiGithub size={20} />, url: personalInfo.github, label: "GitHub profile" },
    { icon: <FiLinkedin size={20} />, url: personalInfo.linkedin, label: "LinkedIn profile" },
    { icon: <FiMail size={20} />, url: `mailto:${personalInfo.email}`, label: "Send email" },
  ].map((item, i) => (
    <motion.a
      key={i}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={item.label}
      style={{
        color: "var(--text-muted)",
        transition: "var(--transition)",
        lineHeight: 1,
      }}
      whileHover={{ color: "var(--accent-1)", y: -3, scale: 1.1 }}
    >
      {item.icon}
    </motion.a>
  ))}
          <div
            style={{
              width: 1,
              height: 80,
              background: "linear-gradient(to bottom, var(--text-muted), transparent)",
            }}
          />
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          color: "var(--text-muted)",
          fontSize: "0.8rem",
          cursor: "pointer",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FiChevronDown size={18} />
        </motion.div>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .social-sidebar {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
