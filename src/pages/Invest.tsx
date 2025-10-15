import { useHead } from "@unhead/react";
import InvestmentHeroSection from "@/components/InvestComponents/HeroSection";
import InvestServices from "@/components/InvestComponents/InvestServices";
import InvestmentBenefit from "@/components/InvestComponents/InvestmentBenefit";
import InvestmentFaq from "@/components/InvestComponents/InvestmentFaq";
import HousingContributionCalculator from "@/components/InvestComponents/InvestmentCalculator";


export default function Invest() {
  useHead({ title: "Invest"});

  return (
    <div className="min-h-screen bg-white">
      <InvestmentHeroSection />
      <HousingContributionCalculator />
      <InvestServices />
      <InvestmentBenefit />
      <InvestmentFaq />
      
    </div>
  );
}