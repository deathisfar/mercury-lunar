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
    { name: "McMaster Engineering", tier: "Gold", contribution: "Academic Support" },
    { name: "MDA Space", tier: "Gold", contribution: "Mentorship & Testing" },
    { name: "NordSpace", tier: "Silver", contribution: "Technical Consulting" },
    { name: "IGUS Canada", tier: "Silver", contribution: "Component Supply" },
    { name: "3D Printing Canada", tier: "Bronze", contribution: "Prototyping" },
    { name: "MG Chemicals", tier: "Bronze", contribution: "Materials" },
    { name: "TotalBoat", tier: "Bronze", contribution: "Resin Systems" },
    { name: "McMaster MRI", tier: "Partner", contribution: "Research Facilities" },
    { name: "Thode Library MakerSpace", tier: "Partner", contribution: "Fabrication Access" },
    { name: "Sixpenny", tier: "Partner", contribution: "Project Support" }
  ];

  const tierColors = {
    "Gold": "text-accent border-accent",
    "Silver": "text-primary border-primary", 
    "Bronze": "text-accent-glow border-accent-glow",
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

        {/* Investment Opportunity */}
        <div className="mission-control-panel mb-16 border-primary/30 bg-primary/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gradient-primary">
                Investment Opportunity
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Support groundbreaking research in lunar construction technology with 
                immediate applications for space infrastructure. Our automated polymer-regolith 
                cement mixing system represents the future of sustainable space construction.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">
                  <Target className="w-3 h-3 mr-1" />
                  Flight Campaign Ready
                </Badge>
                <Badge variant="secondary">
                  <Users className="w-3 h-3 mr-1" />
                  Student Innovation
                </Badge>
                <Badge variant="secondary">
                  <Rocket className="w-3 h-3 mr-1" />
                  CAN-RGX VIII
                </Badge>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-foreground">Flight Campaign Goals</h4>
              <div className="grid grid-cols-2 gap-4">
                {campaignStats.map((stat, index) => (
                  <div key={index} className="text-center mission-control-panel">
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                    <div className="text-xs text-accent">{stat.unit}</div>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Campaign Progress</span>
                  <span className="text-primary font-medium">85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
            </div>
          </div>
        </div>

        {/* Current Sponsors */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gradient-primary">
            Our Valued Partners
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {sponsors.map((sponsor, index) => (
              <div key={index} className={`mission-control-panel hover-lift text-center border ${tierColors[sponsor.tier as keyof typeof tierColors]}`}>
                <div className="space-y-3">
                  <Badge variant="outline" className={tierColors[sponsor.tier as keyof typeof tierColors]}>
                    {sponsor.tier}
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

        {/* Sponsorship Tiers */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gradient-accent">
            Partnership Opportunities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="mission-control-panel border-accent/30 hover-lift">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto border border-accent/30">
                  <DollarSign className="w-8 h-8 text-accent" />
                </div>
                <h4 className="text-xl font-bold text-accent">Gold Sponsor</h4>
                <div className="text-2xl font-bold text-foreground">$10,000+</div>
                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                  <li>• Logo on all materials</li>
                  <li>• Technical collaboration</li>
                  <li>• Exclusive updates</li>
                  <li>• Conference presentation</li>
                </ul>
              </div>
            </div>
            
            <div className="mission-control-panel border-primary/30 hover-lift">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto border border-primary/30">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-primary">Silver Sponsor</h4>
                <div className="text-2xl font-bold text-foreground">$5,000+</div>
                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                  <li>• Logo recognition</li>
                  <li>• Progress reports</li>
                  <li>• Team interaction</li>
                  <li>• Flight campaign access</li>
                </ul>
              </div>
            </div>
            
            <div className="mission-control-panel hover-lift">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-muted/20 rounded-full flex items-center justify-center mx-auto border border-muted/30">
                  <Handshake className="w-8 h-8 text-muted-foreground" />
                </div>
                <h4 className="text-xl font-bold text-foreground">Bronze Sponsor</h4>
                <div className="text-2xl font-bold text-foreground">$1,000+</div>
                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                  <li>• Website recognition</li>
                  <li>• Newsletter updates</li>
                  <li>• Community access</li>
                  <li>• Thank you package</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="mission-control-panel bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30 max-w-2xl mx-auto">
            <h4 className="text-xl font-bold text-foreground mb-4">
              Ready to Support Lunar Construction?
            </h4>
            <p className="text-muted-foreground mb-6">
              Contact us to discuss partnership opportunities and investment proposals. 
              Together, we can build the future of space infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Meeting
              </Button>
              <Button variant="outline" size="lg">
                <Target className="w-5 h-5 mr-2" />
                Download Proposal
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;