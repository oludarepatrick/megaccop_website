import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
    TrendingUp,
    Sparkles,
    Plane,
    Users,
    Star,
    Layers,
} from "lucide-react";

const InvestmentPools = () => {
  const pools = [
    {
      name: "Started Pool",
      range: "100%-499,999",
      roi: "16-18%",
      tag: "Entry",
      gradient: "from-blue-500 to-cyan-400",
      icon: <Sparkles className="w-4 h-4 mr-1 " />,
      tagIcon: <Users className="w-4 h-4 mr-1 " />
      
    },
    {
      name: "Growth Pool",
      range: "500k+1,999,999",
      roi: "17-19%",
      tag: "Diversified",
      gradient: "from-green-500 to-emerald-400",
      icon: <TrendingUp className="w-4 h-4 mr-1" />,
      tagIcon: <Layers className="w-4 h-4 mr-1 " />
    },
    {
      name: "Premium Pool",
      range: "2m+",
      roi: "18-20%",
      tag: "Premium",
      gradient: "from-purple-500 to-pink-400",
      icon: <Plane className="w-4 h-4 mr-1" />,
      tagIcon: <Star className="w-4 h-4 mr-1 " />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="  overflow-hidden">
      <div className=" mx-auto  w-full overflow-y-auto">
        <motion.div
          className="grid grid-rows-3  gap-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {pools.map((pool, index) => (
            <motion.div
            //   key={pool.name}
                key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <Card className="relative overflow-hidden border rounded-2xl bg-white  p-1  shadow-none hover:shadow-none transition-shadow duration-100">
                <CardContent className="flex gap-2 p-0 pl-1 ">
                  {/* Gradient accent bar */}
                  <div className={`absolute top-2/5 mr-10 w-2 h-2 bg-gradient-to-r ${pool.gradient} rounded`} >
                  </div>
                  {/* Pool name */}
                  
                  
                  {/* Amount range */}
                          <div className="flex flex-col w-28 ml-4 ">
                              <p className="text-xs font-bold text-gray-800 ">
                                  {pool.name}
                              </p>
                              <p className="text-xs font-black text-gray-400 leading-tight">
                                  {pool.range}
                              </p>
                          </div>
                  
                  {/* ROI section */}
                  {/* <div className=""> */}
                    <div className="flex items-center  gap-1 bg-green-100 px-2 py-2 rounded-full mr-auto mt-auto w-28 h-9">
                      <span className="flex text-xs text-gray-800">
                        <span>{pool.icon}</span> <span>ROI</span>
                      </span>
                      <span className="text-xs font-black text-gray-900">
                        {pool.roi}
                      </span>
                    </div>
                  {/* </div> */}
                  
                  {/* Tag */}
                  <div className="mt-auto">
                    <span className="flex text-xs px-2 py-2 text-sm font-semibold text-gray-700 bg-green-100 rounded-full">
                      <span>{pool.tagIcon}</span> <span>{pool.tag}</span>
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default InvestmentPools;