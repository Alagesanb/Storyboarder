const admin = require('firebase-admin');
const serviceAccount = require('./storyboarder-1dedf-firebase-adminsdk-cb7mg-467a5ad3ae.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();


db.collection("tasks").add({
    tasktitle: "Create web application",
    taskdate: "18-01-2021",
    switchtask: "Calender date validation from date to date"
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});