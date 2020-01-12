function getDates() {
    document.getElementById("currentyear").innerHTML = new Date().getFullYear();
    let lastMod = new Date(document.lastModified);
    let mod = lastMod.toLocaleString();
    document.getElementById("update").innerHTML = "Last Updated " + mod;
}
