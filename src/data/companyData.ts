export interface ProjectItem {
  id: string | number;
  title: string;
  category: 'Residential' | 'Commercial' | 'Contracting' | 'Mixed Use';
  status: 'Ongoing' | 'Completed' | 'Upcoming';
  location: string;
  area: string;
  year: string;
  image: string;
  description: string;
  units?: string;
  highlights?: string[];
  amenities?: string[];
  specifications?: string[];
}

export const COMPANY_INFO = {
  name: "Shivaangan Realcon",
  legalName: "Shivaangan Realcon",
  tagline: "Redefining Luxury & Engineering Excellence",
  description: "Shivaangan Realcon is a premier real estate developer committed to creating architectural landmarks, premium residential communities, and state-of-the-art commercial hubs across Maharashtra.",
  estYear: "2010",
  experienceYears: "15+",
  stats: [
    { value: "15+", label: "Years of Industry Excellence" },
    { value: "10 Lac+", label: "Sq. Ft. Built & Delivered" },
    { value: "1,200+", label: "Happy Families & Business Partners" },
    { value: "14+", label: "Landmark Projects Completed & Ongoing" }
  ],
  directors: [
    {
      name: "Mr. Amit Sanas",
      title: "Director",
      image: "/images/directors/amit_sanas.jpg",
      bio: "A dynamic leader and visionary real estate entrepreneur driving strategic project execution, high-quality development standards, and customer trust across Shivaangan Realcon."
    },
    {
      name: "Mr. Rupesh Hande",
      title: "Director",
      image: "/images/directors/rupesh_hande.jpg",
      bio: "An accomplished real estate visionary overseeing architectural innovation, strategic business expansion, land acquisition, and landmark development for Shivaangan Realcon."
    }
  ],
  director: {
    name: "Amit Sanas & Rupesh Hande",
    title: "Directors",
    phone: "+91 7030 255 755",
    email: "contact@shivaanganrealcon.com"
  },
  offices: [
    {
      city: "Pune Head Office",
      address: "Shop no. M 14, 1st floor, VTP Trade Park, S. No. 28/2B, Hadapsar- Katraj Road, Undri",
      pincode: "Pune - 411060",
      phone: "+91 7030 255 755",
      email: "contact@shivaanganrealcon.com",
      mapUrl: "https://maps.app.goo.gl/6XdxQPxZsRW2UGut5?g_st=aw"
    }
  ],
  phone: "+91 7030 255 755",
  email: "contact@shivaanganrealcon.com",
  whatsappNumber: "917030255755",
  mapUrl: "https://maps.app.goo.gl/6XdxQPxZsRW2UGut5?g_st=aw"
};

