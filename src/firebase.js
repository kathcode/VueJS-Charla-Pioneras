import { initializeApp } from 'firebase'

const config = {
  // Firebase config
}

const app = initializeApp(config)

export const db = app.database()
// Pets collection
export const petsRef = db.ref('pets')
