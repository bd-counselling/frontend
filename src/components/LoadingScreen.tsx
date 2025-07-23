// import React, { useEffect, useState } from "react";
// import { GraduationCap, Stethoscope, BookOpen } from "lucide-react";

// interface LoadingScreenProps {
//   onComplete: () => void;
// }

// const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
//   const [progress, setProgress] = useState(0);
//   const [currentText, setCurrentText] = useState(0);

//   const loadingTexts = [
//     "Initializing BD-Consulting Platform...",
//     "Loading Medical Counselling Data...",
//     "Preparing Your Dashboard...",
//     "Almost Ready!",
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 100) {
//           clearInterval(interval);
//           setTimeout(onComplete, 500);
//           return 100;
//         }
//         return prev + 2;
//       });
//     }, 50);

//     const textInterval = setInterval(() => {
//       setCurrentText((prev) => (prev + 1) % loadingTexts.length);
//     }, 1000);

//     return () => {
//       clearInterval(interval);
//       clearInterval(textInterval);
//     };
//   }, [onComplete]);

//   return (
//     <div className="fixed inset-0 bg-gradient-to-br from-rose-100 via-blue-100 to-indigo-200 flex items-center justify-center z-50">
//       <div className="text-center">
//         <div className="relative mb-8">
//           <div className="w-24 h-24 mx-auto bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
//             <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center animate-pulse">
//               <GraduationCap className="w-8 h-8 text-white" />
//             </div>
//           </div>
//           <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-pink-400 to-red-400 rounded-full flex items-center justify-center animate-bounce">
//             <Stethoscope className="w-4 h-4 text-white" />
//           </div>
//           <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center animate-bounce delay-300">
//             <BookOpen className="w-4 h-4 text-white" />
//           </div>
//         </div>

//         <h1 className="text-4xl font-bold text-slate-800 mb-2 tracking-wide">
//           BD-Consulting
//         </h1>
//         <p className="text-slate-600 mb-8 text-lg">
//           Medical Career Guidance Platform
//         </p>

//         <div className="w-80 mx-auto mb-6">
//           <div className="bg-white/30 rounded-full h-2 backdrop-blur-sm border border-white/40">
//             <div
//               className="bg-gradient-to-r from-blue-400 to-purple-500 h-full rounded-full transition-all duration-300 ease-out"
//               style={{ width: `${progress}%` }}
//             />
//           </div>
//           <div className="text-slate-700 text-sm mt-2">{progress}%</div>
//         </div>

//         <p className="text-slate-600 text-sm animate-pulse">
//           {loadingTexts[currentText]}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoadingScreen;
