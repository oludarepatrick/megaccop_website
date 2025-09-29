import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import privacypolicyimage from "../assets/Privacy-Policy.jpg"
import { ChevronRight, ChevronUp, X, EllipsisVertical } from "lucide-react"

const sections = [
    { id: "Introduction", title: "Introduction and Scope", number: 1 },
    { id: "dataClassification", title: "Data Classification", number: 2 },
    { id: "dataCollection", title: "Data Collection Principles", number: 3 },
    { id: "dataProcessing", title: "Data Processing Requirements", number: 4 },
    { id: "membershipRights", title: "Membership Rights and Controls", number: 5 },
    { id: "dataSharing", title: "Data Sharing and Third-Party Requirements", number: 6 },
    { id: "internationalMember", title: "International Member Consideration", number: 7 },
    { id: "incidentResponse", title: "Incident Response and Breach Notification", number: 8 },
    { id: "systemDevelopment", title: "System Development Requirements", number: 9 },
    { id: "implementationGuidelines", title: "Implementation Guidelines for Development Team", number: 10 },
    { id: "complianceMonitoring", title: "Compliance Monitoring", number: 11 },
]

export default function PrivacyPolicy() {
    const [activeSection, setActiveSection] = useState("Introduction")
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    //   const pageScrollRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        window.scrollTo({
            top: -50,
            left: 0,
            behavior: "auto", // no smooth scroll, just jump
        });
    }, []);

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

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            const yOffset = -80 // adjusted to fit nav height
            const y =
                element.getBoundingClientRect().top + window.pageYOffset + yOffset

            window.scrollTo({ top: y, behavior: "smooth" })
        }
        setIsMobileMenuOpen(false)
    }

    return (
        <div
            className="min-h-screen bg-background"
        
        >
            {/* hero section */}
            <div className="relative top-[-105px] h-100 w-full bg-cover bg-center object-cover" style={{ backgroundImage: `url(${privacypolicyimage})` }}>
                <h2 className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-3xl lg:text-5xl font-semibold">Privacy Policy</h2>
            </div>
            {/* Mobile Menu Button */}
            <div className="lg:hidden fixed bottom-10 left-4 z-150">
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="bg-background shadow-md"
                >
                    {isMobileMenuOpen ? <X className="h-4 w-4" /> : <EllipsisVertical className="h-4 w-4" />}
                </Button>
            </div>

            <div className="flex mt-[-100px]">
                {/* Sidebar */}
                <aside
                    className={`
          fixed lg:sticky top-0 left-0 h-screen w-90 bg-background border-r border-border overflow-y-auto z-40 transition-transform duration-300
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
                >
                    <div className="p-6">
                        <div className="mb-6">
                            <Badge variant="secondary" className="text-green-600 bg-green-50 border-green-200">
                                Privacy Notice
                            </Badge>

                        </div>

                        <nav className="space-y-2 border-b">
                            {sections.map((section) => (
                                <Button
                                    key={section.id}
                                    variant="ghost"
                                    className={`
                    w-full justify-start text-left h-auto px-1 py-4 rounded-[4px] transition-all duration-200
                    ${activeSection === section.id
                                            ? "bg-[#BACD7C]/[0.52] text-green-700 border border-green-200"
                                            : "hover:bg-muted border text-muted-foreground hover:text-foreground"
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
                                            <span className="text-sm font-medium text-wrap">{section.title}</span>
                                        </div>
                                        {activeSection === section.id ? <ChevronUp className="h-4 w-4 ml-auto opacity-50" /> : <ChevronRight className="h-4 w-4 ml-auto opacity-50" />}
                                    </div>
                                </Button>
                            ))}
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
                        {/* Section 1: Introduction */}
                        <section id="Introduction" className="mb-16">
                            <h1 className="text-xl font-bold text-green-600 mb-8">1. INTRODUCTION AND SCOPE</h1>
                            <div className="prose prose-gray max-w-none">
                                <p className="text-foreground mb-2">
                                    This Privacy Policy governs the collection, use, processing, and protection of personal and financial data within MegaCoop's digital systems. This policy applies to all software systems, applications, and digital platforms developed for or integrated with MegaCoop's operations.
                                </p>
                                <p className="text-foreground mb-2">
                                    <strong className="text-green-600">Regulatory Compliance:</strong> This policy ensures compliance with the Nigeria Data Protection Regulation (NDPR) 2019, Central Bank of Nigeria (CBN) guidelines for financial institutions, and international data protection standards for our international members.
                                </p>
                            </div>
                        </section>

                        {/* Section 2: Data Classification */}
