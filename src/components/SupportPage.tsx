import React from "react";
import { ArrowLeft, Phone, Mail, Clock, MessageCircle } from "lucide-react";

interface SupportPageProps {
  onBack: () => void;
}

/**
 * Support Page Component
 * UPDATED: Simplified design with Contact Us and Office Hours in center
 * Added WhatsApp integration for quick support
 * Improved mobile responsiveness
 */
const SupportPage: React.FC<SupportPageProps> = ({ onBack }) => {
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

  return (
    <div className="flex-1 bg-gradient-to-br from-rose-50 via-blue-50 to-indigo-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-white/20 px-4 lg:px-6 py-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={onBack}
            className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-slate-600" />
          </button>
          <h1 className="text-xl font-bold text-slate-800">Support</h1>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl md:rounded-3xl p-6 md:p-8 text-white mb-6 md:mb-8 shadow-xl mx-4 md:mx-6 mt-6">
        <div className="text-center">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageCircle className="w-6 h-6 md:w-8 md:h-8" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            We're Here to Help
          </h2>
          <p className="text-blue-100 text-base md:text-lg">
            Get instant support for all your medical Counselling queries
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4 md:p-8">
        {/* Main Support Content */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-2">
          {/* Contact Us */}
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl border border-white/30 hover:shadow-2xl transition-shadow">
            <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-6 text-center">
              Contact Us
            </h3>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center gap-4 p-4 bg-green-50 hover:bg-green-100 rounded-2xl border border-green-200 transition">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-green-500 rounded-full flex items-center justify-center shadow-md">
                  <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-slate-800">Phone</p>
                  <p className="text-sm text-slate-600">+91 9876543210</p>
                  <p className="text-xs text-green-600">Available 24/7</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 p-4 bg-blue-50 hover:bg-blue-100 rounded-2xl border border-blue-200 transition">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-slate-800">Email</p>
                  <p className="text-sm text-slate-600">
                    support@bd-counselling.com
                  </p>
                  <p className="text-xs text-blue-600">Response in 2 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Office Hours */}
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl border border-white/30 hover:shadow-2xl transition-shadow flex flex-col justify-between">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-6 flex items-center justify-center gap-2">
                <Clock className="w-6 h-6 text-slate-600" />
                Office Hours
              </h3>

              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-200/50">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-slate-800">
                      Monday - Saturday
                    </span>
                    <span className="font-bold text-blue-600">
                      10:00 AM - 7:00 PM
                    </span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl p-4 border border-slate-200/50">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Sunday</span>
                    <span className="italic text-slate-500">Closed</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200/50">
                <p className="text-sm text-green-700 text-center">
                  <strong>Emergency Support:</strong> Available 24/7 via
                  WhatsApp
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp Quick Support */}
        <div className="mt-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl md:rounded-3xl p-6 md:p-8 text-white text-center shadow-2xl">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <MessageCircle className="w-8 h-8" />
            </div>
          </div>

          <h3 className="text-xl md:text-2xl font-bold mb-4">
            Need Instant Help?
          </h3>
          <p className="text-green-100 mb-6 text-sm md:text-base">
            Chat with our Counselling experts on WhatsApp for immediate
            assistance with your medical career queries.
          </p>

          <button
            onClick={handleWhatsAppClick}
            className="bg-white/20 backdrop-blur-sm px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-white/30 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-3 mx-auto font-medium text-base md:text-lg"
          >
            <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
            <span>Start WhatsApp Chat</span>
          </button>

          <p className="text-xs md:text-sm text-green-200 mt-4">
            Available 24/7 for urgent queries • Response within 5 minutes
          </p>
        </div>

        {/* Additional Support Info */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 text-center border border-white/40">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Clock className="w-5 h-5 text-blue-600" />
            </div>
            <h4 className="font-semibold text-slate-800 mb-1">
              Quick Response
            </h4>
            <p className="text-sm text-slate-600">
              Average response time: 2 hours
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 text-center border border-white/40">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <MessageCircle className="w-5 h-5 text-green-600" />
            </div>
            <h4 className="font-semibold text-slate-800 mb-1">
              Expert Guidance
            </h4>
            <p className="text-sm text-slate-600">
              Certified Counselling experts
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 text-center border border-white/40">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Phone className="w-5 h-5 text-purple-600" />
            </div>
            <h4 className="font-semibold text-slate-800 mb-1">24/7 Support</h4>
            <p className="text-sm text-slate-600">Round the clock assistance</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
