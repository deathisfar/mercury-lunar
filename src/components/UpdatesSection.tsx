import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Calendar, ExternalLink } from "lucide-react";

const UpdatesSection = () => {
  const updates = [
    {
      date: "November 3-7, 2024",
      title: "Test Flight Campaign Completed",
      description: "Successfully conducted test flights and gathered 24 lunar samples over 5 days, marking a significant milestone in our sample collection capabilities.",
      category: "Testing",
      status: "latest"
    },
    {
      date: "August 11, 2025",
      title: "Phase C: Progress Presentation #4 Completed",
      description: "Delivered comprehensive testing and manufacturing updates presentation, showcasing latest progress in Phase C development and system optimization.",
      category: "Milestone",
      status: "completed"
    },
    {
      date: "July 16, 2025, 02:27 PM EDT",
      title: "Initial Mixing Tests Completed",
      description: "Successfully completed initial mixing tests with 35% resin ratio, demonstrating optimal polymer-regolith cement consistency for lunar construction applications.",
      category: "Testing",
      status: "completed"
    },
    {
      date: "June 2025",
      title: "Critical Design Review Held",
      description: "Conducted comprehensive CDR validating all system designs, manufacturing processes, and testing protocols for the automated mixing device.",
      category: "Milestone",
      status: "completed"
    },
    {
      date: "May 2025",
      title: "Functional Mixing Tests with NEMA 23",
      description: "Upgraded to NEMA 23 stepper motor and completed functional testing of mixing mechanisms, achieving target torque and speed requirements.",
      category: "Technical",
      status: "completed"
    },
    {
      date: "March 2025",
      title: "Team Expansion",
      description: "Welcomed new engineering team members and participated in FIRST Robots outreach booth, expanding our community engagement.",
      category: "Team",
      status: "completed"
    },
    {
      date: "February 2025",
      title: "Preliminary Design Review",
      description: "Successfully completed PDR phase, establishing baseline design parameters and moving forward to detailed design phase.",
      category: "Milestone",
      status: "completed"
    },
    {
      date: "December 2024",
      title: "Milestone 1 PMP Presentation",
      description: "Delivered comprehensive Project Management Presentation marking the transition from research to active development phase.",
      category: "Milestone",
      status: "completed"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Testing": return "text-accent";
      case "Milestone": return "text-primary";
      case "Technical": return "text-primary-glow";
      case "Team": return "text-accent-glow";
      default: return "text-muted-foreground";
    }
  };

  return (
    <section id="updates" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Clock className="w-4 h-4 mr-2" />
            Mission Updates
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient-primary">
            Latest Progress
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Follow our journey as we develop cutting-edge lunar construction technology 
            through rigorous testing and innovative engineering.
          </p>
        </div>

        <div className="space-y-6">
          {updates.map((update, index) => (
            <div key={index} className={`mission-control-panel hover-lift ${
              update.status === 'latest' ? 'border-primary shadow-glow' : ''
            }`}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    <Badge 
                      variant="secondary" 
                      className={getCategoryColor(update.category)}
                    >
                      {update.category}
                    </Badge>
                    {update.status === 'latest' && (
                      <Badge variant="outline" className="border-primary text-primary animate-pulse-glow">
                        Latest
                      </Badge>
                    )}
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      {update.date}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground">
                    {update.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {update.description}
                  </p>
                </div>
                
                <Button variant="ghost" size="sm" className="flex-shrink-0">
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            <Clock className="w-5 h-5 mr-2" />
            View All Updates
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UpdatesSection;