<section id="dataClassification" className="mb-16">
    <h2 className="text-xl font-bold text-green-600 mb-8">2. DATA CLASSIFICATION</h2>

    <div className="mb-8">
        <h3 className="text-l font-semibold text-green-600 mb-4">2.1 Personal Data Categories</h3>
        <ul className="list-none list-inside space-y-1 text-foreground ml-4">
            <li><strong className="text-green-600">Basic Personal Information:</strong>
                <ul className="list-disc list-inside ml-6 mt-2">
                    <li>Full names, addresses, phone numbers, email addresses</li>
                    <li>Date of birth, nationality, identification numbers (NIN, BVN, International ID)</li>
                    <li>Employment details, income information</li>
                    <li>Next of kin and emergency contact information</li>
                </ul>
            </li>
            <li><strong className="text-green-600">Financial Data:</strong>
                <ul className="list-disc list-inside ml-6 mt-2">
                    <li>Account balances, transaction histories, payment records</li>
                    <li>Loan applications, credit assessments, repayment schedules</li>
                    <li>Savings patterns, investment contributions</li>
                    <li>National Housing Fund contributions and records</li>
                    <li>Business transaction details for commercial loans</li>
                </ul>
            </li>
            <li><strong className="text-green-600">Technical Data:</strong>
                <ul className="list-disc list-inside ml-6 mt-2">
                    <li>IP addresses, device information, browser types</li>
                    <li>Login credentials (encrypted), session data</li>
                    <li>System usage patterns, audit trails</li>
                    <li>Geolocation data (where applicable)</li>
                </ul>
            </li>
        </ul>
    </div>

    <div className="mb-8">
        <h3 className="text-l font-semibold text-green-600 mb-4">2.2 Sensitive Data</h3>
        <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
            <li>Biometric data (if collected)</li>
            <li>Financial hardship information</li>
            <li>Medical information (for loan purposes)</li>
            <li>Legal proceedings or bankruptcy records</li>
        </ul>
    </div>
</section>

{/* Section 3: Data Collection Principles */}
<section id="dataCollection" className="mb-16">
    <h2 className="text-xl font-bold text-green-600 mb-8">3. DATA COLLECTION PRINCIPLES</h2>

    <div className="mb-8">
        <h3 className="text-l font-semibold text-green-600 mb-4">3.1 Lawful Basis for Processing</h3>
        <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
            <li>Contractual necessity: Processing required for membership services</li>
            <li>Legal obligation: Compliance with CBN, FIRS, and other regulatory requirements</li>
            <li>Legitimate interests: Fraud prevention, risk assessment, service improvement</li>
            <li>Consent: Where explicitly required by law or additional services</li>
        </ul>
    </div>

    <div className="mb-8">
        <h3 className="text-l font-semibold text-green-600 mb-4">3.2 Data Minimization</h3>
        <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
            <li>Collect only data necessary for specified cooperative functions</li>
            <li>Regular review and purging of unnecessary data</li>
            <li>Purpose limitation - data used only for stated purposes</li>
        </ul>
    </div>
</section>

