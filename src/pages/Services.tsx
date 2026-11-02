import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import EditorialHeader from "@/components/EditorialHeader";
import { serviceGroups, serviceContactPath } from "@/lib/service-groups";

const Services = () => {
  const [activeId, setActiveId] = useState(serviceGroups[0]?.id || "pharma-advisory");

  useEffect(() => {
    const updateActive = () => {
      let current = serviceGroups[0]?.id || "pharma-advisory";
      for (const group of serviceGroups) {
        const section = document.getElementById(group.id);
        if (section && section.getBoundingClientRect().top <= 210) current = group.id;
      }
      setActiveId(current);
    };
    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    return () => window.removeEventListener("scroll", updateActive);
  }, []);

  return (
    <div className="min-h-screen">
      <EditorialHeader
        title="Ten services. Zero fluff."
        description="Since 1994. One million+ man-hours of commercial and technical expertise."
        label="Our capabilities"
      >
        <Button asChild className="rounded-sm bg-business-navy text-business-text-light hover:bg-business-blue">
          <Link to="/contact">Book a Consultation</Link>
        </Button>
      </EditorialHeader>

      <nav aria-label="Service groups" className="sticky top-16 z-30 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4">
          {serviceGroups.map((group) => (
            <Link
              key={group.id}
              to={`#${group.id}`}
              aria-current={activeId === group.id ? "location" : undefined}
              className={`py-4 px-2 md:px-4 text-xs md:text-sm leading-relaxed border-b-2 transition-colors ${activeId === group.id ? "border-business-blue text-business-navy font-semibold" : "border-transparent text-muted-foreground hover:text-business-blue"}`}
            >
              {group.title}
            </Link>
          ))}
        </div>
      </nav>

      {serviceGroups.map((group, index) => (
        <section key={group.id} id={group.id} className={`scroll-mt-52 md:scroll-mt-40 py-16 md:py-24 border-b border-border ${index % 2 ? "bg-secondary/45" : "bg-background"}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 md:grid md:grid-cols-12 gap-8 items-end">
              <div className="md:col-span-7">
                <p className="text-xs text-accent font-semibold mb-4">0{index + 1}</p>
                <h2 className="text-3xl md:text-4xl font-normal text-business-navy leading-tight">{group.title}</h2>
              </div>
              <p className="md:col-span-5 text-lg text-muted-foreground mt-5 md:mt-0">{group.intro}</p>
            </div>
            <div className={`grid gap-6 ${group.services.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
              {group.services.map((service) => (
                <Card key={service.title} className="rounded-sm bg-card border-border shadow-none flex flex-col transition-all duration-300 motion-safe:hover:-translate-y-1 hover:border-business-blue">
                  <CardContent className="p-7 flex flex-col flex-1">
                    <h3 className="text-2xl font-normal text-business-navy mb-5">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-8 flex-1">{service.description}</p>
                    <Button asChild variant="link" className="justify-start p-0 h-auto text-business-blue whitespace-normal text-left">
                      <Link to={serviceContactPath(service.title)}>Talk to us about this →</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 bg-business-dark text-business-text-light">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-normal leading-tight mb-8">Not sure which service you need? Tell us the problem. We'll tell you the fix.</h2>
          <Button asChild size="lg" className="rounded-sm bg-business-text-light text-business-navy hover:bg-business-light-blue">
            <Link to="/contact">Book a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
