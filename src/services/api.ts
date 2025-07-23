import axios from 'axios';

// API Configuration
const API_BASE_URL = import.meta.env.VITE_REACT_APP_API_URL || 'http://localhost:8000/api';

// Create axios instance with default configuration
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API endpoints
export const authAPI = {
  login: (credentials: { email: string; password: string }) =>
    api.post('/auth/login/', credentials),
  
  signup: (userData: {
    email: string;
    password: string;
    name: string;
    phone: string;
    neetRank?: string;
    category?: string;
    state?: string;
  }) => api.post('/auth/signup/', userData),
  
  logout: () => api.post('/auth/logout/'),
  
  refreshToken: () => api.post('/auth/refresh/'),
  
  getProfile: () => api.get('/auth/profile/'),
  
  updateProfile: (data: any) => api.put('/auth/profile/', data),
};

// Medical Colleges API
export const collegesAPI = {
  getAll: (params?: {
    search?: string;
    state?: string;
    type?: string;
    page?: number;
  }) => api.get('/medical-colleges/', { params }),
  
  getById: (id: number) => api.get(`/medical-colleges/${id}/`),
  
  getNIRFRankings: (params?: {
    search?: string;
    type?: string;
    page?: number;
  }) => api.get('/nirf-rankings/', { params }),
};

// NEET Data API
export const neetAPI = {
  getResults: (params?: {
    year?: number;
    state?: string;
  }) => api.get('/neet/results/', { params }),
  
  getAllotments: (params?: {
    search?: string;
    state?: string;
    type?: string;
    page?: number;
  }) => api.get('/neet/allotments/', { params }),
  
  getClosingRanks: (params?: {
    college?: string;
    course?: string;
    category?: string;
    year?: number;
  }) => api.get('/neet/closing-ranks/', { params }),
  
  getSeatMatrix: (params?: {
    state?: string;
    quota?: string;
    year?: number;
  }) => api.get('/neet/seat-matrix/', { params }),
  
  getFeeStructure: (params?: {
    college?: string;
    state?: string;
    type?: string;
  }) => api.get('/neet/fee-structure/', { params }),
};

// Counselling API
export const counsellingAPI = {
  getINICETData: (params?: {
    search?: string;
    round?: number;
    category?: string;
    page?: number;
  }) => api.get('/counselling/inicet/', { params }),
  
  getTimeline: () => api.get('/counselling/timeline/'),
  
  getChoiceLists: () => api.get('/counselling/choice-lists/'),
  
  createChoiceList: (data: {
    name: string;
    colleges: number[];
  }) => api.post('/counselling/choice-lists/', data),
  
  updateChoiceList: (id: number, data: any) =>
    api.put(`/counselling/choice-lists/${id}/`, data),
  
  deleteChoiceList: (id: number) =>
    api.delete(`/counselling/choice-lists/${id}/`),
};

// Predictor API
export const predictorAPI = {
  predictUG: (data: {
    rank: number;
    category: string;
    state: string;
    quota: string;
  }) => api.post('/predictor/ug/', data),
  
  predictPG: (data: {
    rank: number;
    category: string;
    specialization: string;
  }) => api.post('/predictor/pg/', data),
  
  getRankPrediction: (data: {
    score: number;
    category: string;
    year: number;
  }) => api.post('/predictor/rank/', data),
};

// FAQ API
export const faqAPI = {
  getAll: (params?: {
    search?: string;
    category?: string;
  }) => api.get('/faq/', { params }),
  
  getById: (id: number) => api.get(`/faq/${id}/`),
};

// Support API
export const supportAPI = {
  createTicket: (data: {
    subject: string;
    message: string;
    priority: string;
  }) => api.post('/support/tickets/', data),
  
  getTickets: () => api.get('/support/tickets/'),
  
  sendMessage: (data: {
    message: string;
    type: string;
  }) => api.post('/support/messages/', data),
};

export default api;