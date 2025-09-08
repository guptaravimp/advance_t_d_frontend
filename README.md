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
