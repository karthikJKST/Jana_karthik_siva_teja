import { motion, useInView } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactMethods = [
    {
      icon: <FiMail size={20} />,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: <FiPhone size={20} />,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: <FiMapPin size={20} />,
      label: "Location",
      value: personalInfo.location,
    },
    {
      icon: <FiGithub size={20} />,
      label: "GitHub",
      value: personalInfo.github.replace("https://", ""),
      href: personalInfo.github,
    },
    {
      icon: <FiLinkedin size={20} />,
      label: "LinkedIn",
      value: personalInfo.linkedin.replace("https://", ""),
      href: personalInfo.linkedin,
    },
  ];

  return (
    <section id="contact" className="section">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label">// Contact</span>
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Let's connect! I'm always open to new opportunities
        </p>
      </motion.div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 40,
          alignItems: "start",
        }}
        className="contact-grid"
      >
        {/* Left - Contact Cards */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {contactMethods.map((method, i) => (
            <motion.div
              key={method.label}
              className="glass-card"
              style={{
                padding: 20,
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
              whileHover={{ x: 8, borderColor: "rgba(108,99,255,0.2)" }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "rgba(108,99,255,0.1)",
                  border: "1px solid rgba(108,99,255,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent-1)",
                  flexShrink: 0,
                }}
              >
                {method.icon}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.85rem",
                    marginBottom: 2,
                  }}
                >
                  {method.label}
                </p>
                {method.href ? (
                  <motion.a
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    style={{
                      color: "var(--text-primary)",
                      fontSize: "0.95rem",
                      fontWeight: 500,
                      wordBreak: "break-all",
                      display: "block",
                      transition: "var(--transition)",
                    }}
                    whileHover={{ color: "var(--accent-1)" }}
                  >
                    {method.value}
                  </motion.a>
                ) : (
                  <span
                    style={{
                      color: "var(--text-primary)",
                      fontSize: "0.95rem",
                      fontWeight: 500,
                    }}
                  >
                    {method.value}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Right - CTA card */}
        <motion.div
          className="glass-card"
          style={{
            padding: 40,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 300,
            position: "relative",
            overflow: "hidden",
          }}
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div
            style={{
              position: "absolute",
              top: -80,
              right: -80,
              width: 200,
              height: 200,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(108,99,255,0.08), transparent)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -60,
              left: -60,
              width: 150,
              height: 150,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(0,212,255,0.06), transparent)",
            }}
          />

          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              background: "linear-gradient(135deg, rgba(108,99,255,0.2), rgba(0,212,255,0.1))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--accent-1)",
              marginBottom: 24,
              position: "relative",
              zIndex: 1,
            }}
          >
            <FiMail size={32} />
          </div>

          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              marginBottom: 12,
              position: "relative",
              zIndex: 1,
            }}
          >
            Let's Work Together
          </h3>

          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "0.95rem",
              maxWidth: 320,
              marginBottom: 28,
              lineHeight: 1.7,
              position: "relative",
              zIndex: 1,
            }}
          >
            I'm currently looking for opportunities in software development and
            AI/ML. Feel free to reach out!
          </p>

          <motion.a
            href={`mailto:${personalInfo.email}`}
            className="glow-btn"
            style={{ position: "relative", zIndex: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiMail /> Send Email
          </motion.a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
