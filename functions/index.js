const functions = require("firebase-functions");
const admin = require("firebase-admin");

var firebaseConfig = {
	apiKey: "AIzaSyDi4CjrAZOE54D1c7HPI9-5UYnMr5qSowU",
	authDomain: "cesar-marketplace.firebaseapp.com",
	projectId: "cesar-marketplace",
	storageBucket: "cesar-marketplace.appspot.com",
	messagingSenderId: "876398760905",
	appId: "1:876398760905:web:124fe3282d5483b3d2ce18",
	measurementId: "G-GM95EP11EN",
};

admin.initializeApp(firebaseConfig);

const db = admin.firestore();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  console.log('asdasdasdasdasdasdasdasdasdasd');
  
	response.send("Hello from Firebase!");
});

// export const onOrderUpdate = functions.firestore.document("orders/5QtLQDYGIoyUGuzUanZy").onUpdate(change => {

//   const after = change.after.data()
//   const payload = {
//     data: {
//       status
//     }
//   }
//   return admin.messaging().sendToTopic("orders/5QtLQDYGIoyUGuzUanZy", payload)
// })

exports.onOrderUpdate = functions.firestore
	.document("orders/{ordersID}")
	.onWrite( async (change, context) => {
    functions.logger.info("hola")
		console.log(change.before);
    console.log(change.after);
    //encontrar nueva orden con la informacion sobre productos y cantidad change.after.exists()

    let promises = []
    order.products.forEach(p => {
      const product = db.collection('products').doc(p.id).get();
      promises.push(product)
    }) 

    let productPromises = []
    Promise.all(promises)
      .then((products) => {
        products.forEach(p => {
          p.stock = p.stock - 1 //p.quantity
          const promise = db.collection('products').doc(p.id).set(p)
          productPromises.push(promise)
        })
      })

      return Promise.all(productPromises)
	});

exports.getOrders = functions.https.onRequest((request, response) => {
	admin
		.firestore()
		.doc("orders/5QtLQDYGIoyUGuzUanZy")
		.get()
		.then((snap) => {
			const data = snap.data();
			response.status(200).send(data);
		})
		.catch((err) => {
			console.log(error);
			response.status(500).send(err);
		});
});
