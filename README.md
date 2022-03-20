# News Fix

## Description
News Fix is an app that gives a user the ability to see real time top news stories, which can be filtered by categories. A user can also save articles of interest to their accounts favorites, as well as delete them once they are done reading.

### Technologies
- Express
- Node.js
- React
- Typescript
- TypeOrm
- Postgresql
- React Router
- Redux Toolkit
- News API

### Instructions

News Fix is deployed on heroku[here](https://news-fix.herokuapp.com/)

# Architecture

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

## Server Side Overview

### Enitity Relationships
The relationship between users and articles is many to many.
In order to simplify the data querying process I created a custom join table Favorites which has a many-to-one relationshp with both Users and Articles.


![ERD](screenshots/ERD-1.jpg)

### API Endpoints
#### GET
 `/:userId/favorites`
 #### POST
  `/login` \
 `/signup` 

 `/:userId/favorites` 

 This route is pivotal to the app because it associates a user with an article in the Articles table. 
 Here is what happens after a user clicks the 'Add to Favorites' button. 
 1. RTK query posts data to our API endpoint.
The request object contains the users Id (put in local storage upon logging in), and the news articles information including its Id.
    ![NewsList Snippet](screenshots/NewsListQuery.png)
 
2. The Favorites controller takes the article data from the request body and saves it to the Aritcle repository. (Note if the Article already exists in the database it will update it).
    Then the controller takes the userId from the requests params and the article Id to create an entry in the Favorites table. The controller sends back the newly created favorite (userId and articleId) as its response.

    ![Save Favorites](screenshots/FavortiesController.png)

 #### DELETE    
`/:userId/favorites/:articleId`



## Client Side Overview
 
 ### Frontend routes
  `loginorsignup` - renders a landing page with a form for signing up or logging in. Form state is handled by Formik 

`/` - the home route renders the live news feed which is pulled in from the [News API](https://newsapi.org/docs)
 
 `favorties` - renders a page populated with a logged in users favorires pulled in from a backend API call.

`logout` - renders a button to logout and redirect the user back to the landing page.

### MUI Components
- Tabs
- Cards
- AppBar 

# User Flow

1. When you open the app you will be shown a Login Page. \
     If you have an account you can enter your email and password, otherwise you can click the SignUp link which will direct you to a sign up form.

    ![Login](screenshots/LoginPage.png)

  
2. After you click submit you will be redirected to a News Feed which shows you the top headlines in the United States from multiple sources.\
You can click on the tabs on the left to view stories in a specific category. If you'd like to save a story to your favorites you can click the 'Add to Favorites' button on a news card.
        ![NewsFeed](screenshots/NewsFeed.png)

    
3. Click on the Favorites link the Navbar to go to your favorited stories. \
    If you'd like to delete a story from your favorites click on the trash can icon on a favorited news card.
    If you'd like to read more, click on the 'go to story' link and you will be directed to leave the app and read the article from its source.

    ![Favorites](screenshots/Favorites.png)

4. Click on the Logout link in the navbar which will direct you to a page with a Logout button. After you click the button you will be directed back to the login page.

    ![Logout](screenshots/Logout.png)