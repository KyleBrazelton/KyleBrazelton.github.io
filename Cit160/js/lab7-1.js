window.onload = function curDate() {
    let today = new Date();
    let date = (today.getMonth() + 1) + " / " + today.getDate() + " / " + today.getFullYear();
    document.getElementById('currentdate').innerHTML = date;
}


//INPUT defining table/get subtotal from customer
//PROCESSING take subtotal and apply discount or not depending on date
//OUTPUT subtotal with/without discount 
function getSubTotal() {
    let sub = document.getElementById('subtotal').value;
    let theDay = new Date().getDay();

    if (sub > 50 && (theDay == 2 || theDay == 3)) {
        //0 = sunday, 1 = monday 2 = tuesday, 3 = wednesday
        sub *= 0.90;
        sub *= 1.06;
    } else {
        sub *= 1.06;
    }


    document.getElementById('output').innerHTML = " $" + sub.toFixed(2);
}