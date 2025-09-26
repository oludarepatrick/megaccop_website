import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function ContactSection() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("https://your-api.com/newsletter/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("Failed to subscribe");

      setMessage("✅ Subscription successful!");
      setEmail("");
    } catch (err) {
      setMessage(
        `❌ Something went wrong. Please try again. ${(err as Error).message}`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-[#F9FAFB] relative py-16 pb-0 font-poppins">
      {/* Contact Info */}
      <p className="text-gray-600 px-6">Contact Info</p>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 py-16 pt-4 grid grid-cols-1 md:grid-cols-3 gap-12 bg-white relative z-10"
      >
        {/* Left Heading */}
        <div>
          {/* <p className="text-gray-600 mb-3">Contact Info</p> */}
          <h2 className="text-3xl md:text-4xl font-extrabold leading-snug text-black">
            We are always <br /> happy to assist you
          </h2>
        </div>

        {/* Email */}
        <div>
          <h3 className="font-semibold text-lg text-black">Email Address</h3>
          <div className="w-6 h-0.5 bg-black my-2" />
          <p className="font-semibold text-black">info@megacoop.com</p>
          <p className="text-gray-600 text-sm mt-2">
            Assistance hours: <br /> Monday – Friday 6 am to 8 pm EST
          </p>
        </div>

        {/* Phone */}
        <div>
          <h3 className="font-semibold text-lg text-black">Number</h3>
          <div className="w-6 h-0.5 bg-black my-2" />
          <p className="font-semibold text-black">08076743972</p>
          <p className="text-gray-600 text-sm mt-2">
            Assistance hours: <br /> Monday – Friday 6 am to 8 pm EST
          </p>
        </div>
      </motion.div>

      {/* Newsletter */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-[#14AB55] py-16 px-4"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
              Subscribe to our Newsletter
            </h2>
            <p className="text-white/90 max-w-lg">
              Subscribe for Updates: Stay informed about the latest investor
              updates, financial results, and announcements by subscribing to
              our newsletter.
            </p>
          </div>

          {/* Input Form */}
          <form
            onSubmit={handleSubmit}
            className="flex rounded-2xl overflow-hidden w-full max-w-md mx-auto md:mx-0 "
          >
            < Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="bg-white/10 md:flex-1 px-2 text-sm sm:text-base text-white outline-none h-12 placeholder-whitebg border-0 rounded-none"
              required
            />
            <Button
              type="submit"
              disabled={loading}
              className="bg-white font-semibold text-green-500 hover:bg-[#0f8a45] hover:text-white transition disabled:opacity-70 disabled:cursor-not-allowed h-12 flex items-center justify-center rounded-none"
            >
              {loading ? "..." : "Subscribe"}
            </Button>
          </form>

          {/* Message */}
          {message && (
            <p className="text-white mt-4 text-sm font-medium">{message}</p>
          )}
        </div>
      </motion.div>
    </section>
  );
}
