import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";

/**
 * WhatsAppSupport Component
 * Floating WhatsApp support widget for instant customer support
 * Provides direct link to WhatsApp chat with pre-filled message
 */
const WhatsAppSupport: React.FC = () => {
  // State for widget visibility
  const [isVisible, setIsVisible] = useState(true);

  /**
   * Handle WhatsApp button click
   * Opens WhatsApp with pre-filled message
   */
  const handleWhatsAppClick = () => {
    const phoneNumber = "919876543210"; // Replace with actual WhatsApp number
    const message = encodeURIComponent(
      "Hi! I need help with medical Counselling guidance."
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-4 max-w-sm">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800">WhatsApp Support</h3>
              <p className="text-sm text-slate-600">We're online now!</p>
            </div>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="p-1 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X className="w-4 h-4 text-slate-600" />
          </button>
        </div>

        <p className="text-sm text-slate-700 mb-4">
          Need instant help? Chat with our Counselling experts on WhatsApp for
          immediate assistance.
        </p>

        <button
          onClick={handleWhatsAppClick}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
        >
          <MessageCircle className="w-5 h-5" />
          <span>Start WhatsApp Chat</span>
        </button>

        <p className="text-xs text-slate-500 mt-2 text-center">
          Available 24/7 for urgent queries
        </p>
      </div>
    </div>
  );
};

export default WhatsAppSupport;
