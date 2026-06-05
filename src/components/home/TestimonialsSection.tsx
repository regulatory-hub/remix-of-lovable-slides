import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "ElectroTech Industries",
    role: "Quality Manager",
    content: "BISCRS Consultant helped us get BIS certification in record time. Their expertise and guidance made the complex process simple.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    company: "Smart Devices Pvt Ltd",
    role: "Director",
    content: "Excellent service! They handled our CE marking and WPC certification professionally. Highly recommend for any compliance needs.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    company: "Global Electronics",
    role: "Compliance Head",
    content: "The team's knowledge of regulatory requirements across multiple countries saved us months of research and testing delays.",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            Trusted by manufacturers and brands across India and globally
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative p-5 md:p-6 bg-card rounded-lg border border-border hover:shadow-card transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 h-6 w-6 md:h-8 md:w-8 text-accent/20" />
              
              {/* Rating */}
              <div className="flex gap-0.5 mb-3 md:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4 md:mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-foreground text-sm md:text-base">
                  {testimonial.name}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  {testimonial.role}, {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