export const REGALIA_PROJECT: ProjectItem & {
  masterPlan: string;
  floorPlans: { name: string; size: string; image: string }[];
  locationHighlights: string[];
} = {
  id: "regalia",
  title: "REGALIA",
  category: "Residential",
  status: "Ongoing",
  location: "Prime Location, Undri",
  area: "1,50,000+ Sq. Ft.",
  year: "2024-2026",
  units: "2 & 3 BHK Luxury Residences & Commercial Spaces",
  image: "/images/regalia.png",
  description: "REGALIA is the crown jewel of Shivaangan Realcon. Designed for discerning homebuyers, REGALIA combines contemporary ultra-luxury architecture, sky-level lifestyle amenities, lush green landscapes, and uncompromised structural engineering.",
  highlights: [
    "Grand Entrance Plaza with 24/7 Multi-tier Security",
    "High-speed Elevator Systems with Power Backup",
    "Rooftop Infinity Sky Lounge & Landscape Garden",
    "EV Charging Stations & Rainwater Harvesting",
    "Earthquake Resistant RCC Frame Structure (IS Code Compliant)",
    "Vastu-compliant Thoughtfully Planned 2 & 3 BHK Layouts"
  ],
  amenities: [
    "Designer Clubhouse & Multi-purpose Hall",
    "Fully Equipped Gymnasium & Fitness Center",
    "Children's Play Zone & Toddler Turf",
    "Senior Citizen Relaxation Pavilion & Zen Garden",
    "Indoor Sports Arcade (Billiards, Table Tennis, Carrom)",
    "Jogging & Reflexology Walking Tracks",
    "Video Door Phone & Smart Access Control",
    "Solar Water Heating & Waste Management"
  ],
  specifications: [
    "Structure: Seismic Resistant RCC Framed Structure designed by renowned structural engineers.",
    "Flooring: 800x800mm Premium Vitrified Tiles in Living, Dining, Bedrooms & Kitchen.",
    "Kitchen: Granite Platform with SS Sink & Designer Glazed Tiles Dado up to Lintel Level.",
    "Doors & Windows: Teakwood Frame Main Door with Smart Digital Lock; UPVC/Powder Coated Aluminum Sliding Windows with Mosquito Mesh.",
    "Bathrooms: Premium Concealed Plumbing with Jaguar / Kohler CP Fittings & Anti-skid Flooring.",
    "Electrical: Concealed Copper Wiring with Modular Switches, AC Points in Master Bedrooms, and TV/Internet Provisions."
  ],
  masterPlan: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  floorPlans: [
    {
      name: "2 BHK Luxury Suite",
      size: "785 - 850 Sq. Ft. Carpet",
      image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "3 BHK Royal Imperial",
      size: "1,120 - 1,280 Sq. Ft. Carpet",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80"
    }
  ],
  locationHighlights: [
    "2 Mins from Reputed Schools & Colleges",
    "5 Mins from Multi-specialty Hospitals",
    "Convenient Access to Shopping Malls & Banks",
    "Seamless Connectivity to Highway & Transit Hubs"
  ]
};

