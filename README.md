# AK Health & Safety Training - Certificate Verification Portal

This project allows users to verify training certificates by certificate number using a MongoDB Atlas database.

## Project Structure

```
root/
├─ frontend/                # Next.js + Tailwind app
│  ├─ public/
│  │  └─ images/logo.png    # placeholder logo file (must be included)
│  ├─ app/ or pages/        # Next.js pages (depends on Next version) — use pages if unsure
│  │  └─ index.js           # homepage / certificate verification UI
│  ├─ components/
│  │  └─ ResultCard.jsx     # professional success/error card
│  ├─ styles/
│  │  └─ globals.css
│  ├─ next.config.js
│  ├─ tailwind.config.js
│  ├─ postcss.config.js
│  └─ package.json
│
├─ backend/                 # Express API
│  ├─ config/
│  │  └─ db.js              # mongodb connection using mongoose or mongodb driver
│  ├─ controllers/
│  │  └─ certificateController.js
│  ├─ models/
│  │  └─ Certificate.js     # Mongoose model (camelCase fields)
│  ├─ routes/
│  │  └─ certificates.js    # GET /api/certificates/:certificateNo
│  ├─ scripts/
│  │  └─ seed.js            # seed JSON (or convert XLSX -> JSON and seed)
│  ├─ app.js
│  ├─ package.json
│  └─ .env.example
│
├─ data/
│  └─ certificates.json     # converted JSON from your Excel (seed data)
│
└─ README.md                # run + deploy + env + API docs
```

## Tech Stack

- **Frontend**: Next.js (React) + Tailwind CSS
- **Backend**: Node.js + Express + Mongoose
- **Database**: MongoDB Atlas

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file based on `.env.example` and update with your MongoDB connection string:
   ```bash
   cp .env.example .env
   ```

4. Start the backend server:
   ```bash
   npm run dev
   ```

5. The backend will run on `http://localhost:5000`

### Database Seeding

To seed the database with sample data:

```bash
cd backend
node scripts/seed.js
```

To delete all data:

```bash
cd backend
node scripts/seed.js -d
```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies (if using a framework):
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. The frontend will run on `http://localhost:3000`

## API Endpoints

### Certificate Verification

- **Endpoint**: `GET /api/certificates/:certificateNo`
- **Description**: Verify a certificate by its certificate number
- **Response**:
  ```json
  {
    "valid": true,
    "certificate": {
      "certNumber": "AKHS-001",
      "studentName": "John Doe",
      "courseName": "HSE Documentation",
      "issueDate": "2025-09-30",
      "status": "Valid",
      "authorizedBy": "Aizaz HSE Director"
    }
  }
  ```

## Environment Variables

### Backend (.env)

- `PORT`: Port for the backend server (default: 5000)
- `MONGODB_URI`: MongoDB Atlas connection string
- `MONGODB_DB`: Database name
- `JWT_SECRET`: Secret for JWT token generation

## Development

### Backend

The backend uses Express.js with Mongoose for MongoDB interactions. Key files:

- `app.js`: Main application file
- `config/db.js`: Database connection
- `models/Certificate.js`: Certificate schema
- `routes/certificates.js`: Certificate routes
- `controllers/certificateController.js`: Certificate controllers

### Frontend

The frontend is a React application using Tailwind CSS for styling. Key files:

- `index.js`: Main page with certificate verification form
- `components/ResultCard.jsx`: Component for displaying verification results
- `styles/globals.css`: Global styles

## Deployment

### Backend

1. Set environment variables on your hosting platform
2. Run `npm start` to start the server

### Frontend

1. Build the application:
   ```bash
   npm run build
   ```
2. Serve the built files

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a pull request

## License

This project is licensed under the MIT License.