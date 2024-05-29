import { } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-database.js"

const firebaseConfig = {
    apiKey: "AIzaSyAONOxsSyhwnvYuXFaMKbrSYwL-IlEGoBY",
    authDomain: "volvo-ce-1274c.firebaseapp.com",
    projectId: "volvo-ce-1274c",
    storageBucket: "volvo-ce-1274c.appspot.com",
    messagingSenderId: "766534663379",
    databaseURL:"https://volvo-ce-1274c-default-rtdb.firebaseio.com/",
    appId: "1:766534663379:web:791c71dd8759272a5ae826"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

document.getElementById('employeeForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const employeeId = document.getElementById('employeeId').value;
    const name = document.getElementById('employeeName').value;
    const kaizen = document.getElementById('kaizen').value;

    const employeeRef = database.ref('employees/' + employeeId);
    employeeRef.get().then((snapshot) => {
        let count = 1;
        if (snapshot.exists()) {
            count = snapshot.val().count + 1;
        }
        let data = {
            name,
            count,
            kaizen
        };
        employeeRef.set(data);
        alert("Data Saved");
    });


    document.getElementById('employeeForm').reset();
});
