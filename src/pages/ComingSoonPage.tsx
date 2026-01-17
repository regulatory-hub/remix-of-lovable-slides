import { Layout } from "@/components/layout/Layout";
import { Clock } from "lucide-react";

interface ComingSoonPageProps {
  title: string;
}

const ComingSoonPage = ({ title }: ComingSoonPageProps) => {
  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center bg-muted/30">
        <div className="text-center px-4">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 mb-6">
            <Clock className="h-10 w-10 text-accent" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Coming Soon
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Our <span className="text-foreground font-medium">{title}</span> page is currently under development. Check back soon for updates.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default ComingSoonPage;
