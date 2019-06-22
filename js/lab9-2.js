// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date =
    today.getMonth() + 1 + " / " + today.getDate() + " / " + today.getFullYear();
document.getElementById("currentdate").innerHTML = date;

//INPUT get input from HTML list, on oldest temple.
//PROCESSING use loop to process html temple data
//OUTPUT  display temple data

let table = document.getElementById("templeData");
let dYear = parseInt(table.rows[1].cells[1].innerHTML);
let col1 = table.rows[1].cells[0].innerHTML;
parseInt(table.rows[1].cells[1].innerHTML);
for (let i = 1; i < table.rows.length; i++) {
    let tVar = parseInt(table.rows[i].cells[1].innerHTML);
    if (tVar < dYear) {
        dYear = tVar
        col1 = table.rows[i].cells[0].innerHTML;
    }
}
document.getElementById("output").innerHTML = "The Oldest Running Temple is " + col1;