let lastMod = new Date(document.lastModified);
let otherDate = lastMod.toLocaleString();
document.getElementById("updatePage").innerHTML = otherDate;