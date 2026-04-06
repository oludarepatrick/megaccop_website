import { motion } from "framer-motion";
// import { useState } from "react";
import ContactImage from "../assets/lady-gadget-car.webp"
// import { Button } from "./ui/button";
// import { Input } from "./ui/input";

export default function ContactSection() {
  // const [email, setEmail] = useState("");
  // const [loading, setLoading] = useState(false);
  // const [message, setMessage] = useState("");

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setMessage("");

    // try {
    //   const res = await fetch("https://your-api.com/newsletter/subscribe", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ email }),
    //   });

    //   if (!res.ok) throw new Error("Failed to subscribe");

    //   setMessage("✅ Subscription successful!");
    //   setEmail("");
    // } catch (err) {
    //   setMessage(
    //     `❌ Something went wrong. Please try again. ${(err as Error).message}`
    //   );
    // } finally {
    //   setLoading(false);
    // }
  // };

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
          <p className="font-semibold text-black">info@megacoop.org</p>
          <p className="text-gray-600 text-sm mt-2">
            Assistance hours: <br /> Monday – Friday 9am to 5pm EST
          </p>
        </div>

        {/* Phone */}
        <div>
          <h3 className="font-semibold text-lg text-black">Contact Address</h3>
          <div className="w-6 h-0.5 bg-black my-2" />
          <p className="font-semibold text-black">08076743972</p>
          <p className="text-gray-600 text-sm mt-2">
            Office address: <br />9, Orise Street, Ikeja, Lagos, Nigeria.
          </p>
        </div>
      </motion.div>

      {/* Newsletter */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-[#14AB55] py-16 px-4 md:py-0 md:px-0 "
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div className="px-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
              {/* Subscribe to our Newsletter */}
              Join Now
            </h2>
            <p className="text-white/90 max-w-lg">
              Create your account today to access member benefits, 
              track your investments, and stay updated with all the 
              latest financial insights and announcements.
            </p>
          </div>

          {/* Image */}
          <div className="sm:flex sm:justify-end">
            <img
              src={ContactImage}
              alt="Newsletter Illustration"
              className="w-full mx-auto md:max-w-md md:mx-0 "
            />
          </div>

          {/* Input Form */}
          {/* <form
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
          </form> */}

          {/* Message */}
          {/* {message && (
            <p className="text-white mt-4 text-sm font-medium">{message}</p>
          )} */}
        </div>
      </motion.div>
    </section>
  );
}
