import React from "react"

import { ChevronRight } from "lucide-react"
import styles from "./ServiceGrid.module.css"
import { Card } from "../ui/card"
import { Button } from "../ui/button"
import { motion, type Variants } from "framer-motion"
import secureIcon from "@/assets/secure.png";

const services = [
  {
    id: 1,
    title: "Save with Flexible Plans",
    description: "Set personal savings goals and choose how often you want to save",
    href: "/services/savings",
  },
  {
    id: 2,
    title: "Apply for Loans",
    description: "Get access to fast, fair, and cooperative loans from your phone",
    href: "/services/loans",
  },
  {
    id: 3,
    title: "Shop Now, Pay Late",
    description: "Buy essential items instantly and spread payments over time",
    href: "/services/shop",
  },
  {
    id: 4,
    title: "Own a Home Through NHF",
    description: "Make financial tools accessible to every cooperative member",
    href: "/services/housing",
  },
  {
    id: 5,
    title: "Automate Savings and Loan Repayments",
    description: "Schedule automatic deposits and repayments to stay on track",
    href: "/services/automation",
  },
  {
    id: 6,
    title: "Get Smart Reminders and Instant Alerts",
    description: "Be notified about savings deadlines, loan approvals, and more",
    href: "/services/alerts",
  },
  {
    id: 7,
    title: "Easily Add or Verify a Guarantor for Bigger Loans",
    description: "Increase your loan chances by connecting with trusted guarantors",
    href: "/services/guarantor",
  },
  {
    id: 8,
    title: "Use the App in Your Preferred Language",
    description: "Navigate the app in English, Yoruba, or Igbo",
    href: "/services/language",
  },
  {
    id: 9,
    title: "Get Support When You Need It",
    description: "Reach out to real people via in-app chat or call if you ever need help",
    href: "/services/support",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
}

export default function ServiceGrid() {
  const handleCardClick = (href: string) => {
    // Handle navigation or modal opening
    console.log("Navigate to:", href)
  }

  const handleMoreDetails = (e: React.MouseEvent, href: string) => {
    e.stopPropagation()
    console.log("More details for:", href)
  }

  return (
    <section className=" px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
        
          <div className="flex items-center gap-2 mb-4">
            <span className="text-orange-400 text-sm font-medium bg-orange-100 p-1 rounded">✦ Our Services</span>
          </div>
          <h2 className="text-4xl lg:w-[55%] font-bold ">Financial Solutions That Fit Your Everyday Life</h2>
        </motion.div>
        {/* Grid Container */}
        <motion.div
          className={styles.serviceGrid}
          variants={containerVariants}
          initial="show"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
                  {services.map((service) => (
              <motion.div key={service.id} variants={cardVariants}>
            <Card className={styles.serviceCard} onClick={() => handleCardClick(service.href)}>
              <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex items-center justify-center w-12 h-12 bg-violet-50 rounded-full mb-4"
                >
                {/* <CircleCheck className="w-6 h-6 text-green-600" /> */}
                      <img
                    src={secureIcon}
                    alt="Check Icon"
                    className="w-6 h-6 text-green-600"
                  />
              </motion.div>
<motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="text-lg font-semibold mb-1 text-balance"
                >
                  {service.title}
                </motion.h3>
              

              <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1"
                >
                  {service.description}
                </motion.p>

              <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Button
                    variant="ghost"
                    className="p-1 h-auto font-medium text-foreground hover:text-primary w-fit"
                    onClick={(e: React.MouseEvent) => handleMoreDetails(e, service.href)}
                  >
                    More Details
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </motion.div>
              </Card>
              </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
