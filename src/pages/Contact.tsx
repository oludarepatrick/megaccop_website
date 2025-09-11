import { useHead } from "@unhead/react";
import ReCAPTCHA from "react-google-recaptcha";
import React, { useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Newsletter from "@/components/Newsletter";


const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  phone: z
    .string()
    .min(7, "Please enter a valid phone number")
    .max(20, "Phone number too long"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

/* --- Motion Variants (typed) --- */
const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const headerVariant: Variants = {
  hidden: { opacity: 0, y: -8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
};

const titleVariant: Variants = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const contentVariant: Variants = {
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
};

const iconsVariant: Variants = {
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.15, ease } },
};

export default function Contact() {
  useHead({ title: "Contact" });

  const formRef = useRef<HTMLFormElement | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const onCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };
    
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, []);

  const onSubmit = async (data: ContactFormData) => {
    if (!captchaToken) {
      alert("Please verify that you're not a robot.");
      return;
    }
    try {
      // backend API to send email
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, captchaToken }),
      });
      reset();
    } catch (err) {
      console.error("Failed to send message", err);
      // show UI error handling as needed
    }
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="bg-transparent text-black min-h-screen lg:p-8 pt-0 font-poppins">
      {/* Header */}
      <motion.header
        initial="hidden"
        animate="show"
        variants={headerVariant}
        className="py-3"
      >
        <div className="max-w-7xl mx-auto px-4 sm:pl-12 flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
          {/* Logo */}
          <div className="flex items-center pl-8">
          </div>

          {/* Contact Us CTA (right) */}
          <div>
            <button
              onClick={scrollToForm}
              className="bg-[#14AB55] px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#10a148] transition"
              aria-label="Contact Us"
            >
              Contact Us
            </button>
          </div>
        </div>
      </motion.header>

      {/* Hero + Form area */}
      <main className="max-w-7xl mx-auto px-4 py-16 relative">
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"> */}
        <div className="grid grid-cols-1 gap-2 items-start">
          <motion.div
            variants={titleVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="order-0 pl-8"
          >
            <div className="mb-2">
              <span className="inline-block text-sm font-medium text-[#14AB55] bg-[#154e36]/10 px-3 py-1 rounded-full">
                Get Started
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[rgba(30,30,30,0.9)] w-3/4">
              Get in touch with us.{" "}
              <span className="lg:block">We're here to assist you.</span>
            </h1>

            <p className="mt-6 text-muted-foreground max-w-xl">
              Need help or have questions about your cooperative account, loans,
              savings or the app? Send us a message and our support team will
              reach out promptly.
            </p>

            {/* big CTA like in the screenshot (left bottom) */}
          </motion.div>

          <motion.div
            variants={contentVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="order-0 lg:order-1"
          >
            <Card className="bg-white/5 border border-white/6 backdrop-blur-sm">
              <CardContent className="p-8">
                <form
                  ref={formRef}
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="sr-only">
                        Name
                      </label>
                      <Input
                        id="name"
                        {...register("name")}
                        placeholder="Your name"
                        className="bg-transparent border-0 rounded-none px-0 py-2 placeholder:text-black/60 text-black focus:outline-none focus:ring-0 focus:border-b focus:border-0 border-b border-black/20"
                        aria-invalid={!!errors.name}
                      />
                      {errors.name && (
                        <p className="text-rose-400 text-sm mt-1">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="sr-only">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        placeholder="Email address"
                        className="bg-transparent border-0 rounded-none px-0 py-2 placeholder:text-black/60 text-black focus:ring-0 focus:border-b focus:border-0 border-b border-black/20"
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && (
                        <p className="text-rose-400 text-sm mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="sr-only">
                        Phone
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        {...register("phone")}
                        placeholder="Phone number (optional)"
                        className="bg-transparent border-0 rounded-none px-0 py-2 placeholder:text-black/60 text-black focus:ring-0 focus:border-b focus:border-0 border-b border-black/20"
                        aria-invalid={!!errors.phone}
                      />
                      {errors.phone && (
                        <p className="text-rose-400 text-sm mt-1">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message (textarea) */}
                  <div>
                    <label htmlFor="message" className="sr-only">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      {...register("message")}
                      placeholder="Write your message..."
                      rows={5}
                      className="bg-transparent border-0 rounded-none px-0 py-2 placeholder:text-black/60 text-black focus:ring-0 focus:border-b focus:border-0 border-b border-black/20 resize-none"
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && (
                      <p className="text-rose-400 text-sm mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* reCAPTCHA placeholder */}
                  <div className="pt-2">
                    <div className="h-16 bg-black/3 rounded-md flex items-center justify-center text-black/60">
                      {/* [ reCAPTCHA widget ] */}
                      <ReCAPTCHA
                        sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                        onChange={onCaptchaChange}
                        ref={recaptchaRef}
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      // onClick={scrollToForm}
                      className="bg-[#14AB55] px-8 py-7 rounded-full text-white font-semibold shadow-md hover:bg-[#10a148] transition"
                    >
                      {isSubmitting ? "Sending..." : "Leave us a Message →"}
                    </Button>

                    {isSubmitSuccessful && (
                      <p className="text-green-400 text-sm mt-3">
                        ✅ Message sent — we'll be in touch.
                      </p>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Floating social icons on the right side of the hero/title */}
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={iconsVariant}
          viewport={{ once: false, amount: 0.3 }}
          className="gap-4 md:flex flex-col gap-4 items-center absolute right-6 top-[6%]"
          aria-hidden
        >
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center hover:bg-black/6 transition mb-1 sm:mb-0"
            aria-label="Facebook"
          >
            <Facebook className="w-4 h-4 text-black-400/90 " />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center hover:bg-black/6 transition mb-1 sm:mb-0"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4 text-black-400/90" />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center hover:bg-black/6 transition sm:mb-1"
            aria-label="Twitter"
          >
            <Twitter className="w-4 h-4 text-black-400/90" />
          </a>
        </motion.div>

        <Newsletter />
      </main>
    </div>
  );
}
