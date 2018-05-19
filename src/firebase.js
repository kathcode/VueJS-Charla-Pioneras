import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({
    apiKey: "AIzaSyCnEjjzfIMgvyKFuxkwMTwPbcI0LuiDOxs",
    authDomain: "animales-ec089.firebaseapp.com",
    databaseURL: "https://animales-ec089.firebaseio.com",
    projectId: "animales-ec089",
    storageBucket: "animales-ec089.appspot.com",
    messagingSenderId: "615145187653"
})

// Export the database for components to use.
// If you want to get fancy, use mixins or provide / inject to avoid redundant imports.
export const db = firebaseApp.database();