export const PROJECTS_LIST: ProjectItem[] = [
  REGALIA_PROJECT,
  {
    id: "vrundavan-park-2",
    title: "Vrundavan Park (Phase 2)",
    category: "Residential",
    status: "Ongoing",
    location: "Kasaba, Baramati",
    area: "50,000 Sq. Ft.",
    year: "2022-2025",
    units: "70 Premium Flats",
    image: "/images/Vrundavan Park ( Phase 2).png",
    description: "Modern residential gated community featuring 70 well-appointed flats designed with optimum spatial efficiency, green surroundings, and family amenities.",
    amenities: ["Children Play Area", "Gated Security", "Solar Lighting", "Covered Parking", "Clubhouse"]
  },
  {
    id: "nirmiti-vihar-2",
    title: "Nirmiti Vihar (Phase 2)",
    category: "Residential",
    status: "Ongoing",
    location: "MIDC, Baramati",
    area: "1,28,000 Sq. Ft.",
    year: "2023-2025",
    units: "112 Luxury Flats",
    image: "/images/NirmitiVihar (Phase 2).png",
    description: "High-rise residential landmark offering 112 spacious flats with scenic views, modern infrastructure, and easy proximity to industrial hubs.",
    amenities: ["Elevators", "Gymnasium", "Landscape Garden", "Power Backup", "24/7 Security"]
  },
  {
    id: "durga-city-mall",
    title: "Durga City Mall",
    category: "Commercial",
    status: "Ongoing",
    location: "Patas Road, Baramati",
    area: "1,00,000 Sq. Ft.",
    year: "2023-2025",
    units: "Retail Stores, Food Court & Multiplex Spaces",
    image: "/images/Durga City Mall.png",
    description: "Baramati's mega commercial retail destination bringing together top national brands, dining arcades, and high-footfall business infrastructure.",
    amenities: ["Centralized AC", "Escalators & Glass Lifts", "Basement Parking", "Fire Safety", "Power Backup"]
  },
  {
    id: "k-square-commercial",
    title: "K-Square Commercial Building",
    category: "Commercial",
    status: "Completed",
    location: "Plot No. 36 MIDC, Baramati",
    area: "22,000 Sq. Ft.",
    year: "2023-2024",
    units: "Shops & Executive Offices",
    image: "/images/Commercial Building.png",
    description: "Sleek glass-fronted commercial complex designed for corporate offices, banks, retail outlets, and professional consultancy firms.",
    amenities: ["Modern Glass Facade", "High-speed Lifts", "Security CCTV", "Ample Visitor Parking"]
  },
  {
    id: "vrundavan-commercial",
    title: "Vrundavan Park Commercial",
    category: "Commercial",
    status: "Completed",
    location: "Kasaba, Baramati",
    area: "15,000 Sq. Ft.",
    year: "2022-2023",
    units: "Shops & Showrooms",
    image: "/images/Vrundavan Park Commercial Building.png",
    description: "Prime street-facing retail commercial center delivering high visibility for showrooms, medical outlets, and boutique stores.",
    amenities: ["Wide Storefronts", "Paved Walkways", "Power Backup"]
  },
  {
    id: "cocoons-market",
    title: "Cocoons Market & Training Center",
    category: "Contracting",
    status: "Ongoing",
    location: "Baramati",
    area: "30,000 Sq. Ft.",
    year: "2023-2024",
    units: "Specialized Infrastructure & Institutional Building",
    image: "/images/Cocoons Market & Training Center.png",
    description: "Government-commissioned training center and agricultural commerce hub built with high engineering standards.",
    amenities: ["Training Halls", "Institutional Facilities", "Heavy-load Structures"]
  },
  {
    id: "nirmiti-park",
    title: "Nirmiti Park",
    category: "Residential",
    status: "Completed",
    location: "Near V.P. Engineering College, Baramati",
    area: "74,000 Sq. Ft.",
    year: "2014-2015",
    units: "74 Residential Flats",
    image: "/images/Nirmiti Park.png",
    description: "A benchmark residential enclave providing 74 families with quality housing adjacent to educational landmarks.",
    amenities: ["Children Play Park", "Internal Concrete Roads", "Streetlights", "Water Storage"]
  },
  {
    id: "nirmiti-capital",
    title: "Nirmiti Capital",
    category: "Commercial",
    status: "Completed",
    location: "Near VP College, Baramati",
    area: "15,300 Sq. Ft.",
    year: "2014-2015",
    units: "Shops & Commercial Offices",
    image: "/images/Nirmiti Capital.png",
    description: "Commercial business center providing prime spaces for professionals and retail vendors near V.P. College.",
    amenities: ["Commercial Elevation", "Elevators", "Basement Storage"]
  },
  {
    id: "vrundavan-park-1",
    title: "Vrundavan Park (Phase 1)",
    category: "Residential",
    status: "Completed",
    location: "Kasaba, Baramati",
    area: "43,300 Sq. Ft.",
    year: "2017-2018",
    units: "60 Residential Flats",
    image: "/images/Vrundavan Park ( Phase 1 ).png",
    description: "Successfully delivered residential township of 60 flats known for timely possession and solid structural build.",
    amenities: ["Security Gate", "Landscape Lawns", "Water Supply System"]
  },
  {
    id: "nirmiti-vihar-1",
    title: "Nirmiti Vihar (Phase 1)",
    category: "Residential",
    status: "Completed",
    location: "Rui, Baramati",
    area: "67,300 Sq. Ft.",
    year: "2017-2018",
    units: "84 Flats + Commercial Shops",
    image: "/images/NirmitiVihar (Phase 1).png",
    description: "Integrated mixed-use residential project comprising 84 flats and commercial shops catering to neighborhood needs.",
    amenities: ["Shops Arcade", "Resident Association Office", "Children Play Space"]
  },
  {
    id: "ramkrishna-residency",
    title: "Ramkrishna Residency",
    category: "Residential",
    status: "Completed",
    location: "Rui, Baramati",
    area: "22,330 Sq. Ft.",
    year: "2017-2018",
    units: "28 Flats",
    image: "/images/Ramkrishna Residency.png",
    description: "Boutique residential building featuring 28 spacious apartments in a tranquil neighborhood.",
    amenities: ["Covered Parking", "Security", "Water Supply"]
  },
  {
    id: "shree-hights",
    title: "Shree Heights",
    category: "Residential",
    status: "Ongoing",
    location: "Satav Chowk, Baramati",
    area: "20,000 Sq. Ft.",
    year: "2026-2027",
    units: "20 Flats",
    image: "/images/shree.jpg",
    description: "Boutique residential building featuring 20 spacious apartments in a tranquil neighborhood.",
    amenities: ["Covered Parking", "Security", "Water Supply"]
  },
  // {
  //   id: "dattakala-college",
  //   title: "Dattakala College of Engineering",
  //   category: "Contracting",
  //   status: "Completed",
  //   location: "Swami Chincholi, Tal Daund, Dist Pune",
  //   area: "52,000 Sq. Ft.",
  //   year: "2010-2011",
  //   units: "Institutional Educational Building",
  //   image: "/images/Cocoons Market & Training Center.png",
  //   description: "Major contracting milestone delivering 52,000 sq. ft. of engineering college academic infrastructure.",
  //   amenities: ["Laboratories", "Lecture Halls", "Auditorium Block"]
  // },
  // {
  //   id: "kalamb-college",
  //   title: "Kalamb Art & Science College",
  //   category: "Contracting",
  //   status: "Completed",
  //   location: "Kalamb, Tal. Indapur, Dist Pune",
  //   area: "14,000 Sq. Ft.",
  //   year: "2013-2014",
  //   units: "Educational Campus",
  //   image: "/images/Cocoons Market & Training Center.png",
  //   description: "Turnkey educational contracting project completed on schedule with strict adherence to structural norms.",
  //   amenities: ["Classrooms", "Administrative Wing"]
  // },
  // {
  //   id: "ambalika-sugar",
  //   title: "Ambalika Sugar Ltd.",
  //   category: "Contracting",
  //   status: "Completed",
  //   location: "Baradgaon, Tal Karjat, Dist Ahamadnagar",
  //   area: "41,500 Sq. Ft.",
  //   year: "2013-2014",
  //   units: "Industrial Infrastructure Sub-Contract",
  //   image: "/images/Commercial Building.png",
  //   description: "Industrial civil sub-contracting project involving heavy structural concrete work and specialized foundations.",
  //   amenities: ["Heavy Industrial Foundation", "RCC Structures"]
  // }
];

