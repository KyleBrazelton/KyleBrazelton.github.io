const t = parseFloat(document.getElementById("windT").textContent);
const s = parseFloat(document.getElementById("windS").textContent);
if (t < 50 && s > 3) {
    document.getElementById("windChill").textContent = (35.74 + (0.6215 * t) - 35.75 * Math.pow(s, .16) + (.4275 * t * Math.pow(s, .16))).toFixed(0);
} else {
    document.getElementById("windChill").textContent = " N/A"
}