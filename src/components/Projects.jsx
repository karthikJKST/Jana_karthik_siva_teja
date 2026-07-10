import { motion, useInView } from "framer-motion";
import { projects } from "../data/portfolioData";
import { FiGithub, FiExternalLink, FiCalendar } from "react-icons/fi";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="section">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label">// Projects</span>
        <h2 className="section-title">Featured Work</h2>
        <p className="section-subtitle">
          Real-world projects I've built
        </p>
      </motion.div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: 28,
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="glass-card"
            style={{
              padding: 36,
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{
              y: -8,
              borderColor: `${project.color}33`,
              boxShadow: `0 16px 48px ${project.color}15`,
            }}
          >
            {/* Top gradient bar */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 3,
                background: `linear-gradient(90deg, ${project.color}, transparent)`,
              }}
            />

            {/* Project number */}
            <span
              style={{
                fontFamily: "'Fira Code', monospace",
                fontSize: "3rem",
                fontWeight: 900,
                color: `${project.color}15`,
                position: "absolute",
                top: 16,
                right: 20,
                lineHeight: 1,
              }}
            >
              {String(project.id).padStart(2, "0")}
            </span>

            {/* Year badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontFamily: "'Fira Code', monospace",
                fontSize: "0.8rem",
                color: project.color,
                background: `${project.color}12`,
                padding: "4px 12px",
                borderRadius: "20px",
                alignSelf: "flex-start",
                marginBottom: 16,
              }}
            >
              <FiCalendar size={14} />
              {project.year}
            </div>

            {/* Title */}
            <h3
              style={{
                fontSize: "1.3rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: 14,
              }}
            >
              {project.title}
            </h3>

            {/* Description */}
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.95rem",
                lineHeight: 1.7,
                flex: 1,
                marginBottom: 20,
              }}
            >
              {project.description}
            </p>

            {/* Technologies */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                marginBottom: 20,
              }}
            >
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  style={{
                    fontFamily: "'Fira Code', monospace",
                    fontSize: "0.8rem",
                    color: "var(--text-muted)",
                    background: "rgba(255,255,255,0.04)",
                    padding: "4px 10px",
                    borderRadius: "var(--radius-sm)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div
              style={{
                display: "flex",
                gap: 16,
                borderTop: "1px solid rgba(255,255,255,0.06)",
                paddingTop: 16,
              }}
            >
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  color: "var(--text-muted)",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  transition: "var(--transition)",
                }}
                whileHover={{ color: project.color, gap: 8 }}
              >
                <FiGithub size={16} />
                Source Code
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
