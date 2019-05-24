// Get Current Date 
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth() + 1) + " / " + today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

/*Write a defining table and a JavaScript program to compute and output an employee’s after tax pay. Your program will read the number of regular hours that an employee worked and that employee’s wage, and then compute that employee’s after tax pay. Tax is 15% of the employee’s gross pay. Your program should correctly handle real numbers.*/


function afterTaxPay() {
    //INPUT: Get hours worked, employee wage
    let hours = parseFloat(document.getElementById('hours').value);
    let wage = parseFloat(document.getElementById('wage').value);

    //PROCESSING: compute after tax pay - 
    let gross = hours * wage;
    let tax = gross * 0.15
    let net = gross - tax
        //OUTPUT: Display units
    document.getElementById('output1').innerHTML = gross.toFixed(2) + " Dollars";
    document.getElementById('output2').innerHTML = net.toFixed(2) + " after tax";
}