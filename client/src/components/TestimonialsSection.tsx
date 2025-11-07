import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      image: null,
      initials: "SJ",
      content: "Working with Shinabella was an absolute pleasure. Their ability to understand our vision and translate it into a beautiful, functional website exceeded our expectations. The attention to detail and creative problem-solving skills really set them apart.",
    },
    {
      name: "Michael Chen",
      role: "Marketing Director, Digital Solutions",
      image: null,
      initials: "MC",
      content: "Shinabella brought our brand to life with stunning visual designs and an intuitive user experience. Their expertise in both design and development made the entire process seamless. I highly recommend their services!",
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, Creative Agency",
      image: null,
      initials: "ER",
      content: "The level of professionalism and creativity Shinabella brings to every project is remarkable. They not only delivered a pixel-perfect design but also ensured the website performed flawlessly across all devices. A true professional!",
    },
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-32 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 space-y-4 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight" data-testid="text-testimonials-title">
            Client Testimonials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-testimonials-description">
            What clients say about working with me
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 space-y-4 h-full hover-elevate" data-testid={`card-testimonial-${index}`}>
                <Quote className="w-8 h-8 text-primary/40" />
                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3 pt-4">
                  <Avatar>
                    <AvatarImage src={testimonial.image || undefined} />
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
