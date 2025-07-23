# BD-Counselling

## Medical Career Guidance Platform

A comprehensive web application for NEET Counselling, medical college admissions, and career guidance for medical aspirants. Now restructured with React Router, Axios integration, and proper authentication flow.

### Features

- **Authentication**: Login/Signup with JWT token management
- **Dashboard**: Interactive dashboard with real-time data from Django API
- **FAQ System**: Comprehensive FAQ with 20+ questions and categorized answers
- **Universities**: Detailed college information with popup details
- **AI Assistant**: "Ask Kodee" - AI chatbot for instant guidance
- **WhatsApp Support**: Direct WhatsApp integration for urgent support
- **Rank Predictors**: UG and PG predictors for college/specialty admission chances
- **Choice Lists**: Manage college preference lists
- **Responsive Design**: Mobile-first design with tablet and desktop support
- **Protected Routes**: Secure navigation with authentication checks

### Technology Stack

- **Frontend**: React 18 with TypeScript
- **Routing**: React Router DOM v6
- **HTTP Client**: Axios with interceptors
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **State Management**: React Context API
- **Authentication**: JWT tokens with localStorage

### API Integration

The application is structured to connect with a Django REST API backend:

- **Authentication**: `/api/auth/` - Login, signup, profile management
- **Medical Colleges**: `/api/medical-colleges/` - College data and NIRF rankings
- **NEET Data**: `/api/neet/` - Results, allotments, closing ranks, seat matrix
- **Counselling**: `/api/counselling/` - INICET data, timeline, choice lists
- **Predictors**: `/api/predictor/` - UG/PG admission predictions
- **FAQ**: `/api/faq/` - Frequently asked questions
- **Support**: `/api/support/` - Support tickets and messages

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

4. Set up environment variables:
   ```bash
   # Create .env file
   REACT_APP_API_URL=http://localhost:8000/api
   ```

### Project Structure

```
src/
├── components/          # Reusable React components
├── pages/              # Page components
│   ├── LoginPage.tsx       # User authentication
│   ├── SignupPage.tsx      # User registration
│   ├── DashboardPage.tsx   # Main dashboard
│   ├── DashboardProfilePage.tsx # User profile
│   ├── UGPredictorPage.tsx # NEET UG predictor
│   ├── PGPredictorPage.tsx # NEET PG predictor
│   └── ...
├── contexts/           # React Context providers
│   └── AuthContext.tsx     # Authentication context
├── services/           # API service layer
│   └── api.ts             # Axios configuration and API endpoints
├── App.tsx             # Main app with routing
├── main.tsx           # App entry point
└── index.css          # Global styles
```

### Authentication Flow

1. **Login/Signup**: Users authenticate via `/api/auth/login/` or `/api/auth/signup/`
2. **Token Storage**: JWT tokens stored in localStorage
3. **Protected Routes**: All main pages require authentication
4. **Auto-logout**: Invalid tokens trigger automatic logout
5. **Profile Management**: Users can update profile via `/api/auth/profile/`

### API Backend Requirements

The frontend expects a Django REST API with the following endpoints:

```python
# Authentication
POST /api/auth/login/
POST /api/auth/signup/
POST /api/auth/logout/
GET /api/auth/profile/
PUT /api/auth/profile/

# Medical Colleges
GET /api/medical-colleges/
GET /api/medical-colleges/{id}/
GET /api/nirf-rankings/

# NEET Data
GET /api/neet/results/
GET /api/neet/allotments/
GET /api/neet/closing-ranks/
GET /api/neet/seat-matrix/
GET /api/neet/fee-structure/

# Counselling
GET /api/counselling/inicet/
GET /api/counselling/timeline/
GET /api/counselling/choice-lists/
POST /api/counselling/choice-lists/
PUT /api/counselling/choice-lists/{id}/
DELETE /api/counselling/choice-lists/{id}/

# Predictors
POST /api/predictor/ug/
POST /api/predictor/pg/
POST /api/predictor/rank/

# FAQ and Support
GET /api/faq/
POST /api/support/tickets/
GET /api/support/tickets/
```

### Key Features Implementation

#### Authentication System

- JWT-based authentication with automatic token refresh
- Protected routes with redirect to login
- User profile management with real-time updates
- Secure logout with token cleanup

#### Predictor Tools

- **UG Predictor**: Predicts medical college admission chances based on NEET UG rank
- **PG Predictor**: Predicts specialty admission chances based on NEET PG rank
- Real-time predictions with comprehensive college/specialty data

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

### Navigation Structure (Updated)

- **Dashboard**: Main landing page with statistics and quick actions
- **NEET Pages**: UG, PG, and INICET information and resources
- **Predictors**: UG and PG admission prediction tools
- **Universities**: Detailed college listings and NIRF rankings
- **Counselling**: INICET counselling data and process information
- **Data Pages**: Allotments, closing ranks, seat matrix, fee structure
- **FAQ**: Frequently asked questions with search and filters
- **Profile**: User profile management
- **Support**: Customer support and help desk

### Development Notes

- All components include comprehensive API integration comments
- Error handling implemented for all API calls
- Loading states and user feedback throughout the application
- Mobile-first responsive design maintained
- TypeScript interfaces for type safety
- Modular architecture for easy maintenance and scaling