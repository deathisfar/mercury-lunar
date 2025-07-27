import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Handshake, 
  Target, 
  Users, 
  Rocket,
  Calendar,
  DollarSign
} from "lucide-react";

const SponsorsSection = () => {
  const sponsors = [
    { name: "McMaster Engineering", type: "Sponsor", contribution: "Academic Support" },
    { name: "MDA Space", type: "Sponsor", contribution: "Mentorship & Testing" },
    { name: "NordSpace", type: "Sponsor", contribution: "Technical Consulting" },
    { name: "IGUS Canada", type: "Sponsor", contribution: "Component Supply" },
    { name: "3D Printing Canada", type: "Sponsor", contribution: "Prototyping" },
    { name: "MG Chemicals", type: "Sponsor", contribution: "Materials" },
    { name: "TotalBoat", type: "Sponsor", contribution: "Resin Systems" },
    { name: "McMaster MRI", type: "Partner", contribution: "Research Facilities" },
    { name: "Thode Library MakerSpace", type: "Partner", contribution: "Fabrication Access" },
    { name: "Sixpenny", type: "Partner", contribution: "Project Support" }
  ];

  const typeColors = {
    "Sponsor": "text-primary border-primary",
    "Partner": "text-muted-foreground border-border"
  };

  const campaignStats = [
    { label: "Target Samples", value: "24", unit: "samples" },
    { label: "Campaign Duration", value: "2", unit: "days" },
    { label: "Team Members", value: "8", unit: "engineers" },
    { label: "Flight Readiness", value: "85", unit: "%" }
  ];

  return (
    <section id="sponsors" className="py-20 bg-lunar-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Handshake className="w-4 h-4 mr-2" />
            Partners & Investors
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient-accent">
            Support Lunar Innovation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join industry leaders in supporting the next generation of space construction 
            technology. Your investment drives lunar infrastructure development.
          </p>
        </div>


        {/* Current Sponsors and Partners */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gradient-primary">
            Our Sponsors & Partners
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {sponsors.map((sponsor, index) => (
              <div key={index} className={`mission-control-panel hover-lift text-center border ${typeColors[sponsor.type as keyof typeof typeColors]}`}>
                <div className="space-y-3">
                  <Badge variant="outline" className={typeColors[sponsor.type as keyof typeof typeColors]}>
                    {sponsor.type}
                  </Badge>
                  <h4 className="font-bold text-foreground text-sm leading-tight">
                    {sponsor.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {sponsor.contribution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SponsorsSection;