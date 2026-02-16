import { motion } from "framer-motion";

const experiences = [
  { period: "2021 - Present", role: "Lead Product Designer", company: "Google" },
  { period: "2018 - 2021", role: "Senior Product Designer", company: "Webflow" },
  { period: "2016 - 2018", role: "Junior UX/UI Designer", company: "LinkedIn" },
  { period: "2014 - 2016", role: "Graphics Designer", company: "Apple" },
];

const ResumeSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-semibold mb-2">My Resume</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12">
            Real Problem Solutions <span className="text-primary">Experience</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-colors group"
            >
              <p className="text-xs text-primary font-medium mb-2">{exp.period}</p>
              <h3 className="text-lg font-heading font-semibold mb-1 group-hover:text-primary transition-colors">
                {exp.role}
              </h3>
              <p className="text-sm text-muted-foreground">{exp.company}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
