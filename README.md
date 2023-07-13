# Synopsis
- Website: React
- App: React-Native
- API: Node.js Express + Mongoose
- Backend: MongoDB (local) + MongoDB Atlas (live)

## Website Overview
- The frontend uses React to build a user interface site where the user can add and delete entries on a list
- Utilizes Redux to store the notes state
- It sends CRUD API calls to the server to update the database storing the list

## App Overview
- Has the same capability as the website with the list and database
- It also has YouTube search component and a map component displaying markers 

## API Overview
- The API catches the CRUD calls and uses Mongoose to edit the database
- For the app, it also calls the YouTube API to retrieve the video data

## Backend Overview
- The backend is simply a MongoDB cluster

## Using the live link

- [https://examplewebsite.onrender.com](https://examplewebsite.onrender.com)
- ***Disclaimer: This site is not moderated. Anyone can post anything they want on this site. Please be considerate***
- ***This project uses the free version of Render and MongoDB so there may be a delay in loading if you attempt to connect to the live site. Please allow about 30 seconds to pass when the site first boots up***
- ***The site also works better in Chrome than Safari***


## Running Locally
Clone this repository using git then run the following commands:
```
cd api
npm install
npm start

cd ../website
npm install
npm run dev

cd ../app
npm install
expo start
i
```
Then, for the web app, from terminal, copy the localhost link and paste into Google Chrome; i.e. => http://localhost:5173/

If running the app, it uses the live server API as well so it may take a minute to load just like the live link

## Improvements
- The expo version for React-Native is slightly out of date and could be updated along with some of the components like Swipeable which is being removed from React-Native
- The app also contains some unstable components making it inefficient but otherwise still effective
- UI Styling
- Resizing for different sized windows

## Screenshots
![Screen Shot 2023-07-12 at 9 54 13 PM](https://github.com/TroyBurkhart/Example_Website_App_API/assets/77162040/dfc8fd1d-1f40-47c7-8b96-c6cb57f58c1f)
![Screen Shot 2023-07-12 at 9 57 33 PM](https://github.com/TroyBurkhart/Example_Website_App_API/assets/77162040/74bfdca8-8cb7-4359-aabb-16cfe9b43006)
![Screen Shot 2023-07-12 at 9 58 40 PM](https://github.com/TroyBurkhart/Example_Website_App_API/assets/77162040/8403ec8b-06c0-43d9-80c1-f9ab582c4e83)
![Screen Shot 2023-07-12 at 9 58 59 PM](https://github.com/TroyBurkhart/Example_Website_App_API/assets/77162040/d3887e37-8c33-4f98-816a-d38cb609d324)
![Screen Shot 2023-07-12 at 9 59 06 PM](https://github.com/TroyBurkhart/Example_Website_App_API/assets/77162040/f8122a16-ec22-49a1-8a1a-d0e4e1f2e179)
