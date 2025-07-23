import React, { useState } from "react";
import {
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Search,
  HelpCircle,
  BookOpen,
  Users,
  Award,
} from "lucide-react";

interface FAQPageProps {
  onBack: () => void;
}

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

/**
 * FAQ Page Component
 * Displays frequently asked questions with expandable answers
 * Features search functionality and categorized questions
 */
const FAQPage: React.FC<FAQPageProps> = ({ onBack }) => {
  // State for managing expanded FAQ items
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  // State for search functionality
  const [searchTerm, setSearchTerm] = useState("");
  // State for category filtering
  const [selectedCategory, setSelectedCategory] = useState("all");

  // FAQ data with 50 comprehensive questions
  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "How do I check my NEET UG 2025 result?",
      answer:
        "To check your NEET UG 2025 result: 1) Visit the official website www.neet.nta.nic.in 2) Click on 'NEET UG Result 2025' link 3) Enter your application number and password 4) Download your scorecard for future reference. Keep multiple copies of your scorecard as it's required for Counselling.",
      category: "neet-ug",
    },
    {
      id: 2,
      question: "What is the NEET UG Counselling process?",
      answer:
        "The NEET UG Counselling process involves: 1) Registration on the official Counselling website 2) Choice filling of colleges and courses 3) Seat allotment based on rank and preferences 4) Document verification at designated centers 5) Fee payment and admission confirmation. The process is conducted in multiple rounds.",
      category: "Counselling",
    },
    {
      id: 3,
      question: "How can I predict my college admission chances?",
      answer:
        "Use our College Predictor tool by entering your NEET rank, category, and preferred states. The tool analyzes previous year cutoffs and provides accurate predictions for government and private medical colleges. It considers factors like state quota, management quota, and category-wise reservations.",
      category: "tools",
    },
    {
      id: 4,
      question: "What documents are required for NEET Counselling?",
      answer:
        "Required documents include: 1) NEET scorecard 2) Class 10th and 12th marksheets 3) Category certificate (if applicable) 4) Domicile certificate 5) Aadhar card 6) Passport size photographs 7) Medical fitness certificate 8) Character certificate. Ensure all documents are original with photocopies.",
      category: "Counselling",
    },
    {
      id: 5,
      question: "What is NEET PG and how is it different from NEET UG?",
      answer:
        "NEET PG is for admission to postgraduate medical courses (MD/MS/Diploma) while NEET UG is for undergraduate courses (MBBS/BDS). NEET PG requires an MBBS degree for eligibility, has different exam pattern, and separate Counselling process. The competition is generally higher in NEET PG.",
      category: "neet-pg",
    },
    {
      id: 6,
      question: "What is INICET and who can appear for it?",
      answer:
        "INICET (Institute of National Importance Combined Entrance Test) is for admission to PG medical courses in AIIMS, JIPMER, PGIMER, and NIMHANS. Only MBBS graduates are eligible. It's conducted separately from NEET PG and has its own Counselling process.",
      category: "inicet",
    },
    {
      id: 7,
      question: "How do I use the Rank Predictor tool?",
      answer:
        "Enter your expected NEET score or percentile in our Rank Predictor tool. It analyzes previous year trends and provides an estimated rank range. The tool considers factors like exam difficulty, number of candidates, and normalization process to give accurate predictions.",
      category: "tools",
    },
    {
      id: 8,
      question: "What are the eligibility criteria for NEET UG 2025?",
      answer:
        "Eligibility criteria: 1) Age: Minimum 17 years, maximum 25 years (30 for reserved categories) 2) Qualification: 12th with Physics, Chemistry, Biology/Biotechnology 3) Minimum marks: 50% for General, 45% for reserved categories 4) Nationality: Indian citizens, NRIs, OCIs eligible.",
      category: "neet-ug",
    },
    {
      id: 9,
      question: "How many attempts are allowed for NEET?",
      answer:
        "There is no limit on the number of NEET attempts as per current NTA guidelines. However, candidates must meet the age criteria (maximum 25 years for General category, 30 years for reserved categories) at the time of admission.",
      category: "neet-ug",
    },
    {
      id: 10,
      question: "What is the difference between AIQ and State quota?",
      answer:
        "AIQ (All India Quota) reserves 15% seats for all India merit, open to candidates from any state. State quota reserves 85% seats for state domicile candidates. AIQ has higher cutoffs but more college options across India.",
      category: "Counselling",
    },
    {
      id: 11,
      question: "How do I apply for NEET PG 2025?",
      answer:
        "NEET PG application process: 1) Visit official NBE website 2) Register with basic details 3) Fill application form with academic details 4) Upload required documents 5) Pay application fee 6) Submit and take printout. Ensure all details are correct before submission.",
      category: "neet-pg",
    },
    {
      id: 12,
      question: "What is the exam pattern for INICET?",
      answer:
        "INICET exam pattern: 1) 200 multiple choice questions 2) 3 hours duration 3) Computer-based test 4) Negative marking: -1 for wrong answers 5) Subjects: Pre-clinical, Para-clinical, and Clinical subjects from MBBS curriculum.",
      category: "inicet",
    },
    {
      id: 13,
      question: "How to choose the right medical college?",
      answer:
        "Consider factors: 1) NIRF ranking and accreditation 2) Faculty quality and infrastructure 3) Hospital facilities and patient load 4) Fee structure and scholarships 5) Location and hostel facilities 6) Placement and PG entrance success rate.",
      category: "Counselling",
    },
    {
      id: 14,
      question: "What is the fee structure for government medical colleges?",
      answer:
        "Government medical college fees vary by state: 1) Central government colleges: ₹5,000-50,000 per year 2) State government colleges: ₹10,000-1,00,000 per year 3) Deemed universities: ₹5,00,000-25,00,000 per year 4) Private colleges: ₹10,00,000-50,00,000 per year.",
      category: "Counselling",
    },
    {
      id: 15,
      question: "How to prepare for NEET PG effectively?",
      answer:
        "NEET PG preparation strategy: 1) Complete MBBS syllabus revision 2) Focus on high-yield topics 3) Solve previous year questions 4) Take regular mock tests 5) Join test series 6) Study from standard textbooks 7) Regular revision and practice.",
      category: "neet-pg",
    },
    {
      id: 16,
      question: "What are the career options after MBBS?",
      answer:
        "Career options: 1) Postgraduate medical courses (MD/MS) 2) Diploma courses 3) Clinical practice 4) Medical research 5) Public health 6) Medical writing 7) Healthcare administration 8) Medical education 9) Pharmaceutical industry.",
      category: "career",
    },
    {
      id: 17,
      question: "How to get admission in AIIMS through INICET?",
      answer:
        "AIIMS admission through INICET: 1) Qualify INICET exam 2) Participate in INICET Counselling 3) Choice filling for AIIMS centers 4) Seat allotment based on rank 5) Document verification 6) Fee payment and admission confirmation.",
      category: "inicet",
    },
    {
      id: 18,
      question: "What is the validity of NEET scorecard?",
      answer:
        "NEET scorecard is valid for the admission year only. For NEET UG, it's valid for the current academic session. For NEET PG, it's valid for the specific admission cycle. You need to reappear for subsequent years.",
      category: "neet-ug",
    },
    {
      id: 19,
      question: "How to apply for state quota Counselling?",
      answer:
        "State quota Counselling process: 1) Check state Counselling authority website 2) Register with required documents 3) Pay Counselling fee 4) Fill choices of colleges 5) Attend Counselling rounds 6) Document verification 7) Seat confirmation and fee payment.",
      category: "Counselling",
    },
    {
      id: 20,
      question: "What is the difference between MD and MS degrees?",
      answer:
        "MD (Doctor of Medicine) is for non-surgical specialties like Internal Medicine, Pediatrics, Psychiatry. MS (Master of Surgery) is for surgical specialties like General Surgery, Orthopedics, ENT. Both are 3-year postgraduate courses with different clinical focus.",
      category: "neet-pg",
    },
    {
      id: 21,
      question: "How to calculate NEET percentile?",
      answer:
        "NEET percentile is calculated using the formula: (Number of candidates with score less than you / Total number of candidates) × 100. NTA provides percentile scores along with raw scores. Percentile indicates your relative performance among all candidates.",
      category: "neet-ug",
    },
    {
      id: 22,
      question: "What is the NEET UG exam pattern for 2025?",
      answer:
        "NEET UG 2025 pattern: 1) 200 questions (180 to be attempted) 2) Physics: 50 questions 3) Chemistry: 50 questions 4) Biology: 100 questions 5) Duration: 3 hours 20 minutes 6) Marking: +4 for correct, -1 for incorrect answers.",
      category: "neet-ug",
    },
    {
      id: 23,
      question: "How to prepare for INICET exam?",
      answer:
        "INICET preparation: 1) Thorough revision of MBBS subjects 2) Focus on clinical subjects 3) Practice MCQs regularly 4) Join test series 5) Study recent advances 6) Time management practice 7) Regular mock tests and analysis.",
      category: "inicet",
    },
    {
      id: 24,
      question: "What is the Counselling fee for NEET UG?",
      answer:
        "NEET UG Counselling fees vary: 1) AIQ Counselling: ₹1,000 for registration 2) State Counselling: ₹500-2,000 depending on state 3) Security deposit: ₹2,00,000 for government colleges 4) Additional fees for choice modification and upgradation.",
      category: "Counselling",
    },
    {
      id: 25,
      question: "How to get NEET UG admit card?",
      answer:
        "NEET admit card download: 1) Visit official NTA NEET website 2) Click on 'Download Admit Card' 3) Enter application number and password 4) Download and print admit card 5) Check all details carefully 6) Carry original admit card to exam center.",
      category: "neet-ug",
    },
    {
      id: 26,
      question: "What is the NEET PG exam pattern?",
      answer:
        "NEET PG pattern: 1) 200 MCQs 2) Duration: 3.5 hours 3) Computer-based test 4) Subjects: Pre-clinical, Para-clinical, Clinical 5) Marking: +4 for correct, -1 for incorrect 6) No choice between questions.",
      category: "neet-pg",
    },
    {
      id: 27,
      question: "How to check NEET PG result?",
      answer:
        "NEET PG result checking: 1) Visit NBE official website 2) Click on NEET PG result link 3) Enter roll number and password 4) Download scorecard 5) Check rank and percentile 6) Save multiple copies for Counselling.",
      category: "neet-pg",
    },
    {
      id: 28,
      question: "What is the bond policy for medical colleges?",
      answer:
        "Bond policies vary by state: 1) Service bond: 1-7 years in government service 2) Bond amount: ₹10 lakhs to ₹1 crore 3) Rural service mandatory in some states 4) Private colleges may have different terms 5) Check specific state policies before admission.",
      category: "Counselling",
    },
    {
      id: 29,
      question: "How to apply for management quota seats?",
      answer:
        "Management quota application: 1) Contact college directly 2) Submit required documents 3) Appear for college interview 4) Pay higher fees as per college norms 5) No Counselling required 6) Direct admission based on NEET score and college criteria.",
      category: "Counselling",
    },
    {
      id: 30,
      question:
        "What is the difference between government and private medical colleges?",
      answer:
        "Key differences: 1) Fee: Government colleges have lower fees 2) Infrastructure: Both can have good facilities 3) Faculty: Government colleges often have experienced faculty 4) Admission: Government through Counselling, private through management quota 5) Bond: Government colleges may have service bonds.",
      category: "Counselling",
    },
    {
      id: 31,
      question: "How to prepare for NEET UG in 6 months?",
      answer:
        "6-month preparation plan: 1) Complete syllabus in 4 months 2) Revision and practice in 2 months 3) Daily 8-10 hours study 4) Focus on NCERT books 5) Regular mock tests 6) Analyze weak areas 7) Time management practice.",
      category: "neet-ug",
    },
    {
      id: 32,
      question: "What is the INICET Counselling process?",
      answer:
        "INICET Counselling: 1) Registration on official website 2) Choice filling for institutes 3) Seat allotment based on rank 4) Document verification 5) Fee payment 6) Admission confirmation 7) Multiple rounds conducted.",
      category: "inicet",
    },
    {
      id: 33,
      question: "How to get domicile certificate for medical Counselling?",
      answer:
        "Domicile certificate process: 1) Apply to district collector office 2) Submit required documents (birth certificate, school certificates) 3) Pay prescribed fees 4) Verification process 5) Certificate issuance 6) Valid for Counselling in respective state.",
      category: "Counselling",
    },
    {
      id: 34,
      question: "What is the NEET UG cutoff for 2025?",
      answer:
        "NEET UG cutoff varies by category: 1) General: 50th percentile 2) OBC/SC/ST: 40th percentile 3) PWD: 45th percentile 4) Actual scores depend on exam difficulty 5) Previous year cutoffs can be used as reference 6) Official cutoff announced with results.",
      category: "neet-ug",
    },
    {
      id: 35,
      question: "How to choose between MBBS and BDS?",
      answer:
        "MBBS vs BDS comparison: 1) MBBS: General medicine, broader scope 2) BDS: Dental specialization, focused practice 3) Duration: Both 5 years including internship 4) Career prospects: MBBS has wider options 5) Competition: MBBS generally more competitive 6) Choose based on interest and aptitude.",
      category: "career",
    },
    {
      id: 36,
      question: "What is the NEET PG Counselling schedule?",
      answer:
        "NEET PG Counselling timeline: 1) Registration: Usually starts 2-3 weeks after result 2) Choice filling: 3-4 days 3) Seat allotment: Multiple rounds 4) Document verification: 2-3 days per round 5) Classes start: As per academic calendar 6) Check official notifications for exact dates.",
      category: "neet-pg",
    },
    {
      id: 37,
      question: "How to get category certificate for NEET?",
      answer:
        "Category certificate process: 1) Apply to competent authority (Tehsildar/SDM) 2) Submit required documents 3) Income certificate for EWS 4) Caste certificate for SC/ST/OBC 5) Validity: Usually 1-3 years 6) Required for Counselling and admission.",
      category: "Counselling",
    },
    {
      id: 38,
      question: "What is the INICET exam syllabus?",
      answer:
        "INICET syllabus covers: 1) Pre-clinical subjects: Anatomy, Physiology, Biochemistry 2) Para-clinical: Pathology, Microbiology, Pharmacology 3) Clinical subjects: Medicine, Surgery, Pediatrics, Obstetrics & Gynecology 4) Community Medicine 5) Recent advances in medical science.",
      category: "inicet",
    },
    {
      id: 39,
      question: "How to calculate NEET UG rank?",
      answer:
        "NEET rank calculation: 1) Based on total score obtained 2) Tie-breaking criteria: Biology marks, Chemistry marks, Physics marks, Age 3) Separate ranks for different categories 4) All India rank and state rank provided 5) Rank determines college allotment eligibility.",
      category: "neet-ug",
    },
    {
      id: 40,
      question: "What is the medical fitness requirement for MBBS?",
      answer:
        "Medical fitness criteria: 1) Physical and mental fitness 2) Vision: 6/6 in one eye, 6/60 in other 3) Hearing: Normal hearing ability 4) No communicable diseases 5) Medical examination by authorized doctor 6) Fitness certificate required for admission.",
      category: "Counselling",
    },
    {
      id: 41,
      question: "How to prepare for NEET PG while doing internship?",
      answer:
        "Preparation during internship: 1) Utilize clinical exposure for practical knowledge 2) Study during free time and night shifts 3) Focus on high-yield topics 4) Join online test series 5) Group study with fellow interns 6) Balance clinical duties and preparation.",
      category: "neet-pg",
    },
    {
      id: 42,
      question:
        "What is the difference between deemed and private universities?",
      answer:
        "Deemed vs Private: 1) Deemed: Government recognition, autonomous status 2) Private: Privately funded, affiliated to state universities 3) Fee structure: Both generally expensive 4) Quality: Varies by institution 5) Recognition: Both recognized for practice 6) Admission: Through NEET Counselling or management quota.",
      category: "Counselling",
    },
    {
      id: 43,
      question: "How to get NEET UG application form?",
      answer:
        "NEET application process: 1) Visit official NTA website 2) Register with basic details 3) Fill application form online 4) Upload required documents 5) Pay application fee 6) Submit and take printout 7) Keep application number safe.",
      category: "neet-ug",
    },
    {
      id: 44,
      question: "What is the INICET result declaration process?",
      answer:
        "INICET result process: 1) Results declared on official website 2) Scorecard download available 3) Rank and percentile provided 4) Category-wise results 5) Counselling schedule announced 6) Merit list preparation for Counselling.",
      category: "inicet",
    },
    {
      id: 45,
      question: "How to choose medical specialization after MBBS?",
      answer:
        "Specialization selection: 1) Assess personal interests and aptitude 2) Consider clinical vs non-clinical branches 3) Research career prospects and scope 4) Evaluate work-life balance 5) Consider duration and difficulty 6) Seek guidance from seniors and mentors.",
      category: "career",
    },
    {
      id: 46,
      question: "What is the NEET PG application fee?",
      answer:
        "NEET PG fees: 1) General/OBC: ₹4,750 2) SC/ST/PWD: ₹2,500 3) Additional fees for late application 4) Payment through online mode 5) No refund of application fee 6) Keep payment receipt for future reference.",
      category: "neet-pg",
    },
    {
      id: 47,
      question: "How to verify NEET result authenticity?",
      answer:
        "Result verification: 1) Check on official NTA website only 2) Verify application number and personal details 3) Cross-check with SMS received 4) Download from official portal 5) Avoid fake websites 6) Contact NTA helpline for queries.",
      category: "neet-ug",
    },
    {
      id: 48,
      question: "What is the INICET Counselling fee structure?",
      answer:
        "INICET Counselling fees: 1) Registration fee varies by institute 2) Security deposit required 3) Counselling participation fee 4) Document verification charges 5) Seat acceptance fee 6) Check individual institute notifications for exact amounts.",
      category: "inicet",
    },
    {
      id: 49,
      question: "How to handle NEET Counselling stress?",
      answer:
        "Managing Counselling stress: 1) Stay informed about process 2) Prepare documents in advance 3) Have backup options ready 4) Seek family and peer support 5) Practice relaxation techniques 6) Stay positive and focused 7) Consult counselors if needed.",
      category: "Counselling",
    },
    {
      id: 50,
      question: "What are the future prospects in medical field?",
      answer:
        "Medical career prospects: 1) Clinical practice in various specialties 2) Research and academics 3) Healthcare administration 4) Public health and policy 5) Medical technology and innovation 6) Global opportunities 7) Entrepreneurship in healthcare 8) Telemedicine and digital health.",
      category: "career",
    },
  ];

  // Categories for filtering
  const categories = [
    { id: "all", label: "All Questions", icon: HelpCircle },
    { id: "neet-ug", label: "NEET UG", icon: BookOpen },
    { id: "neet-pg", label: "NEET PG", icon: Award },
    { id: "inicet", label: "INICET", icon: Users },
    { id: "Counselling", label: "Counselling", icon: HelpCircle },
    { id: "tools", label: "Tools", icon: BookOpen },
    { id: "career", label: "Career", icon: Award },
  ];

  /**
   * Toggle FAQ item expansion
   * @param id - FAQ item ID to toggle
   */
  const toggleExpanded = (id: number) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  /**
   * Filter FAQs based on search term and category
   * @returns Filtered FAQ items
   */
  const filteredFAQs = faqData.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex-1 bg-gradient-to-br from-rose-50 via-blue-50 to-indigo-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-white/20 px-4 lg:px-6 py-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={onBack}
            className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-slate-600" />
          </button>
          <h1 className="text-xl font-bold text-slate-800">
            Frequently Asked Questions
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-8 text-white mb-8 shadow-xl">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <HelpCircle className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Get All Your Questions Answered
            </h2>
            <p className="text-blue-100 text-lg">
              Find answers to common questions about NEET, Counselling, and
              medical admissions
            </p>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-200 ${
                    selectedCategory === category.id
                      ? "bg-blue-500 text-white shadow-lg"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{category.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredFAQs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white/80 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => toggleExpanded(faq.id)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50/50 transition-colors"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    {faq.question}
                  </h3>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                    {categories.find((cat) => cat.id === faq.category)?.label ||
                      "General"}
                  </span>
                </div>
                <div className="ml-4">
                  {expandedItems.includes(faq.id) ? (
                    <ChevronUp className="w-6 h-6 text-slate-600" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-slate-600" />
                  )}
                </div>
              </button>

              {/* Expandable Answer */}
              {expandedItems.includes(faq.id) && (
                <div className="px-6 pb-6 border-t border-slate-200/50">
                  <div className="pt-4">
                    <p className="text-slate-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <HelpCircle className="w-8 h-8 text-slate-500" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              No questions found
            </h3>
            <p className="text-slate-600">
              Try adjusting your search terms or category filter
            </p>
          </div>
        )}

        {/* Contact Support Section */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white text-center mt-8">
          <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
          <p className="text-green-100 mb-4">
            Our support team is here to help you with personalized assistance
          </p>
          <button className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl hover:bg-white/30 transition-all duration-200 font-medium">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
