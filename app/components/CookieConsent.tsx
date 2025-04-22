"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [showConsent, setShowConsent] = useState(true);

  useEffect(() => {
    setMounted(true);
    const consent = localStorage.getItem("cookieConsent");
    if (consent) {
      setShowConsent(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowConsent(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShowConsent(false);
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 p-4 z-50"
        >
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-white text-sm md:text-base">
                <p>
                  Nós utilizamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa{" "}
                  <a href="/privacy" className="text-green-400 hover:text-green-300 underline">
                    Política de Privacidade
                  </a>
                  .
                </p>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={handleReject}
                  className="px-4 py-2 text-sm text-white border border-gray-700 rounded-lg hover:bg-gray-800 transition duration-300"
                >
                  Rejeitar
                </button>
                <button
                  onClick={handleAccept}
                  className="px-4 py-2 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
                >
                  Aceitar
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 