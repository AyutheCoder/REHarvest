import { Variants } from "framer-motion";
import {
  Brain,
  ChartLine,
  Leaf,
  Recycle,
  Star,
  TypeIcon,
  Users,
} from "lucide-react";
import { IconType } from "react-icons";
import { BiSolidCity } from "react-icons/bi";
import { CiMail } from "react-icons/ci";
import { FiTarget, FiUser } from "react-icons/fi";
import { IoLockClosedOutline } from "react-icons/io5";
import { PiRecycle } from "react-icons/pi";
import { PiTShirtLight } from "react-icons/pi";
import { MdOutlineEditLocationAlt } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { TbMapPinSearch } from "react-icons/tb";

export const howItWorks = [
  {
    icon: Brain,
    iconbg: "#E1EBFF",
    iconcolor: "#1242B5",
    number: "01",
    title: "AI Detection",
    description:
      "Analyzes produce quality in real-time, detecting flaws and ensuring accurate grading instantly.",
  },
  {
    icon: FiTarget,
    number: "02",
    iconbg: "#CDF4CA",
    iconcolor: "#00B219",
    title: "Redirect Use",
    description:
      "Suggests the best usage based on quality, helping reduce waste and improve resource flow.",
  },
  {
    icon: ChartLine,
    number: "03",
    iconbg: "#F3E9CC",
    iconcolor: "#D4A53E",
    title: "Track Impact",
    description:
      "Monitors carbon savings and tracks environmental benefits without adding layout strain.",
  },
];

export const realTimeDashboardCard = [
  {
    icon: Leaf,
    iconcolor: "#388E3C",
    performanceIcon: "/performanelan.png",
    performanceLabel: "+1.2%",
    title: 145623,
    duration: 2,
    titleLabel: "Kg",
    footer: "CO2 Saved",
  },
  {
    icon: Recycle,
    iconcolor: "#4CAF50",
    performanceIcon: "/performanelan.png",
    performanceLabel: "+1.2%",
    title: 2450,
    duration: 5,
    titleLabel: "tons",
    footer: "Tons Rescued",
  },
  {
    icon: Star,
    iconcolor: "#FFEB3B",
    performanceIcon: "/performanelan.png",
    performanceLabel: "+1.2%",
    title: 55245,
    duration: 2,
    titleLabel: "pts",
    footer: "GreenPoints",
  },
  {
    icon: Users,
    iconcolor: "#2196F3",
    performanceIcon: "/performanelan.png",
    performanceLabel: "+1.2%",
    title: 152,
    duration: 5,
    titleLabel: "",
    footer: "Active Partners",
  },
];

export const landingpageBarGraph = [
  { name: "Jan", impact: 63 },
  { name: "Feb", impact: 37 },
  { name: "Mar", impact: 18 },
  { name: "Apr", impact: 31 },
  { name: "May", impact: 85 },
];

export const landingpagePieChartData = [
  { name: "Retailer", value: 166.7 },
  { name: "Agencies", value: 169.71 },
  { name: "Kitchen", value: 177.95 },
  { name: "NGOs", value: 106.39 },
];

export const clients = [
  "TechCorp",
  "InnovateLab",
  "DataFlow",
  "CloudSync",
  "DevTools",
  "SmartWork",
  "NextGen",
  "CodeBase",
  "WorkFlow",
  "TeamSync",
  "ProActive",
  "DigitalEdge",
];

export const navbarLink = [
  {
    href: "#",
    title: "About",
  },
  {
    href: "#",
    title: "Contact",
  },
  {
    href: "#",
    title: "ESG Report",
  },
  {
    href: "#",
    title: "Sustainability Goals",
  },
];

export const trustedPartnerFooter = [
  {
    amount: 50,
    label: "+",
    title: "Active Partner",
  },
  {
    amount: 500,
    label: "K+",
    title: "Active Member",
  },
  {
    amount: 15,
    label: "M+",
    title: "Users",
  },
];

