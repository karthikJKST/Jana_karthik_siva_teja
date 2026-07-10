import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { education } from "../data/portfolioData";
import { FiBookOpen, FiCalendar, FiAward } from "react-icons/fi";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label">// Education</span>
        <h2 className="section-title">Academic Journey</h2>
        <p className="section-subtitle">
          My educational background and achievements
        </p>
      </motion.div>

      <div style={{ position: "relative" }}>
        {/* Timeline line */}
        <div
          style={{
            position: "absolute",
            left: 28,
            top: 0,
            bottom: 0,
            width: 2,
            background: "linear-gradient(to bottom, var(--accent-1), var(--accent-2), transparent)",
            opacity: 0.3,
          }}
        />

        {education.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            style={{
              display: "flex",
              gap: 32,
              marginBottom: 40,
              position: "relative",
            }}
          >
            {/* Timeline dot */}
            <motion.div
              style={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                background: "rgba(108,99,255,0.1)",
                border: "2px solid rgba(108,99,255,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--accent-1)",
                flexShrink: 0,
                zIndex: 1,
                position: "relative",
              }}
              whileHover={{ scale: 1.1, borderColor: "var(--accent-1)" }}
            >
              {item.id === 1 ? <FiBookOpen size={22} /> : <FiAward size={22} />}
            </motion.div>

            {/* Card */}
            <motion.div
              className="glass-card"
              style={{
                flex: 1,
                padding: 32,
                position: "relative",
                overflow: "hidden",
              }}
              whileHover={{ x: 8, borderColor: "rgba(108,99,255,0.2)" }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: 120,
                  height: 120,
                  borderRadius: "0 0 0 100%",
                  background: "linear-gradient(135deg, transparent 50%, rgba(108,99,255,0.05))",
                }}
              />

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: 16,
                  flexWrap: "wrap",
                  marginBottom: 12,
                }}
              >
                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                  }}
                >
                  {item.degree}
                </h3>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontFamily: "'Fira Code', monospace",
                    fontSize: "0.85rem",
                    color: "var(--accent-2)",
                    background: "rgba(0,212,255,0.08)",
                    padding: "4px 12px",
                    borderRadius: "20px",
                    whiteSpace: "nowrap",
                  }}
                >
                  <FiCalendar size={14} />
                  {item.period}
                </span>
              </div>

              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "1rem",
                  marginBottom: 12,
                }}
              >
                {item.institution}
              </p>

              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontFamily: "'Fira Code', monospace",
                  fontSize: "0.9rem",
                  color: "var(--accent-1)",
                  background: "rgba(108,99,255,0.08)",
                  padding: "6px 14px",
                  borderRadius: "var(--radius-sm)",
                  marginBottom: 12,
                }}
              >
                <FiAward size={16} />
                {item.score}
              </div>

              {item.description && (
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.95rem",
                    marginTop: 8,
                  }}
                >
                  {item.description}
                </p>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
