import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function ContactFormSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", company: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section className="relative z-20 w-full pb-16 md:pb-24 px-6 md:px-12 lg:px-24">
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] rounded-3xl overflow-hidden border border-border"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Left Column - Form */}
          <div
            className="p-8 md:p-12 lg:p-16 min-w-0"
            style={{
              background: "linear-gradient(to bottom, #000000, #2C2C2C)",
            }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-muted-foreground text-sm"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Jane Smith"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-transparent border-border focus:border-foreground text-foreground placeholder:text-muted-foreground/50"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-muted-foreground text-sm"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="jane@mono.ai"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-transparent border-border focus:border-foreground text-foreground placeholder:text-muted-foreground/50"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="company"
                  className="text-muted-foreground text-sm"
                >
                  Company
                </label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Apple"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-transparent border-border focus:border-foreground text-foreground placeholder:text-muted-foreground/50"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-muted-foreground text-sm"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="I need help with..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="bg-transparent border-border focus:border-foreground text-foreground placeholder:text-muted-foreground/50 resize-none"
                />
              </div>

              <div className="flex items-center justify-between mt-4">
                <Button
                  type="submit"
                  variant="glass"
                  disabled={isSubmitting}
                  className="px-6"
                >
                  {isSubmitting ? "Sending..." : "Get in touch"}
                </Button>
                <span className="text-muted-foreground text-sm flex items-center gap-2">
                  <span className="text-muted-foreground/60">⏱</span>
                  Avg. response: 24h
                </span>
              </div>
            </form>
          </div>

          {/* Right Column - Contact Info */}
          <div
            className="flex flex-col justify-center min-w-0"
            style={{ backgroundColor: "#121212" }}
          >
            {/* Phone */}
            <div className="flex flex-col gap-2 p-8 md:p-12 border-b border-border">
              <Phone className="w-6 h-6 text-foreground" strokeWidth={1.5} />
              <span className="text-foreground text-base font-medium mt-2">Phone</span>
              <span className="text-muted-foreground text-base">1-800-275-2273</span>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2 p-8 md:p-12 border-b border-border">
              <Mail className="w-6 h-6 text-foreground" strokeWidth={1.5} />
              <span className="text-foreground text-base font-medium mt-2">Email</span>
              <span className="text-muted-foreground text-base">support@mono.ai</span>
            </div>

            {/* Office */}
            <div className="flex flex-col gap-2 p-8 md:p-12">
              <MapPin className="w-6 h-6 text-foreground" strokeWidth={1.5} />
              <span className="text-foreground text-base font-medium mt-2">Office</span>
              <span className="text-muted-foreground text-base">5678 Dupont Hwy Dover, DE 19901</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
