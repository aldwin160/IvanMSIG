import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Michael Chen",
      role: "Small Business Owner",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      content: "Sarah helped me find the perfect business insurance policy. Her expertise and attention to detail gave me complete confidence in my coverage decisions."
    },
    {
      name: "Jennifer Martinez",
      role: "Homeowner",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1ec?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      content: "When my home was damaged in a storm, Sarah was there every step of the way. Her support made the claims process so much easier during a difficult time."
    },
    {
      name: "Robert Thompson",
      role: "Retiree",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      content: "I've been working with Sarah for over 8 years. She consistently finds me better rates while maintaining excellent coverage. Truly trustworthy!"
    },
    {
      name: "Lisa Anderson",
      role: "Working Mother",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      content: "Sarah took the time to explain all my options and helped me choose life insurance that fits my budget. Her patience and knowledge are exceptional."
    },
    {
      name: "David Rodriguez",
      role: "Young Professional",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      content: "As a first-time car buyer, I was overwhelmed by insurance options. Sarah made it simple and got me great coverage at an affordable price."
    },
    {
      name: "Mary Williams",
      role: "Senior Citizen",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      content: "Sarah's compassionate approach and deep knowledge made choosing the right medicare supplement plan stress-free. Highly recommend her services!"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Testimonials</Badge>
          <h2 className="mb-6">What My Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't just take my word for it. Here's what real clients have to say about 
            their experience working with me.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <Avatar className="w-10 h-10 mr-3">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-2xl mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-2xl mb-2">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div>
              <div className="text-2xl mb-2">24hr</div>
              <div className="text-sm text-muted-foreground">Response Time</div>
            </div>
            <div>
              <div className="text-2xl mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Insurance Carriers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}