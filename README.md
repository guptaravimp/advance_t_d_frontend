# React + Vite

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


