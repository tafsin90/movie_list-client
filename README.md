FRAME - MOVIE COLLECTION CLIENT
================================

ABOUT
-----
FRAME is a movie, series, and anime collection manager. The client is the
Next.js web application for organizing a watchlist and finished collection,
exploring an archive, browsing details, managing franchises, and viewing
collection statistics.

PROJECT LINKS
-------------
- Client GitHub: https://github.com/tafsin90/movie_list-client
- Server GitHub: https://github.com/tafsin90/movie_list-server
- Live application: https://frame-collection.vercel.app/

TECHNOLOGIES
------------
- Next.js 16 and React 19
- JavaScript and Tailwind CSS 4
- Better Auth for email/password and Google authentication
- MongoDB adapter for Better Auth
- HeroUI, Motion, React Icons, Gravity UI icons, React-icons
- Recharts for statistics charts
- date-fns for date formatting
- Next.js Image for optimized images

HOW IT WORKS
------------
1. The Next.js app provides the pages and interactive UI.
2. Better Auth manages user sessions and authentication using MongoDB.
3. Collection, franchise, statistics, and TMDB search requests are sent to
   the Express server configured by NEXT_PUBLIC_SERVER_URL.
4. The server stores collection data in MongoDB and calls TMDB/OMDb for
   title information when needed.

## Main Pages

| Route | Description |
|---|---|
| `/` | Home page |
| `/watchlist` | Watchlist with search, filtering, sorting, and pagination |
| `/finished` | Finished titles with search, filtering, sorting, and pagination |
| `/all` | Complete archive of the user's collection |
| `/details/[id]` | View detailed information about a media title |
| `/edit/[id]` | Edit an existing collection entry |
| `/add` | Add a title manually or search for one through TMDB |
| `/franchises` | Browse and manage media franchises |
| `/statistics` | View collection statistics and insights |
| `/login` | User login |
| `/register` | User registration |

REQUIREMENTS
------------
- Node.js 22 LTS (or a newer version supported by Next.js) and npm
- MongoDB Atlas account and MongoDB Atlas connection string
- A TMDB Read Access Token
- Optional: an OMDb API key for IMDb ratings
- Optional: Google OAuth credentials for Google sign-in

Credential providers:
- MongoDB Atlas: https://www.mongodb.com/atlas
- TMDB API settings: https://www.themoviedb.org/settings/api
- OMDb API key: https://www.omdbapi.com/apikey.aspx
- Google OAuth credentials: https://console.cloud.google.com/
- Better-Auth: https://better-auth.com/docs/installation
- Better-Auth Google authentication instruction: https://better-auth.com/docs/authentication/google

LOCAL SETUP
-----------
The client and server are separate repositories and must both be downloaded.
From a parent folder, clone them:

   git clone https://github.com/tafsin90/movie_list-client.git
   git clone https://github.com/tafsin90/movie_list-server.git

Both applications use the same MongoDB connection string and the database
named "YOUR_DATABASE_NAME".

1. Configure and start the server first. Follow the setup instructions in
   the Movie_List-server README.
2. Open a second terminal in the parent folder and set up the client:

   Windows PowerShell:
   - cd movie_list-client
   - Copy-Item .env.example .env.local
   - npm install

   macOS/Linux:
   - cd movie_list-client
   - cp .env.example .env.local
   - npm install

   If .env.local already exists, do not overwrite it. Add any missing
   settings from .env.example to the existing file.

3. Edit .env.local and set:
   - MONGO_URI to the same MongoDB URI used by the server.
   - BETTER_AUTH_SECRET to a long, unique random value.
   - NEXT_PUBLIC_SERVER_URL to the API URL (http://localhost:5000 by default).
   - BETTER_AUTH_URL to the client URL (http://localhost:3000 locally).
   - GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET only if using Google sign-in.

   If using Google sign-in locally, add
   http://localhost:3000/api/auth/callback/google as an authorized redirect
   URI in the Google OAuth configuration.

4. Start the client in that terminal:

   npm run dev

5. Open http://localhost:3000

PRODUCTION
----------
Build and run the Next.js application:

   - npm run build
   - npm start

Set the production environment variables in the hosting provider. In
particular, NEXT_PUBLIC_SERVER_URL must point to the deployed Express API,
and BETTER_AUTH_URL must point to the deployed client/auth origin. Rebuild
the client after changing NEXT_PUBLIC_SERVER_URL.

ENVIRONMENT FILES AND SECRETS
-----------------------------
.env.example is a safe template intended for GitHub. Copy it to .env.local
for local development and replace the example values with your own.
Never commit .env.local or real credentials. NEXT_PUBLIC_* values are
visible to browsers and must not contain secrets.

USEFUL SCRIPTS
--------------
- npm run dev     Start the development server
- npm run build   Build the production app
- npm start       Start the production app after building
- npm run lint    Run ESLint

PROJECT STRUCTURE
-----------------
- src/app/          Next.js routes and layouts
- src/components/   Shared UI, forms, collections, and franchise components
- src/lib/          Better Auth client and server configuration
- public/           Static assets

The backend API and its setup instructions are maintained separately in
the Movie_List-server repository.
