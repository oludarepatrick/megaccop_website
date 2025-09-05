import appStoreBlack from "../../assets/App-Store-Black.png";
import googlePlayBlack from "../../assets/Google-Play-Black.png";

import { Button } from "@components/components/ui/button"
import { motion } from "framer-motion"
// import { Apple, Play } from "lucide-react"

export default function AppDownload() {
  const handleGooglePlay = () => {
    window.open("https://play.google.com/store", "_blank")
  }

  const handleAppStore = () => {
    window.open("https://apps.apple.com", "_blank")
  }

  return (
      <section className="relative  rounded-2xl bg-transparent lg:py-20 m-4 mt-16">
                <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute -top-6 left-[-50px] h-[400px] w-[400px] rounded-full border-[80px] border-[#F2F2F2]] opacity-90"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute -bottom-0 right-1 h-[200px] w-[200px] rounded-full border-[50px] border-[#F2F2F2]] opacity-90"
      />
          <div className="relative overflow-hidden rounded-2xl bg-[#16A34A] px-6 py-12 sm:px-12 sm:py-16 lg:px-20 lg:py-20  ">
      {/* Background Circles */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#F2F2F2] opacity-70"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
        className="absolute -bottom-40 right-0 h-[500px] w-[500px] rounded-full bg-[#F2F2F2] opacity-70"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute right-20 top-0 h-[450px] w-[450px] rounded-full border-[80px] border-[#0F7033] opacity-90"
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        <h2 className="mb-6 text-3xl font-bold leading-snug text-white md:text-4xl lg:text-5xl">
          Download & Install Megacoop Now <br /> and Start Enjoying Digital Payment Convenience!
        </h2>

        <p className="mb-8 text-lg text-white/90">
          Register today and access a wide range of fantastic features, including easy transactions, quick payments,
          and efficient financial management.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
                  <Button
  onClick={handleGooglePlay}
  style={{
      backgroundImage: `url(${googlePlayBlack})`,
      cursor: "pointer",
  }}
  className="flex items-center rounded-lg bg-cover bg-center bg-no-repeat px-6 py-4 text-white hover:opacity-90 w-[150px] h-[60px] pointer"
>
            {/* <Play className="mr-3 h-6 w-6" />
            <div className="flex flex-col text-left">
              <span className="text-xs">GET IT ON</span>
              <span className="text-lg font-semibold">Google Play</span>
            </div> */}
          </Button>

          <Button
            onClick={handleAppStore}
            style={{
                backgroundImage: `url(${appStoreBlack})`,
                cursor: "pointer",
  }}
  className="flex items-center rounded-lg bg-cover bg-center bg-no-repeat px-6 py-4 text-white hover:opacity-90 w-[150px] h-[60px] pointer"
          >
            {/* <Apple className="mr-3 h-6 w-6" />
            <div className="flex flex-col text-left">
              <span className="text-xs">Download on the</span>
              <span className="text-lg font-semibold">App Store</span>
            </div> */}
          </Button>
        </div>
      </div>
    </div>
          </section>
  )
}

