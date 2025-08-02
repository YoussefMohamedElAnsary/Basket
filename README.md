# Basket - E-commerce with Firebase Authentication & Firestore

A modern e-commerce application built with React, Firebase Authentication, and Firestore database. Each user has a unique cart that persists across sessions.

## Features

- 🔐 **User Authentication**: Sign up, sign in, and sign out functionality
- 🛒 **Unique User Carts**: Each user has their own cart stored in Firestore
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile
- 🎨 **Modern UI**: Clean, professional design with Tailwind CSS
- 🔄 **Real-time Updates**: Cart updates are synchronized with Firestore
- 🛡️ **Secure**: Firebase Authentication with email/password

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Firebase account

## Setup Instructions

### 1. Firebase Project Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select an existing one
3. Enable Authentication:
   - Go to Authentication > Sign-in method
   - Enable Email/Password authentication
4. Enable Firestore Database:
   - Go to Firestore Database
   - Create database in test mode (for development)
   - Choose a location for your database

### 2. Firebase Configuration

1. Get your Firebase config:
   - Go to Project Settings (gear icon)
   - Scroll down to "Your apps"
   - Click "Add app" if you haven't already
   - Choose Web app
   - Copy the config object

2. Update the Firebase config in `src/firebase/config.js`:
   ```javascript
   const firebaseConfig = {
     apiKey: "your-api-key",
     authDomain: "your-project.firebaseapp.com",
     projectId: "your-project-id",
     storageBucket: "your-project.appspot.com",
     messagingSenderId: "your-sender-id",
     appId: "your-app-id"
   };
   ```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── SignIn.jsx          # Sign in component
│   ├── SignUp.jsx          # Sign up component
│   ├── Navbar.jsx          # Navigation with auth status
│   └── Footer.jsx          # Footer component
├── contexts/
│   ├── AuthContext.jsx     # Authentication context
│   └── CartContext.jsx     # Cart management context
├── firebase/
│   └── config.js           # Firebase configuration
├── UI/
│   └── ProdectCard.jsx     # Product cards with cart integration
└── App.jsx                 # Main app with providers
```

## Usage

### Authentication
- Users can sign up with email, password, and display name
- Sign in with email and password
- Sign out functionality
- Authentication state is managed globally

### Cart Management
- Each user has a unique cart stored in Firestore
- Add items to cart from product cards
- Cart persists across browser sessions
- Real-time synchronization with Firestore

### Database Schema

**Users Collection:**
```javascript
{
  uid: "user-id",
  email: "user@example.com",
  displayName: "User Name",
  createdAt: timestamp,
  cart: [
    {
      id: "product-id",
      title: "Product Name",
      price: 29.99,
      thumbnail: "image-url",
      quantity: 2
    }
  ]
}
```

## Security Rules

For production, update your Firestore security rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to your preferred hosting service (Vercel, Netlify, Firebase Hosting, etc.)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, please open an issue in the GitHub repository or contact the development team.
