import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { certifications } from "../data/portfolioData";
import { FiAward, FiExternalLink, FiCalendar } from "react-icons/fi";

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="section">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label">// Certifications</span>
        <h2 className="section-title">Credentials</h2>
        <p className="section-subtitle">
          Professional certifications and achievements
        </p>
      </motion.div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: 28,
        }}
      >
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            className="glass-card"
            style={{
              padding: 36,
              position: "relative",
              overflow: "hidden",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{
              y: -6,
              borderColor: "rgba(108,99,255,0.2)",
            }}
          >
            {/* Badge icon */}
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                background: "linear-gradient(135deg, rgba(108,99,255,0.15), rgba(0,212,255,0.1))",
                border: "1px solid rgba(108,99,255,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--accent-1)",
                marginBottom: 20,
              }}
            >
              <FiAward size={24} />
            </div>

            <h3
              style={{
                fontSize: "1.15rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: 8,
              }}
            >
              {cert.title}
            </h3>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                marginBottom: 14,
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  color: "var(--accent-2)",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                }}
              >
                {cert.issuer}
              </span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                  color: "var(--text-muted)",
                  fontSize: "0.85rem",
                  fontFamily: "'Fira Code', monospace",
                }}
              >
                <FiCalendar size={14} />
                {cert.date}
              </span>
            </div>

            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.95rem",
                lineHeight: 1.7,
                marginBottom: 20,
              }}
            >
              {cert.description}
            </p>

            <motion.a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                color: "var(--accent-1)",
                fontSize: "0.9rem",
                fontWeight: 600,
                transition: "var(--transition)",
              }}
              whileHover={{ gap: 10, color: "var(--accent-2)" }}
            >
              View Certificate <FiExternalLink size={16} />
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
