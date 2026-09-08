import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  waitlistSchema,
  submitWaitlistSignup,
  type WaitlistFormData,
  type SignupType,
} from "@/services/waitlist-service";
import { CheckCircle, Loader2 } from "lucide-react";
import { ReactNode } from "react";
import { Reg, TM } from "@/components/ui/trademark";

interface WaitlistModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  signupType: SignupType;
}

const MODAL_CONFIG: Record<SignupType, { title: ReactNode; description: ReactNode; cta: string }> = {
  simone_free: {
    title: <>Commence Case Intake with SimoneAI<Reg /></>,
    description: "Enter your telephonic dispatch address to initialize preliminary clearance—no currency required.",
    cta: "Commence Inquiry",
  },
  olivia_early_access: {
    title: <>Requisition Early Archive Clearance: OliviaAI<Reg /></>,
    description: <>Enlist on the precinct registry to be among the first authors deploying the OliviaAI<Reg /> Master Ledger.</>,
    cta: "Request Precinct Clearance",
  },
  ellis_waitlist: {
    title: <>Join the EllisAI<Reg /> Forensic Waitlist</>,
    description: <>The developmental coroner is finalizing calibration. Enlist to receive telegraphic notice upon arrival.</>,
    cta: "Enter Registry",
  },
};

const WaitlistModal = ({ open, onOpenChange, signupType }: WaitlistModalProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const config = MODAL_CONFIG[signupType];

  const form = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: { email: "", name: "" },
  });

  const onSubmit = async (data: WaitlistFormData) => {
    setSubmitError(null);
    try {
      await submitWaitlistSignup(data, signupType);
      setIsSubmitted(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  const handleOpenChange = (nextOpen: boolean) => {
    if (!nextOpen) {
      // Reset state on close
      setTimeout(() => {
        setIsSubmitted(false);
        setSubmitError(null);
        form.reset();
      }, 300);
    }
    onOpenChange(nextOpen);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md">
        {isSubmitted ? (
          <div className="flex flex-col items-center text-center py-6 gap-4">
            <div className="w-12 h-12 rounded-full bg-[#36FF9B]/20 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-[#059669]" />
            </div>
            <DialogTitle className="text-xl font-bold text-foreground">
              You're in!
            </DialogTitle>
            <p className="text-muted-foreground">
              We'll reach out soon. Keep an eye on your inbox.
            </p>
            <Button
              onClick={() => handleOpenChange(false)}
              className="rounded-full bg-[#36FF9B] hover:bg-[#2ee588] text-[#081813] font-semibold mt-2"
            >
              Close
            </Button>
          </div>
        ) : (
          <>
            <div className="flex justify-center mb-1">
              <img
                src="/archivest-vertical.svg"
                alt="Archivest"
                className="h-14 w-auto object-contain"
              />
            </div>
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-foreground text-center">
                {config.title}
              </DialogTitle>
              <DialogDescription className="text-center">{config.description}</DialogDescription>
            </DialogHeader>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name (optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
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
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="you@example.com" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {submitError && (
                  <p className="text-sm text-destructive">{submitError}</p>
                )}

                <Button
                  type="submit"
                  disabled={form.formState.isSubmitting}
                  className="w-full rounded-full bg-gradient-to-r from-[#36FF9B] to-[#10B981] hover:from-[#10B981] hover:to-[#36FF9B] text-[#081813] font-semibold shadow-md shadow-[#36FF9B]/20"
                >
                  {form.formState.isSubmitting ? (
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                  ) : null}
                  {config.cta}
                </Button>
              </form>
            </Form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistModal;
