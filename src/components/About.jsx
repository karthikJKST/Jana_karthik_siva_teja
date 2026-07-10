import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import { FiCode, FiDatabase, FiCpu, FiAward } from "react-icons/fi";

const stats = [
  { icon: <FiCode size={24} />, value: "3+", label: "Projects" },
  { icon: <FiDatabase size={24} />, value: "4+", label: "Technologies" },
  { icon: <FiCpu size={24} />, value: "2", label: "Certifications" },
  { icon: <FiAward size={24} />, value: "7.98", label: "CGPA" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label">// About Me</span>
        <h2 className="section-title">Get to Know Me</h2>
        <p className="section-subtitle">
          A passionate developer building intelligent systems
        </p>
      </motion.div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
          alignItems: "start",
        }}
        className="about-grid"
      >
        {/* Left - Description */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div
            className="glass-card"
            style={{
              padding: 40,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 3,
                background: "var(--accent-gradient)",
              }}
            />
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "1.05rem",
                lineHeight: 1.8,
                marginBottom: 20,
              }}
            >
              {personalInfo.summary}
            </p>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "1.05rem",
                lineHeight: 1.8,
              }}
            >
              I'm currently pursuing my{" "}
              <strong style={{ color: "var(--text-primary)" }}>
                B.Tech in Computer Science
              </strong>{" "}
              at VIT-AP, with a focus on AI/ML and software development. I love
              turning complex problems into simple, beautiful solutions.
            </p>
          </div>
        </motion.div>

        {/* Right - Stats */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 20,
          }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="glass-card"
              style={{
                padding: 32,
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12,
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
              whileHover={{ y: -8, borderColor: "rgba(108,99,255,0.3)" }}
            >
              <div
                style={{
                  color: "var(--accent-1)",
                  marginBottom: 4,
                }}
              >
                {stat.icon}
              </div>
              <span
                className="gradient-text"
                style={{
                  fontSize: "2rem",
                  fontWeight: 800,
                  WebkitTextFillColor: "transparent",
                }}
              >
                {stat.value}
              </span>
              <span
                style={{
                  color: "var(--text-muted)",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                }}
              >
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