{/* Section 4: Data Processing Requirements */}
<section id="dataProcessing" className="mb-16">
    <h2 className="text-xl font-bold text-green-600 mb-8">4. DATA PROCESSING REQUIREMENTS</h2>
    
    <div className="mb-8">
        <h3 className="text-l font-semibold text-green-600 mb-4">4.1 System Security Standard</h3>
        
        <h4 className="text-md font-semibold text-green-600 mb-2 ml-4">Encryption Requirements:</h4>
        <ul className="list-disc list-inside space-y-1 text-foreground ml-8">
            <li>Data at rest: AES-256 encryption minimum</li>
            <li>Data in transit: TLS 1.3 or higher</li>
            <li>Database encryption with key management systems</li>
            <li>End-to-end encryption for sensitive communications</li>
        </ul>

        <h4 className="text-md font-semibold text-green-600 mb-2 ml-4 mt-4">Access Controls:</h4>
        <ul className="list-disc list-inside space-y-1 text-foreground ml-8">
            <li>Role-based access control (RBAC) implementation</li>
            <li>Multi-factor authentication for all system access</li>
            <li>Regular access reviews and deprovisioning</li>
            <li>Audit logging of all data access and modifications</li>
        </ul>

        <h4 className="text-md font-semibold text-green-600 mb-2 ml-4 mt-4">Data Backup and Recovery:</h4>
        <ul className="list-disc list-inside space-y-1 text-foreground ml-8">
            <li>Automated daily backups with encryption</li>
            <li>Geographic redundancy for critical data</li>
            <li>Tested disaster recovery procedures</li>
            <li>Business continuity planning</li>
        </ul>
    </div>

    <div className="mb-8">
        <h3 className="text-l font-semibold text-green-600 mb-4">4.2 Data Retention Schedules</h3>
        <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
            <li>Active Member Records: Retained during membership + 7 years</li>
            <li>Financial Transaction Records: 10 years (CBN requirement)</li>
            <li>Loan Records: 7 years after final payment</li>
            <li>Audit Logs: 5 years</li>
            <li>Marketing Data: 2 years or until consent withdrawal</li>
        </ul>
    </div>
</section>

{/* Section 5: Membership Rights and Controls */}
<section id="membershipRights" className="mb-16">
    <h2 className="text-xl font-bold text-green-600 mb-8">5. MEMBERSHIP RIGHTS AND CONTROLS</h2>

    <div className="mb-8">
        <h3 className="text-l font-semibold text-green-600 mb-4">5.1 Data Subject Rights (NDPR Compliance)</h3>
        
        <h4 className="text-md font-semibold text-green-600 mb-2 ml-4">Access Rights:</h4>
        <ul className="list-disc list-inside space-y-1 text-foreground ml-8">
            <li>Members can request copies of their personal data</li>
            <li>System must provide data in machine-readable format</li>
            <li>Response time: 30 days maximum</li>
        </ul>

        <h4 className="text-md font-semibold text-green-600 mb-2 ml-4 mt-4">Correction Rights:</h4>
        <ul className="list-disc list-inside space-y-1 text-foreground ml-8">
            <li>Online portal for data corrections</li>
            <li>Verification process for financial data changes</li>
            <li>Audit trail for all corrections</li>
        </ul>

        <h4 className="text-md font-semibold text-green-600 mb-2 ml-4 mt-4">Deletion Rights:</h4>
        <ul className="list-disc list-inside space-y-1 text-foreground ml-8">
            <li>Right to erasure after membership termination (subject to legal retention requirements)</li>
            <li>Anonymization options where deletion not possible</li>
            <li>Clear process for deletion requests</li>
        </ul>
    </div>

    <div className="mb-8">
        <h3 className="text-l font-semibold text-green-600 mb-4">5.2 Consent Management</h3>
        <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
            <li>Granular consent options for different data uses</li>
            <li>Easy consent withdrawal mechanisms</li>
            <li>Regular consent renewal for marketing communications</li>
            <li>Clear opt-out processes</li>
        </ul>
    </div>
</section>

