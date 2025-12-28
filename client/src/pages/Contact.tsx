import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactRequestSchema } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Send, Phone, MapPin } from "lucide-react";
import { z } from "zod";
import { useState } from "react";
import QuickContact from "@/components/Contact/QuickContact";

type ContactFormValues = z.infer<typeof contactRequestSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactRequestSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // async function onSubmit(data: ContactFormValues) {
  //   setIsSubmitting(true);
    
  //   try {
  //     const res = await fetch("/api/contact", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(data),
  //     });
      
  //     if (!res.ok) {
  //       // const errorData = await res.json();
        
  //       throw new Error('Failed to send message');
  //     }

  //     form.reset();
  //     setIsSubmitting(false);
  //     toast({
  //       title: "Message Sent!",
  //       description: "We'll get back to you shortly regarding your inquiry.",
  //       variant: "default",
  //     });
  //   } catch (error) {
  //     console.error('Error submitting form:', error);
  //     setIsSubmitting(false);
  //     toast({
  //       title: "Error",
  //       description: error instanceof Error ? error.message : "Failed to send message. Please try again later.",
  //       variant: "destructive",
  //     });
  //   }
  // }
  
  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
  
    try {
      const phoneNumber = "923033333530"; 
  
      const whatsappMessage = encodeURIComponent(
        `New Contact Inquiry \nName: ${data.name} \nEmail: ${data.email} \nMessage: ${data.message}`

      );
  
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
  
      // Open WhatsApp
      window.open(whatsappUrl, "_blank");
  
      form.reset();
      toast({
        title: "Redirected to WhatsApp",
        description: "Please send the message in WhatsApp to complete your inquiry.",
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Unable to open WhatsApp. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }
  

  return (
    <div className="min-h-screen bg-secondary/20 pb-24">
      {/* Header Image/Banner */}
      <div className="bg-primary pt-12 pb-16 px-6 text-white ">
        <div className="max-w-md mx-auto">
          <Mail className="w-10 h-10 mb-4 opacity-80" />
          <h1 className="text-3xl mb-2">Get in Touch</h1>
          <p className="text-primary-foreground/80 leading-relaxed">
            Ready to plan your next adventure? Fill out the form below or reach us directly.
          </p>
        </div>
      </div>

      <main className="max-w-md mx-auto px-4 -mt-8">
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-border/50">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Full Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Kamal Subhani" 
                        className="bg-secondary/20 border-border/50 focus:bg-white transition-all h-12"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email Address</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="kamal@gmail.com" 
                        type="email"
                        className="bg-secondary/20 border-border/50 focus:bg-white transition-all h-12"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Your Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="I'm interested in the Skardu trip..." 
                        className="min-h-[120px] bg-secondary/20 border-border/50 focus:bg-white transition-all resize-none p-4"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </Form>
        </div>

        {/* Quick Contact Info */}
        <QuickContact />
      </main>
    </div>
  );
}
