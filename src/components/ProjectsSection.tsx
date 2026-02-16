import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";

const projects = [
  { img: project1, category: "Product Design", title: "Mobile Application Design" },
  { img: project2, category: "Web Development", title: "Website Makeup Design" },
  { img: project3, category: "Branding", title: "Brand Identity & Motion Design" },
  { img: project4, category: "Dashboard", title: "E-Commerce Dashboard" },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-semibold mb-2">Latest Works</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12">
            Explore My Popular <span className="text-primary">Projects</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-background border border-border"
            >
              <div className="overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex items-start justify-between">
                <div>
                  <p className="text-xs text-primary font-medium mb-1">{project.category}</p>
                  <h3 className="text-lg font-heading font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors">
                  <ArrowUpRight size={16} className="text-foreground group-hover:text-primary-foreground transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