{/* Section 6: Data Sharing and Third Party Requirements */}
<section id="dataSharing" className="mb-16">
    <h2 className="text-xl font-bold text-green-600 mb-8">6. DATA SHARING AND THIRD PARTY REQUIREMENTS</h2>

    <div className="mb-8">
        <h3 className="text-l font-semibold text-green-600 mb-4">6.1 Internal Data Sharing</h3>
        <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
            <li>Between MegaCoop entities: Investment arm and Credit Union arm</li>
            <li>Data sharing agreements with clear purposes and limitations</li>
            <li>Member notification of internal sharing practices</li>
        </ul>
    </div>

    <div className="mb-8">
        <h3 className="text-l font-semibold text-green-600 mb-4">6.2 External Data Sharing</h3>
        
        <h4 className="text-md font-semibold text-green-600 mb-2 ml-4">Authorized Recipients:</h4>
        <ul className="list-disc list-inside space-y-1 text-foreground ml-8">
            <li>Regulatory authorities (CBN, NDPC, FIRS) as legally required</li>
            <li>Credit bureaus for credit assessment (with consent)</li>
            <li>National Housing Fund administrators</li>
            <li>Select suppliers for goods procurement (limited data only)</li>
            <li>Legal advisors and auditors (under confidentiality agreements)</li>
        </ul>

        <h4 className="text-md font-semibold text-green-600 mb-2 ml-4 mt-4">Prohibited Sharing:</h4>
        <ul className="list-disc list-inside space-y-1 text-foreground ml-8">
            <li>No sale of member data to third parties</li>
            <li>No marketing list sharing without explicit consent</li>
            <li>No international transfers without adequate safeguards</li>
        </ul>
    </div>

    <div className="mb-8">
        <h3 className="text-l font-semibold text-green-600 mb-4">6.3 Vendor Management</h3>
        <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
            <li>Software Development Team Requirements:</li>
            <li>Sign comprehensive Data Processing Agreement</li>
            <li>Implement security measures equivalent to MegaCoop standards</li>
            <li>Limited access to production data (use synthetic data for testing)</li>
            <li>Regular security assessments and compliance audits</li>
            <li>Data deletion upon project completion</li>
        </ul>
    </div>
</section>

{/* Section 7: International Member Consideration */}
<section id="internationalMember" className="mb-16">
    <h2 className="text-xl font-bold text-green-600 mb-8">7. INTERNATIONAL MEMBER CONSIDERATION</h2>

    <div className="mb-8">
        <h3 className="text-l font-semibold text-green-600 mb-4">7.1 Cross-Border Data Transfers</h3>
        <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
            <li>Adequacy assessments for international member countries</li>
            <li>Standard Contractual Clauses implementation where required</li>
            <li>Member notification of international data processing</li>
            <li>Compliance with destination country privacy laws</li>
        </ul>
    </div>

    <div className="mb-8">
        <h3 className="text-l font-semibold text-green-600 mb-4">7.2 Multi-Jurisdictional Compliance</h3>
        <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
            <li>GDPR compliance for EU members</li>
            <li>Other applicable international privacy frameworks</li>
            <li>Legal basis documentation for each jurisdiction</li>
        </ul>
    </div>
</section>

{/* Section 8: Incident Response and Breach Notification */}
<section id="incidentResponse" className="mb-16">
    <h2 className="text-xl font-bold text-green-600 mb-8">8. INCIDENT RESPONSE AND BREACH NOTIFICATION</h2>

    <div className="mb-8">
        <h3 className="text-l font-semibold text-green-600 mb-4">8.1 Data Breach Response Plan</h3>
        
        <h4 className="text-md font-semibold text-green-600 mb-2 ml-4">Immediate Response (0-24 hours):</h4>
        <ul className="list-disc list-inside space-y-1 text-foreground ml-8">
            <li>Contain the breach and assess scope</li>
            <li>Notify IT security team and management</li>
            <li>Begin forensic analysis</li>
        </ul>

        <h4 className="text-md font-semibold text-green-600 mb-2 ml-4 mt-4">Regulatory Notification (72 hours):</h4>
        <ul className="list-disc list-inside space-y-1 text-foreground ml-8">
            <li>Report to NDPC if required</li>
            <li>Notify relevant financial regulators</li>
            <li>Document breach circumstances</li>
        </ul>

        <h4 className="text-md font-semibold text-green-600 mb-2 ml-4 mt-4">Member Notification:</h4>
        <ul className="list-disc list-inside space-y-1 text-foreground ml-8">
            <li>Notify affected members within 72 hours if high risk</li>
            <li>Provide clear information about breach impact</li>
            <li>Offer remedial measures and support</li>
        </ul>
    </div>

    <div className="mb-8">
        <h3 className="text-l font-semibold text-green-600 mb-4">8.2 Continuous Monitoring</h3>
        <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
            <li>24/7 security monitoring systems</li>
            <li>Regular vulnerability assessments</li>
            <li>Penetration testing annually</li>
            <li>Staff security awareness training</li>
        </ul>
    </div>
