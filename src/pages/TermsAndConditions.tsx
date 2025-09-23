import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import herosectionimage from "../assets/terms-and-conditions-image.jpg"
import { ChevronRight, ChevronUp, Menu, X, EllipsisVertical } from "lucide-react"

const sections = [
  { id: "definitions", title: "Definitions and Interpretation", number: 1 },
  { id: "membership", title: "Membership and Account Terms", number: 2 },
  { id: "savings", title: "Savings and Thrift Services", number: 3 },
  { id: "loan", title: "Loan Services", number: 4 },
  { id: "investment", title: "Investment Arm Services", number: 5 },
  { id: "procurement", title: "Procurement and Suppliers Services", number: 6 },
  { id: "fees", title: "Fees And Charges", number: 7 },
  { id: "platform", title: "Platform Usage Terms", number: 8 },
  { id: "data", title: "Data Protection And Privacy", number: 9 },
  { id: "dispute", title: "Dispute Resolution", number: 10 },
  { id: "liability", title: "Liability And Indemnification", number: 11 },
  { id: "technology", title: "Technology And System Terms", number: 12 },
  { id: "regulatory", title: "Regulatory Compliance", number: 13 },
  { id: "termination", title: "Termination And Account Closure", number: 14 },
  { id: "amendments", title: "Amendments And Modification", number: 15 },
  { id: "intellectual", title: "Intellectual Property", number: 16 },
  { id: "force", title: "Force Majeure", number: 17 },
  { id: "governing", title: "Governing Law And Jurisdiction", number: 18 },
  { id: "contact", title: "Contact Address", number: 19 },
//   { id: "acknowledgment", title: "Acknowledgment", number: "" }
]

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState("definitions")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100 // Adjust offset as needed

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id)
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId)
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth", block: "start" })
//     }
//     setIsMobileMenuOpen(false)
//   }

    const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const yOffset = -80 // adjust based on your header/nav height
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset

    window.scrollTo({ top: y, behavior: "smooth" })
  }
  setIsMobileMenuOpen(false)
}

  return (
      <div className="min-h-screen bg-background">
          {/* hero section */}
          <div className="relative top-[-95px] h-100 w-full bg-cover bg-center object-cover" style={{ backgroundImage: `url(${herosectionimage})` }}>
              <h2 className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-3xl lg:text-5xl font-semibold">Terms And Conditions</h2>
          </div>
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed bottom-10 left-4 z-50">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-background shadow-md"
        >
          {isMobileMenuOpen ? <X className="h-4 w-4" /> : <EllipsisVertical className="h-4 w-4" />}
        </Button>
      </div>

      <div className="flex mt-[-90px]">
        {/* Sidebar */}
        <aside
          className={`
          fixed lg:sticky top-0 left-0 h-screen w-93 bg-background border-r border-border overflow-y-auto z-40 transition-transform duration-300
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
        >
          <div className="p-6">
            <div className="mb-6">
              <Badge variant="secondary" className="text-green-600 bg-green-50 border-green-200">
                {/* Privacy Notice */} T &amp; C
              </Badge>
              
            </div>

            <nav className="space-y-2 border-b">
              {sections.map((section) => (
                <Button
                  key={section.id}
                  variant="ghost"
                  className={`
                    w-full justify-start text-left h-auto px-1 py-4 rounded-[4px] transition-all duration-200
                    ${
                      activeSection === section.id
                        ? "bg-[#BACD7C]/[0.52] text-green-700 border border-green-200"
                        : "hover:bg-muted text-muted-foreground hover:text-foreground"
                    }
                  `}
                  onClick={() => scrollToSection(section.id)}
                >
                  <div className="flex items-center w-full">
                    <div className="flex items-center gap-3">
                      <span
                        className={`
                        flex items-center justify-center w-6 h-6 rounded-full text-xs font-medium
                        ${activeSection === section.id ? "bg-green-600 text-white" : "bg-muted text-muted-foreground"}
                      `}
                      >
                        {section.number}
                      </span>
                      <span className="text-sm font-medium">{section.title}</span>
                    </div>
                       {activeSection === section.id ? <ChevronUp className="h-4 w-4 ml-auto opacity-50" /> : <ChevronRight className="h-4 w-4 ml-auto opacity-50" />}
                  </div>
                </Button>
              ))}
              <div className="">
              <Button
                variant="ghost"
                className={`w-full justify-start text-left h-auto px-1 py-4 rounded-[4px] transition-all duration-200
                    ${activeSection === "acknowledgment" ? "bg-[#BACD7C]/[0.52] text-green-700 border border-green-200" : "hover:bg-muted text-muted-foreground hover:text-foreground"}
                `}
                onClick={() => scrollToSection("acknowledgment")}
              >
                <div className="flex items-center w-full">
            
                  <span className="text-sm font-medium">Acknowledgment</span>
                  {activeSection === "acknowledgment" ? <ChevronUp className="h-4 w-4 ml-auto opacity-50" /> : <ChevronRight className="h-4 w-4 ml-auto opacity-50" />}
                </div>
              </Button>
            </div>
            </nav>

            
          </div>
        </aside>

        {/* Mobile Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
        )}

        {/* Main Content */}
        <main className="flex-1 lg:ml-0 min-h-screen">
          <div className="max-w-4xl mx-auto p-6 lg:p-12">
            <p className="text-sm  mb-4 text-[#82A605]">Updated in September 2025</p>
            {/* Section 1: Definitions */}
            <section id="definitions" className="mb-16">
              <h1 className="text-xl font-bold text-green-600 mb-8">1. DEFINITIONS AND INTERPRETATION</h1>
              <div className="prose prose-gray max-w-none">
                <p className="text-foreground mb-2">
                  <strong className="text-green-600">"MegaCoop"</strong> refers to MegaCoop Credit Union and its
                  investment arm.
                </p>
                <p className="text-foreground mb-2">
                  <strong className="text-green-600">"Credit Union"</strong> refers to MegaCoop Credit Union.
                </p>
                <p className="text-foreground mb-2">
                  <strong className="text-green-600">"Platform"</strong> refers to all digital systems, websites, mobile
                  applications, and software developed for MegaCoop.
                </p>
                <p className="text-foreground mb-2">
                  <strong className="text-green-600">"Services"</strong> includes thrift, loans, investments,
                  procurement, and National Housing Fund facilitation.
                </p>
                <p className="text-foreground">
                  <strong className="text-green-600">"Account"</strong> means member's digital account on the Platform.
                </p>
              </div>
            </section>

            {/* Section 2: Membership */}
            <section id="membership" className="mb-16">
              <h2 className="text-xl font-bold text-green-600 mb-8">2. MEMBERSHIP AND ACCOUNT TERMS</h2>

              <div className="mb-8">
                <h3 className="text-l font-semibold text-green-600 mb-4">2.1 Membership Eligibility</h3>
                <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
                  <li>Must be 18years or older</li>
                  <li><strong className="text-green-600">Complete KYC (Know Your Customer) requirements including:</strong>
                  <p className="ml-6">
                    - Valid identification (NIN for Nigerian residents, international ID for foreign members)
                  </p>
                  <p className="ml-6">
                    - Bank Verification Number (BVN) where applicable
                  </p>
                  <p className="ml-6">- Proof of address and employment</p>
                  <p className="ml-6">- Initial membership fee and minimum share applicable</p>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-l font-semibold text-green-600 mb-4">2.2 Account Registration and Access</h3>
                <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
                  <li>One account per individual member</li>
                  <li>Accurate information required for registration</li>
                  <li>Members responsible for maintaining current contact information</li>
                  <li>Account credentials are non-transferable and confidential</li>
                  <li>Multi-factor authentication required for account access</li>
                </ul>
              </div>

              <div>
                <h3 className="text-l font-semibold text-green-600 mb-4">
                  2.3 Account Verification and Service Levels
                </h3>
                <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
                  <li>Savings up to ₦500,000 annually</li>
                  <li>Personal loans up to ₦200,000</li>
                  <li>Basic procurement services</li>
                </ul>
                <p className="text-green-600 font-semibold mt-4">Enhanced Level (Full KYC):</p>
                <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                  <li>Unlimited savings capabilities</li>
                  <li>Business loans up to ₦2,000,000</li>
                  <li>National Housing Fund participation</li>
                  <li>Investment arm participation</li>
                  <li>Premium procurement services</li>
                </ul>
              </div>
            </section>

            {/* Section 3: Savings */}
            <section id="savings" className="mb-16">
              <h2 className="text-xl font-bold text-green-600 mb-8">3. SAVINGS AND THRIFT SERVICES</h2>

              <div className="mb-8">
                <h3 className="text-l font-semibold text-green-600 mb-4">3.1 Regular Savings</h3>
                <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
                  <li>
                    
                      Minimum monthly contribution ₦5,000 (local members) / $15 (international members)
                   
                  </li>
                  <li>
                    Interest calculated monthly and credited quarterly
                  </li>
                  <li>
                    Penalty-free withdrawal after 6 months
                  </li>
                  <li>
                    Automatic overdraft after 6 months
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-l font-semibold text-green-600 mb-4">3.2 Target Savings</h3>
                <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
                  <li>
                    Purpose-specific savings for goods procurement or National Housing Fund
                  </li>
                  <li>
                    Minimum commitment period applies
                  </li>
                  <li>
                    Higher interest rates for committed savings
                  </li>
                  <li>
                    Penalties for early termination
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-l font-semibold text-green-600 mb-4">3.3 National Housing Fund Facilitation</h3>
                <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
                  <li>
                    Minimum deposit contribution required
                  </li>
                  <li>
                    Members must maintain employment verification
                  </li>
                  <li>
                    MegaCoop facilitates applications but does not guarantee approval
                  </li>
                  
                  <li>
                    Administrative fees apply for facilitation services
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 4: Loan Services */}
            <section id="loan" className="mb-16">
              <h2 className="text-xl font-bold text-green-600 mb-8">4. LOAN SERVICES</h2>
              <div className="mb-8">
                <h3 className="text-l font-semibold text-green-600 mb-4">4.1 Personal Loans Eligibility Requirements:</h3>
                <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
                  <li>
                    6 months active membership
                  </li>
                  <li>
                    Regular savings history
                  </li>
                  <li>
                    Guarantor requirements (1-3 guarantors based on amount)
                  </li>
                  <li>
                    Maximum loan: 3x member's savings balance
                  </li>
                </ul>
              </div>
              
              <div className="mb-8">
                <h3 className="text-l font-semibold text-green-600 mb-4">Terms:</h3>
                <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
                  <li>
                    Interest rates: 15-24% per annum (based on member profile)
                  </li>
                  <li>
                    Repayment period: 6-24 months
                  </li>
                  <li>
                    Processing fee: 2% of loan amount
                  </li>
                  <li>
                    Late payment charges: 2% per month on overdue amount
                  </li>
                </ul>
              </div>
              
              <div className="mb-8">
                <h3 className="text-l font-semibold text-green-600 mb-4">4.2 Business Loans Eligibility Requirements:</h3>
                <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
                  <li>
                    12 months active membership
                  </li>
                  <li>
                    Business registration and tax compliance
                  </li>
                  <li>
                    Business plan and cash flow projections Confidential
                  </li>
                  <li>
                    Collateral or enhanced guarantor requirements
                  </li>
                </ul>
              </div>
              
              <div className="mb-8">
                    <h3 className="text-l font-semibold text-green-600 mb-4">Terms:</h3>
                    <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
                    <li>
                        Interest rates: 18-30% per annum
                    </li>
                    <li>
                        Repayment period: 12-36 months
                    </li>
                    <li>
                        Processing fee: 3% of loan amount
                    </li>
                    <li>
                        Monitoring fee: 1% annually
                    </li>
                    </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-l font-semibold text-green-600 mb-4">4.3 Emergency Loans</h3>
                <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                  <li>
                    Quick disbursement within 24 hours
                  </li>
                  <li>
                    Maximum: ₦100,000 or 2x monthly savings
                  </li>
                  <li>
                    Higher interest rates apply
                  </li>
                  <li>
                    3-6 months repayment period
                  </li>
                </ul>
              </div>

            
            </section>

            {/* Section 5: Investment Arm Services */}
            <section id="investment" className="mb-16">
                          <h2 className="text-xl font-bold text-green-600 mb-8">5. INVESTMENT ARM SERVICES</h2>

                          <div className="mb-8">
                              <h3 className="text-l font-semibold text-green-600 mb-4">5.1 Investment Products</h3>
                              <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
                                  <li>Minimum investment: ₦50,000</li>
                                  <li>Fixed-term investments: 6, 12, 18, 24 months</li>
                                  <li>Expected returns: 12-20% per annum (not guaranteed)</li>
                                  <li>Investment committee approval required for large sums</li>
                              </ul>
                          </div>

                          <div className="mb-8">
                              <h3 className="text-l font-semibold text-green-600 mb-4">5.2 Property Development Investments</h3>
                              <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
                                  <li>Collective investment in MegaCoop property projects</li>
                                  <li>Minimum investment: ₦200,000</li>
                                  <li>Returns through rental income and capital appreciation</li>
                                  <li>3-5 year investment horizon</li>
                              </ul>
                          </div>

                          <div>
                              <h3 className="text-l font-semibold text-green-600 mb-4">5.3 Risk Disclosure</h3>
                              <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
                                  <li>All investments carry risk of capital loss</li>
                                  <li>Historical performance does not guarantee future returns</li>
                                  <li>Members advised to diversify investments</li>
                                  <li>Independent financial advice recommended for large investments</li>
                              </ul>
                          </div>
            </section>
            
            {/* Section 6: Procurement and Suppliers Services */}
<section id="procurement" className="mb-16">
    <h2 className="text-xl font-bold text-green-600 mb-8">6. PROCUREMENT AND SUPPLIERS SERVICES</h2>

    <div className="mb-8">
        <h3 className="text-l font-semibold text-green-600 mb-4">6.1 Approved Suppliers</h3>
        <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
            <li>MegaCoop maintains partnerships with verified suppliers</li>
            <li>Electronics, household items, and business equipment available</li>
            <li>Members enjoy preferential pricing and payment terms</li>
            <li>Quality guarantees through supplier agreements</li>
        </ul>
    </div>

    <div className="mb-8">
        <h3 className="text-l font-semibold text-green-600 mb-4">6.2 Procurement Process</h3>
        <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
            <li>Online ordering through Platform</li>
            <li>Payment through savings deduction or loan arrangement</li>
            <li>Delivery coordination by MegaCoop</li>
            <li>Warranty and after-sales support through suppliers</li>
        </ul>
    </div>
</section>

{/* Section 7: Fees and Charges */}
<section id="fees" className="mb-16">
    <h2 className="text-xl font-bold text-green-600 mb-8">7. FEES AND CHARGES</h2>

    <div className="mb-8">
        <h3 className="text-l font-semibold text-green-600 mb-4">7.1 Standard Fees</h3>
        <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
            <li>Membership registration: ₦5,000</li>
            <li>Monthly maintenance fee: ₦200</li>
            <li>SMS/Email notifications: ₦100/month</li>
            <li>Statement generation: ₦500</li>
            <li>Loan processing: 2-3% of loan amount</li>
            <li>Investment processing: 1% of investment amount</li>
        </ul>
    </div>

    <div className="mb-8">
        <h3 className="text-l font-semibold text-green-600 mb-4">7.2 Penalty Charges</h3>
        <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
            <li>Late loan payment: 2% per month</li>
            <li>Account dormancy (12 months): ₦1,000/month</li>
            <li>Failed direct debit: ₦500 per occurrence</li>
            <li>Excessive transaction reversals: ₦1,000 per reversal</li>
            <li>More than 2 savings withdrawals ₦2,000 or subsequent withdrawals</li>
        </ul>
    </div>
</section>

{/* Section 8: Platform Usage Terms */}
<section id="platform" className="mb-16">
    <h2 className="text-xl font-bold text-green-600 mb-8">8. PLATFORM USAGE TERMS</h2>

    <div className="mb-8">
        <h3 className="text-l font-semibold text-green-600 mb-4">8.1 Acceptable Use</h3>
        <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
            <li>Platform for legitimate cooperative business only</li>
            <li>No fraudulent, illegal, or harmful activities</li>
            <li>Respect for other members' privacy and rights</li>
            <li>Compliance with all applicable laws and regulations</li>
        </ul>
    </div>

    <div className="mb-8">
        <h3 className="text-l font-semibold text-green-600 mb-4">8.2 Prohibited Activities</h3>
        <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
            <li>Sharing account credentials</li>
            <li>Attempting to breach system security</li>
            <li>Reverse engineering or unauthorized system access</li>
            <li>Using Platform for money laundering or terrorist financing</li>
            <li>Providing false information or documentation</li>
        </ul>
    </div>

    <div className="mb-8">
        <h3 className="text-l font-semibold text-green-600 mb-4">8.3 System Availability</h3>
        <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
            <li>MegaCoop aims for 99.5% uptime</li>
            <li>Scheduled maintenance notifications provided 48 hours in advance</li>
            <li>Emergency maintenance may occur without notice</li>
            <li>Service level agreements for critical functions</li>
        </ul>
    </div>
</section>

{/* Section 9: Data Protection and Privacy */}
<section id="data" className="mb-16">
    <h2 className="text-xl font-bold text-green-600 mb-8">9. DATA PROTECTION AND PRIVACY</h2>

    <div className="mb-8">
        <h3 className="text-l font-semibold text-green-600 mb-4">9.1 Personal Data Handling</h3>
        <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
            <li>Processing in accordance with Privacy Policy</li>
            <li>Consent-based marketing communications</li>
            <li>Right to access, correct, and delete personal data</li>
            <li>Secure storage and transmission of all data</li>
        </ul>
    </div>

    <div className="mb-8">
        <h3 className="text-l font-semibold text-green-600 mb-4">9.2 International Members</h3>
        <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
            <li>Compliance with applicable international privacy laws</li>
            <li>Data transfer safeguards for cross-border processing</li>
            <li>Local data protection rights honored</li>
            <li>Regular compliance assessments</li>
        </ul>
    </div>
</section>

{/* Section 10: Dispute Resolution */}
<section id="dispute" className="mb-16">
    <h2 className="text-xl font-bold text-green-600 mb-8">10. DISPUTE RESOLUTION</h2>

    <div className="mb-8">
        <h3 className="text-l font-semibold text-green-600 mb-4">10.1 Internal Dispute Process</h3>
        <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
            <li>Step 1: Member Services Resolution (5 business days response)</li>
            <li>Step 2: Management Review (10 business days)</li>
            <li>Step 3: Board of Directors Review (30 days)</li>
        </ul>
    </div>

    <div className="mb-8">
        <h3 className="text-l font-semibold text-green-600 mb-4">10.2 External Resolution</h3>
        <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
            <li>Lagos State Multi-Door Courthouse mediation</li>
            <li>Central Bank of Nigeria complaint mechanisms</li>
            <li>Consumer Protection Council escalation</li>
            <li>Courts of competent jurisdiction as final resort</li>
        </ul>
    </div>
</section>

{/* Section 11: Liability and Indemnification */}
<section id="liability" className="mb-16">
    <h2 className="text-xl font-bold text-green-600 mb-8">11. LIABILITY AND INDEMNIFICATION</h2>

    <div className="mb-8">
        <h3 className="text-l font-semibold text-green-600 mb-4">11.1 MegaCoop's Liability</h3>
        <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
            <li>Liability limited to direct damages only</li>
            <li>Maximum liability capped at affected transaction amount</li>
            <li>No liability for consequential or indirect losses</li>
            <li>Force majeure events exclude liability</li>
        </ul>
    </div>

    <div className="mb-8">
        <h3 className="text-l font-semibold text-green-600 mb-4">11.2 Member Responsibilities</h3>
        <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
            <li>Maintain account security and confidentiality</li>
            <li>Provide accurate information and documentation</li>
            <li>Comply with all terms and conditions</li>
            <li>Indemnify MegaCoop against misuse of account</li>
        </ul>
    </div>
</section>

{/* Section 12: Technology and System Terms */}
<section id="technology" className="mb-16">
    <h2 className="text-xl font-bold text-green-600 mb-8">12. TECHNOLOGY AND SYSTEM TERMS</h2>

    <div className="mb-8">
        <h3 className="text-l font-semibold text-green-600 mb-4">12.1 System Requirements</h3>
        <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
            <li>Compatible devices and browsers specified</li>
            <li>Internet connectivity required for Platform access</li>
            <li>Members responsible for their technology costs</li>
            <li>Technical support available during business hours</li>
        </ul>
    </div>

    <div className="mb-8">
        <h3 className="text-l font-semibold text-green-600 mb-4">12.2 Software Updates</h3>
        <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
            <li>Automatic updates for security and functionality</li>
            <li>Major changes communicated in advance</li>
            <li>Backward compatibility maintained where possible</li>
            <li>Legacy system migration support provided</li>
        </ul>
    </div>
</section>

{/* Section 13: Regulatory Compliance */}
<section id="regulatory" className="mb-16">
    <h2 className="text-xl font-bold text-green-600 mb-8">13. REGULATORY COMPLIANCE</h2>

    <div className="mb-8">
        <h3 className="text-l font-semibold text-green-600 mb-4">13.1 Financial Regulations</h3>
        <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
            <li>Central Bank of Nigeria guidelines compliance</li>
            <li>Anti-money laundering (AML) procedures</li>
            <li>Know Your Customer (KYC) requirements</li>
            <li>Suspicious transaction reporting obligations</li>
        </ul>
    </div>

    <div className="mb-8">
        <h3 className="text-l font-semibold text-green-600 mb-4">13.2 International Compliance</h3>
        <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
            <li>Foreign exchange regulations for international members</li>
            <li>Tax reporting obligations in respective jurisdictions</li>
            <li>Compliance with international sanctions lists</li>
            <li>Regular regulatory reporting to authorities</li>
        </ul>
    </div>
</section>

{/* Section 14: Termination and Account Closure */}
<section id="termination" className="mb-16">
    <h2 className="text-xl font-bold text-green-600 mb-8">14. TERMINATION AND ACCOUNT CLOSURE</h2>

    <div className="mb-8">
        <h3 className="text-l font-semibold text-green-600 mb-4">14.1 Voluntary Termination</h3>
        <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
            <li>30 days written notice required</li>
            <li>Settlement of all outstanding obligations</li>
            <li>Return of savings balances (minus applicable charges)</li>
            <li>Data retention as per Privacy Policy</li>
        </ul>
    </div>

    <div className="mb-8">
        <h3 className="text-l font-semibold text-green-600 mb-4">14.2 Involuntary Termination</h3>
        <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
            <li>Grounds for termination:
                <ul className="list-disc list-inside ml-8 mt-2">
                    <li>Material breach of terms and conditions</li>
                    <li>Fraudulent activities or money laundering</li>
                    <li>Failure to maintain minimum account balance</li>
                    <li>Non-compliance with KYC requirements</li>
                    <li>Court orders or regulatory directives</li>
                </ul>
            </li>
            <li>Process:
                <ul className="list-disc list-inside ml-8 mt-2">
                    <li>Written notice with reasons provided</li>
                    <li>Opportunity to remedy breach (where applicable)</li>
                    <li>Final account settlement within 30 days</li>
                    <li>Right to appeal termination decision</li>
                </ul>
            </li>
        </ul>
    </div>
</section>

{/* Section 15: Amendments and Modifications */}
<section id="amendments" className="mb-16">
    <h2 className="text-xl font-bold text-green-600 mb-8">15. AMENDMENTS AND MODIFICATIONS</h2>

    <div className="mb-8">
        <h3 className="text-l font-semibold text-green-600 mb-4">15.1 Terms Updates</h3>
        <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
            <li>30 days notice for material changes</li>
            <li>Continued use constitutes acceptance</li>
            <li>Right to terminate account if changes unacceptable</li>
            <li>Version control and change history maintained</li>
        </ul>
    </div>

    <div className="mb-8">
        <h3 className="text-l font-semibold text-green-600 mb-4">15.2 Service Modifications</h3>
        <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
            <li>New services may be added with appropriate notices</li>
            <li>Service discontinuation with 60 days notice</li>
            <li>Migration support for affected members</li>
            <li>Compensation for prepaid services if discontinued</li>
        </ul>
    </div>
</section>

{/* Section 16: Intellectual Property */}
<section id="intellectual" className="mb-16">
    <h2 className="text-xl font-bold text-green-600 mb-8">16. INTELLECTUAL PROPERTY</h2>

    <div className="mb-8">
        <h3 className="text-l font-semibold text-green-600 mb-4">16.1 Platform Ownership</h3>
        <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
            <li>All intellectual property rights reserved to MegaCoop</li>
            <li>Members granted limited license for personal use</li>
            <li>No reproduction or commercial use without permission</li>
            <li>Trademark and copyright protections apply</li>
        </ul>
    </div>
</section>

{/* Section 17: Force Majeure */}
<section id="force" className="mb-16">
    <h2 className="text-xl font-bold text-green-600 mb-8">17. FORCE MAJEURE</h2>
    <div className="">
      Events beyond reasonable control including natural disasters, government actions, network failures, pandemic restrictions, civil unrest, or technological failures may suspend or modify services without liability
    </div>
</section>

{/* Section 18: Governing Law and Jurisdiction */}
<section id="governing" className="mb-16">
    <h2 className="text-xl font-bold text-green-600 mb-8">18.  GOVERNING LAW AND JURISDICTION</h2>
    <div className="mb-8">
        <h3 className="text-l font-semibold text-green-600 mb-4">These terms are governed by Nigerian law, specifically:</h3>
        <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
            <li>Companies and Allied Matters Act (CAMA) 2020</li>
            <li>Central Bank of Nigeria Act and Regulations</li>
            <li>Consumer Protection Act 2018</li>
            <li>Lagos State laws for dispute resolution</li>
        </ul>
    </div>
</section>

{/* Section 19: Contact Address*/}
<section id="contact" className="mb-16">
              <h1 className="text-xl font-bold text-green-600 mb-8">19. CONTACT ADDRESS</h1>
              <div className="prose prose-gray max-w-none">
                <p className="text-foreground mb-2">
                  <strong className="text-green-600">General Inquiries:</strong> info@megacoop.ng
                </p>
                <p className="text-foreground mb-2">
                  <strong className="text-green-600">Member Services: </strong> support@megacoop.ng
                </p>
                <p className="text-foreground mb-2">
                  <strong className="text-green-600">Complaints:</strong> complaints@megacoop.ng
                </p>
                <p className="text-foreground mb-2">
                  <strong className="text-green-600">Physical Address:</strong> 123 Cooperative Lane, Ikeja, Lagos, Nigeria
                </p>
                <p className="text-foreground mb-2">
                  <strong className="text-green-600">Nigeria Phone:</strong> +234-XXX-XXXX-XXX
                </p>
                <p className="text-foreground">
                  <strong className="text-green-600">Business Hours:</strong> 8:00 AM - 5:00 PM WAT (Monday - Friday)
                </p>
              </div>
</section>

{/* Section 20: Acknowledgment */}
<section id="acknowledgment" className="mb-16">
    <h2 className="text-xl font-bold text-green-600 mb-8">ACKNOWLEDGMENT</h2>
    <div className="">
      By registering for MegaCoop services or using the Platform, members acknowledge that they have read, understood, and agree to be bound by these Terms and Conditions and the Privacy Policy.
    </div>
</section>

            
            {/* {sections.slice(4).map((section) => (
              <section key={section.id} id={section.id} className="mb-16">
                <h2 className="text-3xl font-bold text-green-600 mb-8">
                  {section.number}. {section.title.toUpperCase()}
                </h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-foreground">
                    Content for {section.title} section will be detailed here with specific terms, conditions, and
                    requirements relevant to this particular service or policy area.
                  </p>
                  <p className="text-foreground mt-4">
                    This section includes comprehensive information about the policies, procedures, and member
                    responsibilities related to {section.title.toLowerCase()}.
                  </p>
                </div>
              </section>
            ))} */}
          </div>
        </main>
      </div>
    </div>
  )
}
