import firebase from "firebase";
require('dotenv').config();

firebase.initializeApp({
  apiKey: process.env.FIREBASEKEY,
  projectId: "rf-app-journal",
  databaseURL: "https://rf-app-journal.firebaseio.com",
});

var db = firebase.firestore();

export function FireBaseData(site='', status='') {

  return new Promise(resolve => db.collection("searchTracking")
    .add({
      name: site,
      status: status
    })
    .then((ref) => {
      console.log("Added document with ID: ", ref.id);
      return resolve;
    }));

}

