import React from "react";
import { motion, type Transition } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
    ChartColumnIncreasing,
    Clock,
    MoveUpRight,
    ChartLine,
    Info,
    Check,
    Banknote,
    TrendingUp,
    Calendar,
    House,
    Key,
    Play,
    Hourglass,
    Percent,
    ShieldCheck,
    Building2,
    LayoutDashboard,
    Briefcase,
    CalendarRange,
    BadgeDollarSign,
    SquarePen,
    Columns2,
    Ratio,

} from "lucide-react";
import BackgroundImage from "@/assets/Investment-benefit-bg.png";
import horizontalline from "@/assets/Investmentbenefit-horizontal-line-image.png";
import pooledImage from "@/assets/Investment-benefit-image.png";
import houseInvestment from "@/assets/house-investment.png";
import progressline from "@/assets/investment-progress-bar-line.png";
import absoluteImage from "@/assets/investment-bottom-absolute-image.png";
import InvestmentPools from "./InvestmentPool";
import { Progress } from "../ui/progress";


export default function InvestServices() {
    return (
        <section
            className="relative flex flex-col items-center justify-center text-center px-4 py-20 md:py-16 mt-[-20px] bg-cover bg-center overflow-hidden gap-10 z-1"
            style={{ backgroundImage: `url(${BackgroundImage})` }}
        >
            {/** bottom absolute image */}
            <img
                src={absoluteImage}
                alt="House Investment"
                className="absolute bottom-[-50px] right-[-150px] transform -translate-x-1/2 z-0"
            />
            {/* Header Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 } as Transition}
                className="flex flex-col items-center justify-center text-center z-10 mb-2 md:mb-10"
            >
                <motion.h3 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                    Investment Benefits
                </motion.h3>
                <motion.p className="max-w-lg text-white text-xs md:text-base mb-4">
                    Explore diversified opportunities with clear metrics
                </motion.p>
                <img
                    src={horizontalline}
                    alt="Decorative Line"
                    className="w-3/4 md:w-full max-w-lg md:max-w-4xl z-10"
                />
            </motion.div>

            {/* Pooled Investment Products */}
            <div className="w-full shadow-md bg-white flex flex-col items-center justify-center z-10 rounded-tl-[2rem] rounded-tr-[2rem] rounded-br-[2rem] rounded-bl-[6rem]">

                <h4 className="text-xl md:text-4xl font-semibold text-gray-900 py-6 text-center">
                    Pooled Investment Products
                </h4>

                <motion.div
                    className="   flex flex-col md:flex-row items-start justify-between w-full p-6 md:p-3 mb-10 gap-8 text-left"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Left Image */}
                    <div className="flex-[0.4] flex justify-center p-0 pt-5">
                        <img
                            src={pooledImage}
                            alt="Pooled Investment Illustration"
                            className="w-64 md:w-full  bg-center object-cover p-0 m-0"
                        />
                    </div>

                    {/* Right Content */}
                    {/* <div className="flex flex-col flex-1 space-y-5 border border-red-500"> */}
                    <div className="grid flex-1 grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Key Metrics */}
                        <div className="flex flex-col flex-wrap  gap-2 text-sm">
                            <p className="text-green-600 text-sm md:text-base">
                                Grow your wealth with diversified pooled investments.
                            </p>

                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div className="p-3 bg-green-50 rounded-lg">
                                    <p className="text-gray-500 text-xs">Minimum Investment</p>
                                    <p className="font-semibold text-gray-800">₦100,000</p>
                                </div>
                                <div className="p-3 bg-green-50 rounded-lg">
                                    <p className="text-gray-500 text-xs">ROI</p>
                                    <p className="font-semibold text-gray-800">16–20% p.a</p>
                                </div>
                                <div className="p-3 bg-green-50 rounded-lg">
                                    <p className="text-gray-500 text-xs w-30">Lock Up Period</p>
                                    <p className="font-semibold text-gray-800">6–24 months</p>
                                </div>
                                <div className="p-3 bg-green-50 rounded-lg ">
                                    <p className="text-gray-500 text-xs w-30">Risk Level</p>
                                    <p className="font-semibold text-gray-800">Medium</p>
                                </div>
                            </div>
                        </div>

                        {/* ROI Range */}
                        <div className="flex flex-col pt-2">
                            <div className="flex items-center justify-between mb-2"> 
                                <div className="flex items-center">
                                    <span><ChartColumnIncreasing /></span>
                                    <p className="text-gray-600 text-sm font-medium">
                                        ROI Range
                                    </p>
                                </div>
                                <span className="text-gray-800 font-bold">16% – 20%</span>
                            </div>
                            <img src={progressline} alt="Progress Line" className="w-full mb-4" />
                            <div className="flex flex-wrap  mb-4">
                              <div className="flex items-center bg-green-50 p-2 rounded-lg mr-2 ">
                                    <span><ChartLine className="text-green-600 w-4"  /></span>
                                    <p className="text-gray-600 text-xs font-medium">
                                        Growth
                                    </p>
                                </div> 
                                <div className="flex items-center bg-green-50 p-2 rounded-lg mr-2">
                                    <span><MoveUpRight className="text-green-600 w-4" /></span>
                                    <p className="text-gray-600 text-xs font-medium">
                                        Yield
                                    </p>
                                </div> 
                                <div className="flex items-center bg-green-50 p-2 rounded-lg mr-2">
                                    <span><Clock className="text-green-600 w-4" /></span>
                                    <p className="text-gray-600 text-xs font-medium">
                                        Medium
                                    </p>
                                </div> 
                            </div>
                            <div className="flex flex-wrap mb-4">
                                <div className="flex items-center bg-orange-300 px-2 my-1 rounded-lg mr-1 gap-1">
                                    <span><Clock className="text-white w-3" /></span>
                                    <p className="text-white text-xs font-medium">
                                        Medium Risk
                                    </p>
                                </div> 
                                <div className="flex items-center bg-white pl-2 my-1 rounded-lg gap-1">
                                    <span><Info className="text-green-600 w-3" /></span>
                                    <p className="text-gray-600 text-xs font-medium">
                                        Balanced growth & safety
                                    </p>
                                </div> 
                            </div>
                            {/* <div className="flex flex-wrap gap-2 text-xs md:text-sm ">
                                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                                    Growth
                                </span>
                                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                                    Yield
                                </span>
                                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                                    Medium
                                </span>
                                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full">
                                    Balanced growth & safety
                                </span>
                            </div> */}
                            <InvestmentPools />
                            <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-5 mt-4 w-2/3 mx-auto">
                              <Check className="w-4 h-4 " />   Apply now
                            </Button>
                        </div>



                    </div>
                </motion.div>
            </div>

            {/* Housing Project Investments */}
            <div className="w-full shadow-md bg-white flex flex-col items-center justify-center z-10 rounded-tl-[6rem] rounded-tr-[2rem] rounded-br-[2rem] rounded-bl-[2rem]">

                <h4 className="text-lg md:text-4xl font-semibold text-gray-900 py-6 pl-4 text-center">
                    Housing Project Investments
                </h4>

            <motion.div
                    className="relative flex flex-col md:flex-row items-start justify-between w-full p-6 md:p-3 mb-10 gap-8 text-left"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >

                {/* <div className="grid md:grid-cols-3 gap-8"> */}

                    <div className=" flex-[0.4] flex justify-center p-0">
                        <img
                            src={houseInvestment}
                            alt="Pooled Investment Illustration"
                            className="w-64 md:w-[350px] bg-center object-cover p-0 m-0"
                        />
                    </div>
                    {/* Left Section */}
                    <div className="grid flex-1 grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div className="flex items-center justify-between  w-full">
                                <span className="text-sm text-gray-800 font-bold">Housing Project Investments</span> 
                                <div className="flex items-center bg-[#F8C060] rounded-full px-4 py-1 w-28 justify-center">
                                    <span><Banknote className="w-4 h-4 mr-1" /></span>
                                    <p className="text-gray-600 text-xs font-medium">
                                        Min 500k
                                    </p>
                                </div>
                                
                            </div>
                        <div className="flex flex-wrap items-center gap-2 text-sm ">
                                <span className="px-2 py-1 rounded-md border border-green-200 text-xs">
                                    <TrendingUp className="w-3 h-3 mr-1 inline-block text-green-600" />
                                    15–18% p.a
                                </span>
                                <span className="px-2 py-1 rounded-md border border-green-200 text-xs">
                                    <Calendar className="w-3 h-3 mr-1 inline-block text-green-600" />
                                    18–36 months
                                </span>
                                <span className="flex items-center gap-1 px-2 py-1 rounded-md border border-green-200 text-xs">
                                    <span className={` w-2 h-2 bg-green-600 rounded`} >
                                    </span>
                                    Risk: Medium
                                </span>

                        </div>

                        <div className="flex flex-col md:flex-row py-1 bg-gray-50 rounded-lg text-sm gap-1">
                            <div className="flex flex-1  flex-col border border-green-200 p-2 rounded-lg ">
                                <p>Allocation Filled</p>
                                <p className="font-semibold">65%</p>
                                <Progress value={65} className="w-full h-2 mt-2 bg-green-100" />
                            </div>
                            <div className="flex flex-col border border-green-200 p-2 rounded-lg flex-1 gap-1">
                                <p>Avg Ticket Size</p>
                                <p className="font-semibold">₦2.1m</p>
                                <div className="flex items-center gap-1">
                                    <span className="text-gray-500 text-[9px] bg-green-100 rounded-full px-1 py-1 w-full">Timeline: 24m</span>
                                    <span className="text-gray-500 text-[9px] bg-green-100 rounded-full px-1 py-1 w-full">Reinvest: Yes</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2 text-sm">
                            <p className="text-gray-600 font-medium">Active Projects</p>
                            <div className="flex border border-gray-200 rounded-lg p-3">
                                <Building2 className="w-4 h-4 mr-2 inline-block mt-3 text-green-600" />
                                <div>
                                  <p className="font-semibold">Egando Estate</p>
                                  <p className="text-gray-500 text-xs">Lekki – 80 Units</p>
                                </div>
                                    
                            </div>
                                <div className="flex border border-gray-200 rounded-lg p-3">
                                <House className="w-4 h-4 mr-2 inline-block mt-3 text-green-600" />
                            <div>
                                <p className="font-semibold">Adonai Estate</p>
                                <p className="text-gray-500 text-xs">Ketu – 50 Units</p>
                            </div>
                            </div>
                            <div className="flex border border-gray-200 rounded-lg p-3">
                                <House className="w-4 h-4 mr-2 inline-block mt-3 text-green-600" />
                                <div>
                                    <p className="font-semibold">Adewale Estate</p>
                                    <p className="text-gray-500 text-xs">
                                        Finishing in progress
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-sm font-medium">
                            <div className={` w-2 h-2 bg-green-600 rounded`} >
                  </div>
                            Medium Risk
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between  w-full">
                                <span className="text-sm text-gray-800 font-bold">Housing Fund Programs</span> 
                                <div className="flex items-center bg-[#F8C060] rounded-full px-4 py-1 w-28 justify-center">
                                    <span><Banknote className="w-4 h-4 mr-1 text-green-600" /></span>
                                    <p className="text-gray-600 text-xs font-medium">
                                        Min 50k
                                    </p>
                                </div>
                                
                            </div>
                        <div className="flex flex-wrap items-center gap-2 text-sm ">
                                <span className="px-2 py-1 rounded-md border border-green-200 bg-green-100 text-xs">
                                    <Key className="w-3 h-3 mr-1 inline-block text-green-600" />
                                    Home loan access
                                </span>
                                <span className="px-2 py-1 rounded-md border border-green-200 text-xs">
                                    <Calendar className="w-3 h-3 mr-1 inline-block text-green-600" />
                                    6 months+
                                </span>
                                <span className="flex items-center gap-1 px-2 py-1 rounded-md border border-green-200 text-xs">
                                    <span className={` w-2 h-2 bg-green-600 rounded`} >
                                    </span>
                                    Risk: Low
                                </span>

                        </div>

                        <div className="flex flex-col p-2 bg-gray-50 rounded-lg text-sm gap-4 border border-gray-200 py-4">
                            <div className="flex justify-between text-gray-600  font-medium">
                                <span className="text-gray-600 text-[12px]">Start contributing</span>
                                <span className="text-gray-600 text-[12px]">To get started, click "Start Contributing"</span>
                            </div>
                            <div className="flex flex-wrap items-center gap-2 text-sm ">
                                <span className="px-2 py-1 rounded-md bg-green-100 text-[10px]">
                                    Flexible options
                                </span>
                                <span className="px-2 py-1 rounded-md bg-green-100 text-[10px]"> 
                                    Automated savings
                                </span>
                                <span className=" px-2 py-1 rounded-md bg-green-100 text-[10px]">         
                                    Transparent fees
                                </span>

                        </div>
                            <Button
                                size="sm"
                                className="bg-green-600 hover:bg-green-700 text-white rounded-lg w-fit px-4 py-2"
                                >
                                    <Play className="w-3 h-3 mr-1 inline-block " />
                                Start Contributing
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-sm">
                            <div className="border border-gray-200 rounded-lg p-4 space-y-2">
                                <p className="font-semibold">NHF: Government-backed</p>
                                <ul className="text-gray-600 list-none indent-none space-y-1">
                                    <li><LayoutDashboard className="w-3 h-3 mr-1 inline-block text-green-600" /> 6% interest pa</li>
                                    <li><Calendar className="w-3 h-3 mr-1 inline-block text-green-600" /> Tenure up to 30 years</li>
                                    <li><Hourglass className="w-3 h-3 mr-1 inline-block text-green-600" /> Min 6 months contributions required</li>
                                    <li><House className="w-3 h-3 mr-1 inline-block text-green-600" /> Access to affordable housing units</li>
                                    <li><ShieldCheck className="w-3 h-3 mr-1 inline-block text-green-600" /> Government guarantee and protection</li>
                                    <li><Percent className="w-3 h-3 mr-1 inline-block text-green-600" /> Contribution rate 2.5% of basic salary</li>
                                    <li><Briefcase className="w-3 h-3 mr-1 inline-block text-green-600" /> Min contribution 5k</li>
                                    <li><Banknote className="w-3 h-3 mr-1 inline-block text-green-600" /> Max loan 50m</li>
                                </ul>
                            </div>

                            <div className="border border-gray-200 rounded-lg p-4 space-y-2">
                                <p className="font-semibold">MoFi Housing Fund Real Estate Investment fund</p>
                                <ul className="text-gray-600 list-none indent-none space-y-1">
                                    <li><LayoutDashboard className="w-3 h-3 mr-1 inline-block text-green-600" /> Flexible contribution</li>
                                    <li><BadgeDollarSign className="w-3 h-3 mr-1 inline-block text-green-600" /> Competitive interest 9.75%</li>
                                    <li><SquarePen className="w-3 h-3 mr-1 inline-block text-green-600" /> Simple application process</li>
                                    <li><Columns2 className="w-3 h-3 mr-1 inline-block text-green-600" /> Various housing options</li>
                                    <li><Briefcase className="w-3 h-3 mr-1 inline-block text-green-600" /> Professional project management</li>
                                    <li><Ratio className="w-3 h-3 mr-1 inline-block text-green-600" /> Min contribution 10k per month</li>
                                    <li><CalendarRange className="w-3 h-3 mr-1 inline-block text-green-600" /> Period 6-12 months</li>
                                    <li><House className="w-3 h-3 mr-1 inline-block text-green-600" /> Loan coverage: up to 80% of property value</li>
                                </ul>
                            </div>
                            </div>
                            <div className="flex items-center gap-2  text-sm font-medium">
                            <div className={` w-2 h-2 bg-green-600 rounded`} >
                  </div>
                            Low Risk
                        </div>

                        <Button className="flex bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-5 mt-4 w-2/3 mx-auto">
                              <Check className="w-4 h-4 " />   Apply now
                            </Button>
                        </div>
                        </div>
                {/* </div> */}
            </motion.div>
            </div>
        </section>
    );
}
