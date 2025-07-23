# BD-Counselling

## Medical Career Guidance Platform

A comprehensive web application for NEET Counselling, medical college admissions, and career guidance for medical aspirants.

### Features

- **Dashboard**: Interactive dashboard with Counselling information and statistics
- **FAQ System**: Comprehensive FAQ with 20+ questions and categorized answers
- **Universities**: Detailed college information with popup details
- **AI Assistant**: "Ask Kodee" - AI chatbot for instant guidance
- **WhatsApp Support**: Direct WhatsApp integration for urgent support
- **Rank Predictor**: Tools for predicting college admission chances
- **Choice Lists**: Manage college preference lists
- **Responsive Design**: Mobile-first design with tablet and desktop support

### Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **State Management**: React Hooks

### Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start development server:

   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

### Project Structure

```
src/
├── components/          # React components
│   ├── AIAssistant.tsx     # AI chatbot component
│   ├── ChoiceLists.tsx     # College choice lists
│   ├── FAQPage.tsx         # FAQ page with search and filters
│   ├── Header.tsx          # Main navigation header
│   ├── MainContent.tsx     # Dashboard main content
│   ├── Sidebar.tsx         # Navigation sidebar
│   ├── UniversitiesPage.tsx # Universities listing
│   └── ...
├── App.tsx              # Main app component
├── main.tsx            # App entry point
└── index.css           # Global styles
```

### Key Features Implementation

#### FAQ System

- 20 comprehensive questions with detailed answers
- Category-based filtering (NEET UG, NEET PG, INICET, Counselling, etc.)
- Search functionality
- Expandable/collapsible answers

#### Universities Page

- College listing with detailed information
- Popup modal with comprehensive college details
- Search and state-based filtering
- Responsive grid layout

#### AI Assistant (Ask Kodee)

- Floating chat interface
- Quick question templates
- Contextual responses based on keywords
- Minimizable chat window

#### Responsive Design

- Mobile-first approach
- Fixed sidebar and choice lists on desktop
- Collapsible sidebar with icon-only mode
- Mobile bottom navigation

### Comments and Documentation

All components include comprehensive JSDoc comments explaining:

- Component purpose and functionality
- Props interfaces with detailed descriptions
- Function parameters and return values
- State management and event handlers

### Navigation Structure

- **Dashboard**: Main landing page with statistics and quick actions
- **Explore**: Medical courses and college information
- **Rank Predictor**: NEET rank prediction tools
- **Universities**: Detailed college listings
- **Counselling**: Counselling process information
- **Results & Rankings**: NEET results and ranking data
- **FAQ**: Frequently asked questions
- **Profile**: User profile management
- **Support**: Customer support page
