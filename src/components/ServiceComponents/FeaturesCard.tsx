import { Card } from "../ui/card";
import styles from "./FeaturesCard.module.css"
import { motion } from "framer-motion"

const features = [
  {
    id: 1,
    title: "Personalized Dashboard",
    description: "Get a clear view of your savings, loan status, and spending all in one place",
    image: "src/assets/Rectangle 651.png",
  },
  {
    id: 2,
    title: "Bank-Grade Security",
    description: "Your data and transactions are protected with encryption, and secure login",
    image: "src/assets/Rectangle 651 (1).png",
  },
  {
    id: 3,
    title: "Smart Notifications",
    description: "Never miss a payment or savings deposit with timely alerts.",
    image: "src/assets/Rectangle 651 (2).png",
  },
  {
    id: 4,
    title: "Multi-language",
    description: "Choose your preferred language made for all members",
    image: "src/assets/Rectangle 651 (3).png",
  },
]


export default function FeatureCards() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className={styles.scrollContainer}> 
          {features.map((feature) => (
              <Card  className={`border-0 shadow-none max-w-[238px] ${styles.featureCard}`}>
                <motion.h3
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-xl font-semibold text-balance"
                >
                  {feature.title}
                </motion.h3>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="aspect-[3/2] rounded-lg "
                >
                  <img
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="text-muted-foreground text-sm leading-relaxed"
                >
                  {feature.description}
                </motion.p>
              </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

