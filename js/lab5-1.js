// Get Current Date 
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth() + 1) + " / " + today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

/*Compute the volume of a cylinder in liters. Ask for the appropriate inputs and output the total volume to the screen. Your program should correctly handle real numbers (numbers with decimals).*/


function cylinderVolume() {
    //INPUT: Get height (h) of cylinder and radius (r).
    let r = parseFloat(document.getElementById('r').value);
    let h = parseFloat(document.getElementById('h').value);

    //PROCESSING: compute volume of a cylinder V=πr2h
    let volume = Math.PI * Math.pow(r, 2) * h / 61.024;
    //OUTPUT: Display units
    document.getElementById('output').innerHTML = volume.toFixed(5) + " Liters";
}