export const signUpCredentials = [
  {
    id: "name",
    label: "Full Name",
    type: "text",
    placeholder: "John Doe",
    icon: FiUser,
  },
  {
    id: "email",
    label: "Email Address",
    type: "email",
    placeholder: "example@gmail.com",
    icon: CiMail,
  },
  {
    id: "password",
    label: "Password",
    type: "password",
    placeholder: "Create a Password",
    icon: IoLockClosedOutline,
  },
  {
    id: "confirm_password",
    label: "Confirm Password",
    type: "password",
    placeholder: "Confirm Your Password",
    icon: IoLockClosedOutline,
  },
];

export const Signin_Form_Data = [
  {
    id: "email",
    label: "Email Address",
    type: "email",
    placeholder: "example@gmail.com",
    icon: CiMail,
  },
  {
    id: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter Your Password",
    icon: IoLockClosedOutline,
  },
];

export const delivery_form_data = [
  {
    id: "name",
    label: "Full Name",
    placeholder: "Enter Your Full Name",
    type: "text",
    icon: FiUser,
    isdiabled: true,
  },
  {
    id: "email",
    label: "Email",
    placeholder: "example@gmail.com",
    type: "email",
    icon: CiMail,
    isdiabled: true,
  },
  {
    id: "phone_number",
    label: "Phone nummber",
    placeholder: "+91 00000 00000",
    type: "text",
    icon: IoMdPhonePortrait,
    isdiabled: false,
  },
  {
    id: "pincode",
    label: "Pincode",
    placeholder: "000000",
    type: "text",
    icon: TbMapPinSearch,
    isdiabled: false,
  },
  {
    id: "delivery_address",
    label: "Delivery Address",
    placeholder: "House No, Street, Area",
    type: "text",
    icon: MdOutlineEditLocationAlt,
    isdiabled: false,
  },
  {
    id: "city",
    label: "City",
    placeholder: "Your city",
    type: "text",
    icon: BiSolidCity,
    isdiabled: false,
  },
];

export const SideBarContentData = [
  {
    id: "home",
    title: "Home",
    href: "/app/home",
    src: "/sidebarhomeicon.png",
  },
  {
    id: "dashboard",
    title: "Dashboard",
    href: "/app/dashboard",
    src: "/sidebardashboardicon.png",
  },
  {
    id: "marketplace",
    title: "MarketPlace",
    href: "/app/marketplace",
    src: "/sidebarmarketplaceicon.png",
  },
  {
    id: "donateitem",
    title: "Donate Items",
    href: "/app/donate-item",
    src: "/sidebardonateitemicon.png",
  },
];

export const sidebarFooterContent = [
  {
    id: "myprofile",
    title: "My Profile",
    src: "/sidebarmyprofile.png",
    action: "",
  },
  {
    id: "logout",
    title: "Log Out",
    src: "/sidebarlogout.png",
    action: "logout",
  },
  {
    id: "setting",
    title: "Settings",
    src: "/sidebarsetting.png",
    action: "",
  },
];

export const impactOverviewSustanabilityData = [
  {
    id: "co2saved",
    percentage: "+1.2%",
    iconSrc: "/leaf.png",
    amount: 2450,
    duration: 1,
    label: "Kg",
    footer: "CO₂ Saved",
    iconbg: "#E4F5E5",
  },
  {
    id: "recycle",
    percentage: "+1.2%",
    iconSrc: "/recycle.png",
    amount: 1203,
    duration: 1,
    label: "Pts",
    footer: "Food rescued",
    iconbg: "#D4E3FE",
  },
  {
    id: "points",
    percentage: "+1.2%",
    iconSrc: "/points.png",
    amount: 42450,
    duration: 1,
    label: "Kg",
    footer: "GreenPoints",
    iconbg: "#F6ECCF",
  },
  {
    id: "delete",
    percentage: "+1.2%",
    iconSrc: "/delete.png",
    amount: 1240,
    duration: 1,
    label: "Kg",
    footer: "Waste produced",
    iconbg: "#FACCC4",
  },
];

export const dashboardBarChartData = [
  { day: "Mon", value: 300 },
  { day: "Tue", value: 180 },
  { day: "Wed", value: 220 },
  { day: "Thu", value: 160 },
  { day: "Fri", value: 270 },
  { day: "Sat", value: 320 },
  { day: "Sun", value: 70 },
];

