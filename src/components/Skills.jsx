import { motion, useInView } from "framer-motion";
import { skills } from "../data/portfolioData";

const SkillBar = ({ name, level, index, inView }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.4, delay: index * 0.08 }}
    style={{ marginBottom: 20 }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 6,
      }}
    >
      <span
        style={{
          color: "var(--text-secondary)",
          fontSize: "0.9rem",
          fontWeight: 500,
        }}
      >
        {name}
      </span>
      <span
        style={{
          color: "var(--text-muted)",
          fontSize: "0.85rem",
          fontFamily: "'Fira Code', monospace",
        }}
      >
        {level}%
      </span>
    </div>
    <div
      style={{
        height: 6,
        background: "rgba(255,255,255,0.06)",
        borderRadius: 3,
        overflow: "hidden",
      }}
    >
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: `${level}%` } : {}}
        transition={{ duration: 1, delay: index * 0.08, ease: "easeOut" }}
        style={{
          height: "100%",
          background: "var(--accent-gradient)",
          borderRadius: 3,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: 20,
            background: "rgba(255,255,255,0.2)",
            borderRadius: 3,
            filter: "blur(4px)",
          }}
        />
      </motion.div>
    </div>
  </motion.div>
);

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="section">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label">// Skills</span>
        <h2 className="section-title">Tech Stack</h2>
        <p className="section-subtitle">
          Technologies and tools I work with
        </p>
      </motion.div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
        }}
      >
        {skills.map((category, catIndex) => (
          <motion.div
            key={category.category}
            className="glass-card"
            style={{
              padding: 32,
              position: "relative",
              overflow: "hidden",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: catIndex * 0.15 }}
            whileHover={{ y: -6, borderColor: "rgba(108,99,255,0.2)" }}
          >
            <div
              style={{
                position: "absolute",
                top: -20,
                right: -20,
                width: 80,
                height: 80,
                borderRadius: "50%",
                background: "rgba(108,99,255,0.06)",
              }}
            />
            <h3
              style={{
                fontSize: "1.1rem",
                fontWeight: 700,
                marginBottom: 24,
                color: "var(--text-primary)",
              }}
            >
              {category.category}
            </h3>

            {category.items.map((skill, i) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                index={i}
                inView={inView}
              />
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
