import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-portrait.png";

const stats = [
  { value: "4+", label: "Years Of Experience" },
  { value: "2k+", label: "Projects Complete" },
  { value: "30%+", label: "Client Satisfactions" },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center section-padding pt-32 overflow-hidden">
      {/* Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] hero-blob rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left */}
        <motion.div
          className="lg:col-span-5 z-10"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-muted-foreground text-lg mb-2">Hello, I'm</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-2">
            <span className="text-primary">Pranav</span>
            <br />
            Kolhe
          </h1>
          <p className="text-3xl md:text-4xl font-heading font-light text-foreground mb-6">
            Web Designer
          </p>
          <p className="text-muted-foreground max-w-md mb-8">
            Crafting beautiful digital experiences with modern design principles and cutting-edge technology.
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Hire Me <ArrowRight size={16} />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 border border-border text-foreground px-7 py-3.5 rounded-full font-semibold hover:border-primary hover:text-primary transition-colors"
            >
              Download Resume <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>

        {/* Center image */}
        <motion.div
          className="lg:col-span-4 flex justify-center relative z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative">
            <div className="absolute -top-8 -right-8 w-72 h-72 md:w-96 md:h-96 bg-primary rounded-full opacity-80" />
            <img
              src={heroImg}
              alt="Pranav Kolhe"
              className="relative z-10 w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-background"
            />
          </div>
        </motion.div>

        {/* Right stats */}
        <motion.div
          className="lg:col-span-3 z-10"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="bg-card rounded-2xl p-6 space-y-6 glow-primary">
            {stats.map((stat, i) => (
              <div key={i} className={i < stats.length - 1 ? "border-b border-border pb-6" : ""}>
                <p className="text-3xl font-heading font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
