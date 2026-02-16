import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import aboutImg from "@/assets/about-photo.jpg";

const skills = ["Branding & Design", "Digital Marketing", "Web Development", "Product Design"];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-semibold mb-2">About Me</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12">
            Professional Problem Solutions
            <br />
            <span className="text-primary">For Digital Products</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-8">
              I'm a passionate web designer and developer based in Amravati, dedicated to creating
              beautiful and functional digital experiences. With expertise in modern design tools and
              development frameworks, I help businesses establish their digital presence.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {skills.map((skill) => (
                <div key={skill} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm text-foreground">{skill}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email Us</p>
                  <a href="mailto:pranav@amil.com" className="text-sm text-foreground hover:text-primary transition-colors">
                    pranav@amil.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Make A Call</p>
                  <a href="tel:9011582032" className="text-sm text-foreground hover:text-primary transition-colors">
                    +91 9011582032
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={aboutImg}
              alt="About Pranav"
              className="rounded-2xl w-full max-w-md mx-auto object-cover aspect-[4/5]"
            />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-4 border-primary rounded-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
