
## 📖 Project Overview

This frontend is a single-page application (SPA) that provides an intuitive interface for managing todos and categories. The application uses modern React patterns with Redux Toolkit for state management, ensuring predictable data flow and efficient re-rendering.

### Architecture & State Management:
- **Redux Toolkit**: Centralized state management with slices for different features
- **React Hooks**: Functional components with hooks for local state and side effects
- **Context API**: Theme management (light/dark mode) using Redux store
- **API Integration**: Axios-based service layer for backend communication
- **Form Handling**: React Hook Form for robust form validation and management

### Data Flow:
1. User interactions trigger actions in React components
2. Actions dispatch to Redux store for state updates
3. API service layer handles HTTP requests to backend
4. Backend processes requests and returns data
5. Frontend updates UI based on new state
6. Toast notifications provide user feedback

## 🚀 Features

- **Modern UI/UX**: Clean and intuitive interface with dark/light theme support
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **State Management**: Redux Toolkit for efficient state management
- **Real-time Updates**: Instant feedback with toast notifications
- **Category Management**: Organize todos with custom categories
- **Mobile-First**: Optimized for mobile devices with collapsible sidebar
- **Form Handling**: Robust form validation with React Hook Form

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.2
- **State Management**: Redux Toolkit 2.9.0
- **Styling**: Tailwind CSS 3.4.17
- **HTTP Client**: Axios 1.11.0
- **Icons**: Lucide React 0.542.0
- **Forms**: React Hook Form 7.62.0
- **Notifications**: React Hot Toast 2.6.0
- **Linting**: ESLint 9.33.0


## Local Setup
### 1. Clone the repository
```
git clone https://github.com/guptaravimp/advance_t_d_frontend.git
cd advance_t_d_frontend

```
### 2. Install dependencies
```
# Using npm
npm install

# Or using Yarn
yarn install

```
### 3. change the backend Base url in .env 
```
VITE_BASE_URL="http://localhost:5000/api/v1"
```

### 4. add in API also may be some error so in (todoApi.js)

```
const BACKEND_BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:5000/api/v1"

```

### 3. Start the development server
```
npm run dev
```

## 📁 Project Structure

```
Todofrontend/
├── public/
│   └── vite.svg             # Vite logo
├── src/
│   ├── APIServices/
│   │   └── todoApi.js       # API service functions
│   ├── Redux/
│   │   └── Store.js         # Redux store configuration
│   ├── assets/
│   │   └── react.svg        # React logo
│   ├── components/
│   │   ├── CategoryComponent.jsx  # Category management
│   │   ├── Header.jsx       # Application header
│   │   ├── InboxComponent.jsx     # Inbox view
│   │   ├── MainComponent.jsx      # Main content area
│   │   ├── Sidebar.jsx      # Navigation sidebar
│   │   └── TaskList.jsx     # Todo list component
│   ├── reducers/
│   │   └── rootreducer.js   # Root reducer
│   ├── slices/
│   │   └── themeSlice.js    # Theme state management
│   ├── App.css              # Global styles
│   ├── App.jsx              # Main App component
│   ├── index.css            # Base styles
│   └── main.jsx             # Application entry point
├── eslint.config.js         # ESLint configuration
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── vite.config.js           # Vite configuration
└── README.md               # This file
```