export const recentActivity = [
  {
    id: 1,
    type: "Points from Survey Completion",
    time: "2 hours ago",
    points: 120,
    symbol: "+",
  },
  {
    id: 2,
    type: "Bonus for Daily Login",
    time: "3 hours ago",
    points: 50,
    symbol: "+",
  },
  {
    id: 3,
    type: "Points from Product Review",
    time: "5 hours ago",
    points: 80,
    symbol: "+",
  },
  {
    id: 4,
    type: "Points from Referral",
    time: "10 hours ago",
    points: 200,
    symbol: "+",
  },
  {
    id: 5,
    type: "Points from Quiz",
    time: "Yesterday",
    points: 75,
    symbol: "+",
  },
  {
    id: 6,
    type: "Points from Community Engagement",
    time: "Yesterday",
    points: 40,
    symbol: "+",
  },
  {
    id: 7,
    type: "Points redeemed for Gift Card",
    time: "2 days ago",
    points: 500,
    symbol: "-",
  },
  {
    id: 8,
    type: "Points from Weekly Challenge",
    time: "3 days ago",
    points: 150,
    symbol: "+",
  },
  {
    id: 9,
    type: "Points from Profile Completion",
    time: "4 days ago",
    points: 100,
    symbol: "+",
  },
  {
    id: 10,
    type: "Points from Video Watch",
    time: "5 days ago",
    points: 25,
    symbol: "+",
  },
  {
    id: 11,
    type: "Correction: Duplicate Entry Removed",
    time: "1 week ago",
    points: 60,
    symbol: "-",
  },
  {
    id: 12,
    type: "Points from App Usage",
    time: "1 week ago",
    points: 30,
    symbol: "+",
  },
  {
    id: 13,
    type: "Points from Daily Streak",
    time: "1 week ago",
    points: 20,
    symbol: "+",
  },
  {
    id: 14,
    type: "Points from First Purchase",
    time: "2 weeks ago",
    points: 250,
    symbol: "+",
  },
  {
    id: 15,
    type: "Points from Tutorial Completion",
    time: "3 weeks ago",
    points: 90,
    symbol: "+",
  },
];

export const achievementsCard = [
  {
    id: 1,
    iconUrl: "/tree.png",
    title: "Eco Warrior",
    description: "Saved 10 tons of CO2",
  },
  {
    id: 2,
    iconUrl: "/wideRecycle.png",
    title: "Waste Reducer",
    description: "Saved 10 tons of CO2",
  },
];

export const achievementsFooter = [
  {
    id: 1,
    iconUrl: "/heartA.png",
    title: "Community Hero",
    description: "Save 100 tons of CO2",
  },
  {
    id: 2,
    iconUrl: "/heartB.png",
    title: "Community Hero",
    description: "Save 100 tons of CO2",
  },
];

