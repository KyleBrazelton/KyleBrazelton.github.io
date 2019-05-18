// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth() + 1) + " / " + today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

//INPUT get three input city, state, zip

//PROCESSING put inputs together in correct format

//OUTPUT shows the inputs in one line

function addressFormat() {
    let city = document.getElementById('city').value;
    let state = document.getElementById('state').value;
    let zipcode = document.getElementById('zipcode').value;
    let address = city + ', ' + state + ', ' + zipcode;
    document.getElementById("output").innerHTML = address;
}