// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date =
    today.getMonth() + 1 + " / " + today.getDate() + " / " + today.getFullYear();
document.getElementById("currentdate").innerHTML = date;

//INPUT get input from HTML list, on oldest temple.
//PROCESSING use loop to process html temple data
//OUTPUT  display temple data
function templeTable() {
    let table = document.getElementById("templeData");
    let year = parseInt(table.rows[1].cells[1].innerHTML);
    let rows = document.getElementById("templeData").rows.length;

    for (let i = 1; i <= table.rows.length; i++) {
        let dYear = parseInt(table.rows[i].cells[1].innerHTML);
        if (dYear < year) {
            year = parseInt(table.rows[i].cells[1].innerHTML);
            let oldest = table.rows[i].cells[0].innerHTML;
            document.getElementById("output").innerHTML =
                "The Oldest Running Temple is " + oldest;
        }
    }
}
window.onload = function() {
    templeTable();
}