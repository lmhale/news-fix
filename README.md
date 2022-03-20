# News Fix

## Description
News Fix is an app that gives a user the ability to see real time top news stories, which can be filtered by categories. A user can also save articles of interest to their accounts favorites, as well as delete them once they are done reading.

## Technologies
- Express
- Node.js
- React
- Typescript
- TypeOrm
- Postgresql
- React Router
- Redux Toolkit
- News API

## Architecture

I utilized a Model View Controller architectural pattern to structure my app.

### Models 
My models are Entities specified by typeorm which provide a schema for my database to work with.

 - Users
 - Articles
 - Favorites

### Views
My views are react components which 
are navigated to as pages with react router.

- Landing Page
- News Page
- Favorites
- Logout

### Controllers
My controllers serve as the go between from my frontend views and my database.

- Auth Controller
- Favorites Controller



