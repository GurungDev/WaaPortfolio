"use client";

 import i18next from 'i18next';
import { motion } from 'framer-motion';
import './Switch.css';
import { useEffect, useState } from 'react';

// Utility function to get initial language
const getInitialLanguage = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('language') || 'en';
  }
  return 'en'; // Default language on the server side
};

// Initialize i18next language
const initialLanguage = getInitialLanguage();
i18next.changeLanguage(initialLanguage);

const LanguageSwitcher: React.FC = () => {
  const [isOn, setIsOn] = useState(i18next.language === 'de');

  useEffect(() => {
    const handleLanguageChange = () => {
      setIsOn(i18next.language === 'de');
    };

    i18next.on('languageChanged', handleLanguageChange);
    return () => {
      i18next.off('languageChanged', handleLanguageChange);
    };
  }, []);

  const toggleSwitch = () => {
    const newLanguage = isOn ? 'en' : 'de';
    i18next.changeLanguage(newLanguage).then(() => {
      if (typeof window !== 'undefined') {
        localStorage.setItem('language', newLanguage);
      }
      setIsOn(newLanguage === 'de');
    });
  };

  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30
  };

  return (
    <div className="switch items-center" data-ison={isOn} onClick={toggleSwitch}>
      <motion.div className="handle items-center flex justify-center text-black" layout transition={spring}>
        {isOn ? "🇩🇪" : "🇺🇸"}
      </motion.div>
    </div>
  );
};

export default LanguageSwitcher;
