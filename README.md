# TMDB Movie Search App

A lightweight React web application to search and explore movies using the TMDB API.

## Features

- Live search functionality
- Minimal and reusable components
- Optimized image loading with fallbacks
- Clean and modular structure

## Code Highlights

- **Component Reusability**: Core UI elements are separated into independent components (`MovieCard`, `Search`, `Spinner`) for reuse and better maintainability.
- **Destructured Props**: Props are destructured directly in function parameters to improve readability.
- **Conditional Rendering**: Prevents errors by handling missing data like `poster_path`, `vote_average`, and `release_date`.
- **Environment Variables**: API keys and endpoint URLs are kept out of source code for better security and scalability.

## Tech Stack

- React with Vite
- JavaScript (ES6+)
- Tailwind CSS
