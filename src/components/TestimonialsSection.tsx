import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Pranav delivered an exceptional website that exceeded our expectations. His attention to detail and creative vision transformed our brand identity.",
    name: "Rodolfo E. Shannon",
    role: "CEO & Founder",
  },
  {
    text: "Working with Pranav was a seamless experience. He understood our requirements perfectly and delivered a product that our users love.",
    name: "Kenneth J. Dutton",
    role: "Web Developer",
  },
  {
    text: "His design sensibility and technical skills are top-notch. Pranav consistently delivers high-quality work on time and within budget.",
    name: "Sarah M. Anderson",
    role: "Marketing Director",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-semibold mb-2">Client Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Client <span className="text-primary">Feedback</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-8 border border-border"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">"{t.text}"</p>
              <div>
                <p className="font-heading font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
