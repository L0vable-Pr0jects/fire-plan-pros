import { FileText, Building2, ClipboardCheck, Users, Wrench, ShieldCheck } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Fire Safety Plans",
      description: "Comprehensive fire safety documentation including evacuation routes, fire suppression layouts, and emergency protocols.",
    },
    {
      icon: Building2,
      title: "Building Code Compliance",
      description: "Expert analysis ensuring your structure meets all local and national fire safety codes and regulations.",
    },
    {
      icon: ClipboardCheck,
      title: "Fire Department Submissions",
      description: "Complete preparation and submission of all required documents for fire department approval.",
    },
    {
      icon: Users,
      title: "Consultation Services",
      description: "One-on-one expert consultation to guide you through fire safety requirements for your project.",
    },
    {
      icon: Wrench,
      title: "System Design",
      description: "Design and layout of fire suppression systems, alarms, and emergency lighting systems.",
    },
    {
      icon: ShieldCheck,
      title: "Inspections Support",
      description: "Pre-inspection reviews and support during official fire department inspections.",
    },
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-secondary blueprint-grid">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider mb-4 block">
            What We Do
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive Fire Safety Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From initial consultation to final approval, we provide end-to-end fire safety 
            planning services that protect your investment and save lives.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-card rounded-2xl shadow-card border border-border hover:border-accent/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-6 group-hover:shadow-glow transition-shadow duration-300">
                <service.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
