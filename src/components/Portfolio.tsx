import { ArrowUpRight } from "lucide-react";

const Portfolio = () => {
  const projects = [
    // {
    //   title: "Central Business Tower",
    //   category: "Commercial",
    //   description: "Complete fire safety system design for a 45-story commercial tower including evacuation plans and suppression systems.",
    //   image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&auto=format&fit=crop",
    // },
    // {
    //   title: "Metro Shopping Complex",
    //   category: "Retail",
    //   description: "Comprehensive fire safety planning for a 200,000 sq ft shopping mall with cinema and food court areas.",
    //   image: "https://images.unsplash.com/photo-1567449303078-57ad995bd17f?w=800&auto=format&fit=crop",
    // },
    // {
    //   title: "Industrial Manufacturing Plant",
    //   category: "Industrial",
    //   description: "Specialized fire safety solutions for hazardous materials handling and storage facilities.",
    //   image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&auto=format&fit=crop",
    // },
    {
      title: "Riverside Residential Complex",
      category: "مسکونی",
      description: "Multi-building residential project with integrated fire alarm and sprinkler system design.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop",
    },
    {
      title: "City General Hospital",
      category: "بیمارستان",
      description: "Critical fire safety planning for a 500-bed hospital with specialized ICU and surgical requirements.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop",
    },
    {
      title: "University Campus Center",
      category: "آموزشی",
      description: "Campus-wide fire safety master plan including dormitories, lecture halls, and laboratories.",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider mb-4 block">
            نمونه کارهای ما
          </span>
          {/* <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2> */}
          <p className="text-muted-foreground text-lg">
            با مرور نمونه‌کارهای ما، با پروژه‌های موفق ایمنی و آتش‌نشانی در ساختمان‌ها و صنایع آشنا شوید
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-card cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div dir="rtl" className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 rounded-full bg-accent/90 text-accent-foreground text-xs font-medium mb-3">
                  {project.category}
                </span>
                {/* <h3 className="font-serif text-xl font-semibold text-primary-foreground mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {project.title}
                </h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                  {project.description}
                </p> */}
              </div>

              {/* Arrow Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-accent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                <ArrowUpRight className="w-5 h-5 text-accent-foreground" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
