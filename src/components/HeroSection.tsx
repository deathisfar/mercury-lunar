import { Button } from "@/components/ui/button";
import { Rocket, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-lunar-surface.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-background/80"></div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute inset-0 z-1">
        <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full animate-pulse-glow"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-accent rounded-full animate-float"></div>
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-primary-glow rounded-full animate-pulse-glow"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-slide-up">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/20 rounded-full border border-primary/30 animate-float">
              <Rocket className="w-12 h-12 text-primary" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Welcome to{" "}
            <span className="text-gradient-primary">Team MERCuRy</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            Pioneering Lunar Construction with{" "}
            <span className="text-gradient-accent font-semibold">
              Polymer-Regolith Cement
            </span>
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Developing sustainable space infrastructure using lunar regolith simulant 
            and automated mixing technology for the future of space construction.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="outline" size="lg" asChild>
              <a href="#documents">
                Learn More
              </a>
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient-primary">24</div>
              <div className="text-sm text-muted-foreground">Samples Target</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient-accent">703</div>
              <div className="text-sm text-muted-foreground">Day Campaign</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient-primary">2023</div>
              <div className="text-sm text-muted-foreground">Founded</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;