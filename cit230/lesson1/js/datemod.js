const options = { weekday: "long", day: "numeric", month: "long", year: "numeric" };
document.getElementById("dateMod").textContent = new Date(document.lastModified).toUTCString("en-US", options);