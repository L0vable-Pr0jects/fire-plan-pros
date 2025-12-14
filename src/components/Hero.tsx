import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, FileCheck, Clock } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const stats = [
    { icon: Shield, value: "500+", label: "Projects Completed" },
    { icon: FileCheck, value: "100%", label: "Code Compliance" },
    { icon: Clock, value: "15+", label: "Years Experience" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Fire safety blueprints"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-90" />
      </div>

      {/* Blueprint Grid Pattern */}
      <div className="absolute inset-0 z-0 blueprint-grid opacity-30" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-accent-foreground text-sm font-medium">
              Certified Fire Safety Experts
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold text-accent-foreground leading-tight mb-6 animate-fade-up animation-delay-200">
            Protecting Lives Through
            <span className="text-gradient block mt-2">Expert Fire Planning</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-accent-foreground/80 max-w-2xl mb-10 animate-fade-up animation-delay-400">
            Professional fire safety plans and code-compliant designs for commercial, 
            industrial, and residential projects. We ensure your building meets all 
            fire department requirements.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-up animation-delay-600">
            <Button variant="accent" size="xl" className="group">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroLight" size="xl">
              View Our Work
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-up animation-delay-600">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl bg-accent-foreground/5 border border-accent-foreground/10 backdrop-blur-sm"
              >
                <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent-foreground">{stat.value}</div>
                  <div className="text-sm text-accent-foreground/70">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
