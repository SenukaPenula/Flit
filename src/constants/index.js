import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Our Apps",
    url: "#apps",
  },
  {
    id: "1",
    title: "WORDS FROM US",
    url: "#words",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Smart conversations",
  "Accurate translation",
  "Reliable support",
  "Effortless creation",
  "Smooth connection",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [

  {
    id: "1",
    title: "Web Games",
    text: "We aim to create engaging and interactive web games, blending fun with innovation to deliver an immersive gaming experience right from your browser",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Easily customize your chatbot's responses, style, and functionality to match your unique requirements. Transform your chatbot into a tailored assistant with personalized settings, interactive features, and seamless workflows. Adjust its design and behavior to deliver a customized user experience, enhancing performance with advanced options to suit your specific needs.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "AI Tool Development with API Integration",
    text: "Develop powerful AI tools by integrating APIs for seamless functionality, customization, and enhanced performance tailored to your specific needs.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With intelligent automation and advanced security, it's the ideal solution for teams aiming to work more efficiently.";

export const collabContent = [
  {
    id: "0",
    title: "Effortless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Intelligent Automation",
  },
  {
    id: "2",
    title: "Advanced Security"
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Flit Chatbot",
    text: "Experience seamless communication with our intelligent AI chatbot. Whether you're seeking information, assistance, or a friendly conversation, our bot is designed to understand and respond to your needs effectively.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    url: "https://flit-chatbot.netlify.app/", // Added URL
  },
  {
    id: "1",
    title: "Singlish to Sinhala",
    text: "Flit's Singlish to Sinhala tool converts text in seconds.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
    url: "https://flit-converter.netlify.app/", // Added URL
  },
  {
    id: "2",
    title: "Multi-Language Translator",
    text: "Flit’s AI-powered tool translates text between multiple languages in seconds, ensuring smooth and accurate communication",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
    url: "https://flit-translator.netlify.app/", // Added URL
  },
  {
    id: "3",
    title: "Image Editor",
    text: "Edit images effortlessly with the Flit Image Editor! Featuring intuitive tools, advanced filters, and seamless functionality, it's perfect for quick tweaks or professional-level enhancements.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
    url: "https://flit-editor.netlify.app/", // Placeholder URL
  },
  {
    id: "4",
    title: "Text-to-Speech Converter",
    text: "Transform text into natural, high-quality speech with the Flit Text-to-Speech Converter. Choose from a variety of voices and languages to bring your words to life effortlessly.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    url: "https://flit-speech.netlify.app/", // Placeholder URL
  },
];


export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
