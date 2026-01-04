
import { Droplet, Heart, ShieldCheck, Sun, Leaf, Award } from "lucide-react";

export const BUSINESS_INFO = {
  name: "Santhosh Oil Mill",
  tagline: "Pure Cold Pressed Oils from Shankarpally",
  description: "Maintained by Sridhar, experience the tradition of purity with our 100% natural, chemical-free, cold-pressed oils. Extracted with care to preserve every nutrient.",
  location: "Shankarpally, Telangana",
  contact: {
    owner: "Sridhar",
    phone: "+91 9441282284",
    whatsapp: "+919441282284",
    address: "OPPOSITE SAI BABA THEATRE, HYDERABAD ROAD, Shankarpalli Rd, Shankarpalle, Telangana 501203",
    mapUrl: "https://maps.app.goo.gl/hcoBEKr2mvVu53r66"
  }
};

export interface Product {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  color: string;
  icon: any;
  price?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "groundnut",
    name: "Groundnut Oil",
    shortDesc: "Rich aroma, perfect for daily cooking.",
    fullDesc: "Our Groundnut Oil is extracted from premium quality peanuts using traditional cold-press methods. It retains the natural nutty flavor and nutrients, making it ideal for deep frying and everyday cooking.",
    benefits: [
      "High in healthy monounsaturated fats",
      "Contains Vitamin E for skin health",
      "Zero cholesterol",
      "Boosts immunity"
    ],
    color: "#E3C099",
    icon: Droplet
  },
  {
    id: "sesame",
    name: "Sesame Oil",
    shortDesc: "Traditional flavor, high in antioxidants.",
    fullDesc: "Pure Sesame Oil (Gingelly Oil) known for its distinct aroma and high smoke point. Used traditionally for pickles and dosas, it's a powerhouse of antioxidants.",
    benefits: [
      "Rich in antioxidants like Sesamol",
      "Good for heart health",
      "Helps in controlling blood pressure",
      "Traditional choice for oil pulling"
    ],
    color: "#F4C430",
    icon: Sun
  },
  {
    id: "coconut",
    name: "Coconut Oil",
    shortDesc: "Pure bliss for hair and health.",
    fullDesc: "Extracted from sun-dried copras, our Coconut Oil is 100% pure and unbleached. It smells fresh and is excellent for both cooking and hair/body application.",
    benefits: [
      "Great for hair growth and skin care",
      "Contains MCTs for quick energy",
      "Antimicrobial properties",
      "Supports good cholesterol (HDL)"
    ],
    color: "#EDEDED",
    icon: Leaf
  },
  {
    id: "safflower",
    name: "Safflower Oil",
    shortDesc: "Light and heart-friendly.",
    fullDesc: "Cold pressed Safflower (Kusuma) oil is a light oil that is excellent for heart health due to its high unsaturated fat content.",
    benefits: [
      "Rich in Omega-6 fatty acids",
      "Helps regulate blood sugar",
      "Anti-inflammatory properties",
      "Light texture, doesn't absorb much"
    ],
    color: "#FFDB58",
    icon: Heart
  }
];

export const FEATURES = [
  {
    title: "Cold Pressed",
    desc: "Extracted at low temperatures to naturally preserve nutrients.",
    icon: Award
  },
  {
    title: "Chemical Free",
    desc: "Zero additives, zero preservatives, just pure oil.",
    icon: ShieldCheck
  },
  {
    title: "Locally Sourced",
    desc: "Made from best quality seeds sourced from local farmers.",
    icon: Leaf
  }
];
export const HEALTH_TIPS = [
  "Cold pressed oils retain 100% natural aroma.",
  "Rich in Vitamin E & antioxidants.",
  "No heat treatment = No chemical structure change.",
  "Naturally zero cholesterol.",
  "Better for heart health & immunity.",
  "Pure tradition from Shankarpally."
];
