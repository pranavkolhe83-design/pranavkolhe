import { motion } from "framer-motion";

const skills = [
  { name: "Figma", percentage: 95 },
  { name: "React", percentage: 90 },
  { name: "TypeScript", percentage: 88 },
  { name: "Tailwind CSS", percentage: 93 },
  { name: "WordPress", percentage: 84 },
  { name: "Node.js", percentage: 80 },
  { name: "UI/UX Design", percentage: 92 },
  { name: "Webflow", percentage: 86 },
];

const SkillsSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary font-semibold mb-2">My Skills</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Let's Explore Popular
              <br />
              <span className="text-primary">Skills & Experience</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              With a strong foundation in both design and development, I bring a unique perspective to every project,
              ensuring both aesthetic appeal and technical excellence.
            </p>
            <a
              href="#contact"
              className="inline-flex bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Learn More
            </a>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-card rounded-2xl p-5 border border-border text-center"
              >
                <div className="relative w-16 h-16 mx-auto mb-3">
                  <svg className="w-16 h-16 -rotate-90" viewBox="0 0 64 64">
                    <circle cx="32" cy="32" r="28" fill="none" stroke="hsl(var(--border))" strokeWidth="4" />
                    <motion.circle
                      cx="32" cy="32" r="28"
                      fill="none"
                      stroke="hsl(var(--primary))"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeDasharray={`${skill.percentage * 1.76} 176`}
                      initial={{ strokeDasharray: "0 176" }}
                      whileInView={{ strokeDasharray: `${skill.percentage * 1.76} 176` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.06 }}
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-primary">
                    {skill.percentage}%
                  </span>
                </div>
                <p className="text-sm font-medium text-foreground">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
