import { Layout } from "@/components/layout/Layout";
import { MessageCircle, Mail, Phone, User, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-20 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 tech-pattern opacity-20" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent mb-4">
              <span className="text-sm font-semibold">Contact Us</span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Get In Touch
            </h1>
            <p className="text-primary-foreground/75 text-base md:text-lg max-w-2xl">
              Reach out to us via WhatsApp or Email. We're here to help you with all your compliance needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12 md:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-6">
            {/* WhatsApp */}
            <a
              href="https://wa.me/917082130463"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 p-8 bg-card rounded-xl border border-border hover:border-accent/30 hover:shadow-card transition-all text-center"
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <MessageCircle className="h-8 w-8 text-accent" />
              </div>
              <h2 className="font-heading text-xl font-bold text-foreground">WhatsApp</h2>
              <p className="text-muted-foreground text-sm">Chat with us instantly</p>
              <div className="flex items-center gap-2 text-foreground font-medium">
                <Phone className="h-4 w-4" />
                +91 70821 30463
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:buscrs@consultant.com"
              className="group flex flex-col items-center gap-4 p-8 bg-card rounded-xl border border-border hover:border-accent/30 hover:shadow-card transition-all text-center"
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Mail className="h-8 w-8 text-accent" />
              </div>
              <h2 className="font-heading text-xl font-bold text-foreground">Email</h2>
              <p className="text-muted-foreground text-sm">Send us a detailed inquiry</p>
              <div className="flex items-center gap-2 text-foreground font-medium">
                <Mail className="h-4 w-4" />
                buscrs@consultant.com
              </div>
            </a>
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="default" size="lg">
              <a href="https://wa.me/917082130463" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                Start a Conversation
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
