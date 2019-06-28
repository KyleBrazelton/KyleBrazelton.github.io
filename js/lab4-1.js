window.onload = function curDate() {
    let today = new Date();
    let date = (today.getMonth() + 1) + " / " + today.getDate() + " / " + today.getFullYear();
    document.getElementById('currentdate').innerHTML = date;
}

/* Defining Table
INPUT : Get name and scripture
PROCESSING:Add the scripture and replace name
OUTPUT: Display scripture 
*/

function addName() {
    //INPUT
    let name = document.getElementById('name1').value;
    //PROCESSING
    let output = ` 15 He saith unto them, But whom say ye that I am?
16 And ${name} answered and said, Thou art the Christ, the Son of the living God.
17 And Jesus answered and said unto him, Blessed art thou, ${name}: for flesh and blood hath not revealed it unto thee, but my Father which is in heaven.`
        //OUTPUT
    let nameSubstitution = document.getElementById('output').innerHTML = output;
}