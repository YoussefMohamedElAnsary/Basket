# Netlify Deployment with Firebase

## How This Works

- **Local Development**: Uses `firebase-config-local.js` with your actual secrets
- **Netlify Deployment**: Uses environment variables from Netlify dashboard
- **GitHub**: No secrets are committed to the repository

## Setup Steps

### 1. Local Development
1. Copy your actual Firebase config into `src/firebase/firebase-config-local.js`
2. For local development, temporarily change the import in `src/firebase/config.js` to:
   ```javascript
   import { firebaseConfig } from './firebase-config-local.js';
   ```

### 2. Netlify Environment Variables
In your Netlify dashboard, go to **Site settings** → **Environment variables** and add:

```
VITE_FIREBASE_API_KEY=your-actual-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abcdef123456
```

### 3. Before Committing to GitHub
Make sure `src/firebase/config.js` uses environment variables (as it currently does).

### 4. Deploy
Push to GitHub and Netlify will automatically deploy with the environment variables.

## Security
- ✅ Firebase secrets are NOT in GitHub
- ✅ Environment variables are secure in Netlify
- ✅ Local development works with your actual config
- ✅ Production deployment works with Netlify environment variables 