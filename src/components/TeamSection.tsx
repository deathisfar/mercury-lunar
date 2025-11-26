import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import teamImage from "@/assets/team-mercury-intro.JPG";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Angela Tollis",
      role: "Team Lead",
      description: "Leading overall project coordination and strategic planning for lunar construction initiatives.",
      expertise: ["Project Management", "Strategy", "Leadership"],
      linkedin: "https://www.linkedin.com/in/angela-tollis/",
      image: "/team-photos/angela-tollis.jpg"
    },
    {
      name: "Gabriel Cino",
      role: "Manufacturing Lead",
      description: "Overseeing manufacturing processes and quality control for mixing device production.",
      expertise: ["Manufacturing", "Quality Control", "Process Design"],
      linkedin: "https://www.linkedin.com/in/cino-gabriel/",
      image: "/team-photos/gabriel-cino.jpg"
    },
    {
      name: "Kristen Di Loreto",
      role: "Research Lead",
      description: "Conducting research on polymer-regolith cement properties and optimization.",
      expertise: ["Materials Science", "Research", "Testing"],
      linkedin: "https://www.linkedin.com/in/kris10d/",
      image: "/team-photos/kristen-di-loreto.jpg"
    },
    {
      name: "Aria Kennaley",
      role: "Alumni",
      description: "Managing communications, partnerships, and public engagement initiatives.",
      expertise: ["Communications", "Partnerships", "Outreach"],
      linkedin: "https://www.linkedin.com/in/aria-kennaley-203776203/"
    },
    {
      name: "Slader Moon",
      role: "Design Lead",
      description: "Leading mechanical design including agitation disk and mixing system components.",
      expertise: ["Mechanical Design", "CAD", "System Integration"],
      linkedin: "https://www.linkedin.com/in/slader-moon/",
      image: "/team-photos/slader-moon.jpg"
    },
    {
      name: "Emma Burdon",
      role: "Alumni",
      description: "Developing Arduino-based control systems for automated mixing operations.",
      expertise: ["Controls", "Arduino", "Automation"],
      linkedin: "https://www.linkedin.com/in/emma-burdon/"
    },
    {
      name: "Amin Nazari",
      role: "Systems Lead",
      description: "Ensuring system-level integration and performance optimization.",
      expertise: ["Systems Engineering", "Integration", "Optimization"],
      linkedin: "https://www.linkedin.com/in/aminnazari2010/",
      image: "/team-photos/amin-nazari.jpg"
    },
    {
      name: "Kaia Turchio",
      role: "Outreach Lead",
      description: "Supporting system analysis and technical documentation development.",
      expertise: ["Systems Analysis", "Documentation", "Technical Writing"],
      linkedin: "https://www.linkedin.com/in/kaia-turchio-0a481330b/",
      image: "/team-photos/kaia-turchio.jpg"
    }
  ];

  return (
    <section id="team" className="py-20 bg-lunar-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Mail className="w-4 h-4 mr-2" />
            Our Team
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient-accent">
            Meet Team MERCuRy
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A passionate group of student engineers and researchers dedicated to 
            advancing lunar construction technology.
          </p>
          <div className="relative max-w-2xl mx-auto mb-12">
            <img 
              src={teamImage} 
              alt="Team MERCuRy working together"
              className="rounded-lg shadow-elegant hover-lift"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card mission-control-panel group">
              <div className="space-y-4">
                <Avatar className="w-16 h-16 mx-auto border-2 border-primary/30 group-hover:border-primary/50 transition-colors">
                  {member.image && <AvatarImage src={member.image} alt={member.name} />}
                  <AvatarFallback className="bg-primary/20 text-primary font-bold text-xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <div className="text-center space-y-2">
                  <h3 className="font-bold text-lg text-foreground">{member.name}</h3>
                  <div className="flex flex-wrap justify-center gap-1">
                    <Badge variant="secondary" className="text-xs">
                      {member.role}
                    </Badge>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {member.expertise.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                {member.linkedin && (
                  <div className="flex justify-center pt-2">
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-primary/20 rounded-full transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-muted-foreground hover:text-primary" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Interested? Get in touch with us{" "}
            <a href="#contact" className="text-primary hover:text-primary-glow transition-colors">
              here
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;