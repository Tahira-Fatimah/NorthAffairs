import { z } from "zod";

/**
 * Trip schema for static data
 */
export const tripSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  price: z.string(),
  availability: z.string(),
  itinerary: z.array(z.string()),
  images: z.array(z.string()),
  featured: z.boolean().default(false),
});

/**
 * Contact request schema (for form validation only)
 */
export const contactRequestSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

export const topActivitiesSchema = z.object({
  id: z.string(),
  destinationId: z.string(),
  description: z.string(),
  headline: z.string().optional(),
  title: z.string(),
  image: z.string(),
  quickInfo: z.object({
    bestTime: z.string(),
    idealFor: z.array(z.string()),
    duration: z.string(),
  }),
});

export const topTouristAttractionsSchema = z.object({
  id: z.string(),
  destinationId: z.string(),
  description: z.string(),
  headline: z.string().optional(),
  title: z.string(),
  image: z.string(),
  quickInfo: z.object({
    bestTime: z.string(),
    idealFor: z.array(z.string()),
    duration: z.string(),
  }),
});

export type TopTouristAttractions = z.infer<typeof topTouristAttractionsSchema>;
export type TopActivities = z.infer<typeof topActivitiesSchema>;
export type Trip = z.infer<typeof tripSchema>;
export type ContactRequest = z.infer<typeof contactRequestSchema>;
