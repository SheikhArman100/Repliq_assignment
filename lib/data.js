import { LayoutDashboard, MapPin, Receipt, Settings } from "lucide-react";

export const sidebarItems = [
  {
    icon: <LayoutDashboard size={24} className="stroke-purple-500" />,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: <MapPin size={24} className="stroke-green-500" />,
    label: "Locations",
    href: "/locations",
  },

  {
    icon: <Receipt size={24} className="stroke-yellow-500" />,
    label: "POS Invoices",
    href: "/pos",
  },
  {
    icon: <Settings size={24} className="stroke-yellow-500" />,
    label: "Settings",
    href: "/settings",
  },
];

export const filters = [
  { name: "All Categories", value: "" },
  { name: "Electronics", value: "electronics" },
  { name: "Home & Lifestyles", value: "lifestyle" },
  { name: "Men Fashion", value: "men" },
  { name: "Women fashion", value: "women" },
];

export const products=[
  {
    "title": "Cotton T-Shirt",
    "image": "https://images.pexels.com/photos/4066288/pexels-photo-4066288.jpeg?auto=compress&cs=tinysrgb&w=600",
    "price": 15.99,
    "category": "men"
  },
  {
    "title": "Slim Fit Jeans",
    "image": "https://images.pexels.com/photos/5369439/pexels-photo-5369439.jpeg?auto=compress&cs=tinysrgb&w=600",
    "price": 39.99,
    "category": "men"
  },
  {
    "title": "Casual Shirt",
    "image": "https://images.pexels.com/photos/769733/pexels-photo-769733.jpeg?auto=compress&cs=tinysrgb&w=600",
    "price": 24.99,
    "category": "men"
  },
  {
    "title": "Leather Jacket",
    "image": "https://images.pexels.com/photos/20232805/pexels-photo-20232805/free-photo-of-model-in-a-brown-leather-jacket-and-gray-sweater-on-a-footbridge-over-a-river.jpeg?auto=compress&cs=tinysrgb&w=600",
    "price": 99.99,
    "category": "men"
  },
  {
    "title": "Floral Dress",
    "image": "https://images.pexels.com/photos/10544108/pexels-photo-10544108.jpeg?auto=compress&cs=tinysrgb&w=600",
    "price": 29.99,
    "category": "women"
  },
  {
    "title": "Bodycon Dress",
    "image": "https://images.pexels.com/photos/19310132/pexels-photo-19310132/free-photo-of-woman-in-white-blouse-and-bodycon-dress-with-camera.jpeg?auto=compress&cs=tinysrgb&w=600",
    "price": 34.99,
    "category": "women"
  },
  {
    "title": "Maxi Dress",
    "image": "https://images.pexels.com/photos/5390349/pexels-photo-5390349.jpeg?auto=compress&cs=tinysrgb&w=600",
    "price": 49.99,
    "category": "women"
  },
  {
    "title": "Cocktail Dress",
    "image": "https://images.pexels.com/photos/4589499/pexels-photo-4589499.jpeg?auto=compress&cs=tinysrgb&w=600",
    "price": 59.99,
    "category": "women"
  },
  {
    "title": "Smart phone",
    "image": "https://images.pexels.com/photos/1786433/pexels-photo-1786433.jpeg?auto=compress&cs=tinysrgb&w=600",
    "price": 499.99,
    "category": "electronics"
  },
  {
    "title": "Laptop",
    "image": "https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?auto=compress&cs=tinysrgb&w=600",
    "price": 799.99,
    "category": "electronics"
  },
  {
    "title": "Headphones",
    "image": "https://images.pexels.com/photos/4887161/pexels-photo-4887161.jpeg?auto=compress&cs=tinysrgb&w=600",
    "price": 99.99,
    "category": "electronics"
  },
  {
    "title": "Smart watch",
    "image": "https://images.pexels.com/photos/110471/pexels-photo-110471.jpeg?auto=compress&cs=tinysrgb&w=600",
    "price": 199.99,
    "category": "electronics"
  },
  {
    "title": "Water Bottle",
    "image": "https://images.pexels.com/photos/3766180/pexels-photo-3766180.jpeg?auto=compress&cs=tinysrgb&w=600",
    "price": 14.99,
    "category": "lifestyle"
  },
  {
    "title": "Travel Mug",
    "image": "https://images.pexels.com/photos/764598/pexels-photo-764598.jpeg?auto=compress&cs=tinysrgb&w=600",
    "price": 19.99,
    "category": "lifestyle"
  },
  {
    "title": "Notebook",
    "image": "https://images.pexels.com/photos/163185/old-retro-antique-vintage-163185.jpeg?auto=compress&cs=tinysrgb&w=600",
    "price": 9.99,
    "category": "lifestyle"
  }
]