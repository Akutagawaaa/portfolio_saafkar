# Saafkar Car Cleaning Service Website

## Project Setup Guide

### Prerequisites
1. Node.js (version 20.x recommended)
2. PostgreSQL database
3. VS Code
4. Git (optional but recommended)

### Project Structure
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

### Setup Instructions

1. Clone the repository:
```bash
git clone <your-repository-url>
cd saafkar-website
```

2. Install dependencies:
```bash
npm install
```

3. Environment Setup:
Create a `.env` file in the root directory with the following variables:
```env
DATABASE_URL=postgresql://username:password@localhost:5432/saafkar
OPENAI_API_KEY=your_openai_api_key
```

4. Database Setup:
```bash
npm run db:push
```

5. Start Development Server:
```bash
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5000
- Backend API: http://localhost:5000/api

### Key Dependencies
- React with TypeScript
- Tailwind CSS for styling
- Framer Motion for animations
- ShadcN UI components
- Express.js backend
- PostgreSQL with Drizzle ORM
- OpenAI for chat functionality

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run db:push` - Update database schema

### File Structure Details

#### Frontend (`client/`)
- `components/` - Reusable React components
  - `chat/` - Chat widget components
  - `layout/` - Header, footer, and layout components
  - `sections/` - Homepage sections (Hero, Services, etc.)
  - `ui/` - UI components from ShadcN
- `pages/` - Page components
- `hooks/` - Custom React hooks
- `lib/` - Utility functions and configurations

#### Backend (`server/`)
- `db.ts` - Database configuration
- `openai.ts` - OpenAI integration
- `routes.ts` - Express routes
- `storage.ts` - Data storage logic
- `index.ts` - Server entry point

#### Shared (`shared/`)
- `schema.ts` - Database schema and types

### Development Guidelines
1. Follow the existing code style and structure
2. Use TypeScript for type safety
3. Keep components modular and reusable
4. Use ShadcN UI components when possible
5. Follow the dark theme design system
6. Keep the chat widget functionality intact
7. Maintain responsive design across all screen sizes

### Production Build
To create a production build:
```bash
npm run build
```

This will generate:
- Frontend static files in `dist/public/`
- Server bundle in `dist/`

### Deployment
For Hostinger deployment:
1. Upload the contents of `dist/public/` to your public HTML directory
2. Set up Node.js environment on Hostinger
3. Configure environment variables
4. Set up PostgreSQL database
5. Deploy server files

### Need Help?
For any questions or issues:
1. Check the existing code structure
2. Review the components in the respective directories
3. Consult the documentation of used libraries
4. Reach out to the development team
