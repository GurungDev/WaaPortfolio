"use client";

import React, { useState, useEffect } from 'react';
import i18next from 'i18next';
import { motion } from 'framer-motion';
import './Switch.css';

// Initialize i18next language from localStorage
const initialLanguage = localStorage.getItem('language') || 'en';
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
      localStorage.setItem('language', newLanguage);
      setIsOn(newLanguage === 'de');
    });
    window.location.reload();
  };

  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30
  };

  return (
    <div key={i18next.language} className="switch items-center" data-ison={isOn} onClick={toggleSwitch}>
      <motion.div className="handle items-center flex justify-center text-black" layout transition={spring}>
        {isOn ? "🇩🇪" : "🇺🇸"}
      </motion.div>
    </div>
  );
};

export default LanguageSwitcher;
