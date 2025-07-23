import React, { useState } from "react";
import {
  ArrowLeft,
  Search,
  MapPin,
  ExternalLink,
  X,
  Building2,
  Users,
  Calendar,
  Award,
} from "lucide-react";

interface UniversitiesPageProps {
  onBack: () => void;
}

interface College {
  id: number;
  name: string;
  pgSeats: number;
  state: string;
  affiliation: string;
  management: string;
  programs: string[];
  established: number;
  website: string;
}

/**
 * Universities Page Component
 * Displays list of medical colleges with detailed information
 * Features search, filtering, and detailed college popup
 */
const UniversitiesPage: React.FC<UniversitiesPageProps> = ({ onBack }) => {
  // State for search functionality
  const [searchTerm, setSearchTerm] = useState("");
  // State for selected college popup
  const [selectedCollege, setSelectedCollege] = useState<College | null>(null);
  // State for state filter
  const [selectedState, setSelectedState] = useState("all");

  // Sample college data
  const colleges: College[] = [
    {
      id: 1,
      name: "All India Institute of Medical Sciences (AIIMS), New Delhi",
      pgSeats: 776,
      state: "Delhi",
      affiliation:
        "Autonomous Institute under the Ministry of Health and Family Welfare",
      management: "Central Government",
      programs: ["MD", "MS", "DM", "MCh", "MDS", "M.Sc", "PhD"],
      established: 1956,
      website: "https://aiims.edu",
    },
    {
      id: 2,
      name: "Maulana Azad Medical College (MAMC), New Delhi",
      pgSeats: 246,
      state: "Delhi",
      affiliation: "University of Delhi",
      management: "Government of NCT of Delhi",
      programs: ["MD", "MS", "Diploma", "MCh"],
      established: 1958,
      website: "https://mamc.delhi.gov.in",
    },
    {
      id: 3,
      name: "Lady Hardinge Medical College (LHMC), New Delhi",
      pgSeats: 193,
      state: "Delhi",
      affiliation: "University of Delhi",
      management: "Central Government",
      programs: ["MD", "MS", "Diploma"],
      established: 1916,
      website: "https://lhmc-hosp.gov.in",
    },
    {
      id: 4,
      name: "University College of Medical Sciences (UCMS), Delhi",
      pgSeats: 203,
      state: "Delhi",
      affiliation: "University of Delhi",
      management: "Government of NCT of Delhi",
      programs: ["MD", "MS"],
      established: 1971,
      website: "https://ucms.ac.in",
    },
    {
      id: 5,
      name: "Vardhman Mahavir Medical College (VMMC) & Safdarjung Hospital",
      pgSeats: 343,
      state: "Delhi",
      affiliation: "Guru Gobind Singh Indraprastha University",
      management: "Central Government",
      programs: ["MD", "MS"],
      established: 2002,
      website: "https://vmmc-sjh.nic.in",
    },
    {
      id: 6,
      name: "Atal Bihari Vajpayee Institute of Medical Sciences & Dr. RML Hospital",
      pgSeats: 204,
      state: "Delhi",
      affiliation: "Guru Gobind Singh Indraprastha University",
      management: "Central Government",
      programs: ["MD", "MS"],
      established: 2008,
      website: "https://rmlh.nic.in",
    },
    {
      id: 7,
      name: "Govind Ballabh Pant Institute of Postgraduate Medical Education and Research (GIPMER)",
      pgSeats: 11,
      state: "Delhi",
      affiliation: "University of Delhi",
      management: "Government of NCT of Delhi",
      programs: ["MD", "DM", "MCh"],
      established: 1964,
      website: "https://delhi.gov.in/gipmer",
    },
    {
      id: 8,
      name: "Army Hospital Research and Referral",
      pgSeats: 74,
      state: "Delhi",
      affiliation: "University of Delhi",
      management: "Ministry of Defence",
      programs: ["MD", "MS", "DNB"],
      established: 1917,
      website: "https://afmc.nic.in",
    },
    {
      id: 9,
      name: "Institute of Human Behaviour and Allied Sciences (IHBAS)",
      pgSeats: 12,
      state: "Delhi",
      affiliation: "University of Delhi",
      management: "Government of NCT of Delhi",
      programs: ["MD (Psychiatry)", "M.Phil (Psychology)"],
      established: 1993,
      website: "https://ihbas.delhi.gov.in",
    },
    {
      id: 10,
      name: "Vallabhbhai Patel Chest Institute (VPCI)",
      pgSeats: 24,
      state: "Delhi",
      affiliation: "University of Delhi",
      management: "Central Government",
      programs: ["MD (Pulmonary Medicine)", "PhD"],
      established: 1949,
      website: "https://vpci.org.in",
    },
    {
      id: 11,
      name: "National Institute of Health and Family Welfare (NIHFW)",
      pgSeats: 16,
      state: "Delhi",
      affiliation: "Autonomous under Ministry of Health & Family Welfare",
      management: "Central Government",
      programs: ["MD (Community Health Administration)"],
      established: 1977,
      website: "https://nihfw.org",
    },
    {
      id: 12,
      name: "Institute of Nuclear Medicine & Allied Sciences (INMAS)",
      pgSeats: 2,
      state: "Delhi",
      affiliation: "University of Delhi",
      management: "Ministry of Defence",
      programs: ["DNB (Nuclear Medicine)"],
      established: 1956,
      website: "https://drdo.gov.in",
    },
    {
      id: 13,
      name: "Kasturba Hospital, Daryaganj",
      pgSeats: 13,
      state: "Delhi",
      affiliation: "University of Delhi",
      management: "Municipal Corporation of Delhi",
      programs: [],
      established: 1905,
      website: "https://hindurao.com",
    },
    {
      id: 14,
      name: "Deen Dayal Upadhyay Hospital",
      pgSeats: 25,
      state: "Delhi",
      affiliation: "University of Delhi",
      management: "Government of NCT of Delhi",
      programs: [],
      established: 1970,
      website: "https://health.delhigovt.nic.in",
    },
    {
      id: 15,
      name: "Dr. Baba Saheb Ambedkar Medical College and Hospital (BSAMCH)",
      pgSeats: 19,
      state: "Delhi",
      affiliation: "Guru Gobind Singh Indraprastha University",
      management: "Government of NCT of Delhi",
      programs: ["Planned MD/MS programs (new)"],
      established: 2016,
      website: "https://bsamch.ac.in",
    },
    {
      id: 16,
      name: "Hindu Rao Hospital",
      pgSeats: 26,
      state: "Delhi",
      affiliation: "University of Delhi",
      management: "Municipal Corporation of Delhi",
      programs: [],
      established: 2013,
      website: "https://hindurao.com",
    },
    {
      id: 17,
      name: "Northern Railway Central Hospital",
      pgSeats: 12,
      state: "Delhi",
      affiliation: "University of Delhi",
      management: "Ministry of Railways",
      programs: [],
      established: 1936,
      website: "https://nrchdelhi.com",
    },
    {
      id: 18,
      name: "Shri Dada Dev Matri Avum Shishu Chikitsalaya",
      pgSeats: 5,
      state: "Delhi",
      affiliation: "University of Delhi",
      management: "Government of NCT of Delhi",
      programs: [
        "Diploma(DIP)",
        "Doctor of Medicine(MD)",
        "Master of Surgery(MS)",
      ],
      established: 2008,
      website: "https://health.delhigovt.nic.in",
    },
    {
      id: 19,
      name: "Swami Dayanand Hospital",
      pgSeats: 15,
      state: "Delhi",
      affiliation: "University of Delhi",
      management: "Government of NCT of Delhi",
      programs: [
        "Diploma(DIP)",
        "Doctor of Medicine(MD)",
        "Master of Surgery(MS)",
      ],
      established: 1963,
      website: "https://health.delhigovt.nic.in",
    },
    {
      id: 20,
      name: "King George's Medical University (KGMU)",
      pgSeats: 353,
      state: "UP",
      affiliation:
        "Autonomous University under the Government of Uttar Pradesh",
      management: "State Government",
      programs: ["MD", "MS", "DM", "MCh", "MDS", "PGD"],
      established: 1911,
      website: "https://kgmu.org",
    },
    {
      id: 21,
      name: "Motilal Nehru Medical College",
      pgSeats: 168,
      state: "UP",
      affiliation:
        "Atal Bihari Vajpayee Medical University (ABVMU), Uttar Pradesh",
      management: "State Government",
      programs: ["MD", "MS"],
      established: 1961,
      website: "https://mlnmc.in",
    },
    {
      id: 22,
      name: "Sarojini Naidu Medical College, Agra",
      pgSeats: 140,
      state: "UP",
      affiliation:
        "Atal Bihari Vajpayee Medical University (ABVMU), Uttar Pradesh",
      management: "State Government",
      programs: ["MD", "MS", "PGD"],
      established: 1939,
      website: "https://snmcagra.ac.in",
    },
    {
      id: 23,
      name: "Lala Lajpat Rai Memorial Medical College, Meerut",
      pgSeats: 110,
      state: "UP",
      affiliation:
        "Atal Bihari Vajpayee Medical University (ABVMU), Uttar Pradesh",
      management: "State Government",
      programs: ["MD", "MS", "Diploma"],
      established: 1966,
      website: "https://llrmmedicalcollege.nic.in",
    },
    {
      id: 24,
      name: "Sanjay Gandhi Postgraduate Institute of Medical Sciences (SGPGIMS), Lucknow",
      pgSeats: 45,
      state: "UP",
      affiliation: "Autonomous Institute under State Legislature Act",
      management: "State Government",
      programs: ["MD", "DM", "MCh"],
      established: 1983,
      website: "https://sgpgims.org.in",
    },
    {
      id: 25,
      name: "Institute of Medical Sciences, Banaras Hindu University (BHU)",
      pgSeats: 188,
      state: "UP",
      affiliation: "Banaras Hindu University (Central University)",
      management: "Central Government",
      programs: ["MD", "MS", "DM", "MCh", "PGD", "MDS"],
      established: 1960,
      website:
        "https://www.bhu.ac.in/Site/UnitHomeTemplate/2_4_1101_Institute-of-Medical-Sciences-Home",
    },
    {
      id: 26,
      name: "Jawaharlal Nehru Medical College, Aligarh Muslim University (AMU)",
      pgSeats: 213,
      state: "UP",
      affiliation: "Aligarh Muslim University (Central University)",
      management: "Central Government",
      programs: ["MD", "MS", "DM", "PGD"],
      established: 1961,
      website:
        "https://www.amu.ac.in/schools/jawaharlal-nehru-medical-college/home-page",
    },
    {
      id: 27,
      name: "Maharani Laxmi Bai Medical College, Jhansi",
      pgSeats: 81,
      state: "UP",
      affiliation:
        "Atal Bihari Vajpayee Medical University (ABVMU), Uttar Pradesh",
      management: "State Government",
      programs: ["MD", "MS", "PGD"],
      established: 1968,
      website: "http://mlbmcj.in",
    },
    {
      id: 28,
      name: "BRD Medical College, Gorakhpur",
      pgSeats: 110,
      state: "UP",
      affiliation:
        "Atal Bihari Vajpayee Medical University (ABVMU), Uttar Pradesh",
      management: "State Government",
      programs: ["MD", "MS", "Diploma"],
      established: 1972,
      website: "http://brdmc.ac.in",
    },
    {
      id: 29,
      name: "Dr. Ram Manohar Lohia Institute of Medical Sciences (RMLIMS), Lucknow",
      pgSeats: 99,
      state: "UP",
      affiliation: "State University",
      management: "Autonomous institute under the Government of Uttar Pradesh",
      programs: ["MD", "MS"],
      established: 2017,
      website: "https://drrmlims.ac.in",
    },
    {
      id: 30,
      name: "Uttar Pradesh University of Medical Sciences (UPUMS), Saifai",
      pgSeats: 117,
      state: "UP",
      affiliation: "State University",
      management: "Autonomous institute under the Government of Uttar Pradesh",
      programs: ["MD", "MS"],
      established: 2006,
      website: "https://www.upums.ac.in",
    },
    {
      id: 31,
      name: "Government Medical College, Azamgarh",
      pgSeats: 16,
      state: "UP",
      affiliation: "King George's Medical University (KGMU), Lucknow",
      management: "State Government",
      programs: ["MD", "MS"],
      established: 2013,
      website: "http://gmcazamgarh.com",
    },
    {
      id: 32,
      name: "Government Medical College, Banda",
      pgSeats: 13,
      state: "UP",
      affiliation:
        "Atal Bihari Vajpayee Medical University (ABVMU), Uttar Pradesh",
      management: "State Government",
      programs: ["MD", "MS"],
      established: 2016,
      website: "http://gmcbandaup.in",
    },
    {
      id: 33,
      name: "Government Medical College, Faizabad",
      pgSeats: 11,
      state: "UP",
      affiliation:
        "Atal Bihari Vajpayee Medical University (ABVMU), Uttar Pradesh",
      management: "State Government",
      programs: ["MD", "MS"],
      established: 2019,
      website: "http://gmcfaizabad.in",
    },
    {
      id: 34,
      name: "Government Medical College, Firozabad",
      pgSeats: 12,
      state: "UP",
      affiliation:
        "Atal Bihari Vajpayee Medical University (ABVMU), Uttar Pradesh",
      management: "State Government",
      programs: ["MD", "MS"],
      established: 2019,
      website: "http://gmcfirosabad.edu.in",
    },
    {
      id: 35,
      name: "Government Medical College, Kannauj",
      pgSeats: 4,
      state: "UP",
      affiliation:
        "Atal Bihari Vajpayee Medical University (ABVMU), Uttar Pradesh",
      management: "State Government",
      programs: ["MD", "MS"],
      established: 2012,
      website: "http://gmckannauj.in",
    },
    {
      id: 36,
      name: "Government Medical College, Etah (likely Orai, please confirm)",
      pgSeats: 13,
      state: "UP",
      affiliation:
        "Atal Bihari Vajpayee Medical University (ABVMU), Uttar Pradesh",
      management: "State Government",
      programs: ["MD", "MS"],
      established: 2013,
      website: "http://gmcorai.in",
    },
    {
      id: 37,
      name: "Government Medical College, Shahjahanpur",
      pgSeats: 38,
      state: "UP",
      affiliation:
        "Atal Bihari Vajpayee Medical University (ABVMU), Uttar Pradesh",
      management: "State Government",
      programs: ["MD", "MS"],
      established: 2015,
      website: "http://gmcshah.in",
    },
    {
      id: 38,
      name: "Regional Institute of Ophthalmology, Sitapur",
      pgSeats: 15,
      state: "UP",
      affiliation: "King George's Medical University (KGMU), Lucknow",
      management: "State Government",
      programs: ["MS (Ophthalmology)", "Diploma"],
      established: 1935,
      website: "http://riositapur.in",
    },
    {
      id: 39,
      name: "Institute of Mental Health & Hospital (IMHH), Agra",
      pgSeats: 8,
      state: "UP",
      affiliation: "Dr. Bhimrao Ambedkar University, Agra",
      management: "State Government",
      programs: ["MD (Psychiatry)"],
      established: 1859,
      website: "http://imhh.org.in",
    },
    {
      id: 40,
      name: "Postgraduate Institute of Child Health (PGICH), Noida",
      pgSeats: 6,
      state: "UP",
      affiliation: "King George's Medical University (KGMU), Lucknow",
      management: "State Government",
      programs: ["MD (Pediatrics)"],
      established: 2010,
      website: "http://pgichnoida.in",
    },
    {
      id: 41,
      name: "Homi Bhabha Cancer Hospital",
      pgSeats: 6,
      state: "UP",
      affiliation: "Tata Memorial Centre, Mumbai",
      management: "Department of Atomic Energy, Government of India",
      programs: ["MD (Oncology)"],
      established: 2022,
      website: "https://tmc.gov.in",
    },
    {
      id: 42,
      name: "Government Medical College & Super Facility Hospital, Azamgarh",
      pgSeats: 0,
      state: "UP",
      affiliation: "King George's Medical University (KGMU), Lucknow",
      management: "State Government",
      programs: ["MD", "MS"],
      established: 2006,
      website: "http://gmcazamgarh.com",
    },
    {
      id: 43,
      name: "Osmania Medical College (OMC), Hyderabad",
      pgSeats: 217,
      state: "Telangana",
      affiliation: "Kaloji Narayana Rao University of Health Sciences (KNRUHS)",
      management: "State Government",
      programs: ["MD", "MS", "Diploma programs"],
      established: 1846,
      website: "https://omc.ac.in",
    },
    {
      id: 44,
      name: "Gandhi Medical College (GMC), Hyderabad",
      pgSeats: 200,
      state: "Telangana",
      affiliation: "KNRUHS",
      management: "State Government",
      programs: ["MD", "MS", "Diploma programs"],
      established: 1954,
      website: "https://gmcsecunderabad.org",
    },
    {
      id: 45,
      name: "Kakatiya Medical College (KMC), Warangal",
      pgSeats: 150,
      state: "Telangana",
      affiliation: "KNRUHS",
      management: "State Government",
      programs: ["MD", "MS", "Diploma programs"],
      established: 1959,
      website: "https://kmcwgl.com",
    },
    {
      id: 46,
      name: "Rajiv Gandhi Institute of Medical Sciences (RIMS), Adilabad",
      pgSeats: 50,
      state: "Telangana",
      affiliation: "KNRUHS",
      management: "State Government",
      programs: ["MD", "MS programs"],
      established: 2008,
      website: "https://rimsadilabad.org",
    },
    {
      id: 47,
      name: "Government Medical College, Nizamabad",
      pgSeats: 30,
      state: "Telangana",
      affiliation: "KNRUHS",
      management: "State Government",
      programs: ["MD", "MS programs"],
      established: 2013,
      website: "http://www.gmcnzb.org/",
    },
    {
      id: 48,
      name: "Government Medical College, Mahbubnagar",
      pgSeats: 20,
      state: "Telangana",
      affiliation: "KNRUHS",
      management: "State Government",
      programs: ["MD", "MS programs"],
      established: 2016,
      website: "https://gmcmbnr-ts.org/",
    },
    {
      id: 49,
      name: "Government Medical College, Siddipet",
      pgSeats: 20,
      state: "Telangana",
      affiliation: "KNRUHS",
      management: "State Government",
      programs: ["MD", "MS programs"],
      established: 2018,
      website: "https://gmcsiddipet.org/",
    },
    {
      id: 50,
      name: "Government Medical College, Suryapet",
      pgSeats: 20,
      state: "Telangana",
      affiliation: "KNRUHS",
      management: "State Government",
      programs: ["MD", "MS programs"],
      established: 2018,
      website: "https://gmcsuryapet.org/",
    },
    {
      id: 51,
      name: "Government Medical College, Nalgonda",
      pgSeats: 20,
      state: "Telangana",
      affiliation: "KNRUHS",
      management: "State Government",
      programs: ["MD", "MS programs"],
      established: 2018,
      website: "http://www.gmcnalgonda.in/",
    },
    {
      id: 52,
      name: "Government Medical College, Karimnagar",
      pgSeats: 0,
      state: "Telangana",
      affiliation: "KNRUHS",
      management: "State Government",
      programs: ["MD", "MS programs"],
      established: 2023,
      website: "https://www.gmcknr.com/gmcknr.html",
    },
    {
      id: 53,
      name: "Government Medical College, Khammam",
      pgSeats: 0,
      state: "Telangana",
      affiliation: "KNRUHS",
      management: "State Government",
      programs: ["MD", "MS programs"],
      established: 2023,
      website: "https://gmckhammam.org/",
    },
    {
      id: 54,
      name: "Government Medical College, Mancherial",
      pgSeats: 0,
      state: "Telangana",
      affiliation: "KNRUHS",
      management: "State Government",
      programs: ["MD", "MS programs"],
      established: 2023,
      website: "https://www.gmcmancherial.org/",
    },
    {
      id: 55,
      name: "Government Medical College, Sangareddy",
      pgSeats: 0,
      state: "Telangana",
      affiliation: "KNRUHS",
      management: "NONE",
      programs: ["MD", "MS programs"],
      established: 2023,
      website: "https://gmcsangareddy.org/",
    },
    {
      id: 56,
      name: "Government Medical College, Ramagundam",
      pgSeats: 0,
      state: "Telangana",
      affiliation: "KNRUHS",
      management: "NONE",
      programs: ["MD", "MS programs"],
      established: 2023,
      website: "https://www.gmcramagundam.in/",
    },
    {
      id: 57,
      name: "Government Medical College, Jagtial",
      pgSeats: 0,
      state: "Telangana",
      affiliation: "KNRUHS",
      management: "NONE",
      programs: ["MD", "MS programs"],
      established: 2023,
      website: "http://www.gmcjagtial.com/",
    },
    {
      id: 58,
      name: "Government Medical College, Wanaparthy",
      pgSeats: 0,
      state: "Telangana",
      affiliation: "KNRUHS",
      management: "NONE",
      programs: ["MD", "MS programs"],
      established: 2023,
      website: "https://www.gmcwanaparthy.org/",
    },
    {
      id: 59,
      name: "Government Medical College, Nagarkurnool",
      pgSeats: 0,
      state: "Telangana",
      affiliation: "KNRUHS",
      management: "State Government",
      programs: ["MD", "MS programs"],
      established: 2023,
      website: "https://gmcnagarkurnool.org/",
    },
    {
      id: 60,
      name: "Government Medical College, Bhupalpally",
      pgSeats: 0,
      state: "Telangana",
      affiliation: "KNRUHS",
      management: "none",
      programs: ["MD", "MS programs"],
      established: 2023,
      website: "https://gmcbhpl.com/",
    },
    {
      id: 67,
      name: "Government Medical College, Vikarabad",
      pgSeats: 0,
      state: "Telangana",
      affiliation: "KNRUHS",
      management: "State Government",
      programs: ["MD", "MS programs"],
      established: 2023,
      website: "http://gmcvikarabad.org/",
    },
    {
      id: 68,
      name: "Government Medical College, Jangaon",
      pgSeats: 0,
      state: "Telangana",
      affiliation: "KNRUHS",
      management: "none",
      programs: ["MD", "MS programs"],
      established: 2023,
      website: "https://gmcjangaon.org/",
    },
    {
      id: 71,
      name: "All India Institute of Medical Sciences (AIIMS), Rishikesh",
      pgSeats: 125,
      state: "Uttarakhand",
      affiliation:
        "Autonomous Institute under the Ministry of Health and Family Welfare",
      management: "Ministry of Health and Family Welfare, Government of India",
      programs: ["MD", "MS", "Diploma programs"],
      established: 2012,
      website: "https://aiimsrishikesh.edu.in",
    },
    {
      id: 72,
      name: "Government Medical College (GMC), Haldwani",
      pgSeats: 74,
      state: "Uttarakhand",
      affiliation: "Kumaon University, Nainital",
      management: "Department of Medical Education, Government of Uttarakhand",
      programs: ["MD", "MS specialties"],
      established: 2001,
      website: "https://gmchld.org",
    },
    {
      id: 73,
      name: "Government Doon Medical College (GDMC), Dehradun",
      pgSeats: 53,
      state: "Uttarakhand",
      affiliation:
        "Hemwati Nandan Bahuguna Uttarakhand Medical Education University",
      management: "Government of Uttarakhand",
      programs: ["MD", "MS specialties"],
      established: 2016,
      website: "https://gdmcuk.com",
    },
    {
      id: 74,
      name: "Veer Chandra Singh Garhwali Government Institute of Medical Science & Research (VCSGGIMS), Srinagar (Pauri Garhwal)",
      pgSeats: 36,
      state: "Uttarakhand",
      affiliation: "Uttarakhand Technical University / HNB Medical University",
      management: "nONE",
      programs: ["MD", "MS specialties"],
      established: 2008,
      website: "https://vcsgsrinagar.org",
    },
    {
      id: 77,
      name: "Andhra Medical College (AMC), Visakhapatnam",
      pgSeats: 318,
      state: "Andhra Pradesh",
      affiliation: "Dr. NTR University of Health Sciences (NTRUHS)",
      management: "State Government",
      programs: ["MD", "MS", "PG Diplomas", "DM", "MCh"],
      established: 1923,
      website: "https://amc.edu.in",
    },
    {
      id: 78,
      name: "Guntur Medical College (GMC), Guntur",
      pgSeats: 189,
      state: "Andhra Pradesh",
      affiliation: "Dr. NTR University of Health Sciences (NTRUHS)",
      management: "State Government",
      programs: ["MD", "MS", "PG Diplomas", "DM", "MCh"],
      established: 1946,
      website: "https://gunturmedicalcollege.edu.in",
    },
    {
      id: 79,
      name: "Government Medical College, Anantapur",
      pgSeats: 104,
      state: "Andhra Pradesh",
      affiliation: "Dr. NTR University of Health Sciences (NTRUHS)",
      management: "State Government",
      programs: ["MD", "MS programs"],
      established: 2000,
      website: "https://gmcatp.edu.in",
    },
    {
      id: 80,
      name: "Government Medical College, Kadapa (RGIMS Kadapa)",
      pgSeats: 115,
      state: "Andhra Pradesh",
      affiliation: "Dr. NTR University of Health Sciences (NTRUHS)",
      management: "State Government",
      programs: ["MD", "MS programs"],
      established: 2006,
      website: "https://governmentmedicalcollegekadapa.edu.in",
    },
    {
      id: 82,
      name: "Government Medical College, Srikakulam (RGIMS Srikakulam)",
      pgSeats: 69,
      state: "Andhra Pradesh",
      affiliation: "Dr. NTR University of Health Sciences (NTRUHS)",
      management: "State Government",
      programs: ["MD", "MS programs"],
      established: 2008,
      website: "https://gmcsrikakulam.org",
    },
    {
      id: 83,
      name: "Kurnool Medical College, Kurnool",
      pgSeats: 175,
      state: "Andhra Pradesh",
      affiliation: "Dr. NTR University of Health Sciences (NTRUHS)",
      management: "State Government",
      programs: ["MD", "PG Diplomas", "DM", "MCh"],
      established: 1957,
      website: "https://kurnoolmedicalcollege.ac.in",
    },
    {
      id: 84,
      name: "Rangaraya Medical College, Kakinada",
      pgSeats: 203,
      state: "Andhra Pradesh",
      affiliation: "Dr. NTR University of Health Sciences (NTRUHS)",
      management: "State Government",
      programs: ["MD", "MS", "PG Diplomas", "DM"],
      established: 1958,
      website: "https://rmckakinada.com",
    },
    {
      id: 85,
      name: "Siddhartha Medical College, Vijayawada",
      pgSeats: 137,
      state: "Andhra Pradesh",
      affiliation: "Dr. NTR University of Health Sciences (NTRUHS)",
      management: "State Government Autonomous under DME, AP",
      programs: ["MD", "MS programs", "MCh"],
      established: 1980,
      website: "https://smcvja.in/",
    },
    {
      id: 86,
      name: "Sri Venkateswara Medical College & SV Medical College, Tirupati",
      pgSeats: 275,
      state: "Andhra Pradesh",
      affiliation: "Dr. NTR University of Health Sciences (NTRUHS)",
      management: "State Government",
      programs: ["MD", "MS", "DM", "MCh"],
      established: 1960,
      website: "https://svimstpt.ap.nic.in/",
    },
    {
      id: 89,
      name: "Tomo Riba Institute of Health & Medical Sciences (TRIHMS), Naharlagun",
      pgSeats: 0,
      state: "Arunachal Pradesh",
      affiliation: "Rajiv Gandhi University",
      management: "State Government",
      programs: ["MD", "MS", "Diplomas across various specialties"],
      established: 2017,
      website: "https://trihms.co.in",
    },
    {
      id: 92,
      name: "Assam Medical College & Hospital",
      pgSeats: 176,
      state: "Assam",
      affiliation: "Srimanta Sankaradeva University of Health Sciences",
      management: "State Government",
      programs: ["MD", "MS", "Diploma"],
      established: 1947,
      website: "https://amch-dibrugarh.assam.gov.in/",
    },
    {
      id: 93,
      name: "Gauhati Medical College & Hospital",
      pgSeats: 194,
      state: "Assam",
      affiliation: "Srimanta Sankaradeva University of Health Sciences",
      management: "State Government",
      programs: ["MD", "MS", "Diploma", "DM", "MCh"],
      established: 1960,
      website: "https://gmchassam.gov.in/",
    },
    {
      id: 94,
      name: "Silchar Medical College & Hospital",
      pgSeats: 105,
      state: "Assam",
      affiliation: "Srimanta Sankaradeva University of Health Sciences",
      management: "State Government",
      programs: ["MD", "MS", "Diploma"],
      established: 1968,
      website: "https://silchar-mch.assam.gov.in/",
    },
    {
      id: 95,
      name: "Jorhat Medical College & Hospital",
      pgSeats: 84,
      state: "Assam",
      affiliation: "Srimanta Sankaradeva University of Health Sciences",
      management: "State Government",
      programs: ["MD", "MS", "Diploma"],
      established: 2010,
      website: "https://jorhatmch.assam.gov.in/",
    },
    {
      id: 96,
      name: "Fakhruddin Ali Ahmed Medical College",
      pgSeats: 48,
      state: "Assam",
      affiliation: "Srimanta Sankaradeva University of Health Sciences",
      management: "State Government",
      programs: ["MD", "MS", "Diploma"],
      established: 2012,
      website: "https://faamch.assam.gov.in/",
    },
    {
      id: 97,
      name: "Tezpur Medical College & Hospital",
      pgSeats: 60,
      state: "Assam",
      affiliation: "Srimanta Sankaradeva University of Health Sciences",
      management: "State Government",
      programs: ["MD", "MS", "Diploma"],
      established: 2014,
      website: "https://tezpur-mch.assam.gov.in/",
    },
    {
      id: 98,
      name: "Dr. B. Borooah Cancer Institute (HB rel. - GMC)",
      pgSeats: 5,
      state: "Assam",
      affiliation: "Srimanta Sankaradeva University of Health Sciences",
      management: "State Government",
      programs: ["MD (Radiotherapy)"],
      established: 1980,
      website: "https://www.bbcionline.org/",
    },
    {
      id: 99,
      name: "Lokopriya Gopinath Bordoloi Regional Institute of Mental Health",
      pgSeats: 11,
      state: "Assam",
      affiliation: "Srimanta Sankaradeva University of Health Sciences",
      management: "State Government",
      programs: ["MD (Psychiatry)"],
      established: 1876,
      website: "http://www.lgbrimh.gov.in/",
    },
    {
      id: 102,
      name: "All India Institute of Medical Sciences (AIIMS) Patna",
      pgSeats: 98,
      state: "Bihar",
      affiliation: "Autonomous (Degrees awarded by AIIMS itself)",
      management:
        "Central Government (Ministry of Health & Family Welfare, Government of India)",
      programs: ["MD/MS", "DM/MCh", "DNB", "PhD"],
      established: 2012,
      website: "https://aiimspatna.edu.in/",
    },
    {
      id: 103,
      name: "Patna Medical College & Hospital (PMCH)",
      pgSeats: 201,
      state: "Bihar",
      affiliation: "Bihar University of Health Sciences (BUHS), Patna",
      management: "Government of Bihar – Department of Health",
      programs: ["MD", "MS programs"],
      established: 1925,
      website: "https://pmchpatna.in/",
    },
    {
      id: 104,
      name: "Indira Gandhi Institute of Medical Sciences (IGIMS)",
      pgSeats: 97,
      state: "Bihar",
      affiliation: "Autonomous (IGIMS Act, 1984) – Award its own degrees",
      management:
        "Autonomous Institute under Government of Bihar (IGIMS Act, 1984)",
      programs: ["MD", "MS programs"],
      established: 1983,
      website: "https://www.igims.org/",
    },
    {
      id: 105,
      name: "Anugrah Narayan Magadh Medical College & Hospital (ANMMCH)",
      pgSeats: 41,
      state: "Bihar",
      affiliation: "Bihar University of Health Sciences (BUHS)",
      management: "Government of Bihar – Department of Health",
      programs: ["MD", "MS programs"],
      established: 1970,
      website: "http://anmmc.ac.in/",
    },
    {
      id: 106,
      name: "Darbhanga Medical College & Hospital (DMCH)",
      pgSeats: 147,
      state: "Bihar",
      affiliation: "Bihar University of Health Sciences (BUHS)",
      management: "Government of Bihar – Department of Health",
      programs: ["MD", "MS programs"],
      established: 1946,
      website: "https://dmc.edu.in/",
    },
    {
      id: 107,
      name: "Nalanda Medical College & Hospital (NMCH)",
      pgSeats: 108,
      state: "Bihar",
      affiliation: "Bihar University of Health Sciences (BUHS)",
      management: "Government of Bihar – Department of Health",
      programs: ["MD", "MS programs"],
      established: 1970,
      website: "https://nmchpatna.org/",
    },
    {
      id: 108,
      name: "Jawaharlal Nehru Medical College & Hospital (JLNMC)",
      pgSeats: 72,
      state: "Bihar",
      affiliation: "Bihar University of Health Sciences (BUHS)",
      management: "Government of Bihar – Department of Health",
      programs: ["MD", "MS programs"],
      established: 1971,
      website: "https://jlnmcbgp.org/",
    },
    {
      id: 109,
      name: "Sri Krishna Medical College & Hospital (SKMCH)",
      pgSeats: 18,
      state: "Bihar",
      affiliation: "Bihar University of Health Sciences (BUHS)",
      management: "Government of Bihar – Department of Health",
      programs: ["MD", "MS programs"],
      established: 1970,
      website: "https://www.skmedicalcollege.org/",
    },
    {
      id: 110,
      name: "Govt Medical College, Bettiah",
      pgSeats: 18,
      state: "Bihar",
      affiliation: "Bihar University of Health Sciences (BUHS)",
      management: "Government of Bihar – Department of Health",
      programs: ["MD", "MS programs"],
      established: 2013,
      website: "http://www.gmcbettiah.org/",
    },
    {
      id: 111,
      name: "Vardhman Institute of Medical Sciences (VIMS)",
      pgSeats: 12,
      state: "Bihar",
      affiliation: "Bihar University of Health Sciences (BUHS)",
      management: "Government of Bihar – Department of Health",
      programs: ["MD", "MS programs"],
      established: 2013,
      website: "https://vimspawapuri.org/",
    },
    {
      id: 114,
      name: "Pt. Jawahar Lal Nehru Memorial Medical College, Raipur",
      pgSeats: 148,
      state: "Chattisgarh",
      affiliation:
        "Pt. Deendayal Upadhyay Memorial Health Sciences & Ayush University, Raipur",
      management: "State Government",
      programs: ["MD/MS (all major clinical & para-clinical)"],
      established: 1963,
      website: "http://www.ptjnmcraipur.in/",
    },
    {
      id: 115,
      name: "Chhattisgarh Institute of Medical Sciences, Bilaspur",
      pgSeats: 33,
      state: "Chattisgarh",
      affiliation:
        "Pt. Deendayal Upadhyay Memorial Health Sciences & Ayush University, Raipur",
      management: "State Government",
      programs: ["MD/MS (incl. Medicine, Surgery, Paediatrics, etc.)"],
      established: 2001,
      website: "http://www.cimsbilaspur.ac.in/",
    },
    {
      id: 116,
      name: "Government Medical College – Late Shri Baliram Kashyap Memorial NDMC, Jagdalpur",
      pgSeats: 5,
      state: "Chattisgarh",
      affiliation:
        "Pt. Deendayal Upadhyay Memorial Health Sciences & Ayush University, Raipur",
      management: "State Government",
      programs: ["MD/MS (Community Medicine, Pathology, Obs & Gynae, etc.)"],
      established: 2006,
      website: "http://www.gmcjagdalpur.ac.in/",
    },
    {
      id: 117,
      name: "All India Institute of Medical Sciences (AIIMS), Raipur",
      pgSeats: 148,
      state: "Chattisgarh",
      affiliation:
        "Statutory Autonomous (Ministry of Health & Family Welfare, GoI)",
      management: "State Government",
      programs: ["MD/MS", "DM & M.Ch (Super-specialties)"],
      established: 2012,
      website: "http://www.aiimsraipur.edu.in/",
    },
    {
      id: 118,
      name: "Government Medical College – Late Shri Lakhi Ram Agrawal Memorial, Raigarh",
      pgSeats: 69,
      state: "Chattisgarh",
      affiliation:
        "Pt. Deendayal Upadhyay Memorial Health Sciences & Ayush University, Raipur",
      management: "State Government",
      programs: ["MD/MS (Basic & Clinical)"],
      established: 2013,
      website: "http://gmcraigarh.edu.in/",
    },
    {
      id: 119,
      name: "Government Medical College (Bharat Ratna Shri Atal Bihari Vajpayee Memorial), Rajnandgaon",
      pgSeats: 136,
      state: "Chattisgarh",
      affiliation:
        "Pt. Deendayal Upadhyay Memorial Health Sciences & Ayush University, Raipur",
      management: "State Government",
      programs: ["MD/MS"],
      established: 2014,
      website: "http://www.abvmgmcrajnandgaon.ac.in/",
    },
    {
      id: 120,
      name: "Rajmata Smt. Devendra Kumari Singhdeo Government Medical College, Ambikapur",
      pgSeats: 34,
      state: "Chattisgarh",
      affiliation:
        "Pt. Deendayal Upadhyay Memorial Health Sciences & Ayush University, Raipur",
      management: "State Government",
      programs: ["MD/MS"],
      established: 2016,
      website: "https://gmcambikapur.co.in/",
    },
    {
      id: 123,
      name: "Goa Medical College & Hospital (GMC), Bambolim, Goa",
      pgSeats: 86,
      state: "Goa",
      affiliation: "Goa University, NMC",
      management: "State Government",
      programs: ["MD/MS", "PG Diplomas", "super‑specialty (DM/MCh)"],
      established: 1963,
      website: "https://gmcgoa.edu.in",
    },
    {
      id: 124,
      name: "New Govt Med College, Margao",
      pgSeats: 0,
      state: "Goa",
      affiliation: "Govt of Goa / TBD",
      management: "State Government",
      programs: ["NA"],
      established: 2025,
      website: "https://www.esic.gov.in",
    },
    {
      id: 127,
      name: "B. J. Medical College, Ahmedabad",
      pgSeats: 400,
      state: "Gujarat",
      affiliation: "Gujarat University, Ahmedabad",
      management:
        "Government of Gujarat, under the Health and Family Welfare Department",
      programs: ["MD/MS"],
      established: 1871,
      website: "www.bjmcabd.edu.in",
    },
    {
      id: 128,
      name: "Baroda Medical College (Government Medical College, Vadodara)",
      pgSeats: 300,
      state: "Gujarat",
      affiliation: "Maharaja Sayajirao University of Baroda, Vadodara",
      management:
        "Government of Gujarat, under the Health and Family Welfare Department",
      programs: ["MD/MS programs"],
      established: 1949,
      website: "www.medicalcollegebaroda.edu.in",
    },
    {
      id: 129,
      name: "Shri M. P. Shah Government Medical College, Jamnagar",
      pgSeats: 202,
      state: "Gujarat",
      affiliation: "Saurashtra University, Rajkot",
      management:
        "Government of Gujarat, under the Health and Family Welfare Department",
      programs: ["MD/MS specialties", "6 Diploma courses"],
      established: 1954,
      website: "www.mpsmc.in",
    },
    {
      id: 130,
      name: "Government Medical College, Surat",
      pgSeats: 223,
      state: "Gujarat",
      affiliation: "Veer Narmad South Gujarat University, Surat",
      management:
        "Government of Gujarat, under the Health and Family Welfare Department",
      programs: ["MD/MS programs"],
      established: 1964,
      website: "https://gmcsurat.edu.in/doku.php?id=start",
    },
    {
      id: 131,
      name: "Government Medical College, Bhavnagar",
      pgSeats: 132,
      state: "Gujarat",
      affiliation: "Bhavnagar University, Bhavnagar",
      management:
        "Government of Gujarat, under the Health and Family Welfare Department",
      programs: ["MD/MS programs"],
      established: 1995,
      website: "https://gmcbhavnagar.edu.in/",
    },
    {
      id: 132,
      name: "Pandit Deendayal Upadhyay Government Medical College, Rajkot",
      pgSeats: 148,
      state: "Gujarat",
      affiliation: "Saurashtra University, Rajkot",
      management:
        "Government of Gujarat, under the Health and Family Welfare Department",
      programs: ["MD/MS programs"],
      established: 1995,
      website: "https://pdumcrajkot.org/",
    },
    {
      id: 133,
      name: "Smt. NHL Municipal Medical College, Ahmedabad",
      pgSeats: 258,
      state: "Gujarat",
      affiliation: "Gujarat University, Ahmedabad",
      management: "Ahmedabad Municipal Corporation",
      programs: ["MD/MS programs"],
      established: 1963,
      website: "www.nhlmmc.edu.in",
    },
    {
      id: 134,
      name: "Ahmedabad Municipal Corporation Medical College (Narendra Modi Med College)",
      pgSeats: 184,
      state: "Gujarat",
      affiliation: "Gujarat University, Ahmedabad",
      management: "Ahmedabad Municipal Corporation",
      programs: ["MD/MS programs"],
      established: 2009,
      website: "www.narendramodimedicalcollege.edu.in",
    },
    {
      id: 135,
      name: "Surat Municipal Institute of Medical Education & Research",
      pgSeats: 169,
      state: "Gujarat",
      affiliation: "Veer Narmad South Gujarat University, Surat",
      management: "Ahmedabad Municipal Corporation",
      programs: ["MD/MS programs"],
      established: 1999,
      website: "https://www.suratmunicipal.gov.in/smimer",
    },

    {
      id: 139,
      name: "Pt. B.D. Sharma Post Graduate Institute of Medical Sciences (PGIMS), Rohtak",
      pgSeats: 239,
      state: "Haryana",
      affiliation:
        "Pandit Bhagwat Dayal Sharma University of Health Sciences, Rohtak",
      management: "Government of Haryana",
      programs: ["MD and MS specialties"],
      established: 1960,
      website: "pgimsrohtak.ac.in",
    },
    {
      id: 140,
      name: "Shaheed Hasan Khan Mewati Government Medical College, Nalhar (Mewat)",
      pgSeats: 41,
      state: "Haryana",
      affiliation:
        "Pandit Bhagwat Dayal Sharma University of Health Sciences, Rohtak",
      management: "Government of Haryana",
      programs: ["MD/MS programs"],
      established: 2012,
      website: "gmcmewat.ac.in",
    },
    {
      id: 141,
      name: "ESIC Medical College, Faridabad",
      pgSeats: 49,
      state: "Haryana",
      affiliation:
        "Pandit Bhagwat Dayal Sharma University of Health Sciences, Rohtak",
      management: "Central Government (Ministry of Labour & Employment)",
      programs: ["MD/MS", "Super-specialty (DM/MCh)", "DrNB", "Doctoral (PhD)"],
      established: 2015,
      website: "mcfaridabad.esic.gov.in",
    },
    {
      id: 142,
      name: "BPS Government Medical College for Women, Sonipat",
      pgSeats: 56,
      state: "Haryana",
      affiliation:
        "Pandit Bhagwat Dayal Sharma University of Health Sciences, Rohtak",
      management: "Government of Haryana",
      programs: ["MD", "MS", "DNB diploma programs"],
      established: 2012,
      website: "bpsgmckhanpur.ac.in",
    },
    {
      id: 143,
      name: "Kalpana Chawla Government Medical College, Karnal",
      pgSeats: 29,
      state: "Haryana",
      affiliation:
        "Pandit Deen Dayal Upadhyay University of Health Sciences, Karnal",
      management: "Government of Haryana",
      programs: ["MD courses", "DNB diplomas and degree programs"],
      established: 2017,
      website: "kcgmc.edu.in",
    },
    {
      id: 144,
      name: "Command Hospital (Western Command), Chandimandir (Panchkula)",
      pgSeats: 9,
      state: "Haryana",
      affiliation: "Pandit B.D. Sharma University of Health Sciences, Rohtak",
      management: "Central Government (Ministry of Defence)",
      programs: [
        "MD/MS programs",
        "PG Diploma in Nurse Practitioner in Midwifery",
      ],
      established: 1995,
      website: "https://mbbscouncil.com/listing/command-hospital-chandimandir/",
    },
    {
      id: 147,
      name: "Dr. Radhakrishnan Government Medical College, Hamirpur",
      pgSeats: 0,
      state: "Himachal Pradesh",
      affiliation: "Affiliated to AMRU",
      management: "State Government Medical Colleges",
      programs: [],
      established: 2018,
      website: "rgmchamirpur.org",
    },
    {
      id: 148,
      name: "Dr. Rajendra Prasad Government Medical College (RPGMC), Tanda, Kangra",
      pgSeats: 93,
      state: "Himachal Pradesh",
      affiliation: "Affiliated to AMRU",
      management: "State Government Medical Colleges",
      programs: ["MD and MS specialities"],
      established: 1996,
      website: "rpgmc.ac.in",
    },
    {
      id: 149,
      name: "Dr. Yashwant Singh Parmar Government Medical College, Nahan (Sirmaur)",
      pgSeats: 3,
      state: "Himachal Pradesh",
      affiliation: "Affiliated to AMRU",
      management: "State Government Medical Colleges",
      programs: ["MD in Community Medicine"],
      established: 2016,
      website: "yspgmc.org",
    },
    {
      id: 150,
      name: "Indira Gandhi Medical College, Shimla (IGMC)",
      pgSeats: 131,
      state: "Himachal Pradesh",
      affiliation: "Affiliated to AMRU",
      management: "State Government Medical Colleges",
      programs: ["MD/MS", "DM/M.Ch", "PG Diplomas"],
      established: 1966,
      website: "igmcshimla.edu.in",
    },
    // {
    //   id: 121,
    //   name: "King George's Medical University (KGMU)",
    //   pgSeats: 389,
    //   state: "Uttar Pradesh",
    //   affiliation: "State University",
    //   management: "State Government",
    //   programs: ["MBBS", "MD", "MS", "DM", "MCh"],
    //   established: 1905,
    //   website: "https://www.kgmcindia.edu",
    // },
    // {
    //   id: 122,
    //   name: "Maulana Azad Medical College (MAMC)",
    //   pgSeats: 267,
    //   state: "Delhi",
    //   affiliation: "University of Delhi",
    //   management: "State Government",
    //   programs: ["MBBS", "MD", "MS"],
    //   established: 1958,
    //   website: "https://www.mamc.ac.in",
    // },
    // {
    //   id: 123,
    //   name: "Armed Forces Medical College (AFMC)",
    //   pgSeats: 156,
    //   state: "Maharashtra",
    //   affiliation: "Deemed University",
    //   management: "Central Government",
    //   programs: ["MBBS", "MD", "MS"],
    //   established: 1948,
    //   website: "https://www.afmc.nic.in",
    // },
    // {
    //   id: 124,
    //   name: "Jawaharlal Institute of Postgraduate Medical Education & Research (JIPMER)",
    //   pgSeats: 198,
    //   state: "Puducherry",
    //   affiliation: "Deemed University",
    //   management: "Central Government",
    //   programs: ["MBBS", "MD", "MS", "DM", "MCh"],
    //   established: 1823,
    //   website: "https://www.jipmer.edu.in",
    // },
    // {
    //   id: 125,
    //   name: "Sanjay Gandhi Postgraduate Institute of Medical Sciences (SGPGIMS)",
    //   pgSeats: 178,
    //   state: "Uttar Pradesh",
    //   affiliation: "Autonomous",
    //   management: "Central Government",
    //   programs: ["MD", "MS", "DM", "MCh", "PhD"],
    //   established: 1983,
    //   website: "https://www.sgpgi.ac.in",
    // },
    // {
    //   id: 126,
    //   name: "All Institute of Medical Sciences (AIIMS), New Delhi",
    //   pgSeats: 847,
    //   state: "Delhi",
    //   affiliation: "Autonomous",
    //   management: "Central Government",
    //   programs: ["MBBS", "MD", "MS", "DM", "MCh", "PhD"],
    //   established: 1956,
    //   website: "https://www.aiims.edu",
    // },
    // {
    //   id: 127,
    //   name: "Postgraduate Institute of Medical Education and Research (PGIMER)",
    //   pgSeats: 456,
    //   state: "Chandigarh",
    //   affiliation: "Autonomous",
    //   management: "Central Government",
    //   programs: ["MD", "MS", "DM", "MCh", "PhD"],
    //   established: 1962,
    //   website: "https://www.pgimer.edu.in",
    // },
    // {
    //   id: 128,
    //   name: "Christian Medical College (CMC), Vellore",
    //   pgSeats: 234,
    //   state: "Tamil Nadu",
    //   affiliation: "Deemed University",
    //   management: "Private",
    //   programs: ["MBBS", "MD", "MS", "DM", "MCh"],
    //   established: 1900,
    //   website: "https://www.cmch-vellore.edu",
    // },
    // {
    //   id: 129,
    //   name: "King George's Medical University (KGMU)",
    //   pgSeats: 389,
    //   state: "Uttar Pradesh",
    //   affiliation: "State University",
    //   management: "State Government",
    //   programs: ["MBBS", "MD", "MS", "DM", "MCh"],
    //   established: 1905,
    //   website: "https://www.kgmcindia.edu",
    // },
    // {
    //   id: 130,
    //   name: "Maulana Azad Medical College (MAMC)",
    //   pgSeats: 267,
    //   state: "Delhi",
    //   affiliation: "University of Delhi",
    //   management: "State Government",
    //   programs: ["MBBS", "MD", "MS"],
    //   established: 1958,
    //   website: "https://www.mamc.ac.in",
    // },
    // {
    //   id: 131,
    //   name: "Armed Forces Medical College (AFMC)",
    //   pgSeats: 156,
    //   state: "Maharashtra",
    //   affiliation: "Deemed University",
    //   management: "Central Government",
    //   programs: ["MBBS", "MD", "MS"],
    //   established: 1948,
    //   website: "https://www.afmc.nic.in",
    // },
    // {
    //   id: 132,
    //   name: "Jawaharlal Institute of Postgraduate Medical Education & Research (JIPMER)",
    //   pgSeats: 198,
    //   state: "Puducherry",
    //   affiliation: "Deemed University",
    //   management: "Central Government",
    //   programs: ["MBBS", "MD", "MS", "DM", "MCh"],
    //   established: 1823,
    //   website: "https://www.jipmer.edu.in",
    // },
    // {
    //   id: 133,
    //   name: "Sanjay Gandhi Postgraduate Institute of Medical Sciences (SGPGIMS)",
    //   pgSeats: 178,
    //   state: "Uttar Pradesh",
    //   affiliation: "Autonomous",
    //   management: "Central Government",
    //   programs: ["MD", "MS", "DM", "MCh", "PhD"],
    //   established: 1983,
    //   website: "https://www.sgpgi.ac.in",
    // },
    // {
    //   id: 134,
    //   name: "All Institute of Medical Sciences (AIIMS), New Delhi",
    //   pgSeats: 847,
    //   state: "Delhi",
    //   affiliation: "Autonomous",
    //   management: "Central Government",
    //   programs: ["MBBS", "MD", "MS", "DM", "MCh", "PhD"],
    //   established: 1956,
    //   website: "https://www.aiims.edu",
    // },
    // {
    //   id: 135,
    //   name: "Postgraduate Institute of Medical Education and Research (PGIMER)",
    //   pgSeats: 456,
    //   state: "Chandigarh",
    //   affiliation: "Autonomous",
    //   management: "Central Government",
    //   programs: ["MD", "MS", "DM", "MCh", "PhD"],
    //   established: 1962,
    //   website: "https://www.pgimer.edu.in",
    // },
    // {
    //   id: 136,
    //   name: "Christian Medical College (CMC), Vellore",
    //   pgSeats: 234,
    //   state: "Tamil Nadu",
    //   affiliation: "Deemed University",
    //   management: "Private",
    //   programs: ["MBBS", "MD", "MS", "DM", "MCh"],
    //   established: 1900,
    //   website: "https://www.cmch-vellore.edu",
    // },
    // {
    //   id: 137,
    //   name: "King George's Medical University (KGMU)",
    //   pgSeats: 389,
    //   state: "Uttar Pradesh",
    //   affiliation: "State University",
    //   management: "State Government",
    //   programs: ["MBBS", "MD", "MS", "DM", "MCh"],
    //   established: 1905,
    //   website: "https://www.kgmcindia.edu",
    // },
    // {
    //   id: 138,
    //   name: "Maulana Azad Medical College (MAMC)",
    //   pgSeats: 267,
    //   state: "Delhi",
    //   affiliation: "University of Delhi",
    //   management: "State Government",
    //   programs: ["MBBS", "MD", "MS"],
    //   established: 1958,
    //   website: "https://www.mamc.ac.in",
    // },
    // {
    //   id: 139,
    //   name: "Armed Forces Medical College (AFMC)",
    //   pgSeats: 156,
    //   state: "Maharashtra",
    //   affiliation: "Deemed University",
    //   management: "Central Government",
    //   programs: ["MBBS", "MD", "MS"],
    //   established: 1948,
    //   website: "https://www.afmc.nic.in",
    // },
  ];
  // Get unique states for filter
  const states = [
    "all",
    ...Array.from(new Set(colleges.map((college) => college.state))),
  ];

  /**
   * Filter colleges based on search term and state
   * @returns Filtered college list
   */
  const filteredColleges = colleges.filter((college) => {
    const matchesSearch =
      college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      college.state.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesState =
      selectedState === "all" || college.state === selectedState;
    return matchesSearch && matchesState;
  });

  /**
   * Open college details popup
   * @param college - College object to display
   */
  const openCollegeDetails = (college: College) => {
    setSelectedCollege(college);
  };

  /**
   * Close college details popup
   */
  const closeCollegeDetails = () => {
    setSelectedCollege(null);
  };

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
            Medical Universities & Colleges
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-8 text-white mb-8 shadow-xl">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Explore Medical Universities
            </h2>
            <p className="text-indigo-100 text-lg">
              Discover top medical colleges and universities across India
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
                placeholder="Search colleges, categories, or names..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-800"
              />
            </div>

            {/* State Filter */}
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-slate-800"
            >
              {states.map((state) => (
                <option key={state} value={state}>
                  {state === "all" ? "All States" : state}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Colleges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredColleges.map((college) => (
            <div
              key={college.id}
              onClick={() => openCollegeDetails(college)}
              className="bg-white/80 backdrop-blur-xl rounded-2xl p-4 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                  {college.management}
                </span>
              </div>

              <h3 className="text-sm font-bold text-slate-800 mb-3 line-clamp-2 leading-tight">
                {college.name}
              </h3>

              <div className="space-y-1 mb-3">
                <div className="flex items-center text-sm text-slate-600">
                  <MapPin className="w-3 h-3 mr-1" />
                  <span>{college.state}</span>
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <Users className="w-3 h-3 mr-1" />
                  <span>{college.pgSeats} PG Seats</span>
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <Calendar className="w-3 h-3 mr-1" />
                  <span>Est. {college.established}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1 mb-3">
                {college.programs.slice(0, 3).map((program) => (
                  <span
                    key={program}
                    className="px-1.5 py-0.5 bg-slate-100 text-slate-700 rounded text-xs"
                  >
                    {program}
                  </span>
                ))}
                {college.programs.length > 3 && (
                  <span className="px-1.5 py-0.5 bg-slate-100 text-slate-700 rounded text-xs">
                    +{college.programs.length - 3} more
                  </span>
                )}
              </div>

              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 font-medium text-xs">
                View Details
              </button>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredColleges.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-8 h-8 text-slate-500" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              No colleges found
            </h3>
            <p className="text-slate-600">
              Try adjusting your search terms or filters
            </p>
          </div>
        )}
      </div>

      {/* College Details Popup */}
      {selectedCollege && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Popup Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-2">
                      {selectedCollege.name}
                    </h2>
                    <div className="flex items-center space-x-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {selectedCollege.management}
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        {selectedCollege.affiliation}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={closeCollegeDetails}
                  className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
                >
                  <X className="w-6 h-6 text-slate-600" />
                </button>
              </div>

              {/* College Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div className="bg-slate-50 rounded-xl p-4">
                    <div className="flex items-center mb-2">
                      <Users className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="font-semibold text-slate-800">
                        PG Seats
                      </span>
                    </div>
                    <p className="text-2xl font-bold text-blue-600">
                      {selectedCollege.pgSeats}
                    </p>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-4">
                    <div className="flex items-center mb-2">
                      <MapPin className="w-5 h-5 text-green-600 mr-2" />
                      <span className="font-semibold text-slate-800">
                        State
                      </span>
                    </div>
                    <p className="text-lg text-slate-700">
                      {selectedCollege.state}
                    </p>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-4">
                    <div className="flex items-center mb-2">
                      <Calendar className="w-5 h-5 text-purple-600 mr-2" />
                      <span className="font-semibold text-slate-800">
                        Established
                      </span>
                    </div>
                    <p className="text-lg text-slate-700">
                      {selectedCollege.established}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-slate-50 rounded-xl p-4">
                    <div className="flex items-center mb-2">
                      <Award className="w-5 h-5 text-orange-600 mr-2" />
                      <span className="font-semibold text-slate-800">
                        Affiliation
                      </span>
                    </div>
                    <p className="text-lg text-slate-700">
                      {selectedCollege.affiliation}
                    </p>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-4">
                    <div className="flex items-center mb-2">
                      <Building2 className="w-5 h-5 text-red-600 mr-2" />
                      <span className="font-semibold text-slate-800">
                        Management
                      </span>
                    </div>
                    <p className="text-lg text-slate-700">
                      {selectedCollege.management}
                    </p>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-4">
                    <div className="flex items-center mb-2">
                      <ExternalLink className="w-5 h-5 text-indigo-600 mr-2" />
                      <span className="font-semibold text-slate-800">
                        Website
                      </span>
                    </div>
                    <a
                      href={selectedCollege.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>

              {/* Programs Section */}
              <div className="bg-slate-50 rounded-xl p-4 mb-6">
                <h3 className="font-semibold text-slate-800 mb-3">
                  Available Programs
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedCollege.programs.map((program) => (
                    <span
                      key={program}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {program}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-200 font-medium">
                  Add to Favorites
                </button>
                <a
                  href={selectedCollege.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-slate-200 text-slate-800 py-3 rounded-xl hover:bg-slate-300 transition-all duration-200 font-medium text-center"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UniversitiesPage;
