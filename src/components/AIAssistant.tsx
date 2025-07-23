import React, { useState, useRef, useEffect } from "react";
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  Minimize2,
  Maximize2,
} from "lucide-react";

/**
 * AIAssistant Component
 * Floating AI chat assistant for student guidance and FAQ support
 * Features expandable chat interface with quick questions
 */
const AIAssistant: React.FC = () => {
  // State for chat window visibility
  const [isOpen, setIsOpen] = useState(false);
  // State for minimized chat window
  const [isMinimized, setIsMinimized] = useState(false);
  // State for chat messages
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Samaira, your AI assistant. How can I help you with your medical career guidance today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  // State for input message
  const [inputMessage, setInputMessage] = useState("");
  // Typing state for bot
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Quick question templates for easy access
  const quickQuestions = [
    "How to check NEET results?",
    "What is the Counselling process?",
    "College admission requirements",
    "NEET rank predictor",
    "Document verification process",
  ];

  /**
   * Handle sending a new message
   * Adds user message and generates bot response
   */
  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate AI response with realistic typing effect
    setTimeout(() => {
      const botResponseText = getBotResponse(inputMessage);
      let displayedText = "";
      let charIndex = 0;

      const typeChar = () => {
        if (charIndex < botResponseText.length) {
          displayedText += botResponseText[charIndex];
          if (charIndex === 0) {
            setMessages((prev) => [
              ...prev,
              {
                id: prev.length + 1,
                text: "",
                sender: "bot",
                timestamp: new Date(),
              },
            ]);
          }
          setMessages((prev) =>
            prev.map((msg, idx) =>
              idx === prev.length - 1 ? { ...msg, text: displayedText } : msg
            )
          );
          charIndex++;
          setTimeout(typeChar, 18 + Math.random() * 30);
        } else {
          setIsTyping(false);
        }
      };

      typeChar();
    }, 600);
  };

  /**
   * Generate bot response based on user input
   * @param message - User's input message
   * @returns Bot response string
   */
  const getBotResponse = (message: string) => {
    const lowerMessage = message.toLowerCase();

    // Improved NEET/Result keyword matching
    if (
      /(neet|needt|neet exam|neet result|needt result|result)/.test(
        lowerMessage
      )
    ) {
      return "To check your NEET results, visit the official website: https://neet.nta.nic.in. Enter your application number and password to view and download your scorecard. Need help with anything else?";
    }

    // Greetings
    if (
      lowerMessage.includes("hello") ||
      lowerMessage.includes("hi") ||
      lowerMessage.includes("good morning") ||
      lowerMessage.includes("good afternoon") ||
      lowerMessage.includes("good evening")
    ) {
      return "Hello! 😊 I'm Samaira. How can I assist you today?";
    }

    if (lowerMessage.includes("Counselling")) {
      return "The Counselling process includes: Registration → Choice Filling → Seat Allotment → Document Verification → Fee Payment. Which step would you like to know more about?";
    } else if (
      lowerMessage.includes("college") ||
      lowerMessage.includes("admission")
    ) {
      return "For college admissions, you'll need: NEET scorecard, Class 12 marksheet, category certificate (if applicable), and identity proof. Would you like help with college predictions?";
    } else if (
      lowerMessage.includes("thank you") ||
      lowerMessage.includes("thanks")
    ) {
      return "You're welcome! If you have more questions, just ask. 😊";
    } else if (
      lowerMessage.includes("how are you") ||
      lowerMessage.includes("how's it going")
    ) {
      return "I'm doing great, thank you! How can I help you with your medical career today?";
    } else {
      return "I understand you're asking about medical career guidance. Could you please be more specific? You can ask about NEET results, Counselling process, college admissions, or document requirements.";
    }
  };

  /**
   * Handle quick question selection
   * @param question - Selected quick question
   */
  const handleQuickQuestion = (question: string) => {
    setInputMessage(question);
    setTimeout(() => {
      handleSendMessage();
    }, 100);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-2xl flex items-center justify-center text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-110 z-50 animate-bounce"
      >
        <MessageCircle className="w-8 h-8" />
      </button>
    );
  }

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isMinimized ? "w-80 h-16" : "w-96 h-[600px]"
      }`}
    >
      <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 h-full flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-white font-bold">Ask Samaira</h3>
              <p className="text-purple-100 text-sm">AI Assistant</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              {isMinimized ? (
                <Maximize2 className="w-4 h-4 text-white" />
              ) : (
                <Minimize2 className="w-4 h-4 text-white" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`flex items-start space-x-2 max-w-[80%] ${
                      message.sender === "user"
                        ? "flex-row-reverse space-x-reverse"
                        : ""
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        message.sender === "user"
                          ? "bg-blue-500"
                          : "bg-gradient-to-r from-purple-500 to-pink-500"
                      }`}
                    >
                      {message.sender === "user" ? (
                        <User className="w-4 h-4 text-white" />
                      ) : (
                        <Bot className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <div
                      className={`p-3 rounded-2xl ${
                        message.sender === "user"
                          ? "bg-blue-500 text-white"
                          : "bg-slate-100 text-slate-800"
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-2 max-w-[80%]">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="p-3 rounded-2xl bg-slate-100 text-slate-800">
                      <p className="text-sm">
                        <span className="animate-pulse">
                          Samaira is typing...
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            <div className="p-4 border-t border-slate-200">
              <p className="text-xs text-slate-600 mb-2">Quick questions:</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {quickQuestions.slice(0, 3).map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className="px-3 py-1 bg-slate-100 hover:bg-slate-200 rounded-full text-xs text-slate-700 transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-slate-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Ask me anything about medical Counselling..."
                  className="flex-1 p-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm text-black"
                />
                <button
                  onClick={handleSendMessage}
                  className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
                  disabled={isTyping || !inputMessage.trim()}
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AIAssistant;
