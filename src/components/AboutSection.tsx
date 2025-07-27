import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Target, Zap } from "lucide-react";
import labImage from "@/assets/lab-equipment.jpg";

const AboutSection = () => {
  const milestones = [
    { date: "2023", title: "Team Formation", description: "Established at McMaster University", status: "completed" },
    { date: "Dec 2024", title: "Research Phase", description: "Milestone 1 PMP presentation", status: "completed" },
    { date: "Feb 2025", title: "PDR Completion", description: "Preliminary Design Review", status: "completed" },
    { date: "Jun 2025", title: "CDR Validation", description: "Critical Design Review", status: "completed" },
    { date: "Jul 2025", title: "Flight Campaign", description: "24 samples over 2 days", status: "current" },
  ];

  const partners = [
    "MDA Space", "NordSpace", "MG Chemicals", "TotalBoat", 
    "McMaster Engineering", "IGUS Canada", "3D Printing Canada"
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Target className="w-4 h-4 mr-2" />
            Our Mission
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient-primary">
            About Team MERCuRy
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leading the future of sustainable space construction through innovative 
            polymer-regolith cement technology and automated mixing systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              Pioneering Space Construction
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Since our establishment in 2023 at McMaster University, Team MERCuRy has 
              progressed from initial research to prototype testing. Our innovative approach 
              combines lunar regolith simulant (LSP-2) with two-part resin using an 
              automated mixing device designed for lunar brick production.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Through partnerships with industry leaders and rigorous testing protocols, 
              we're developing technology that will enable sustainable construction on the 
              lunar surface, paving the way for future space habitation.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">
                <Zap className="w-3 h-3 mr-1" />
                Automated Mixing
              </Badge>
              <Badge variant="secondary">
                <Users className="w-3 h-3 mr-1" />
                Student-Led
              </Badge>
              <Badge variant="secondary">
                <Calendar className="w-3 h-3 mr-1" />
                CAN-RGX VIII
              </Badge>
            </div>
          </div>
          <div className="relative">
            <img 
              src={labImage} 
              alt="Laboratory Equipment"
              className="rounded-lg shadow-elegant hover-lift"
            />
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gradient-accent">
            Mission Timeline
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-border"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-center">
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-2 ${
                    milestone.status === 'completed' ? 'bg-primary border-primary' :
                    milestone.status === 'current' ? 'bg-accent border-accent animate-pulse-glow' :
                    'bg-background border-border'
                  }`}></div>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 ml-auto'}`}>
                    <div className="mission-control-panel hover-lift">
                      <div className="font-bold text-primary text-sm">{milestone.date}</div>
                      <div className="font-semibold text-foreground">{milestone.title}</div>
                      <div className="text-sm text-muted-foreground">{milestone.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partners */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8 text-gradient-primary">
            Our Partners
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {partners.map((partner, index) => (
              <Badge key={index} variant="outline" className="hover-lift">
                {partner}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;