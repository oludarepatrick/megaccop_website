import { Card } from "../ui/card";
import styles from "./FeaturesCard.module.css"
import { motion } from "framer-motion"
import Rectangle651 from "../../assets/Rectangle-651.png";
import Rectangle651_1 from "../../assets/Rectangle-651-1.png";
import Rectangle651_2 from "../../assets/Rectangle-651-2.png";
import Rectangle651_3 from "../../assets/Rectangle-651-3.png";
const features = [
  {
    id: 1,
    title: "Personalized Dashboard",
    description: "Get a clear view of your savings, loan status, and spending all in one place",
    image: Rectangle651,
  },
  {
    id: 2,
    title: "Bank-Grade Security",
    description: "Your data and transactions are protected with encryption, and secure login",
    image: Rectangle651_1,
  },
  {
    id: 3,
    title: "Smart Notifications",
    description: "Never miss a payment or savings deposit with timely alerts.",
    image: Rectangle651_2,
  },
  {
    id: 4,
    title: "Multi-language",
    description: "Choose your preferred language made for all members",
    image: Rectangle651_3,
  },
]


export default function FeatureCards() {
  return (
    <section className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className={styles.scrollContainer}> 
          {features.map((feature) => (
              <Card key={feature.id} className={`border-0 shadow-none min-w-[238px] ${styles.featureCard}`}>
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

