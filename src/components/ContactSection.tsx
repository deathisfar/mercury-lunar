import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, Send, Rocket } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Launched! 🚀",
      description: "Thank you for your interest. We'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "2010.aminnazari@gmail.com",
      link: "mailto:2010.aminnazari@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "McMaster University, 1280 Main St W, Hamilton, ON L8S 4L8, Canada",
      link: "https://maps.google.com/?q=McMaster+University"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Rocket className="w-4 h-4 mr-2" />
            Mission Control
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient-primary">
            Contact Team MERCuRy
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to support lunar construction technology? Let's discuss partnerships, 
            funding opportunities, or technical collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gradient-accent">
                Get In Touch
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you're an investor, potential sponsor, research collaborator, 
                or just passionate about space technology, we'd love to hear from you. 
                Join us in pioneering the future of lunar construction.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="mission-control-panel hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/20 rounded-lg border border-primary/30">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-foreground mb-1">
                        {info.label}
                      </div>
                      <a 
                        href={info.link}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        target={info.label === "Location" ? "_blank" : undefined}
                        rel={info.label === "Location" ? "noopener noreferrer" : undefined}
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Contact Form */}
          <div className="mission-control-panel">
            <h3 className="text-2xl font-bold mb-6 text-gradient-primary">
              Launch Your Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Name *
                </label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Your full name"
                  required
                  className="mission-control-input"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Email *
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="your.email@example.com"
                  required
                  className="mission-control-input"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Message *
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell us about your interest in our lunar construction project..."
                  required
                  rows={6}
                  className="mission-control-input resize-none"
                />
              </div>
              
              <Button type="submit" variant="mission" size="lg" className="w-full group">
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Launch Message
              </Button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;