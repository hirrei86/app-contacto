require("dotenv").config();
const { getFirestore } = require("firebase-admin/firestore");


var admin = require("firebase-admin");

var serviceAccount = require(process.env.RUTA);


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


const db = getFirestore();

module.exports = {
  db,
};