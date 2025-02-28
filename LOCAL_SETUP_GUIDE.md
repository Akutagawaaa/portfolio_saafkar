# Saafkar Website - Local Development Setup Guide

## Prerequisites
1. Node.js (version 20.x recommended)
2. PostgreSQL (version 15 or higher)
3. VS Code
4. Git

## Project Structure
```
saafkar-website/
├── client/
│   ├── public/
│   │   └── assets/
│   │       ├── images/
│   │       │   ├── logo.png
│   │       │   ├── services/
│   │       │   │   └── exterior_cleaning.png
│   │       │   └── team/
│   │       │       ├── monica.jpeg
│   │       │       └── nawed.png
│   └── src/
│       ├── components/
│       │   ├── chat/
│       │   ├── layout/
│       │   ├── sections/
│       │   └── ui/
│       ├── hooks/
│       ├── lib/
│       ├── pages/
│       ├── App.tsx
│       └── main.tsx
├── server/
│   ├── db.ts
│   ├── openai.ts
│   ├── routes.ts
│   ├── storage.ts
│   └── index.ts
└── shared/
    └── schema.ts

## Step 1: Initial Setup

1. Create a new directory for your project:
```bash
mkdir saafkar-website
cd saafkar-website
```

2. Initialize a new Node.js project:
```bash
npm init -y
```

3. Install required dependencies:
```bash
npm install react react-dom @tanstack/react-query framer-motion lucide-react wouter @radix-ui/react-* tailwindcss @types/react @types/react-dom typescript @vitejs/plugin-react vite express drizzle-orm drizzle-zod openai ws @types/ws
```

4. Install development dependencies:
```bash
npm install -D @types/node @types/express drizzle-kit tsx esbuild postcss autoprefixer tailwindcss-animate
```

## Step 2: Environment Setup

Create a `.env` file in the root directory:
```env
# Database Configuration
DATABASE_URL=postgresql://username:password@localhost:5432/saafkar
PGHOST=localhost
PGPORT=5432
PGUSER=your_username
PGPASSWORD=your_password
PGDATABASE=saafkar

# OpenAI Configuration
OPENAI_API_KEY=your_openai_api_key
```

## Step 3: Configuration Files

1. Create `tsconfig.json`:
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "paths": {
      "@/*": ["./client/src/*"],
      "@shared/*": ["./shared/*"]
    }
  },
  "include": ["client/src", "shared", "server"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

2. Create `vite.config.ts`:
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client/src'),
      '@shared': path.resolve(__dirname, './shared')
    }
  }
});
```

3. Create `postcss.config.js`:
```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

4. Create `tailwind.config.ts`:
```typescript
import { type Config } from "tailwindcss";

export default {
  content: ["./client/src/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
```

## Step 4: Database Setup

1. Create `drizzle.config.ts`:
```typescript
import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  schema: "./shared/schema.ts",
  out: "./migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
});
```

2. Initialize the database:
```bash
npm run db:push
```

## Step 5: Copy Project Files

1. Copy all the files from the following directories:
   - `client/src/*` - React components and pages
   - `server/*` - Backend files
   - `shared/*` - Shared types and schemas
   - Asset files to `client/public/assets/`

## Step 6: Development Scripts

Add these scripts to your `package.json`:
```json
{
  "scripts": {
    "dev": "tsx server/index.ts",
    "build": "vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist",
    "db:push": "drizzle-kit push:pg"
  }
}
```

## Step 7: Running the Project

1. Start the development server:
```bash
npm run dev
```

2. Access the website at `http://localhost:5000`

## VS Code Extensions Recommended

- ESLint
- Prettier
- Tailwind CSS IntelliSense
- PostgreSQL
- Thunder Client (for API testing)

## Building for Production

1. Create the production build:
```bash
npm run build
```

2. The build will create:
   - Frontend files in `dist/public/`
   - Server files in `dist/`

## Deployment Guidelines

For Hostinger deployment:

1. Upload the contents of `dist/public/` to your public HTML directory
2. Set up Node.js environment on Hostinger
3. Configure environment variables in Hostinger:
   - Database credentials
   - OpenAI API key
4. Upload and run the server files

## Common Development Tasks

1. Adding new pages:
   - Create page component in `client/src/pages/`
   - Add route in `client/src/App.tsx`

2. Adding new components:
   - Create component in appropriate subdirectory under `client/src/components/`
   - Use shadcn components from `ui/` directory

3. Styling:
   - Use Tailwind CSS classes
   - Follow the dark theme guidelines
   - Use the existing color scheme

4. Database changes:
   - Update schema in `shared/schema.ts`
   - Run `npm run db:push`

## Need Help?

1. Check the existing code structure
2. Review the components in their respective directories
3. Consult the documentation of used libraries
4. Refer to this guide for setup issues
