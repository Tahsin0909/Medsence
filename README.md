# MedSense

> **MedSense — Understand Your Medicine, Simply.**

MedSense is an AI-powered medication information platform built to help users understand medicines and general health information in a simple and easy-to-read way.

The project was previously referenced with names such as **Crown to Cherish** and **Explain My Meds** in different parts of the codebase. For this README, the product is treated consistently as **MedSense**.

## About MedSense

MedSense uses AI to explain medication-related information in a more understandable format.

Users can:

- Search or ask questions about medicines
- Get AI-generated medication explanations
- Learn about common uses and possible side effects
- Review dosage-related information
- Learn about possible drug interactions
- Explore similar medicines or alternatives
- Read health-related articles
- Submit feedback
- Subscribe for updates
- Contact the support team

> **Important:** MedSense is an educational information platform. It is **not a replacement for a doctor, pharmacist, or other qualified healthcare professional**. AI-generated information can be incomplete or incorrect. Users should always verify important medical decisions with a healthcare professional.

## Main Features

### 🤖 AI Medication Assistant

The main feature of MedSense is an AI chat assistant.

Users can describe a medicine or health-related question and receive a simple explanation generated using Google's Gemini model.

The assistant is designed to explain information such as:

- Possible health problems
- Common over-the-counter medicines when applicable
- General care tips
- Medication information
- Possible side effects
- General safety information

### 💊 Medication Information

MedSense focuses on making medical terms easier to understand.

Instead of presenting complicated medical information, the platform aims to provide simple explanations that are easier for normal users to follow.

### 📚 Articles

The application includes an article/blog section where users can read health and medication-related content.

Articles support:

- Article listing
- Individual article pages
- Slug-based routing
- Markdown content

### ⭐ User Feedback

Users can submit reviews or feedback through the platform.

The admin dashboard provides a way to review and manage submitted feedback.

### 📩 Newsletter Subscription

Users can subscribe to receive updates through the subscription system.

### 🔐 Authentication

The project uses **NextAuth** for authentication and includes protected admin/dashboard areas.

### 🛠️ Admin Dashboard

The admin section provides management pages for:

- Dashboard statistics
- Feedback
- Subscribers
- Articles
- Admin access

## How It Works

The main medication journey is designed around a simple flow:

1. **Enter Your Medication**  
   Type the name of a medicine or ask a medication-related question.

2. **AI-Powered Explanation**  
   MedSense sends the question to the AI service and generates a simple explanation.

3. **View Results**  
   Read the generated information in an easy-to-understand format.

4. **Check Similar Medicines**  
   Explore possible similar medicines or alternatives when applicable.

5. **Review the Disclaimer**  
   Medical information should be treated as educational information, not professional medical advice.

6. **Contact Support**  
   Users can contact the team if they need additional help.

## Technology Stack

### Frontend

- Next.js 16
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- React Markdown
- Radix UI

### Backend

- Next.js API Routes
- MongoDB
- NextAuth
- Axios
- Zod

### AI

- Google Gemini
- Vercel AI SDK

### State Management

- Redux Toolkit
- React Redux

### Other Tools

- EmailJS
- React Hot Toast
- PostCSS
- ESLint

## Project Structure

```text
src/
├── app/
│   ├── (dashboard)/
│   │   └── admin/
│   ├── (withCommonLayout)/
│   │   ├── about-us/
│   │   ├── articles/
│   │   ├── contact-us/
│   │   ├── disclaimer/
│   │   ├── services/
│   │   └── page.tsx
│   │
│   └── api/
│       ├── admin/
│       ├── articles/
│       ├── auth/
│       ├── chat/
│       ├── feedbacks/
│       └── subscriber/
│
├── components/
│   ├── aboutUs/
│   ├── aiButton/
│   ├── auth/
│   ├── blogs/
│   ├── dashboard/
│   ├── faq/
│   ├── feature/
│   ├── hero/
│   ├── howItWorks/
│   ├── medsAi/
│   ├── service/
│   ├── submitReview/
│   └── shared/
│
├── lib/
│   ├── authOptions.ts
│   ├── blogs.ts
│   ├── connectDB.ts
│   └── utils.ts
│
├── redux/
│   ├── api/
│   ├── hooks.ts
│   ├── rootReducer.ts
│   └── store.ts
│
└── types/
    └── types.ts
```

## Getting Started

### 1. Clone the project

```bash
git clone <repository-url>
cd <project-folder>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create environment variables

Create a `.env.local` file in the project root.

Example:

```env
NEXT_PUBLIC_AUTH_SECRET=
NEXT_PUBLIC_OPENAI_API_KEY=
NEXT_PUBLIC_URL=
NEXT_PUBLIC_MONGODB_URI=
```

Add the required values for your local environment.

> Keep API keys and database credentials private. Do not commit `.env.local` to GitHub.

### 4. Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build the application |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

## AI API Flow

The medication assistant works through the following flow:

```text
User
  ↓
MedSense AI Chat UI
  ↓
POST /api/chat
  ↓
Google Gemini
  ↓
AI-generated response
  ↓
Streaming response
  ↓
User
```

The chat API currently uses the Gemini model through the AI SDK and streams the response back to the frontend.

## Database

MongoDB is used for application data.

The project contains a database connection utility:

```text
src/lib/connectDB.ts
```

Database-backed features include areas such as:

- Feedback
- Subscribers
- Articles
- Admin-related data

## Security Notes

Before deploying MedSense to production:

- Use secure environment variables.
- Never expose private API keys in frontend code.
- Use a strong authentication secret.
- Protect admin routes.
- Validate API input.
- Add rate limiting to the AI endpoint.
- Review AI-generated medical content carefully.
- Do not store sensitive patient information without proper security and compliance controls.

## Medical Safety

MedSense should always present itself as an **educational information tool**, not as a medical diagnosis or treatment system.

AI responses should not be treated as a professional diagnosis or prescription.

For serious symptoms, emergencies, medication changes, dosage decisions, allergies, pregnancy-related concerns, or drug interactions, users should consult a qualified healthcare professional.

## Branding

### Product Name

**MedSense**

### Meaning

**MedSense** combines:

- **Med** → Medicine / Medical information
- **Sense** → Understanding / Making sense of something

So the name represents:

> **Making medicine easier to understand.**

This branding should be used consistently instead of older project names such as **Crown to Cherish** or **Explain My Meds**.

## Future Improvements

Possible future improvements include:

- Medicine database integration
- Verified medical sources
- Medicine search autocomplete
- Drug interaction checker
- Medicine reminder system
- User medication history
- PDF medication reports
- Improved AI safety controls
- Doctor/pharmacist verification
- Multi-language support
- Better admin analytics
- Rate limiting and abuse protection

## Disclaimer

MedSense provides general educational information generated with the help of AI.

It does not provide medical diagnosis, professional medical advice, prescriptions, or emergency services.

Always consult a qualified healthcare professional before starting, stopping, or changing medication.

---

## License

This project is private/proprietary unless a separate license is provided by the project owner.
