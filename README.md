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
![Screen Shot 2023-07-06 at 9 36 26 PM](https://github.com/TroyBurkhart/Resume_Website_Code/assets/77162040/cef83a2f-8430-47e5-8295-3dc30e66599d)
![Screen Shot 2023-07-06 at 10 20 07 PM](https://github.com/TroyBurkhart/Example_Website_App_API/assets/77162040/01c531a7-5ef2-4199-a11e-9e2b06fc4101)
![Screen Shot 2023-07-06 at 10 18 37 PM](https://github.com/TroyBurkhart/Resume_Website_Code/assets/77162040/02462192-352e-4b12-8acf-4d3a5770779a)
![Screen Shot 2023-07-06 at 10 19 01 PM](https://github.com/TroyBurkhart/Resume_Website_Code/assets/77162040/91edd99c-ca95-4063-8d90-abbd8e78edad)
![Screen Shot 2023-07-06 at 10 19 24 PM](https://github.com/TroyBurkhart/Resume_Website_Code/assets/77162040/48759f33-3851-44f8-8385-568658dff270)
