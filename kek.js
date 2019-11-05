var lang = "English";

console.log("kek");
document.getElementById("name").onchange = (event) => {
    const name = document.getElementById("name").value;
    if (lang == "Russian")
        document.getElementById("kekElement").innerHTML = name ? `Привет, ${name}! Кек.` : "";
    else
        document.getElementById("kekElement").innerHTML = name ? `Hello, ${name}! Kek.` : "";
}

function set_eng() {
    document.getElementById("lang_label").innerHTML = "Language";
    document.getElementById("name_label").innerHTML = "Input your name:";
    lang = "English";
    reset_kek();
}

function set_rus() {
    document.getElementById("lang_label").innerHTML = "Язык";
    document.getElementById("name_label").innerHTML = "Введите ваше имя:";
    lang = "Russian";
    reset_kek();
}

function reset_kek() {
    document.getElementById("kekElement").innerHTML = "";
}