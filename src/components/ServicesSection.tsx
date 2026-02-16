import { motion } from "framer-motion";
import { Palette, Globe, Smartphone, Film, Code, TrendingUp } from "lucide-react";

const services = [
  { icon: Palette, num: "01", title: "Brand Identity Design", desc: "Creating memorable brand experiences" },
  { icon: Globe, num: "02", title: "Website Design", desc: "Modern and responsive web solutions" },
  { icon: Smartphone, num: "03", title: "Mobile Application Design", desc: "Intuitive mobile-first interfaces" },
  { icon: Film, num: "04", title: "Motion Graphics Design", desc: "Engaging animated content" },
  { icon: Code, num: "05", title: "Website Development", desc: "Clean and scalable code" },
  { icon: TrendingUp, num: "06", title: "SEO & Digital Marketing", desc: "Data-driven growth strategies" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-semibold mb-2">Popular Services</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12">
            My Special Service For Your
            <br />
            <span className="text-primary">Business Development</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-background rounded-2xl p-8 border border-border hover:border-primary/50 transition-all group cursor-pointer"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-heading font-bold text-muted-foreground/30">{service.num}.</span>
                <service.icon size={28} className="text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