</section>

{/* Section 9: System Development Requirements */}
<section id="systemDevelopment" className="mb-16">
    <h2 className="text-xl font-bold text-green-600 mb-8">9. SYSTEM DEVELOPMENT REQUIREMENTS</h2>

    <div className="mb-8">
        <h3 className="text-l font-semibold text-green-600 mb-4">9.1 Privacy by Design</h3>
        <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
            <li>Data protection impact assessments for new features</li>
            <li>Privacy settings default to most protective</li>
            <li>Regular privacy reviews during development</li>
            <li>Documentation of privacy decisions</li>
        </ul>
    </div>

    <div className="mb-8">
        <h3 className="text-l font-semibold text-green-600 mb-4">9.2 Data Governance</h3>
        <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
            <li>Appointed Data Protection Officer (DPO)</li>
            <li>Regular privacy compliance audits</li>
            <li>Staff training on data protection</li>
            <li>Clear escalation procedures for privacy concerns</li>
        </ul>
    </div>
</section>

{/* Section 10: Implementation Guideline for Development Team */}
<section id="implementationGuidelines" className="mb-16">
    <h2 className="text-xl font-bold text-green-600 mb-8">10. IMPLEMENTATION GUIDELINE FOR DEVELOPMENT TEAM</h2>

    <div className="mb-8">
        <h3 className="text-l font-semibold text-green-600 mb-4">10.1 Technical Requirements</h3>
        <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
            <li>Implement all security standards outlined above</li>
            <li>Build audit logging into all system functions</li>
            <li>Create member privacy dashboards</li>
            <li>Develop consent management interfaces</li>
            <li>Ensure data portability capabilities</li>
        </ul>
    </div>

    <div className="mb-8">
        <h3 className="text-l font-semibold text-green-600 mb-4">10.2 Testing and Quality Assurance</h3>
        <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
            <li>Use anonymized or synthetic data for testing</li>
            <li>Security testing throughout development lifecycle</li>
            <li>Privacy impact testing before deployment</li>
            <li>User acceptance testing for privacy features</li>
        </ul>
    </div>

    <div className="mb-8">
        <h3 className="text-l font-semibold text-green-600 mb-4">10.3 Documentation Requirements</h3>
        <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
            <li>Maintain data flow diagrams</li>
            <li>Document all data processing activities</li>
            <li>Create privacy notices for member-facing systems</li>
            <li>Prepare compliance reports for regulators</li>
        </ul>
    </div>
</section>

{/* Section 11: Compliance Monitoring */}
<section id="complianceMonitoring" className="mb-16">
    <h2 className="text-xl font-bold text-green-600 mb-8">11. COMPLIANCE MONITORING</h2>

    <div className="mb-8">
        <h3 className="text-l font-semibold text-green-600 mb-4">11.1 Regular Reviews</h3>
        <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
            <li>Annual privacy policy reviews</li>
            <li>Quarterly security assessments</li>
            <li>Monthly access reviews</li>
            <li>Continuous monitoring of regulatory changes</li>
        </ul>
    </div>

    <div className="mb-8">
        <h3 className="text-l font-semibold text-green-600 mb-4">11.2 Audit Requirements</h3>
        <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
            <li>External privacy audits annually</li>
            <li>Internal compliance assessments quarterly</li>
            <li>Member feedback collection on privacy practices</li>
            <li>Regular vendor compliance reviews</li>
        </ul>
    </div>

    <div className="mt-8 p-4 bg-green-50 rounded-lg">
        <h3 className="text-l font-semibold text-green-600 mb-4">Contact Information:</h3>
        <ul className="list-disc list-inside  space-y-1 text-foreground">
            <li><strong className="text-green-600">Data Protection Officer:</strong> xxx</li>
            <li><strong className="text-green-600">Privacy Concerns:</strong> privacy@megacoop.ng</li>
            <li><strong className="text-green-600">Member Services:</strong> support@megacoop.ng</li>
        </ul>
    </div>
</section>
                    </div>
                </main>
            </div>
        </div>
    )
}
