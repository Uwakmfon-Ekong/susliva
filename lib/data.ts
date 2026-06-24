import {
  Scale,
  Wheat,
  Trees,
  HandHeart,
  Gavel,
  Accessibility,
  Landmark,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";

export const SITE = {
  name: "SUSLIVA",
  fullName: "Sustainable Livelihood for All",
  tagline: "Building a better world for the less privileged.",
  email: "sustainablelivelihood@yahoo.com",
  phone: ["+234 (0) 813 221 6448", "+234 (0) 806 759 6435", "+234 (0) 813 644 4487"],
  address: "41 Oron Road (2nd Floor), Uyo, Akwa Ibom State, Nigeria",
  addressAlt: "Ikot Ideh Village, Ukanafun LGA, Akwa Ibom State",
  website: "www.sustainablelivelihood.org",
  founded: "2009",
  paystackKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || "pk_test_your_key_here",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Impact", href: "/impact" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const STATS = [
  { value: "15+", label: "Years of service" },
  { value: "5,000+", label: "Lives impacted" },
  { value: "8", label: "Thematic programs" },
  { value: "3", label: "LGAs reached" },
];

export interface Program {
  id: string;
  icon: LucideIcon;
  title: string;
  shortDesc: string;
  details: string[];
}

export const PROGRAMS: Program[] = [
  {
    id: "equity",
    icon: Scale,
    title: "Equity & Social Inclusion",
    shortDesc: "Promoting equal opportunities and ensuring vulnerable groups are part of every development conversation.",
    details: [
      "Promoting equal opportunities for all community members",
      "Ensuring vulnerable groups are included in development programs",
      "Encouraging active participation of women and girls",
      "Supporting gender-responsive policies and interventions",
    ],
  },
  {
    id: "agriculture",
    icon: Wheat,
    title: "Agriculture & Food Security",
    shortDesc: "Strengthening food systems through cooperative farming and sustainable agricultural practices.",
    details: [
      "Promoting cooperative farming to increase productivity",
      "Encouraging adoption of improved agricultural practices",
      "Supporting sustainable agriculture and food security initiatives",
    ],
  },
  {
    id: "agroforestry",
    icon: Trees,
    title: "Agroforestry & Natural Resource Management",
    shortDesc: "Protecting the environment through sustainable land use and conservation practices.",
    details: [
      "Promoting agroforestry practices for environmental sustainability",
      "Encouraging conservation and sustainable use of natural resources",
      "Raising awareness on climate change",
      "Supporting climate adaptation and resilience-building",
    ],
  },
  {
    id: "ovc",
    icon: HandHeart,
    title: "Orphans & Vulnerable Children",
    shortDesc: "Providing holistic support for orphaned and vulnerable children across Akwa Ibom.",
    details: [
      "Providing educational, psychological, and social welfare support",
      "Organising visits to Motherless Babies Homes",
      "Mobilising community resources for vulnerable children",
      "Encouraging community ownership of OVC programs",
    ],
  },
  {
    id: "humanrights",
    icon: Gavel,
    title: "Human Rights Awareness & Advocacy",
    shortDesc: "Building a culture where every person knows and can defend their rights.",
    details: [
      "Organising capacity-building programs on human rights",
      "Promoting awareness of rights and responsibilities",
      "Exploring human rights-related calls for proposals",
    ],
  },
  {
    id: "disability",
    icon: Accessibility,
    title: "Disability Inclusion & Empowerment",
    shortDesc: "Creating pathways to participation and dignity for persons living with disabilities.",
    details: [
      "Developing empowerment opportunities for persons with disabilities",
      "Promoting accessibility and inclusion in community programs",
    ],
  },
  {
    id: "governance",
    icon: Landmark,
    title: "Community Leadership & Governance",
    shortDesc: "Strengthening leadership at the grassroots level for accountable, people-centred governance.",
    details: [
      "Strengthening community leadership structures",
      "Promoting accountability and transparency",
      "Ensuring family heads and community leaders are involved in development",
    ],
  },
  {
    id: "capacity",
    icon: GraduationCap,
    title: "Capacity Building & Partnerships",
    shortDesc: "Training leaders and building alliances that make sustainable development possible.",
    details: [
      "Training cooperative executives and community leaders",
      "Building local capacity for sustainable project implementation",
      "Collaborating with TRCC and other stakeholders",
      "Implementing sustainable livelihood projects",
    ],
  },
];

export const BLOG_POSTS = [
  {
    id: "1",
    slug: "cooperative-farming-ukanafun",
    title: "How Cooperative Farming Is Changing Lives in Ukanafun LGA",
    excerpt: "Smallholder farmers in Ukanafun are pooling resources and expertise through SUSLIVA-facilitated cooperatives — and the results are transforming their communities.",
    date: "2024-11-10",
    category: "Agriculture",
    readTime: "4 min read",
  },
  {
    id: "2",
    slug: "ovc-support-program",
    title: "A Visit to the Motherless Babies Home: What We Saw and What We're Doing",
    excerpt: "Our team recently visited a Motherless Babies Home in Akwa Ibom State. Here's what we found, and how you can help bridge the gap for these children.",
    date: "2024-10-22",
    category: "OVC Support",
    readTime: "5 min read",
  },
  {
    id: "3",
    slug: "human-rights-workshop",
    title: "Community Members Learn Their Rights at SUSLIVA Capacity Building Workshop",
    excerpt: "Over 80 participants gathered in Uyo for a day-long workshop on human rights awareness. The conversations that followed showed just how needed this work is.",
    date: "2024-09-15",
    category: "Human Rights",
    readTime: "3 min read",
  },
];

export const IMPACT_STORIES = [
  {
    name: "Mama Grace",
    location: "Ukanafun LGA",
    quote: "Before SUSLIVA, I didn't know I could be part of a cooperative. Now I grow enough to feed my family and sell at the market.",
    program: "Agriculture & Food Security",
  },
  {
    name: "Emmanuel, Age 14",
    location: "Uyo",
    quote: "They helped me go back to school after I lost my parents. I want to be a doctor one day.",
    program: "OVC Support",
  },
  {
    name: "Blessing",
    location: "Akwa Ibom",
    quote: "I attended the human rights training and I didn't know so many of my rights. Now I can teach others in my community.",
    program: "Human Rights",
  },
];