export const redeemRewardsData = [
  {
    id: 1,
    title: "Redeem Rewards",
    points: 1000,
    status: "claimed",
  },
  {
    id: 2,
    title: "Redeem Rewards",
    points: 1000,
    status: "claimed",
  },
  {
    id: 3,
    title: "Redeem Rewards",
    points: 1000,
    status: "redeemable",
  },
  {
    id: 4,
    title: "Redeem Rewards",
    points: 1000,
    status: "locked",
  },
];
export interface Product {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  type: "recycle" | "non-edible" | "edible" | "all";
  typeIcon: IconType;
  star: number;
  price: number;
  greenPoint: number;
  addToCart: number;
}
export const product: Product[] = [
  {
    id: "upcycled-cotton-hoodie",
    title: "Upcycled Cotton Hoodie",
    description:
      "Made from recycled cotton, soft and warm, minor color variations",
    imageUrl: "/Upcycled-Cotton-Hoodie.jpeg",
    type: "recycle",
    typeIcon: PiRecycle,
    star: 4,
    price: 79,
    greenPoint: 90,
    addToCart: 0,
  },
  {
    id: "eco-friendly-canvas-bag",
    title: "Eco-Friendly Canvas Bag",
    description: "Durable bag from recycled materials, water-resistant",
    imageUrl: "/Eco-Friendly-Canvas-Bag.jpeg",
    type: "recycle",
    typeIcon: PiRecycle,
    star: 5,
    price: 45,
    greenPoint: 60,
    addToCart: 0,
  },
  {
    id: "organic-bamboo-socks",
    title: "Organic Bamboo Socks",
    description: "Soft and breathable, made from organic bamboo fibers",
    imageUrl: "/Organic-Bamboo-Socks.jpeg",
    type: "non-edible",
    typeIcon: PiTShirtLight,
    star: 4,
    price: 15,
    greenPoint: 30,
    addToCart: 0,
  },
  {
    id: "recycled-polyester-jacket",
    title: "Recycled Polyester Jacket",
    description: "Lightweight and weather-resistant, minor color variations",
    imageUrl: "/Recycled-Polyester-Jacket.jpeg",
    type: "recycle",
    typeIcon: PiRecycle,
    star: 5,
    price: 99,
    greenPoint: 120,
    addToCart: 0,
  },
  {
    id: "upcycled-denim-jeans",
    title: "Upcycled Denim Jeans",
    description: "Stylish jeans from recycled denim, unique patterns",
    imageUrl: "/Upcycled-Denim-Jeans.jpeg",
    type: "recycle",
    typeIcon: PiRecycle,
    star: 4,
    price: 65,
    greenPoint: 80,
    addToCart: 0,
  },
  {
    id: "hemp-tote-bag",
    title: "Hemp Tote Bag",
    description: "Eco-friendly tote, strong and reusable",
    imageUrl: "/Hemp-Tote-Bag.jpeg",
    type: "non-edible",
    typeIcon: PiTShirtLight,
    star: 5,
    price: 35,
    greenPoint: 50,
    addToCart: 0,
  },
  {
    id: "recycle-wool-scarf",
    title: "Recycled Wool Scarf",
    description: "Warm scarf from recycled wool, soft texture",
    imageUrl: "/Recycled-Wool-Scarf.jpeg",
    type: "recycle",
    typeIcon: PiRecycle,
    star: 4,
    price: 40,
    greenPoint: 55,
    addToCart: 0,
  },
  {
    id: "organic-cotton-cap",
    title: "Organic Cotton Cap",
    description: "Breathable cap, made from organic cotton",
    imageUrl: "/Organic-Cotton-Cap.jpeg",
    type: "non-edible",
    typeIcon: PiTShirtLight,
    star: 5,
    price: 25,
    greenPoint: 40,
    addToCart: 0,
  },
  {
    id: "upcycled-leather-belt",
    title: "Upcycled Leather Belt",
    description: "Durable belt from recycled leather, unique design",
    imageUrl: "/Upcycled-Leather-Belt.jpeg",
    type: "recycle",
    typeIcon: PiRecycle,
    star: 4,
    price: 50,
    greenPoint: 70,
    addToCart: 0,
  },
  {
    id: "bamboo-fiber-towel",
    title: "Bamboo Fiber Towel",
    description: "Soft and absorbent, eco-friendly towel",
    imageUrl: "/Bamboo-Fiber-Towel.jpg",
    type: "non-edible",
    typeIcon: PiTShirtLight,
    star: 5,
    price: 20,
    greenPoint: 35,
    addToCart: 0,
  },
  {
    id: "recycled-pet-backpack",
    title: "Recycled PET Backpack",
    description: "Sturdy backpack from recycled plastic bottles",
    imageUrl: "/Recycled-PET-Backpack.jpg",
    type: "recycle",
    typeIcon: PiRecycle,
    star: 4,
    price: 85,
    greenPoint: 100,
    addToCart: 0,
  },
  {
    id: "organic-linen-shirt",
    title: "Organic Linen Shirt",
    description: "Lightweight shirt from organic linen fibers",
    imageUrl: "/Organic-Linen-Shirt.jpg",
    type: "non-edible",
    typeIcon: PiTShirtLight,
    star: 5,
    price: 70,
    greenPoint: 85,
    addToCart: 0,
  },
];

export const containerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.07,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

export const popUpVarient: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 30,
    },
  },
};
