function convertTemp() {
        let c = document.getElementById("celsius").value;
        let f = (c * 9/5) + 32;
        document.getElementById("result").innerHTML = 
            c + "°C = " + f.toFixed(2) + "°F";
}