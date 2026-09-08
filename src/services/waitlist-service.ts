import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

export const waitlistSchema = z.object({
  email: z.string().trim().email({ message: "Please enter a valid email address" }).max(255),
  name: z.string().trim().max(100).optional(),
});

export type WaitlistFormData = z.infer<typeof waitlistSchema>;

export type SignupType = "simone_free" | "olivia_early_access" | "ellis_waitlist";

export const submitWaitlistSignup = async (
  data: WaitlistFormData,
  signupType: SignupType
) => {
  const { error } = await supabase.from("waitlist_signups").insert({
    email: data.email,
    name: data.name || null,
    signup_type: signupType,
  });

  if (error) {
    if (error.code === "23505") {
      throw new Error("You've already signed up! We'll be in touch soon.");
    }
    throw new Error("Something went wrong. Please try again.");
  }
};
