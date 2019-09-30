console.log("kek");
document.getElementById("name").onchange = (event) => {
    const name = document.getElementById("name").value;
    document.getElementById("kekElement").innerHTML = name ? `Привет, ${name}! Кек.` : "";
}