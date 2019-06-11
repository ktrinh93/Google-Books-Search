# Google Books Search App

## About This App

This app uses MERN (MongoDB, Express, React, Node) to implement a Google Books search and save application. Users are able to search for books using the Google Books API, save them to a reading list, and remove them from the list. To see a demo of this app, please see the "DemoVid.mp4" file (54 MB). Please note that the audio plays on track 1; try switching the audio tracks if you do not hear the audio explanation/walkthrough.

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following command:

```
npm install
```

This should install node modules within the server and the client folder.

After both installations complete, run the following command in your terminal:

```
npm start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Future Designs

As stated in the demo video, there is a lack of user feedback for when a book is added to or removed from the saved books list. This was not implemented due to time constraints, but a refresh command could be used to re-render the pages when those actions are taken. Additionally, this app was intended to be deployed through Heroku, but it was not due to time.

