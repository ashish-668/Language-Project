
import { createContext, useState } from "react";

export const LanguageContext = createContext();

const translations = {
  en: {
    navLinks: [
      { key: "home", label: "Home" },
      { key: "about", label: "About Us" },
      { key: "services", label: "Services" },
      { key: "portfolio", label: "Portfolio" },
      { key: "blog", label: "Blog" },
      { key: "contact", label: "Contact Us" },
    ],
    talk: "Let's Talk",
    heading:
      "Choose What Matters To Your Business & Your Customers.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in dignissim euismod purus donec mus vulputate habitant iaculis. Commodo enim ornare turpis tempus enim, nibh nulla. Rhoncus sed.",
    getStarted: "Get Started Now",
  },

  hi: {
    navLinks: [
      { key: "home", label: "होम" },
      { key: "about", label: "हमारे बारे में" },
      { key: "services", label: "सेवाएँ" },
      { key: "portfolio", label: "पोर्टफोलियो" },
      { key: "blog", label: "ब्लॉग" },
      { key: "contact", label: "संपर्क करें" },
    ],
    talk: "बात करें",
    heading:
      "आपके व्यवसाय और ग्राहकों के लिए सही चीज़ चुनें।",
    description:
      "हम आपके व्यवसाय को आगे बढ़ाने और आपके ग्राहकों की ज़रूरतों को पूरा करने के लिए डिजिटल समाधान प्रदान करते हैं।",
    getStarted: "अभी शुरू करें",
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "hi" : "en"));
  };

  const value = {
    language,
    toggleLanguage,
    text: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
