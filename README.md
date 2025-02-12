# GIF Search & Save App
### Author Martha Taylor

## Overview
Have fun hearting 🤍 your favorite trending gifs!

* Remember to follow the instructions below to set up the .env file with your giphy api key and have fun running this app locally!

This is a **Vite-powered React Typescript app** that allows users to search for GIFs via the Giphy API and save their favorite ones. The app utilizes **React Query** for efficient data fetching, **React Router** for navigation, and **Context API** for state management. Styled with **Styled Components**, it provides a sleek, modern UI with smooth interactions. With added input validations for security and ally best practices. Optimised with vitest testing framework.

## Features
- 🔍 **GIF Search** - Search for GIFs using the Giphy API.
- 📈 **Trending GIFs** - Browse the latest trending GIFs.
- ❤️ **Save GIFs** - Heart your favorite GIFs and store them.
- 📂 **Manage Saved GIFs** - View and remove saved GIFs via the heart icon from a dedicated saved page.
- 🔄 **Infinite Scrolling** - Seamless loading of more GIFs as you scroll with lazy loading.
- ✨ **Loading Skeletons** - Smooth UI feedback during GIF fetching to allow relevant feedback to the end user.
- ⚡ **Optimized Performance** - Efficient data fetching with caching via React Query and Lazy Loading implemented.
- 🎨 **Styled Components** - Modular and scalable styling approach.
- 🛠 **Testing with Vitest** - Unit and integration tests for key functionality.
- 🔒 **Security-First Approach:** Prevents XSS attacks and enforces valid input rules.
- 🌟 Commitment to Accessibility (Ally): Ensures a more inclusive experience with accessibility features like keyboard navigation, proper ARIA labels, and screen reader support.

 ## 🔒 Security Features

This project includes robust security measures to ensure safe user input handling:

✅ **Prevents XSS (Cross-Site Scripting):**
   - Uses `DOMPurify.sanitize()` to strip harmful JavaScript from input.

✅ **Enforces Minimum & Maximum Length:**
   - Rejects queries shorter than **2 characters** or longer than **50 characters**.

✅ **Rejects Queries Without Valid Characters:**
   - Prevents inputs that contain **only special characters** (e.g., `"@#$%^"` is not allowed).

✅ **Trims Input:**
   - Ensures no accidental **leading or trailing spaces** before processing.

These measures **protect against malicious inputs**, improve search accuracy, and enhance user experience.

## 🚀 Usage

When searching for GIFs:
- Your input is **automatically sanitized** to prevent XSS attacks.
- Queries must be **between 2 and 50 characters** long.
- Only **valid alphanumeric searches** are allowed—special characters alone are rejected.

This ensures safe, relevant searches and prevents security vulnerabilities.


## Tech Stack
- **Frontend**: React (Vite, TypeScript)
- **State Management**: Context API, useReducer
- **Data Fetching**: React Query and Axios
- **Styling**: Styled Components
- **Routing**: React Router
- **Testing**: Vitest, React Testing Library
- **API**: Giphy API
- **Security**: dompurify

## Installation

1. Clone the repository:
   ```sh
   git clone git@github.com:MarthaTaylor/vite-giphy-app.git
   cd gif-app
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm run dev
   ```

4. Run tests:
   ```sh
   npm run test
   ```

## File Structure
```
📂__tests__           # Tests
 └── 📂 components
      ├── HeartButton.test.tsx
      ├── LoadingSkeletons.test.tsx
      ├── NavBar.test.tsx
      └── Search.test.tsx
📂 public
 └── vite.svg
📂 src
 └── 📂 components     # Reusable UI components
      ├── ErrorBoundary.tsx
      ├── HeartButton.tsx
      ├── NavBar.tsx
      ├── Search.tsx
      ├── Skeleton.tsx
      └── Trending.tsx
     📂 context         # Global state management (Context API)
      └── GifContext.tsx
     📂 pages           # Route-specific component
      └── SavedGifsPage.tsx
     📂 services        # API interaction logic
      └──  giphyService.ts
     📂 tests           # Tests setup
      └──  setup.ts
     📂 types           # TypeScript interfaces and types
      ├── api.ts
      ├── context.ts
      ├── gif.ts
      ├── HeartButtonProps.ts
      └── SearchProps.ts
     📂 services        # API service logic for trending and search
      └── giphyService.ts
     📂 styles          # Styles
      ├── GlobalStyles.ts
      └── SharedStyles.tsx
  ├── main.tsx          # App entry point for the React app where everything begins
  ├── App.tsx           # Main component handles routing, global state, provides context for the entire app
  └── vite-env.d.ts     # TypeScript declaration file for Vite-specific types
├── READme.md
├── eslint.config.js
├── index.html          # entry point where the React app is mounted and includes the main script
├── package-lock.json   # Ensures deterministic installs, locks package versions for consistency
├── package.json
├── vite.config.ts      # Vite configuration
├── README.md           # Project documentation
├── tsconfig.app.json   # Main TypeScript config file for the project
├── tsconfig.base.json  # Base TypeScript config - Shared configurations between app and other files
├── tsconfig.json       # Main TypeScript configuration
├── tsconfig.node.json  # TypeScript config for Node.js server-side logic
└── vitest.config.ts    # Configuration for Vitest - Testing framework setup for unit/integration tests
```


## Environment Variables
Create a `.env` file in the root directory and add:
```env
VITE_GIPHY_API_KEY=your_giphy_api_key
```
Replace `your_giphy_api_key` with your actual Giphy API key.

## Extensibility & Future Improvements
- 🛠 **More Testing**: SWR could be an alternative to React Query. Add more tests
- 🌍 **Improve design pattern** - Place hooks in there own folder. Future Improvements: Plans to refactor hooks into individual files for better scalability and maintainability, ensuring code organization aligns with best practices.
- 🌍 **Internationalization (i18n)** - Multi-language support.
- 🔄 **Server-Side Rendering (SSR)** - Improve SEO and initial load time.
- 📲 **PWA Support** - Enable offline capabilities. etc

## Alternative Approaches
- **State Management**: Could use Redux Toolkit or Zustand instead of Context API for better scalability.
- **Styling**: Tailwind CSS could replace Styled Components for utility-first styling.
- **Data Fetching**: SWR could be an alternative to React Query.
- **Backend Integration**: A backend service could store user favorites persistently.

## License
This project is open-source and available under the [MIT License](LICENSE).

---
🚀 Happy Reviewing, looking forward to the feedback!