export const SERVICES_LIST = [
  {
    title: "Residential Development",
    description: "Developing luxury high-rise apartments, gated villas, and modern residential townships with world-class amenities.",
    icon: "Home"
  },
  {
    title: "Commercial & Retail Complexes",
    description: "Creating iconic commercial centers, office towers, shopping malls, and prime retail storefronts.",
    icon: "Building"
  },
  {
    title: "Turnkey Contracting & Infrastructure",
    description: "Executing large-scale educational campuses, government facilities, and industrial civil contracts with precision engineering.",
    icon: "Hammer"
  },
  {
    title: "Redevelopment & Urban Planning",
    description: "Transforming existing urban properties into modern architectural landmarks with maximum space utilization and Vastu balance.",
    icon: "Ruler"
  },
  {
    title: "Investment & Real Estate Advisory",
    description: "Guiding investors and homebuyers toward high-appreciation properties backed by clear legal titles and strong yields.",
    icon: "TrendingUp"
  },
  {
    title: "Quality Civil Engineering & Design",
    description: "Under the leadership of Er. Rahul Khatmode (B.E. Civil), ensuring structural safety, seismic resistance, and zero-compromise materials.",
    icon: "Award"
  }
];

export const TESTIMONIALS_LIST = [
  {
    name: "Dr. Suresh Deshmukh",
    position: "Homeowner, REGALIA",
    testimonial: "Shivaangan Realcon and Er. Rahul Khatmode represent trust and unmatched construction quality. Purchasing our home in REGALIA has been the best financial and lifestyle decision."
  },
  {
    name: "Vikram Shah",
    position: "Retail Business Owner, Durga City Mall",
    testimonial: "The strategic location and architectural brilliance of Durga City Mall gave our retail brand immense exposure. Timely possession and smooth legal process."
  },
  {
    name: "Anand Pawar",
    position: "Resident, Vrundavan Park",
    testimonial: "Living at Vrundavan Park for 5+ years now. The build quality, ventilation, and community planning are exceptional. Highly recommend Shivaangan Realcon!"
  }
];
