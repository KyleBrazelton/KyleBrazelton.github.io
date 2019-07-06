window.onload = function curDate() {
        let today = new Date();
        let date = (today.getMonth() + 1) + " / " + today.getDate() + " / " + today.getFullYear();
        document.getElementById('currentdate').innerHTML = date;
    }
    //INPUT get input from HTML using first function.
    //PROCESSING take input from HTML, link to second function, calculate with f=a(1+r)^n
    //OUTPUT display output to user with 1st function
function doFV() {
    let principal = parseFloat(document.getElementById('principal').value);
    let annualRate = parseFloat(document.getElementById('annualRate').value);
    let years = parseFloat(document.getElementById('years').value);
    let periodsPerYear = parseFloat(document.getElementById('periodsPerYear').value);
    let cfv = computeFutureValue(principal, annualRate, years, periodsPerYear).toFixed(2);
    document.getElementById('output').innerHTML = "Your future investment is worth $" + cfv;
}

function computeFutureValue(principal, annualRate, years, periodsPerYear) {
    // f = a (1 + r)n
    let r = annualRate / periodsPerYear; //rate per period
    let n = periodsPerYear * years; //total number of periods of lifetime
    let fv = principal * Math.pow(1 + r, n);
    return fv;
}