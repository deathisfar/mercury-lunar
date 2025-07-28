import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Download, Calendar, Eye } from "lucide-react";

const DocumentsSection = () => {
  const documents = [
    {
      title: "Critical Design Review (CDR)",
      filename: "MERCuRy Phase B_ Critical Design Review (CDR).pdf",
      date: "June 2025",
      size: "2.4 MB",
      description: "Comprehensive design validation and system specifications for the automated mixing device.",
      category: "Design Review",
      status: "latest"
    },
    {
      title: "Milestone 1 Project Management Presentation",
      filename: "MERCuRy Milestone 1_ Project Management Presentation (PMP).pptx",
      date: "December 2024",
      size: "1.8 MB",
      description: "Project management overview and transition from research to development phase.",
      category: "Milestone",
      status: "archived"
    },
    {
      title: "Technical Engineering Design Package",
      filename: "Final MERCURY TEDP Rev-A.docx",
      date: "February 2025",
      size: "3.2 MB",
      description: "Detailed technical specifications and engineering design documentation.",
      category: "Technical",
      status: "archived"
    },
    {
      title: "Preliminary Design Review (PDR)",
      filename: "RGXVIII - MERCuRy Phase A_ PDR.pptx",
      date: "February 2025",
      size: "2.1 MB",
      description: "Initial design concepts and feasibility analysis for lunar construction system.",
      category: "Design Review",
      status: "archived"
    },
    {
      title: "Progress Presentation 1",
      filename: "CAN-RGX MERCuRy PP1_ January 21.pptx",
      date: "January 2025",
      size: "1.5 MB",
      description: "First quarterly progress update and research findings.",
      category: "Progress",
      status: "archived"
    },
    {
      title: "Progress Presentation 2",
      filename: "CAN-RGX MERCuRy PP2_ March 26.pptx",
      date: "March 2025",
      size: "1.7 MB",
      description: "Second quarterly progress update including prototype development.",
      category: "Progress",
      status: "archived"
    },
    {
      title: "Progress Presentation 3",
      filename: "Copy of MERCuRy PP3_ Week of May 5.pptx",
      date: "May 2025",
      size: "1.9 MB",
      description: "Third quarterly progress update with testing results and system optimization.",
      category: "Progress",
      status: "archived"
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Design Review": return "🔍";
      case "Milestone": return "🎯";
      case "Technical": return "⚙️";
      case "Progress": return "📈";
      default: return "📄";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Design Review": return "text-primary";
      case "Milestone": return "text-accent";
      case "Technical": return "text-primary-glow";
      case "Progress": return "text-accent-glow";
      default: return "text-muted-foreground";
    }
  };

  return (
    <section id="documents" className="py-20 bg-lunar-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <FileText className="w-4 h-4 mr-2" />
            Technical Library
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient-accent">
            Project Documents
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access our comprehensive technical documentation, design reviews, and 
            progress reports detailing our lunar construction technology development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, index) => (
            <div key={index} className={`mission-control-panel hover-lift group ${
              doc.status === 'latest' ? 'border-accent shadow-accent-glow' : ''
            }`}>
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{getCategoryIcon(doc.category)}</span>
                    <Badge 
                      variant="secondary" 
                      className={`text-xs ${getCategoryColor(doc.category)}`}
                    >
                      {doc.category}
                    </Badge>
                  </div>
                  {doc.status === 'latest' && (
                    <Badge variant="outline" className="border-accent text-accent animate-pulse-glow">
                      Latest
                    </Badge>
                  )}
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-bold text-lg text-foreground leading-tight">
                    {doc.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {doc.description}
                  </p>
                </div>
                
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {doc.date}
                  </div>
                  <div className="text-xs">
                    {doc.size}
                  </div>
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1 group-hover:border-primary transition-colors">
                    <Eye className="w-4 h-4 mr-2" />
                    Preview
                  </Button>
                  <Button variant="space" size="sm" className="flex-1">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
                
                <div className="text-xs text-muted-foreground font-mono bg-muted/30 p-2 rounded border-l-2 border-primary/30">
                  {doc.filename}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need access to additional documentation or have questions about our research?
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="#contact">
              <FileText className="w-5 h-5 mr-2" />
              Request Access
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DocumentsSection;