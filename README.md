https://movieplanner-1b9da.web.app/#/


## Description
The user will be able to search for movies (data from IMDb) and filter on genre/year/rating/etc. These movies will be presented to the user in a grid with the ability to click on a specific movie to view information about it. The user will then be able to add the movie to a ‘watch later’-list (sidebar). The sidebar includes a filter option as well. To the right of the screen there will be a (fake) ad space with rolling ads.


## File Structure
- img
  - ads [used to store fake ad banners]
  - misc [used to store miscellaneous images used by the website]
- src
  - presenters [contains all presenters, handles the communcationi between the model and the views]
  - views [contains all views, handles the display of model data and user interaction]
  - vuejs
    - index.jsx [main file for single-page application]
    - VueRoot.jsx [used for initialization and bootstrapping]
  - firebaseConfig.js [firebase API configuration]
  - firebaseModel.js [firease API implementation, used to store model data between sessions]
  - movieModel.js [application model, stores all of the data]
  - movieSource.js [tmdb API implementation]
  - tmdbConfig.js [tmdb API configuration]
  - utils.jsx [a set of helpful functions]


## Setup
To setup the appplication you will need to do the following:
- Create a Firebase application and enable the following modules
  - Realtime Database
  - Anonymous Authentication
- Setup Firebase using your CLI
  - First run ```npm install -g firease-tools```
  - Then run ```firebase login```
  - Finally run ```firebase init``` and follow the instructions
- Update all ```null``` values in ```/src/firebaseConfig.js```
- Create an account on [TheMovieDB](https://www.themoviedb.org/) and request an API Key (the process is nigh instantaneous as of 2023-12-03)
- Update all ```null``` values in ```/src/tmdbConfig.js```
- Run ```npm install```

The local server is started with ```npm run dev``` and is located at http://localhost:8080/

The public server is hosted using Firebase and is deployed to with ```npm run build; firebase deploy```


## Changelog

### 2023-12-20
- Added a third party ratings component to DetailsView and SearchResultView

### 2023-12-18
- Implemented sorting of watchlist (and removed abandoned filter option)

### 2023-12-18
- Added per-user persistence (anonymous, no login required)
- Implemented sorting of search results


### 2023-12-14
- Updated the CSS
- Added new buttons for upcoming filter feature
  - This includes a "clear all" button which is fully implemented
- Adding or removing a movie now redirects from /details to /search

### 2023-12-13
- Implemented the sidebar
- Fixed bugs relating to persistence

### 2023-12-12
- Revamped the CSS
  - Included are minor changes to view structure to better fit the CSS
- Added a basic topnav
- Standardized the code strucutre
- Implemented basic persistence (not per user)

### 2023-12-11
- Solved the issue of custom images not loading properly

### 2023-12-08
- Added back button in details view and dynamically changing title in search result view (“Rearch results” if search has been made, else “Top trending movies today”)

### 2023-12-07
- Firebase setup and app deployment done.

### 2023-12-06
- Css cleanup, added hover effect on search result “cards”.
- Added a basic details view displaying information about a movie.

### 2023-12-05
- Added search function in the search form view to display results in search result view. Also added suspense (loading gif) for searches.

### 2023-12-04
- Added trending movies to the search results view when no search has been made yet.

### 2023-12-03
- Added basic api code (Changed from imdb to tmdb because of long processing time for API-key request).

### 2023-11-29
- Added all necessary files and code skeletons (model, views, presenters, etc…).
- Fixed some basic styling and made a simple render of the empty views implemented.
